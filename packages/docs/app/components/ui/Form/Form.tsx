import { useId, useContext, createContext, type ComponentProps, useEffect, useRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { isEqual, omit, mapValues, isEmpty, kebabCase } from "lodash-es"
import {
  Controller,
  type ControllerProps,
  type ControllerRenderProps,
  type FieldError,
  type FieldValues,
  type UseFormReturn,
  FormProvider,
  useForm,
  useFormContext,
  type UseFormProps,
  type SubmitErrorHandler,
  type FormState,
} from "react-hook-form"

import { cn } from "#/helpers/css"
import { Label } from "#/components/ui/Label/Label.tsx"
import { z, type ZodObject, type ZodRawShape } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { reflectiveClone } from "#/helpers/utils"

type FormProps<T extends ZodObject<ZodRawShape>> =
  (
    UseFormProps<z.infer<T>> &
    Omit<ComponentProps<'form'>, 'onSubmit'> &
    {
      schema: T;
      onSubmit: (data: z.infer<T>) => void | Promise<void>;
      onSubmitError?: SubmitErrorHandler<z.infer<T>>;
      setForm?: (form: UseFormReturn<z.infer<T>>) => void;
      setFormState?: (formState: FormState<z.infer<T>>) => void;
    })

/**
 * The encapsulation here is inspired from <Form> provided by React-hook-form
 * (see https://react-hook-form.com/advanced-usage#SmartFormComponent for more details)
 *
 * Note: do not implement below features:
 * - Auto `defaultValues` extraction from the schema
 *   When `defaultValues` is provided to `useForm`, consumer will literally see those values on the form control UIs.
 *   One might think that it'd be great to auto generate those values from the giving schema,
 *   but this approach doesn't consider at least one use case:
 *   - It's possible that we want to provide the default values for some fields, but we don't want to show them up,
 *     instead, those values work as fallback such that if user dont fill-up those fileds, defaults will be used.
 *     TBD: figure out how to retrieve the default values from the schema for above use case
 */
const Form = <T extends ZodObject<ZodRawShape>>({
  schema,
  onSubmit, // be the same name as the native <form>'s `onSubmit`
  onSubmitError = () => { },
  className,
  children,
  setForm,
  setFormState,
  ref,
  ...props
}: FormProps<T>) => {
  const prevFormState = useRef<any>({});
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    ...props
  });
  useEffect(() => setForm?.(form), [form, setForm]); // Expose `form`
  /**
   * Below is basically how we expose `formState` to the parent component.
   * `formState` is so special that it worths to be set as an independent prop.
   *
   * In fact, there's an API called `useFormState` that can used out of Form component,
   * such that it can access `formState` as well, but that apporach need the consumer write lots of code
   *
   * Doing below thing in parent (ie., do `form.formState` via exposed `form`) will not work,
   * the underling reason probably is because the parent doesn't use `FormProvider`,
   * which is the key to track the property change of `formState` and notify `useEffect`.
   *
   * #1
   *  It seems like, among all the properties of `formState`, only `errors` can possibly have functions,
   *  and that will cause infinite-rerendering for the relevant `formState` exposing logic.
   *  After a bit investigation, `ref` seems not that useful in general, removing it should be fine.
   *
   * #2
   *  This line packs enormous concepts:
   *  - On `formState`, only `defaultValues` is enumerable, all others are non-enumerable;
   *    that's why to clone `formState`, `reflectiveClone` is used
   *
   *  - Accessing a property in `formState` will make RHF subscribe the change of that property,
   *    such that whenever there's any change, it'd cause `form.formState` to change
   *
   *  - On `formState`, all the object values except for `defaultValues`, are managed by Proxy-like getter,
   *    but when using `reflectiveClone`, on the surface, both `currFormState` and `formState` are the same,
   *    but every value of `currFormState` is not managed by Proxy-like getter anymore.
   *
   *  - We can't simply just provide `formState` to `setFormState`, cuz everytime when Form compoenet is rendered,
   *   `formState` will be another instance, which will finally lead to infinite-rerendering between child and parent.
   */
  useEffect(() => { // Expose the `formState`
    if (!setFormState) return;
    const currFormState = reflectiveClone(form.formState); // #2
    currFormState.errors = mapValues(currFormState.errors, v => omit(v, 'ref')) as any; // #1

    if (isEmpty(prevFormState.current)) { // This is for first render
      prevFormState.current = currFormState;
      setFormState(currFormState as FormState<z.infer<T>>);
      return;
    }
    if (!isEqual(prevFormState.current, currFormState)) { // Only update if something has changed
      prevFormState.current = currFormState;
      setFormState(currFormState as FormState<z.infer<T>>);
    }
  }, [form.formState, setFormState]);

  return (
    <FormProvider {...form}>
      {/* It's totally fine we can simply wrap the native form this way, cuz in 99% of cases, only `onSubmit` is needed` */}
      <form
        ref={ref}
        className={className}
        data-disabled={props.disabled || undefined}
        onSubmit={form.handleSubmit(onSubmit, onSubmitError)}
        data-tag={kebabCase(Form.displayName)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

type FormItemProps = ComponentProps<'div'> & Omit<ControllerProps, 'render'>
const FormItem = ({
  children,
  className,
  ...props
}: FormItemProps) => {
  const id = useId();
  const { getFieldState, formState, control } = useFormContext() // corresponds to `FormProvider` that we can access the result from `useForm`
  // getting the state of the form control element
  // it's expressed as `{ isDirty, isTouched, invalid, error }`
  const fieldState = getFieldState(props.name, formState)
  return (
    /**
     * `fieldState` will only get updated in some cases,
     * so it's inappropriate to place <FormItemCtx.Provider> inside <Controller>,
     * since the render props of <Controller> will be re-rendered a lots (eg, whenever typing is happened in any form field).
     *
     * The concept of `FormItemCtx` is giving the access to the state of the form control element (eg., <input>)
     * for any child component of <FormItem>, so that the child can react to certain state changes (eg., `isDirty`).
     *
     * This state-sharing is created cuz there seems no such mechanism in React-hook-form.
     */
    <FormItemCtx.Provider value={{
      id,
      name: props.name,
      formItemId: `${id}-form-item`,
      formDescriptionId: `${id}-form-item-description`,
      formMessageId: `${id}-form-item-message`,
      ...fieldState
    }}>
      {/*
        The offical doc mentioned that when `Controller` is used with FormProvider,
        passing `control` to `Controller` is optional, but we pass it anyway in case of any future changes.
      */}
      <Controller {...props} control={control} render={({ field }) => { // to see what `field` is, check the comments in `FormControl`
        return (
          <FormControlCtx.Provider value={{ field }}>
            <div data-tag={kebabCase(FormItem.displayName)} className={cn("tw:space-y-2", className)}>{children}</div>
          </FormControlCtx.Provider>
        )
      }} />
    </FormItemCtx.Provider>
  );
};

type FormLabelProps = ComponentProps<typeof Label>
const FormLabel = ({ className, ...props }: FormLabelProps) => {
  const { error, formItemId } = useContext(FormItemCtx)
  return <Label className={cn(error && "tw:text-destructive", className)} htmlFor={formItemId} {...props} />
}

/**
 * WARN: currently, the only child of this component is the form control element
 * - `maskedInput`
 *    This is for integration with input masking lib, such as `Maskito`.
 *    Usually, these libs will provide an event handler (in Maskito`, it's `onInput`),
 *    that will only get called with the stacked "masked" inputed characters, meaning that
 *    if the consumer enter invalid characters based on the mask rule, the event handler won't get triggered.
 *
 *    > if the libs don't provide such handlers, either the consumer need to implement that using other relevant APIs provided by the lib,
 *    > or it's possible the libs are just incompetent.
 *
 *    So for the case of Maskito, `maskedInput` will be `onInput`, and according to the relevant logic in the following code,
 *    this means that Maskito will only masked characters to react-hook-form to do the rest processing.
 */
type FormControlProps = ComponentProps<typeof Slot> & { maskedInput?: string }
const FormControl = ({ maskedInput, ...props }: FormControlProps) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useContext(FormItemCtx);
  const { field } = useContext(FormControlCtx);
  if (!field) { throw new Error("FormControl must be used within a FormItem"); }
  return (
    <Slot
      data-tag={kebabCase(FormControl.displayName)}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      /**
       * In the normal form control element registration, `register('...')` is used,
       * and React-hook-form tends to utilize ref to control the element.
       * But that's for the element that has exposed ref; for some such components provided by 3rd party lib
       * that doesn't expose ref, `Controller` is needed.
       *
       * The registration of `Controller` is via `field` on form control element.
       * Even though the result (eg., `value`, `onChange`, `onBlur`, ...) of `{...field}` (see below code) and `register('...')` are similar,
       * using `field` will not rely on `ref`. So this implies that the form control element must expose standard prop names like `value`, `onChange`, `onBlur`,
       * otherwise the element can't be controlled by React-hook-form.
       *
       * For the details of `field`, check: https://bitl.to/49qQ
       */
      {...field}
      {...props}
      {...(maskedInput ? { [maskedInput]: field.onChange, onChange: undefined } : {})}
    />
  );
}

type FormDescriptionProps = ComponentProps<'div'>
/**
 * Usage Notes:
 * Compare to `<FormMessage>`, this is usually used to display always-visible description for the form control element.
 * eg., some checkbox not only have a label, but also have a description below the label.
 */
const FormDescription = ({ className, ...props }: FormDescriptionProps) => {
  const { formDescriptionId } = useContext(FormItemCtx)
  return <div
    className={cn("tw:text-[0.8rem] tw:text-muted-foreground", className)}
    data-tag={kebabCase(FormDescription.displayName)}
    id={formDescriptionId}
    {...props}
  />
}

type FormMessageProps = ComponentProps<'div'>
/**
 * Usage Notes:
 * It's used to display some hints just below the form control element,
 * such as the error message, or some helpful things to basically help the consumer to successfully fill-up the form
 */
const FormMessage = ({ className, children, ...props }: FormMessageProps) => {
  const { error, formMessageId } = useContext(FormItemCtx)
  const body = error ? String(error?.message) : children
  return !body ? null : (
    <div
      data-tag={kebabCase(FormMessage.displayName)}
      id={formMessageId}
      className={cn("tw:text-[0.8rem] tw:font-medium tw:text-destructive", className)}
      {...props}
    >
      {body}
    </div>
  )
}

type FormItemCtxType = {
  id: string;
  name: string;
  formItemId: string;
  formDescriptionId: string;
  formMessageId: string;
  // Below are coming from `fieldState`: https://bitl.to/49qQ
  isDirty: boolean;
  isTouched: boolean;
  invalid: boolean;
  error?: FieldError | undefined;
}
const FormItemCtx = createContext({} as FormItemCtxType);
type FormControlCtxType = { field: ControllerRenderProps<FieldValues, string> };
/**
 * This is only meant to be used by <FormControl>
 */
const FormControlCtx = createContext({} as FormControlCtxType);

namespace Type {
  export type Form<T extends ZodObject<ZodRawShape>> = FormProps<T>;
  export type FormItem = FormItemProps;
  export type FormLabel = FormLabelProps;
  export type FormControl = FormControlProps;
  export type FormDescription = FormDescriptionProps;
  export type FormMessage = FormMessageProps;
  export type FormItemCtx = FormItemCtxType;
  export type FormControlCtx = FormControlCtxType;
}

export * from "react-hook-form";
export {
  type Type,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormItemCtx,
  FormControlCtx,
}

Form.displayName = "Form"
FormItem.displayName = "FormItem"
FormLabel.displayName = "FormLabel"
FormControl.displayName = "FormControl"
FormDescription.displayName = "FormDescription"
FormMessage.displayName = "FormMessage"

