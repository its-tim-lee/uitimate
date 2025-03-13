// https://github.dev/flixlix/shadcn-date-picker
import { type ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const timelineVariants = tv({
  base: "tw:grid",
  variants: {
    positions: {
      left: "tw:[&>li]:grid-cols-[0_min-content_1fr]",
      right: "tw:[&>li]:grid-cols-[1fr_min-content]",
      center: "tw:[&>li]:grid-cols-[1fr_min-content_1fr]"
    }
  },
  defaultVariants: {
    positions: "left"
  }
})

type TimelineProps = ComponentProps<"ul"> & VariantProps<typeof timelineVariants>
const Timeline = ({ className, positions, ...props }: TimelineProps) => <ul className={timelineVariants({ positions, className })} {...props} />

const timelineItemVariants = tv({
  base: "tw:grid tw:items-center tw:gap-x-2",
  variants: {
    status: {
      done: "tw:text-primary",
      default: "tw:text-muted-foreground"
    }
  },
  defaultVariants: {
    status: "default"
  }
})

type TimelineItemProps = ComponentProps<"li"> & VariantProps<typeof timelineItemVariants>
const TimelineItem = ({ className, status, ...props }: TimelineItemProps) => <li className={timelineItemVariants({ status, className })} {...props} />

const timelineDotVariants = tv({
  base: [
    "timeline-dot", // TBD: ??????
    "tw:col-start-2 tw:col-end-3 tw:row-start-1 tw:row-end-1",
    "tw:flex tw:size-4 tw:items-center tw:justify-center",
    "tw:rounded-full tw:border tw:border-current"
  ],
  variants: {
    status: {
      default: "tw:[&>*]:hidden",
      current: "tw:[&>*:not(.lucide-circle)]:hidden tw:[&>.lucide-circle]:fill-current tw:[&>.lucide-circle]:text-current", // FIXME:
      done: "tw:bg-primary tw:[&>*:not(.lucide-check)]:hidden tw:[&>.lucide-check]:text-background",
      error: "tw:border-destructive tw:bg-destructive tw:[&>*:not(.lucide-x)]:hidden tw:[&>.lucide-x]:text-background",
      custom: "tw:[&>*:not(:nth-child(4))]:hidden tw:[&>*:nth-child(4)]:block"
    }
  },
  defaultVariants: {
    status: "default"
  }
})

type TimelineDotProps = ComponentProps<"div"> & VariantProps<typeof timelineDotVariants>

const TimelineDot = ({
  className,
  status,
  ...props
}: TimelineDotProps) => (
  <div
    role="status"
    className={timelineDotVariants({ status, className })}
    {...props}
  />
)

const timelineContentVariants = tv({
  base: "tw:row-start-2 tw:row-end-2 tw:pb-8 tw:text-foreground",
  variants: {
    side: {
      right: "tw:col-start-3 tw:col-end-4 tw:mr-auto tw:text-left",
      left: "tw:col-start-1 tw:col-end-2 tw:ml-auto tw:text-right"
    }
  },
  defaultVariants: {
    side: "right"
  }
})

type TimelineContentProps = ComponentProps<"div"> & VariantProps<typeof timelineContentVariants>
const TimelineContent = ({
  className,
  side,
  ...props
}: TimelineContentProps) => (
  <div
    className={timelineContentVariants({ side, className })}
    {...props}
  />
)

const TimelineTitleVariants = tv({
  base: "tw:row-start-1 tw:row-end-1 tw:line-clamp-1 tw:max-w-full tw:truncate",
  variants: {
    side: {
      right: "tw:col-start-3 tw:col-end-4 tw:mr-auto tw:text-left",
      left: "tw:col-start-1 tw:col-end-2 tw:ml-auto tw:text-right"
    },
    variant: {
      primary: "tw:text-base tw:font-medium tw:text-primary",
      secondary: "tw:text-sm tw:font-light tw:text-muted-foreground"
    }
  },
  defaultVariants: {
    side: "right",
    variant: "primary"
  }
})

type TimelineTitleProps = ComponentProps<"p"> & VariantProps<typeof TimelineTitleVariants>
const TimelineTitle = ({
  className,
  side,
  variant,
  ...props
}: TimelineTitleProps) => (
  <p
    role="heading"
    aria-level={variant === "primary" ? 2 : 3}
    className={TimelineTitleVariants({ side, variant, className })}
    {...props}
  />
)

const timelineLineVariants = tv({
  base: [
    "tw:col-start-2 tw:col-end-3 tw:row-start-2 tw:row-end-2",
    "tw:mx-auto tw:flex tw:h-full tw:min-h-16 tw:w-0.5",
    "tw:justify-center tw:rounded-full tw:border-none"
  ],
  variants: {
    done: {
      true: "tw:bg-primary",
      false: "tw:bg-muted"
    }
  },
  defaultVariants: {
    done: false
  }
})

type TimelineLineProps = ComponentProps<"hr"> & {
  done?: boolean
}

const TimelineLine = ({
  className,
  done = false,
  ...props
}: TimelineLineProps) => (
  <hr
    role="separator"
    aria-orientation="vertical"
    className={timelineLineVariants({ done, className })}
    {...props}
  />
)

Timeline.displayName = "Timeline"
TimelineItem.displayName = "TimelineItem"
TimelineDot.displayName = "TimelineDot"
TimelineContent.displayName = "TimelineContent"
TimelineTitle.displayName = "TimelineTitle"
TimelineLine.displayName = "TimelineLine"

export {
  timelineVariants,
  timelineItemVariants,
  timelineDotVariants,
  timelineContentVariants,
  TimelineTitleVariants,
  timelineLineVariants,
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  TimelineTitle,
  TimelineLine,
  type TimelineProps,
  type TimelineItemProps,
  type TimelineDotProps,
  type TimelineContentProps,
  type TimelineTitleProps,
  type TimelineLineProps
}
