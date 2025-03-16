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
import FormFirebaseRegisterApp from "@/components/demo/form-firebase-register-app.tsx";
import FormRemoveAppFromProject from "@/components/demo/form-remove-app-from-project.tsx"


export const RegisterApp = {
  name: 'Showcase / Firebase Register App',
  render: () => <FormFirebaseRegisterApp />
};

export const RemoveAppFromProject = {
  name: 'Showcase / Remove App From Project',
  render: () => <FormRemoveAppFromProject />
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