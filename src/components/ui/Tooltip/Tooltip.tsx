/**
 * `Arrow` is not imported, cuz it's not that useful.
 */
import { Provider as TooltipProvider, Root, Trigger as TooltipTrigger, Content, Portal } from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

const TooltipContent = ({ className, sideOffset = 4, ref, ...props }: ComponentProps<typeof Content>) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "tw-z-50 tw-overflow-hidden tw-rounded-md tw-bg-primary tw-px-3 tw-py-1.5 tw-text-xs tw-text-primary-foreground tw-animate-in tw-fade-in-0 tw-zoom-in-95 data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=closed]:tw-zoom-out-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </Portal>
)

const Tooltip = ({ delayDuration = 700, skipDelayDuration = 300, disableHoverableContent = false, ...props }: ComponentProps<typeof Root> & ComponentProps<typeof TooltipProvider>) => (
  <TooltipProvider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration} disableHoverableContent={disableHoverableContent}>
    <Root {...props} />
  </TooltipProvider>
)

TooltipContent.displayName = Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
