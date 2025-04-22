import { Cta } from "#/components/ui/Cta/Cta"
import { Form, FormLabel, FormControl, FormItem, FormMessage, FormDescription } from "#/components/ui/Form/Form"
import { RadioGroup, RadioGroupItem } from "#/components/ui/RadioGroup/RadioGroup"
import { z } from "zod"

export default () => {
  const schema = z.object({
    item: z.enum(["all", "mentions", "none"], {
      required_error: "You need to select a notification type.",
    }),
  })
  const submitOnValid = (data: z.infer<typeof schema>) => console.log(data)
  return (
    <Form onSubmit={submitOnValid} schema={schema}>
      <FormItem name="item" className="tw:space-y-3">
        <h1 className="tw:text-sm tw:font-bold">Notify me about...</h1>
        <FormControl>
          <RadioGroup className="tw:flex tw:flex-col tw:space-y-1">
            <div className="tw:flex tw:items-center tw:space-x-3 tw:space-y-0">
              <RadioGroupItem value="all" />
              <FormLabel className="tw:font-normal">
                All new messages
              </FormLabel>
            </div>
            <div className="tw:flex tw:items-center tw:space-x-3 tw:space-y-0">
              <RadioGroupItem value="mentions" />
              <FormLabel className="tw:font-normal">
                Direct messages and mentions
              </FormLabel>
            </div>
            <div className="tw:flex tw:items-center tw:space-x-3 tw:space-y-0">
              <RadioGroupItem value="none" />
              <FormLabel className="tw:font-normal">Nothing</FormLabel>
            </div>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
      <br />
      <Cta type="submit">Submit</Cta>
    </Form>
  )
}