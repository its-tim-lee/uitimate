import * as React from "react"
import { Root, Indicator } from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = ({ className, value, ...props }: ProgressProps) => (
  <Root
    className={cn(
      "tw-relative tw-h-2 tw-w-full tw-overflow-hidden tw-rounded-full tw-bg-primary/20",
      className
    )}
    {...props}
  >
    <Indicator
      className="tw-h-full tw-w-full tw-flex-1 tw-bg-primary tw-transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </Root>
)
Progress.displayName = 'Progress'

export { Progress }
export interface ProgressProps extends React.ComponentProps<typeof Root> {}