import React from "react"
import { differenceInCalendarDays } from "@uitimate/lib-date-fns"
import { Cta, buttonVariants } from "#/components/ui/Cta/Cta.tsx"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import { cn } from "#/helpers/utils.ts"
import {
  DayPicker,
  labelNext,
  labelPrevious,
  useDayPicker,
  type DayPickerProps,
} from "@uitimate/lib-calendar"

type CalendarProps = DayPickerProps & {
  /**
   * In the year view, the number of years to display at once.
   * @default 12
   */
  yearRange?: number

  /**
   * Wether to show the year switcher in the caption.
   * @default true
   */
  showYearSwitcher?: boolean

  monthsClassName?: string
  monthCaptionClassName?: string
  weekdaysClassName?: string
  weekdayClassName?: string
  monthClassName?: string
  captionClassName?: string
  captionLabelClassName?: string
  buttonNextClassName?: string
  buttonPreviousClassName?: string
  navClassName?: string
  monthGridClassName?: string
  weekClassName?: string
  dayClassName?: string
  dayButtonClassName?: string
  rangeStartClassName?: string
  rangeEndClassName?: string
  selectedClassName?: string
  todayClassName?: string
  outsideClassName?: string
  disabledClassName?: string
  rangeMiddleClassName?: string
  hiddenClassName?: string
}

type NavView = "days" | "years"

/**
 * A custom calendar component built on top of react-day-picker.
 * @param props The props for the calendar.
 * @default yearRange 12
 * @returns
 */
function Calendar({
  className,
  showOutsideDays = true,
  showYearSwitcher = true,
  yearRange = 12,
  numberOfMonths,
  ...props
}: CalendarProps) {
  const [navView, setNavView] = React.useState<NavView>("days")
  const [displayYears, setDisplayYears] = React.useState<{
    from: number
    to: number
  }>(
    React.useMemo(() => {
      const currentYear = new Date().getFullYear()
      return {
        from: currentYear - Math.floor(yearRange / 2 - 1),
        to: currentYear + Math.ceil(yearRange / 2),
      }
    }, [yearRange])
  )

  const { onNextClick, onPrevClick, startMonth, endMonth } = props

  const columnsDisplayed = navView === "years" ? 1 : numberOfMonths

  const _monthsClassName = cn("tw:relative tw:flex", props.monthsClassName)
  const _monthCaptionClassName = cn(
    "tw:relative tw:mx-10 tw:flex tw:h-7 tw:items-center tw:justify-center",
    props.monthCaptionClassName
  )
  const _weekdaysClassName = cn("tw:flex tw:flex-row", props.weekdaysClassName)
  const _weekdayClassName = cn(
    "tw:w-8 tw:text-sm tw:font-normal tw:text-muted-foreground",
    props.weekdayClassName
  )
  const _monthClassName = cn("tw:w-full", props.monthClassName)
  const _captionClassName = cn(
    "tw:relative tw:flex tw:items-center tw:justify-center tw:pt-1",
    props.captionClassName
  )
  const _captionLabelClassName = cn(
    "tw:truncate tw:text-sm tw:font-medium",
    props.captionLabelClassName
  )
  const buttonNavClassName = buttonVariants({
    variant: "outline",
    className:
      "tw:absolute tw:h-7 tw:w-7 tw:bg-transparent tw:p-0 tw:opacity-50 tw:hover:opacity-100",
  })
  const _buttonNextClassName = cn(
    buttonNavClassName,
    "tw:right-0",
    props.buttonNextClassName
  )
  const _buttonPreviousClassName = cn(
    buttonNavClassName,
    "tw:left-0",
    props.buttonPreviousClassName
  )
  const _navClassName = cn("tw:flex tw:items-start", props.navClassName)
  const _monthGridClassName = cn("tw:mx-auto tw:mt-4", props.monthGridClassName)
  const _weekClassName = cn("tw:mt-2 tw:flex tw:w-max tw:items-start", props.weekClassName)
  const _dayClassName = cn(
    "tw:flex tw:size-8 tw:flex-1 tw:items-center tw:justify-center tw:p-0 tw:text-sm",
    props.dayClassName
  )
  const _dayButtonClassName = cn(
    buttonVariants({ variant: "ghost" }),
    "tw:size-8 tw:rounded-md tw:p-0 tw:font-normal tw:transition-none tw:aria-selected:opacity-100",
    props.dayButtonClassName
  )
  const buttonRangeClassName =
    "tw:bg-accent tw:[&>button]:bg-primary tw:[&>button]:text-primary-foreground tw:[&>button]:hover:bg-primary tw:[&>button]:hover:text-primary-foreground"
  const _rangeStartClassName = cn(
    buttonRangeClassName,
    "day-range-start tw:rounded-s-md",
    props.rangeStartClassName
  )
  const _rangeEndClassName = cn(
    buttonRangeClassName,
    "day-range-end tw:rounded-e-md",
    props.rangeEndClassName
  )
  const _rangeMiddleClassName = cn(
    "tw:bg-accent tw:!text-foreground tw:[&>button]:bg-transparent tw:[&>button]:!text-foreground tw:[&>button]:hover:bg-transparent tw:[&>button]:hover:!text-foreground",
    props.rangeMiddleClassName
  )
  const _selectedClassName = cn(
    "tw:[&>button]:bg-primary tw:[&>button]:text-primary-foreground tw:[&>button]:hover:bg-primary tw:[&>button]:hover:text-primary-foreground",
    props.selectedClassName
  )
  const _todayClassName = cn(
    "tw:[&>button]:bg-accent tw:[&>button]:text-accent-foreground",
    props.todayClassName
  )
  const _outsideClassName = cn(
    "day-outside tw:text-muted-foreground tw:opacity-50 tw:aria-selected:bg-accent/50 tw:aria-selected:text-muted-foreground tw:aria-selected:opacity-30",
    props.outsideClassName
  )
  const _disabledClassName = cn(
    "tw:text-muted-foreground tw:opacity-50",
    props.disabledClassName
  )
  const _hiddenClassName = cn("tw:invisible tw:flex-1", props.hiddenClassName)

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("tw:p-3", className)}
      style={{
        width: 248.8 * (columnsDisplayed ?? 1) + "px",
      }}
      classNames={{
        months: _monthsClassName,
        month_caption: _monthCaptionClassName,
        weekdays: _weekdaysClassName,
        weekday: _weekdayClassName,
        month: _monthClassName,
        caption: _captionClassName,
        caption_label: _captionLabelClassName,
        button_next: _buttonNextClassName,
        button_previous: _buttonPreviousClassName,
        nav: _navClassName,
        month_grid: _monthGridClassName,
        week: _weekClassName,
        day: _dayClassName,
        day_button: _dayButtonClassName,
        range_start: _rangeStartClassName,
        range_middle: _rangeMiddleClassName,
        range_end: _rangeEndClassName,
        selected: _selectedClassName,
        today: _todayClassName,
        outside: _outsideClassName,
        disabled: _disabledClassName,
        hidden: _hiddenClassName,
      }}
      components={{
        Chevron: ({ orientation }) => {
          return <Icon icon={orientation === "left" ? 'lucide-chevron-left' : 'lucide-chevron-right'} className="tw:size-4" />
        },
        Nav: ({ className }) => (
          <Nav
            className={className}
            displayYears={displayYears}
            navView={navView}
            setDisplayYears={setDisplayYears}
            startMonth={startMonth}
            endMonth={endMonth}
            onPrevClick={onPrevClick}
          />
        ),
        CaptionLabel: (props) => (
          <CaptionLabel
            showYearSwitcher={showYearSwitcher}
            navView={navView}
            setNavView={setNavView}
            displayYears={displayYears}
            {...props}
          />
        ),
        MonthGrid: ({ className, children, ...props }) => (
          <MonthGrid
            children={children}
            className={className}
            displayYears={displayYears}
            startMonth={startMonth}
            endMonth={endMonth}
            navView={navView}
            setNavView={setNavView}
            {...props}
          />
        ),
      }}
      numberOfMonths={columnsDisplayed}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

