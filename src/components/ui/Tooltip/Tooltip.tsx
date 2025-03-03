/**
 * `Arrow` is not imported from Radix, cuz it's not that useful.
 */
import { Provider as TooltipProvider, Root, Trigger as TooltipTrigger, Content, Portal } from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

export const TooltipContent = ({ className, sideOffset = 4, ref, ...props }: ComponentProps<typeof Content>) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "tw:z-50 tw:overflow-hidden tw:rounded-md tw:bg-primary tw:px-3 tw:py-1.5 tw:text-xs tw:text-primary-foreground tw:animate-in tw:fade-in-0 tw:zoom-in-95 tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=closed]:zoom-out-95 tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2 tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </Portal>
)

export type TooltipProps = ComponentProps<typeof Root> & ComponentProps<typeof TooltipProvider>
export const Tooltip = ({ delayDuration = 700, skipDelayDuration = 300, disableHoverableContent = false, ...props }: TooltipProps) => (
  <TooltipProvider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration} disableHoverableContent={disableHoverableContent}>
    <Root {...props} />
  </TooltipProvider>
)

TooltipContent.displayName = Content.displayName

export { TooltipTrigger, TooltipProvider }
