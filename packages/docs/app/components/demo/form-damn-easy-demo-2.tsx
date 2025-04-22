import { Cta } from "#/components/ui/Cta/Cta"
import { Form, FormLabel, FormControl, FormItem, FormMessage } from "#/components/ui/Form/Form"
import { Checkbox } from "#/components/ui/Checkbox/Checkbox"
import { z } from "zod"

export default () => {
  const schema = z.object({
    // must be using with `defaultValues` to correctly log the message we wrote at here.
    // Otherwise, `.default(false)` must be used in the schema.
    tos: z.boolean().refine(v => v, {
      message: 'You must agree to the terms and services'
    })
  })
  const defaultValues = { tos: false }
  const submitOnValid = (data: z.infer<typeof schema>) => console.log(data)
  return (
    <Form onSubmit={submitOnValid} schema={schema} defaultValues={defaultValues}>
      <FormItem name='tos' className='tw:flex tw:flex-col tw:gap-3'>
        <div className='tw:flex tw:items-center tw:gap-3'>
          <FormControl><Checkbox /></FormControl>
          <FormLabel>I agree to the terms and services</FormLabel>
        </div>
        <FormMessage />
      </FormItem>
      <br />
      <Cta type="submit" >Submit</Cta>
    </Form>
  )
}