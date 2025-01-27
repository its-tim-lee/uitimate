import * as React from "react"
import { Root, Track, Range, Thumb } from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = ({ className, ...props }: React.ComponentProps<typeof Root>) => (
  <Root
    className={cn(
      "tw-relative tw-flex tw-w-full tw-touch-none tw-select-none tw-items-center",
      className
    )}
    {...props}
  >
    <Track className="tw-relative tw-h-1.5 tw-w-full tw-grow tw-overflow-hidden tw-rounded-full tw-bg-primary/20">
      <Range className="tw-absolute tw-h-full tw-bg-primary" />
    </Track>
    <Thumb className="tw-block tw-h-4 tw-w-4 tw-rounded-full tw-border tw-border-primary/50 tw-bg-background tw-shadow tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-pointer-events-none disabled:tw-opacity-50" />
  </Root>
)
Slider.displayName = Root.displayName

export { Slider }
