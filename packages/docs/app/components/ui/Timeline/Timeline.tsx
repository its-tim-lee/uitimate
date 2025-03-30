// https://github.dev/flixlix/shadcn-date-picker
import { type ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { Separator } from "../Separator/Separator"

const timelineVariants = tv({
  base: "tw:flex tw:flex-col tw:gap-y-2"
})
type TimelineProps = ComponentProps<"ul"> & VariantProps<typeof timelineVariants>
const Timeline = ({ className, ...props }: TimelineProps) => <ul className={timelineVariants({ className })} {...props} />

const timelineItemVariants = tv({
  base: "tw:relative",
})
type TimelineItemProps = ComponentProps<"li"> & VariantProps<typeof timelineItemVariants>
const TimelineItem = ({ className, ...props }: TimelineItemProps) => <li className={timelineItemVariants({ className })} {...props} />

const timelineDotVariants = tv({
  base: [
    "tw:absolute tw:left-0 tw:z-10 tw:top-0.5",
    "tw:rounded-full tw:border tw:border-current tw:size-4 tw:bg-background",
  ],
})
type TimelineDotProps = ComponentProps<"div"> & VariantProps<typeof timelineDotVariants>
const TimelineDot = ({
  className,
  ...props
}: TimelineDotProps) => (
  <div
    className={timelineDotVariants({ className })}
    {...props}
  />
)

const timelineContentVariants = tv({
  base: "tw:pl-8 tw:pb-8 tw:text-muted-foreground tw:ml-0 tw:w-full tw:mt-1",
})
type TimelineContentProps = ComponentProps<"div"> & VariantProps<typeof timelineContentVariants>
const TimelineContent = ({
  className,
  ...props
}: TimelineContentProps) => (
  <div
    className={timelineContentVariants({ className })}
    {...props}
  />
)

const TimelineTitleVariants = tv({
  base: [
    "tw:pl-8 tw:line-clamp-1 tw:max-w-full tw:truncate",
    "tw:text-left",
    "tw:text-base tw:font-medium tw:text-primary"
  ],
})
type TimelineTitleProps = ComponentProps<"p"> & VariantProps<typeof TimelineTitleVariants>
const TimelineTitle = ({
  className,
  ...props
}: TimelineTitleProps) => (
  <p
    role="heading"
    className={TimelineTitleVariants({ className })}
    {...props}
  />
)

const timelineLineVariants = tv({
  base: [
    "tw:absolute tw:left-[7.5px] tw:top-5",
    "tw:h-full tw:min-h-16 tw:w-[1px]",
  ]
})
type TimelineLineProps = ComponentProps<"hr">
const TimelineLine = ({ className, ...props }: TimelineLineProps) => (
  <Separator
    aria-orientation="vertical"
    className={timelineLineVariants({ className })}
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
