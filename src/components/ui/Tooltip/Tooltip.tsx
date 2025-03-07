import { type ComponentProps } from "react"
import {
  Provider as TooltipProvider,
  Root,
  Trigger as TooltipTrigger,
  Content,
  Portal
} from "@radix-ui/react-tooltip"
import { tv } from "tailwind-variants"

const variants = tv({
  base: [
    "tw:z-50 tw:overflow-hidden tw:rounded-md tw:bg-primary tw:px-3 tw:py-1.5 tw:text-xs tw:text-primary-foreground",
    "tw:animate-in tw:fade-in-0 tw:zoom-in-95",
    "tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=closed]:zoom-out-95",
    "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
    "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
  ]
})

type TooltipProps = ComponentProps<typeof Root> & ComponentProps<typeof TooltipProvider>
const Tooltip = ({ ...props }: TooltipProps) => <TooltipProvider><Root {...props} /></TooltipProvider>

type TooltipContentProps = ComponentProps<typeof Content>
const TooltipContent = ({
  className,
  sideOffset = 4,
  ...props
}: TooltipContentProps) => (
  <Portal>
    <Content
      sideOffset={sideOffset}
      className={variants({ className })}
      {...props}
    />
  </Portal>
)

Tooltip.displayName = 'Tooltip'
TooltipContent.displayName = 'TooltipContent'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipProvider.displayName = 'TooltipProvider'

export {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  type TooltipProps,
  type TooltipContentProps
}
