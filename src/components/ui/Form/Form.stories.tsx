import { type CheckedState } from "@/components/ui/Checkbox/Checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form.tsx"
import { Cta } from "@/components/ui/Cta/Cta.tsx"
import { z } from "zod"
import { Input } from "@/components/ui/Input/Input.tsx"
import { useEffect, useRef, useState, useId } from "react";
import { sleep } from "@/helper/util";
import { Icon } from "../Icon/Icon.tsx";
import { TooltipContent, TooltipTrigger } from "../Tooltip/Tooltip.tsx";
import { Tooltip } from "../Tooltip/Tooltip.tsx";
import { Checkbox } from "../Checkbox/Checkbox.tsx";
import {
  type FormState,
  type UseFormReturn,
  type FieldValues,
  useFormContext
} from "react-hook-form";
import { nanoid } from "nanoid";
import { Label } from "../Label/Label.tsx"

const checkIfSiteIdIsUnavilable = (val: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val === 'aaa' || val === 'bbb')
    }, 3000)
  })
}
export const RegisterApp = {
  name: 'Showcase / Firebase Register App',
  render: () => {
    const [form, setForm] = useState<UseFormReturn<z.infer<typeof schema>> | undefined>(undefined);
    const [checked, setChecked] = useState<CheckedState>('indeterminate');
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const isSiteIdInputGetFocused = useRef<boolean>(false);
    const isNicknameInputGetFocused = useRef<boolean>(false);
    const hasGeneratedRandomId = useRef<boolean>(false);
    const [formState, setFormState] = useState<FormState<z.infer<typeof schema>> | undefined>(undefined);
    const shouldStopToNextStep = (formState?.isValidating || formState?.isSubmitting) || !formState?.isValid;
    const shouldShowSiteIdFormControl = checked === 'indeterminate' ? false : checked;
    const schema = z.object({
      nickname: z.string().nonempty("An app nickname is required/"),
      siteid: z.string()
        .superRefine(async (val, ctx) => {
          const fieldState = form?.getFieldState('siteid');
          if (
            !checked ||
            checked === 'indeterminate' ||
            // This is merely for handling one edge case:
            // - when siteid is fill-up and it's valid
            // - now, change nickname should not trigger siteid validation
            //   > in fact, it'll, so that's why we need to early return here
            (isNicknameInputGetFocused.current && !fieldState?.invalid)
          ) {
            return;
          }
          if (val?.length === 0) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom, // HACK: empty string is how we make the form invalid, but at the same time, NOT showing any error message
              message: !isSiteIdInputGetFocused.current ? "" : "Site ID is required.",
            });
          }
          else {
            const isUsed = await checkIfSiteIdIsUnavilable(val);
            if (isUsed) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Site ID is unavailable. Available: fir-8ff1",
              });
            }
          }
        })
    })
    const submit = async (data: z.infer<typeof schema>) => {
      // TODO: if something wrong, setIsDisabled(false), and show the error message
      console.log('submit!!!!!!!! ', data)
      setIsDisabled(true);
      await sleep(6000);
      setIsDisabled(false); // will be used to cause: https://bitl.to/4ANZ, but not a problem.
    }
    useEffect(() => {
      if (!form || checked === 'indeterminate') return; // for the case of very beginning
      if (checked === true && !hasGeneratedRandomId.current) {
        form?.setValue('siteid', nanoid(), { shouldValidate: true });
        hasGeneratedRandomId.current = true;
      }
      form?.trigger('siteid');
    }, [checked]);
    return (
      <Form
        setForm={setForm}
        setFormState={setFormState}
        mode="onChange"
        disabled={isDisabled}
        schema={schema}
        onSubmit={submit}
        className="tw:space-y-8 tw:w-[400px] tw:group tw:data-disabled:[&_*]:text-muted-foreground/50"
      >
        <FormItem name="nickname" className="">
          <FormLabel className="tw:flex tw:items-center tw:gap-2">
            App nickname
            <Tooltip>
              <TooltipTrigger><Icon icon='lucide:circle-help' /></TooltipTrigger>
              <TooltipContent className="tw:w-[280px] tw:p-4">
                The app nickname will be used throughout the Firebase console to represent this app. Nicknames aren't visible to users.
              </TooltipContent>
            </Tooltip>
          </FormLabel>
          <FormControl>
            <Input placeholder="My web app"
              onFocus={() => isNicknameInputGetFocused.current = true}
              onBlur={() => isNicknameInputGetFocused.current = false}
            />
          </FormControl>
          <FormMessage />
        </FormItem>

        <div className="tw:pl-4 tw:flex tw:items-start tw:gap-4 ">
          <Checkbox
            id='enable-hosting'
            className='tw:group-data-disabled:border-none'
            checked={checked === 'indeterminate' ? false : checked}
            onCheckedChange={setChecked}
          />
          <div className="tw:flex tw:flex-col tw:gap-3 tw:-mt-0.5">
            <Label htmlFor='enable-hosting' className='tw:text-nowrap tw:text-sm'>
              Also set up <b>Firebase Hosting</b> for this app.
            </Label>
            <p className='tw:text-xs tw:text-muted-foreground'>
              Hosting can also be set up later. There is no cost to get started anytime.
            </p>
          </div>
        </div>

        <FormItem name='siteid' className={` tw:pl-8 ${shouldShowSiteIdFormControl ? 'tw:block' : 'tw:hidden'}`}>
          <div className="tw:flex tw:items-center tw:gap-0.5 tw:border tw:rounded-sm">
            <FormControl>
              <Input
                placeholder="my-site-id"
                className='tw:border-0 tw:shadow-none'
                onFocus={() => isSiteIdInputGetFocused.current = true}
                onBlur={() => isSiteIdInputGetFocused.current = false}
              />
            </FormControl>
            <Cta variant="outline" className='tw:rounded-l-none tw:shadow-none tw:bg-muted'>
              .web.app
            </Cta>
          </div>
          <FormMessage />
        </FormItem>

        <Cta type="submit" size="sm" disabled={shouldStopToNextStep} onClick={() => setIsDisabled(true)}>
          {
            formState?.isSubmitting ?
              <Icon icon="lucide:loader-circle" className="tw:animate-spin" />
              :
              'Register app'
          }
        </Cta>

      </Form>
    )
  }
};