function Nav({
  className,
  navView,
  startMonth,
  endMonth,
  displayYears,
  setDisplayYears,
  onPrevClick,
  onNextClick,
}: {
  className?: string
  navView: NavView
  startMonth?: Date
  endMonth?: Date
  displayYears: { from: number; to: number }
  setDisplayYears: React.Dispatch<
    React.SetStateAction<{ from: number; to: number }>
  >
  onPrevClick?: (date: Date) => void
  onNextClick?: (date: Date) => void
}) {
  const { nextMonth, previousMonth, goToMonth } = useDayPicker()

  const isPreviousDisabled = (() => {
    if (navView === "years") {
      return (
        (startMonth &&
          differenceInCalendarDays(
            new Date(displayYears.from - 1, 0, 1),
            startMonth
          ) < 0) ||
        (endMonth &&
          differenceInCalendarDays(
            new Date(displayYears.from - 1, 0, 1),
            endMonth
          ) > 0)
      )
    }
    return !previousMonth
  })()

  const isNextDisabled = (() => {
    if (navView === "years") {
      return (
        (startMonth &&
          differenceInCalendarDays(
            new Date(displayYears.to + 1, 0, 1),
            startMonth
          ) < 0) ||
        (endMonth &&
          differenceInCalendarDays(
            new Date(displayYears.to + 1, 0, 1),
            endMonth
          ) > 0)
      )
    }
    return !nextMonth
  })()

  const handlePreviousClick = React.useCallback(() => {
    if (!previousMonth) return
    if (navView === "years") {
      setDisplayYears((prev) => ({
        from: prev.from - (prev.to - prev.from + 1),
        to: prev.to - (prev.to - prev.from + 1),
      }))
      onPrevClick?.(
        new Date(
          displayYears.from - (displayYears.to - displayYears.from),
          0,
          1
        )
      )
      return
    }
    goToMonth(previousMonth)
    onPrevClick?.(previousMonth)
  }, [previousMonth, goToMonth])

  const handleNextClick = React.useCallback(() => {
    if (!nextMonth) return
    if (navView === "years") {
      setDisplayYears((prev) => ({
        from: prev.from + (prev.to - prev.from + 1),
        to: prev.to + (prev.to - prev.from + 1),
      }))
      onNextClick?.(
        new Date(
          displayYears.from + (displayYears.to - displayYears.from),
          0,
          1
        )
      )
      return
    }
    goToMonth(nextMonth)
    onNextClick?.(nextMonth)
  }, [goToMonth, nextMonth])
  return (
    <nav className={cn("tw:flex tw:items-center", className)}>
      <Cta
        shapes={['icon']}
        variant="outline"
        className="tw:absolute tw:left-0 tw:size-7 tw:bg-transparent tw:p-0 tw:opacity-80 tw:hover:opacity-100"
        type="button"
        tabIndex={isPreviousDisabled ? undefined : -1}
        disabled={isPreviousDisabled}
        aria-label={
          navView === "years"
            ? `Go to the previous ${displayYears.to - displayYears.from + 1
            } years`
            : labelPrevious(previousMonth)
        }
        onClick={handlePreviousClick}
      >
        <Icon icon='lucide-chevron-left' className="tw:size-4" />
      </Cta>

      <Cta
        shapes={['icon']}
        variant="outline"
        className="tw:absolute tw:right-0 tw:size-7 tw:bg-transparent tw:p-0 tw:opacity-80 tw:hover:opacity-100"
        type="button"
        tabIndex={isNextDisabled ? undefined : -1}
        disabled={isNextDisabled}
        aria-label={
          navView === "years"
            ? `Go to the next ${displayYears.to - displayYears.from + 1} years`
            : labelNext(nextMonth)
        }
        onClick={handleNextClick}
      >
        <Icon icon='lucide-chevron-right' className="tw:size-4" />
      </Cta>
    </nav>
  )
}

