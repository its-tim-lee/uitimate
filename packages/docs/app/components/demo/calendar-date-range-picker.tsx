
import { Cta } from "@/components/ui/Cta/Cta"
import { Calendar } from "@/components/ui/Calendar/Calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/Popover"
import { cn } from "@/lib/utils"
import { addDays, format } from "date-fns"
import { Icon } from "@/components/ui/Icon/Icon"
import * as React from "react"
import { type DateRange } from "react-day-picker"

export default () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), -20),
    to: new Date(),
  })
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Cta
          id="date"
          variant={"outline"}
          className={cn(
            !date && "tw:text-muted-foreground"
          )}
        >
          <Icon icon='lucide-calendar' />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Cta>
      </PopoverTrigger>
      <PopoverContent className="tw:w-auto tw:p-0" align="start">
        <Calendar
          autoFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}
