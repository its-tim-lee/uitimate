import { Cta } from "#/components/ui/Cta/Cta"
import { Form, FormLabel, FormControl, FormItem, FormMessage, FormDescription } from "#/components/ui/Form/Form"
import { Input } from "#/components/ui/Input/Input"
import { z } from "zod"

export default () => {
  const schema = z.object({
    // Note: `.nonempty({ message: "Username is required." })` will not work to show the error message
    username: z.string({
      required_error: "Username is required.",
    }).min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })
  const submitOnValid = (data: z.infer<typeof schema>) => console.log(data)
  return (
    <Form onSubmit={submitOnValid} schema={schema}>
      <FormItem name="username">
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="Enter your username" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
      <br />
      <Cta type="submit">Submit</Cta>
    </Form>
  )
}