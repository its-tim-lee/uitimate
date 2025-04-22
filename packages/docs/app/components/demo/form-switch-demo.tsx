import { Cta } from "#/components/ui/Cta/Cta"
import { Form, FormLabel, FormControl, FormItem, FormMessage, FormDescription } from "#/components/ui/Form/Form"
import { Switch } from "#/components/ui/Switch/Switch"
import { z } from "zod"

const schema = z.object({
  item: z.boolean().default(false).refine(v => v, {
    message: "This is required for reliable system operation.",
  }),
});
type SchemaType = z.infer<typeof schema>;
export default () => {
  const submitOnValid = (data: SchemaType) => console.log("Form submitted:", data)
  return (
    <Form onSubmit={submitOnValid} schema={schema} className="tw:w-[350px]">
      <FormItem name="item" className="tw:flex tw:flex-col tw:rounded-lg tw:border tw:p-4">
        <div className="tw:flex tw:flex-row tw:items-center tw:justify-between">
          <div className="tw:space-y-0.5">
            <FormLabel className="tw:text-base">Allow Anonymous Data Collection</FormLabel>
            <FormDescription>
              Help us improve by sending anonymous usage data.
            </FormDescription>
          </div>
          <FormControl>
            <Switch />
          </FormControl>
        </div>
        <FormMessage className="tw:mt-2" />
      </FormItem>

      <br />
      <Cta type="submit" className="tw:mt-4">Submit</Cta>
    </Form>
  )
}