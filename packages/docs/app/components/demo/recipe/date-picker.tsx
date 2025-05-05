import React from "react"
import { format } from "date-fns"

import { Cta } from "#/components/ui/Cta/Cta.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/components/ui/Popover/Popover.tsx"

import { Calendar } from "#/components/ui/Calendar/Calendar.tsx"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import { cn } from "#/helpers/utils.ts" // WARN: turn this to "#/helpers" will cause the bug

const Comp = () => {
  const [date, setDate] = React.useState<Date>()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Cta
          variant={"outline"}
          className={cn(!date && "tw:text-muted-foreground")}
          data-testid="date-picker-cta"
        >
          <Icon icon='lucide-calendar' />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Cta>
      </PopoverTrigger>
      <PopoverContent align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
      </PopoverContent>
    </Popover>
  )
}

Comp.displayName = 'DatePicker';

export default Comp;
