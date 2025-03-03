import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form.tsx"
import { Button } from "@/components/ui/Button/Button.tsx"
import { z } from "zod"
import { Input } from "@/components/ui/Input/Input.tsx"
import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/Toggle/Toggle.tsx";
export function ProfileForm() {

  const schema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).default("USERNAME"),
    password: z.number().min(2, {
      message: "Password must be at least 2 characters.",
    }).default(123),
  });
  function onSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form
      onSubmit={onSubmit}
      schema={schema}

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
      <FormItem
        rules={{
          required: true,
          // valueAsNumber: true // TODO: why this doens't work?
        }}
        name="password">
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input placeholder="123" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>

      <Toggle type="submit" pressed={false}>
        Submit
      </Toggle>
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