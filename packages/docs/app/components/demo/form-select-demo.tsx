import { Cta } from "#/components/ui/Cta/Cta"
import { Form, FormLabel, FormControl, FormItem, FormMessage, FormDescription } from "#/components/ui/Form/Form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "#/components/ui/Select/Select"
import { z } from "zod"

export default () => {
  const schema = z.object({
    email: z.string({
      required_error: "Please select an email preference.",
    }),
  })
  const submitOnValid = (data: z.infer<typeof schema>) => console.log(data)
  return (
    <Form onSubmit={submitOnValid} schema={schema}>
      <FormItem name="email">
        <FormControl>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your email preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="never">Never</SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormDescription>
          Choose how often you want to receive emails.
        </FormDescription>
        <FormMessage />
      </FormItem>
      <br />
      <Cta type="submit">Submit</Cta>
    </Form>
  )
}