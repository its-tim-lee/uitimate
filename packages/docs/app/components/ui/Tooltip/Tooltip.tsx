import { type ComponentProps } from "react"
import { kebabCase } from "lodash-es"
import {
  Provider,
  Root,
  Trigger,
  Content,
  Portal
} from "@radix-ui/react-tooltip"
import { tv } from "tailwind-variants"

const tooltipVariants = tv({
  base: [
    "tw:z-50 tw:overflow-hidden tw:rounded-md tw:bg-primary tw:px-3 tw:py-1.5 tw:text-xs tw:text-primary-foreground",
    "tw:animate-in tw:fade-in-0 tw:zoom-in-95",
    "tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=closed]:zoom-out-95",
    "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
    "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
  ]
})

type TooltipProviderProps = ComponentProps<typeof Provider>
const TooltipProvider = ({ ...props }: TooltipProviderProps) => <Provider data-tag={kebabCase(TooltipProvider.displayName)} {...props} />

type TooltipProps = ComponentProps<typeof Root>
const Tooltip = ({ ...props }: TooltipProps) => (
  <TooltipProvider>
    <Root data-tag={kebabCase(Tooltip.displayName)} {...props} />
  </TooltipProvider>
)

type TooltipTriggerProps = ComponentProps<typeof Trigger>
const TooltipTrigger = ({ ...props }: TooltipTriggerProps) => (
  <Trigger data-tag={kebabCase(TooltipTrigger.displayName)} {...props} />
)

type TooltipContentProps = ComponentProps<typeof Content>
const TooltipContent = ({
  className,
  sideOffset = 4,
  ...props
}: TooltipContentProps) => (
  <Portal>
    <Content
      data-tag={kebabCase(TooltipContent.displayName)}
      sideOffset={sideOffset}
      className={tooltipVariants({ className })}
      {...props}
    />
  </Portal>
)

Tooltip.displayName = 'Tooltip'
TooltipTrigger.displayName = 'TooltipTrigger'
TooltipContent.displayName = 'TooltipContent'
TooltipProvider.displayName = 'TooltipProvider'

namespace Type {
  export type Tooltip = TooltipProps
  export type TooltipTrigger = TooltipTriggerProps
  export type TooltipContent = TooltipContentProps
  export type TooltipProvider = TooltipProviderProps
}

export {
  type Type,
  tooltipVariants,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
}
