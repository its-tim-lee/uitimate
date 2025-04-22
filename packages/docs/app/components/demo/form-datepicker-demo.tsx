import React, { useState, useEffect, type ComponentProps } from "react"
import { format } from "date-fns"
import { Cta } from "#/components/ui/Cta/Cta"
import { Form, FormLabel, FormControl, FormItem, FormMessage, FormDescription } from "#/components/ui/Form/Form"
import { Popover, PopoverContent, PopoverTrigger } from "#/components/ui/Popover/Popover"
import { Calendar, type CalendarProps } from "#/components/ui/Calendar/Calendar"
import { Icon } from "#/components/ui/Icon/Icon"
import { cn } from "#/helpers/css"
import { z } from "zod"
import { type ControllerRenderProps } from 'react-hook-form'

type DatePickerProps = Partial<ControllerRenderProps> & Omit<CalendarProps, 'selected' | 'onSelect' | 'mode'>;

const DatePicker = ({ value, onChange, ...props }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(value);
  // Sync internal state when external value prop changes
  useEffect(() => {
    if (value !== date && !(value === undefined && date === undefined)) {
      setDate(value);
    }
  }, [value, date]);

  const onSelect = (d: Date | undefined) => (setDate(d), onChange?.(d))
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Cta
          variant={"outline"}
          className={cn(!date && "tw:text-muted-foreground")}
        >
          <Icon icon='lucide-calendar' />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Cta>
      </PopoverTrigger>
      <PopoverContent align="start">
        <Calendar mode="single" selected={date} onSelect={onSelect} autoFocus {...props} />
      </PopoverContent>
    </Popover>
  );
};

export default () => {
  const schema = z.object({
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
  });
  const submitOnValid = (data: z.infer<typeof schema>) => console.log(data)
  return (
    <Form onSubmit={submitOnValid} schema={schema} className="tw:w-[350px]">
      <FormItem name="dob">
        <div className="tw:flex tw:items-center tw:gap-3">
          <FormLabel>Date of birth</FormLabel>
          <FormControl><DatePicker /></FormControl>
        </div>
        <FormMessage />
      </FormItem>
      <br />
      <Cta type="submit">Submit</Cta>
    </Form>
  )
}