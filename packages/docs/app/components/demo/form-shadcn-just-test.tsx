import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Cta } from "#/components/ui/Cta/Cta"
import { Checkbox } from "#/components/ui/Checkbox/Checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/components/prototyping/shadcn/form"

const FormSchema = z.object({
  // mobile: z.boolean().default(false).optional(),
  mobile: z.boolean().refine(v => v === true, {
    message: 'You must agree to the terms and services'
  })
  // mobile: z.boolean().default(false).refine(v => v, {
  //   message: 'You must agree to the terms and services'
  // })
})

export default () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    // defaultValues: {
    //   mobile: true,
    // },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('data', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="tw:space-y-6">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className="tw:flex tw:flex-row tw:items-start tw:space-x-3 tw:space-y-0 tw:rounded-md tw:border tw:p-4 tw:shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="tw:space-y-1 tw:leading-none">
                <FormLabel>
                  Use different settings for my mobile devices
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Cta type="submit">Submit</Cta>
      </form>
    </Form>
  )
}


