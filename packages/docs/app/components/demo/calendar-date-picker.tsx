import React from "react"
import { format } from "date-fns"

import { Cta } from "@/components/ui/Cta/Cta.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/Popover.tsx"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/Calendar/Calendar"
import { Icon } from "@/components/ui/Icon/Icon"
export default () => {
  const [date, setDate] = React.useState<Date>()
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
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
      </PopoverContent>
    </Popover>
  )
}
