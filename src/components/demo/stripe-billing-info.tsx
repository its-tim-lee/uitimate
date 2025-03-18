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
import { PopoverContent, PopoverTrigger } from "../ui/Popover/Popover"
import { Popover } from "../ui/Popover/Popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/Command/Command"
import { cn } from "~/src/lib/utils"

// TBD: doc: below code examples show:
// - how to integrate Combobox with Form
// - the flexibility to create very similar UI for Phone number input provided by Stripe
export default () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState<z.infer<typeof schema>> | undefined>(undefined);
  const shouldStopToNextStep = (formState?.isValidating || formState?.isSubmitting) || !formState?.isValid;
  const schema = z.object({
    name: z.string().nonempty('Required'),
    email: z.string().nonempty('Required'),
    country: z.string(),
    adr1: z.string().nonempty('Required'),
    adr2: z.string(),
    zip: z.string().nonempty('Required'),
    city: z.string().nonempty('Required'),
    phone: z.string().nonempty('Required'),
  })
  const defaultValues = {
    country: 'us',
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
            <FormItem name='email' className='tw:flex tw:flex-col tw:gap-0.5'>
              <FormLabel className='tw:pl-1'> Email</FormLabel>
              <FormControl><Input placeholder="john.doe@example.com" /></FormControl>
            </FormItem>

            <br />
            <FormItem name='country' className='tw:flex tw:flex-col tw:gap-0.5'>
              <FormLabel className='tw:pl-1'>Address</FormLabel>
              <FormControl><CountryCombobox /></FormControl>
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
              <div className='tw:flex tw:items-center tw:gap-3 tw:border tw:rounded-md tw:shadow-xs'>
                <Select disabled={isDisabled}>
                  <SelectTrigger className='tw:border-none tw:shadow-none tw:w-20'>
                    <SelectValue placeholder="DZ" />
                  </SelectTrigger>
                  <SelectContent className='tw:w-10 tw:flex-0'>
                    <SelectItem value="us">CA</SelectItem>
                    <SelectItem value="ca">VA</SelectItem>
                  </SelectContent>
                </Select>
                <div>+253</div>
                <FormControl>
                  <Input placeholder="2 2323 4567" className='tw:border-none tw:shadow-none' />
                </FormControl>
              </div>
            </FormItem>


          </Form>

        </section>
      </div>
    </div>
  )
}

const countries = [
  {
    value: "us",
    label: "United States",
  },
  {
    value: "ca",
    label: "Canada",
  },
  {
    value: "mx",
    label: "Mexico",
  },
  {
    value: "uk",
    label: "United Kingdom",
  },
  {
    value: "de",
    label: "Germany",
  },
]

const CountryCombobox = ({ value = '', onChange, onBlur, disabled = false }: any) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(value)
  const select = (v: string) => {
    setSelected(v === selected ? "" : v)
    setOpen(false)
    onChange?.(v)
  }
  const toggle = (e: boolean) => {
    setOpen(e)
    if (!e) onBlur?.()
  }
  return (
    <Popover open={open} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <Cta
          variant="outline"
          disabled={disabled}
          role="combobox"
          aria-expanded={open}
          className="tw:w-[300px] tw:justify-between"
        >
          {selected
            ? countries.find((country) => country.value === selected)?.label
            : "Select country..."}
          <Icon icon="lucide:chevron-down" className="tw:opacity-50" />
        </Cta>
      </PopoverTrigger>
      <PopoverContent className="tw:w-[300px] tw:p-0">
        <Command >
          <CommandInput placeholder="Search country..." className="tw:h-9" />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={select}
                >
                  {country.label}
                  <Icon icon="lucide:check" className={cn(
                    "tw:ml-auto",
                    selected === country.value ? "tw:opacity-100" : "tw:opacity-0"
                  )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}