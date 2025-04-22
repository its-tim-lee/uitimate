import { Cta } from "#/components/ui/Cta/Cta"
import { Form, FormLabel, FormControl, FormItem, FormMessage, FormDescription } from "#/components/ui/Form/Form"
import { Textarea } from "#/components/ui/Textarea/Textarea"
import { z } from "zod"

// Define the schema for bug details
const schema = z.object({
  bug: z.string({
    required_error: "Please describe the bug."
  })

});

type SchemaType = z.infer<typeof schema>;

export default () => {
  const submitOnValid = (data: SchemaType) => console.log(data)

  return (
    <Form onSubmit={submitOnValid} schema={schema} className="tw:w-[350px]">
      <FormItem name="bug">
        <FormLabel>Report details</FormLabel>
        <FormControl><Textarea placeholder="Describe the bug you encountered" /></FormControl>
        <FormDescription>Include steps to reproduce the bug if possible.</FormDescription>
        <FormMessage />
      </FormItem>
      <br />
      <Cta type="submit" className="tw:mt-4">Report Bug</Cta>
    </Form>
  )
}