export function ProfileForm() {
  const [isDisabled, setIsDisabled] = useState<true | undefined>(undefined);
  const schema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).default("USERNAME"),
    password: z.string().regex(/^\d+$/, "Must be a string containing only numbers").min(2, {
      message: "Password must be at least 2 characters.",
    }).default('123'),
  });
  async function onSubmit(values: z.infer<typeof schema>) {
    console.log('onSubmit....')
    setIsDisabled(true);
    await sleep(3000);
    setIsDisabled(undefined);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log('On submit, values - ', values)
  }
  const getAsyncValues = (): Promise<{ username: string, password: number }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ username: "Fetched Username", password: 666 })
      }, 3000)
    })
  }
  function onSubmitError(data: any) {
    console.log('onSubmitError - ', data)
  }

  // Add state to store the async values
  const [formValues, setFormValues] = useState<z.infer<typeof schema> | undefined>(undefined);

  // Fetch async values
  // useEffect(() => {
  //   getAsyncValues().then(values => {
  //     setFormValues(values);
  //   });
  // }, []);

  return (
    <Form
      onSubmit={onSubmit}
      onSubmitError={onSubmitError}
      schema={schema}
      defaultValues={{ username: "Fork", password: '2839' }}
      values={formValues}
      className="tw:space-y-8"
      // validation strategy before a user submits the form.
      // the default is when the `onSubmit` event is fired (ie., not our onSubmit handler)
      mode="onBlur"
    >
      <FormItem name="username">
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>

      <FormItem name="password">
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input placeholder="123" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>

      <Cta type="submit">
        Submit
      </Cta>
    </Form>
  );
}

export default {
  title: 'Example/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <></>
    )
  },
};