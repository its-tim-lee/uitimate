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
      className={cn('tw-p-3', className)}
      classNames={{
        [UI.Months]: 'tw-relative',
        [UI.Month]: 'tw-space-y-4 tw-ml-0',
        [UI.MonthCaption]: 'tw-flex tw-justify-center tw-items-center tw-h-7',
        [UI.CaptionLabel]: 'tw-text-sm tw-font-medium',
        [UI.PreviousMonthButton]: cn(
          buttonVariants({ variant: 'outline' }),
          'tw-absolute tw-left-1 tw-top-0 tw-h-7 tw-w-7 tw-bg-transparent tw-p-0 tw-opacity-50 hover:tw-opacity-100'
        ),
        [UI.NextMonthButton]: cn(
          buttonVariants({ variant: 'outline' }),
          'tw-absolute tw-right-1 tw-top-0 tw-h-7 tw-w-7 tw-bg-transparent tw-p-0 tw-opacity-50 hover:tw-opacity-100'
        ),
        [UI.MonthGrid]: 'tw-w-full tw-border-collapse tw-space-y-1',
        [UI.Weekdays]: 'tw-flex',
        [UI.Weekday]:
          'tw-text-muted-foreground tw-rounded-md tw-w-9 tw-font-normal tw-text-[0.8rem]',
        [UI.Week]: 'tw-flex tw-w-full tw-mt-2',
        [UI.Day]:
          'tw-h-9 tw-w-9 tw-text-center tw-rounded-md tw-text-sm tw-p-0 tw-relative [&:has([aria-selected].day-range-end)]:tw-rounded-r-md [&:has([aria-selected].day-outside)]:tw-bg-accent/50 [&:has([aria-selected])]:tw-bg-accent first:[&:has([aria-selected])]:tw-rounded-l-md last:[&:has([aria-selected])]:tw-rounded-r-md focus-within:tw-relative focus-within:tw-z-20',
        [UI.DayButton]: cn(
          buttonVariants({ variant: 'ghost' }),
          'tw-h-9 tw-w-9 tw-p-0 tw-font-normal aria-selected:tw-opacity-100 hover:tw-bg-primary hover:tw-text-primary-foreground'
        ),
        [SelectionState.range_end]: 'day-range-end',
        [SelectionState.selected]:
          'tw-bg-primary tw-text-primary-foreground hover:tw-bg-primary hover:tw-text-primary-foreground focus:tw-bg-primary focus:tw-text-primary-foreground',
        [SelectionState.range_middle]:
          'aria-selected:tw-bg-accent aria-selected:tw-text-accent-foreground',
        [DayFlag.today]: 'tw-bg-accent tw-text-accent-foreground',
        [DayFlag.outside]:
          'day-outside tw-text-muted-foreground tw-opacity-50 aria-selected:tw-bg-accent/50 aria-selected:tw-text-muted-foreground aria-selected:tw-opacity-30',
        [DayFlag.disabled]: 'tw-text-muted-foreground tw-opacity-50',
        [DayFlag.hidden]: 'tw-invisible',
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
      return <Icon icon="lucide:chevron-left" className="tw-h-4 tw-w-4" />
    case 'right':
      return <Icon icon="lucide:chevron-right" className="tw-h-4 tw-w-4" />
    case 'up':
      return <Icon icon="lucide:chevron-up" className="tw-h-4 tw-w-4" />
    case 'down':
      return <Icon icon="lucide:chevron-down" className="tw-h-4 tw-w-4" />
    default:
      return null
  }
}
