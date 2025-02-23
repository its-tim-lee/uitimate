import React, { useId, useContext, createContext, type Ref, type ReactNode, type ComponentProps, memo, type HTMLAttributes, type ReactElement } from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import {
  Controller,
  type ControllerProps,
  type ControllerRenderProps,
  type Field,
  type FieldError,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useForm,
  useFormContext,
  type UseFormProps,
  type UseFormReturn,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "~/src/components/ui/Label/Label.tsx"
import { z, type ZodObject, type ZodRawShape } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
/**
 * The encapsulation here is inspired from <Form> provided by React-hook-form
 * (see https://react-hook-form.com/advanced-usage#SmartFormComponent for more details)
 */
const Form = <T extends ZodObject<ZodRawShape>>({
  schema,
  onSubmit,
  className,
  children,
  ref,
  ...props
}: {
  schema: T;
  onSubmit: (data: z.infer<T>) => void;
} & UseFormProps & Omit<ComponentProps<'form'>, 'onSubmit'>) => {

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: (schema || z.object({})).parse({}),
    ...props
  });
  return (
    <FormProvider {...form}>
      {/* It's totally fine we can simply wrap the native form this way, cuz in 99% of cases, only `onSubmit` is needed` */}
      <form onSubmit={form.handleSubmit(onSubmit)} className={className} ref={ref} >
        {children}
      </form>
    </FormProvider>
  );
}

// Lesson learned: whenever context get re-rendered, then all other children use that context will be re-rendered
// check: guessing only when the context value changes, and the children who use that context will be re-rendered
const FormItem = ({
  children,
  className,
  ...props
}: ComponentProps<'div'> & Omit<ControllerProps, 'render'>) => {
  const id = useId();
  console.log('Render: FormField');
  const { getFieldState, formState } = useFormContext() // corresponds to `FormProvider` that we can access the result from `useForm`
  const fieldState = getFieldState(props.name, formState) // this is for individual form control element
  return (
    /**
     * `fieldState` will only get updated in some cases,
     * so it's inappropriate to place <FormItemCtx.Provider> inside <Controller>,
     * since the render props of <Controller> will be re-rendered a lots (e.g, whenever typing).
     *
     * The concept of `FormItemCtx` is giving the access on the state of the form control element (eg., <input>)
     * to any child of <FormItem>, so that the child can react to.
     * (`FormItemCtx` is created cuz it seems there's no such mechanism in React-hook-form)
     */
    <FormItemCtx.Provider value={{
      id,
      name: props.name,
      formItemId: `${id}-form-item`,
      formDescriptionId: `${id}-form-item-description`,
      formMessageId: `${id}-form-item-message`,
      ...fieldState, // `{ isDirty, isTouched, invalid, error }`
    }}>
      {/* The offical mentioned that when Controller is used with FormProvider, passing `control` is optional */}
      <Controller {...props} render={({ field }) => {
        return (
          <FormControlCtx.Provider value={{ field }}>
            <div className={cn("tw:space-y-2", className)}>{children}</div>
          </FormControlCtx.Provider>
        )
      }} />
    </FormItemCtx.Provider>
  );
};

const FormLabel = ({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) => {
  const { error, formItemId } = useContext(FormItemCtx)
  console.log('Render: FormLabel')
  return <Label className={cn(error && "tw:text-destructive", "tw:dark:text-black", className)} htmlFor={formItemId} {...props} />
}

/**
 * The only child of this component is the form control element
 */
const FormControl = ({ children, ...props }: ComponentProps<typeof Slot>) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useContext(FormItemCtx);
  const { field } = useContext(FormControlCtx);
  if (!field) { throw new Error("FormControl must be used within a FormItem"); }
  /**
   * HACK:
   * For some reason, `children` will be an array when it's using in the FormItem.mapper.tsx.
   * Can't find out why, but below is just a workaround.
   */
  const child = Array.isArray(children) ? children[0] : children
  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      /**
       * In the normal form control element registration, `register('...')` is used,
       * and React-hook-form tends to utlize ref to control the element.
       * But that's for the element that has exposed ref; for some such components provided by 3rd party lib
       * that doesn't have exposed ref, `Controller` is needed.
       *
       * The registration of `Controller` is via `field` on form control element.
       * Even though the result (eg., `value`, `onChange`, `onBlur`, ...) of `field` and `register('...')` are similar,
       * using `field` will not rely on `ref`. So this implies that the form control element must expose stuff like `value`, `onChange`, `onBlur`,
       * otherwise the element can't be controlled by React-hook-form.
       */
      {...field} // this is just like `register('...')`, but for `Controller`
      {...props}
    >
      {child}
    </Slot>
  );
}

const FormDescription = ({ className, ...props }: ComponentProps<'div'>) => {
  const { formDescriptionId } = useContext(FormItemCtx)
  console.log('Render: FormDescription')
  return <div id={formDescriptionId} className={cn("tw:text-[0.8rem] tw:text-muted-foreground", className)} {...props} />
}

const FormMessage = ({ className, children, ...props }: ComponentProps<'div'>) => {
  const { error, formMessageId } = useContext(FormItemCtx)
  const body = error ? String(error?.message) : children
  console.log('Render: FormMessage')
  return !body ? null : (
    <div
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
  isDirty: boolean;
  isTouched: boolean;
  invalid: boolean;
  error?: FieldError | undefined;
}
const FormItemCtx = createContext({} as FormItemCtxType);
/**
 * This is only meant to be used by <FormControl>
 */
const FormControlCtx = createContext({} as { field: ControllerRenderProps<FieldValues, string> });

export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
}
Form.displayName = "Form"
FormItem.displayName = "FormItem"
FormLabel.displayName = "FormLabel"
FormControl.displayName = "FormControl"
FormDescription.displayName = "FormDescription"
FormMessage.displayName = "FormMessage"
