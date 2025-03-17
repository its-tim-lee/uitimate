import { useState } from "react"
import { BreadcrumbFinal, Breadcrumb } from "../ui/Breadcrumb/Breadcrumb"
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/Breadcrumb/Breadcrumb"
import { Cta } from "../ui/Cta/Cta"
import { Heading } from "../ui/Heading/Heading"
import { Icon } from "../ui/Icon/Icon"
import type { FormState } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "../ui/Form/Form"
import { Input } from "../ui/Input/Input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select/Select"

export default () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState<z.infer<typeof schema>> | undefined>(undefined);
  const shouldStopToNextStep = (formState?.isValidating || formState?.isSubmitting) || !formState?.isValid;
  const schema = z.object({
    name: z.string().nonempty('The name field cannot be empty.'),
    country: z.string(),
    adr1: z.string(),
    adr2: z.string(),
    zip: z.string().regex(/^\d+$/, 'Invalid postal code'),
    city: z.string(),
    phone: z.string().regex(/^\d+$/),
  })
  const defaultValues = {
    country: '',
  }
  return (
    <div className='tw:flex tw:gap-16 tw:border'>
      <div className='tw:bg-background tw:flex-1/3'>
        <section>
          <Heading size="h2">Manage your OpenAI billing settings</Heading>
          <a href='#' className='tw:flex tw:items-center tw:gap-2 tw:hover:text-muted-foreground'>
            <Icon icon='lucide:arrow-left' />
            Return to OpenAI, LLC
          </a>
        </section>
      </div>
      <div className='tw:flex-2/3 tw:border tw:p-16'>

        <Breadcrumb>

          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Billing</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbFinal>Billing information</BreadcrumbFinal>
          </BreadcrumbItem>

        </Breadcrumb>

        <section>
          <Heading size="h1" className='tw:my-16'>Billing information</Heading>
          <Form
            schema={schema}
            defaultValues={defaultValues}
            setFormState={setFormState}
            // mode="onSubmit"
            mode="onChange"
            disabled={isDisabled}
            onSubmit={() => { }}
          >
            <FormItem name='name' className='tw:flex tw:flex-col tw:gap-0.5'>
              <FormLabel className='tw:pl-1'> Name</FormLabel>
              <FormControl><Input placeholder="John Doe" /></FormControl>
            </FormItem>
            <br />
            <FormItem name='country' className='tw:flex tw:flex-col tw:gap-0.5'>
              <FormLabel className='tw:pl-1'>Address</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="mx">Mexico</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>

            <div className="tw:flex tw:flex-col tw:gap-2 tw:my-2">
              <FormItem name='adr1' className='tw:flex tw:gap-3'>
                <FormControl>
                  <Input placeholder="Address line 1" />
                </FormControl>
              </FormItem>
              <FormItem name='adr2' className='tw:flex tw:gap-3'>
                <FormControl>
                  <Input placeholder="Address line 2" />
                </FormControl>
              </FormItem>
              <FormItem name='zip' className='tw:flex tw:gap-3'>
                <FormControl>
                  <Input placeholder="Postal code (40304)" />
                </FormControl>
                <FormMessage />
              </FormItem>
              <FormItem name='city' className='tw:flex tw:gap-3'>
                <FormControl>
                  <Input placeholder="City" />
                </FormControl>
              </FormItem>
            </div>
            <br />
            <FormItem name='phone' className='tw:flex tw:flex-col tw:gap-0.5'>
              <FormLabel className='tw:pl-1'>Phone number</FormLabel>
              <div className='tw:flex tw:items-center tw:gap-3'>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="DZ" />
                  </SelectTrigger>
                  <SelectContent className='tw:w-10 tw:flex-0'>
                    <SelectItem value="us">CA</SelectItem>
                    <SelectItem value="ca">VA</SelectItem>
                  </SelectContent>
                </Select>
                <div>+253</div>
                <FormControl>
                  <Input placeholder="Address line 1" />
                </FormControl>
              </div>
            </FormItem>


          </Form>

        </section>
      </div>
    </div>
  )
}