function CaptionLabel({
  children,
  showYearSwitcher,
  navView,
  setNavView,
  displayYears,
  ...props
}: {
  showYearSwitcher?: boolean
  navView: NavView
  setNavView: React.Dispatch<React.SetStateAction<NavView>>
  displayYears: { from: number; to: number }
} & React.HTMLAttributes<HTMLSpanElement>) {
  if (!showYearSwitcher) return <span {...props}>{children}</span>
  return (
    <Cta
      shapes={['icon']}
      className="tw:h-7 tw:w-full tw:truncate tw:text-sm tw:font-medium"
      variant="ghost"
      size="sm"
      onClick={() => setNavView((prev) => (prev === "days" ? "years" : "days"))}
    >
      {navView === "days"
        ? children
        : displayYears.from + " - " + displayYears.to}
    </Cta>
  )
}

function MonthGrid({
  className,
  children,
  displayYears,
  startMonth,
  endMonth,
  navView,
  setNavView,
  ...props
}: {
  className?: string
  children: React.ReactNode
  displayYears: { from: number; to: number }
  startMonth?: Date
  endMonth?: Date
  navView: NavView
  setNavView: React.Dispatch<React.SetStateAction<NavView>>
} & React.TableHTMLAttributes<HTMLTableElement>) {
  if (navView === "years") {
    return (
      <YearGrid
        displayYears={displayYears}
        startMonth={startMonth}
        endMonth={endMonth}
        setNavView={setNavView}
        navView={navView}
        className={className}
        {...props}
      />
    )
  }
  return (
    <table className={className} {...props}>
      {children}
    </table>
  )
}

function YearGrid({
  className,
  displayYears,
  startMonth,
  endMonth,
  setNavView,
  navView,
  ...props
}: {
  className?: string
  displayYears: { from: number; to: number }
  startMonth?: Date
  endMonth?: Date
  setNavView: React.Dispatch<React.SetStateAction<NavView>>
  navView: NavView
} & React.HTMLAttributes<HTMLDivElement>) {
  const { goToMonth, selected } = useDayPicker()

  return (
    <div className={cn("tw:grid tw:grid-cols-4 tw:gap-y-2", className)} {...props}>
      {Array.from(
        { length: displayYears.to - displayYears.from + 1 },
        (_, i) => {
          const isBefore =
            differenceInCalendarDays(
              new Date(displayYears.from + i, 11, 31),
              startMonth!
            ) < 0

          const isAfter =
            differenceInCalendarDays(
              new Date(displayYears.from + i, 0, 0),
              endMonth!
            ) > 0

          const isDisabled = isBefore || isAfter
          return (
            <Cta
              shapes={['icon']}
              key={i}
              className={cn(
                "tw:h-7 tw:w-full tw:text-sm tw:font-normal tw:text-foreground",
                displayYears.from + i === new Date().getFullYear() &&
                "tw:bg-accent tw:font-medium tw:text-accent-foreground"
              )}
              variant="ghost"
              onClick={() => {
                setNavView("days")
                goToMonth(
                  new Date(
                    displayYears.from + i,
                    (selected as Date | undefined)?.getMonth() ?? 0
                  )
                )
              }}
              disabled={navView === "years" ? isDisabled : undefined}
            >
              {displayYears.from + i}
            </Cta>
          )
        }
      )}
    </div>
  )
}
export * from "@uitimate/lib-calendar";
export { type CalendarProps, Calendar }
