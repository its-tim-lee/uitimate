import { Icon } from '@/components/ui/Icon/Icon.tsx'
import * as React from 'react'
import { DayFlag, DayPicker, SelectionState, UI } from 'react-day-picker'

import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/Button/Button.tsx'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('tw:p-3', className)}
      classNames={{
        [UI.Months]: 'tw:relative',
        [UI.Month]: 'tw:space-y-4 tw:ml-0',
        [UI.MonthCaption]: 'tw:flex tw:justify-center tw:items-center tw:h-7',
        [UI.CaptionLabel]: 'tw:text-sm tw:font-medium',
        [UI.PreviousMonthButton]: cn(
          buttonVariants({ variant: 'outline' }),
          'tw:absolute tw:left-1 tw:top-0 tw:h-7 tw:w-7 tw:bg-transparent tw:p-0 tw:opacity-50 tw:hover:opacity-100'
        ),
        [UI.NextMonthButton]: cn(
          buttonVariants({ variant: 'outline' }),
          'tw:absolute tw:right-1 tw:top-0 tw:h-7 tw:w-7 tw:bg-transparent tw:p-0 tw:opacity-50 tw:hover:opacity-100'
        ),
        [UI.MonthGrid]: 'tw:w-full tw:border-collapse tw:space-y-1',
        [UI.Weekdays]: 'tw:flex',
        [UI.Weekday]:
          'tw:text-muted-foreground tw:rounded-md tw:w-9 tw:font-normal tw:text-[0.8rem]',
        [UI.Week]: 'tw:flex tw:w-full tw:mt-2',
        [UI.Day]:
          'tw:h-9 tw:w-9 tw:text-center tw:rounded-md tw:text-sm tw:p-0 tw:relative tw:[&:has([aria-selected].day-range-end)]:rounded-r-md tw:[&:has([aria-selected].day-outside)]:bg-accent/50 tw:[&:has([aria-selected])]:bg-accent tw:first:[&:has([aria-selected])]:rounded-l-md tw:last:[&:has([aria-selected])]:rounded-r-md tw:focus-within:relative tw:focus-within:z-20',
        [UI.DayButton]: cn(
          buttonVariants({ variant: 'ghost' }),
          'tw:h-9 tw:w-9 tw:p-0 tw:font-normal tw:aria-selected:opacity-100 tw:hover:bg-primary tw:hover:text-primary-foreground'
        ),
        [SelectionState.range_end]: 'day-range-end',
        [SelectionState.selected]:
          'tw:bg-primary tw:text-primary-foreground tw:hover:bg-primary tw:hover:text-primary-foreground tw:focus:bg-primary tw:focus:text-primary-foreground',
        [SelectionState.range_middle]:
          'tw:aria-selected:bg-accent tw:aria-selected:text-accent-foreground',
        [DayFlag.today]: 'tw:bg-accent tw:text-accent-foreground',
        [DayFlag.outside]:
          'day-outside tw:text-muted-foreground tw:opacity-50 tw:aria-selected:bg-accent/50 tw:aria-selected:text-muted-foreground tw:aria-selected:opacity-30',
        [DayFlag.disabled]: 'tw:text-muted-foreground tw:opacity-50',
        [DayFlag.hidden]: 'tw:invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) => <Chevron {...props} />,
      }}
      {...props}
    />
  )
}

const Chevron = ({ orientation = 'left' }) => {
  switch (orientation) {
    case 'left':
      return <Icon icon="lucide:chevron-left" className="tw:h-4 tw:w-4" />
    case 'right':
      return <Icon icon="lucide:chevron-right" className="tw:h-4 tw:w-4" />
    case 'up':
      return <Icon icon="lucide:chevron-up" className="tw:h-4 tw:w-4" />
    case 'down':
      return <Icon icon="lucide:chevron-down" className="tw:h-4 tw:w-4" />
    default:
      return null
  }
}
