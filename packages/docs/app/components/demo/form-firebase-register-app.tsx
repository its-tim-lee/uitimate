import { type CheckedState } from "#/components/ui/Checkbox/Checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/ui/Form/Form.tsx"
import { Cta } from "#/components/ui/Cta/Cta.tsx"
import { z } from "zod"
import { Input } from "#/components/ui/Input/Input.tsx"
import { useEffect, useRef, useState, useId } from "react";
import { sleep } from "#/helpers/utils";
import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { TooltipContent, TooltipTrigger } from "#/components/ui/Tooltip/Tooltip.tsx";
import { Tooltip } from "#/components/ui/Tooltip/Tooltip.tsx";
import { Checkbox } from "#/components/ui/Checkbox/Checkbox.tsx";
import {
  type FormState,
  type UseFormReturn,
  type FieldValues,
  useFormContext
} from "react-hook-form";
import { nanoid } from "nanoid";
import { Label } from "#/components/ui/Label/Label.tsx";

const checkIfSiteIdIsUnavilable = (val: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val === 'aaa' || val === 'bbb')
    }, 3000)
  })
}

export default () => {
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