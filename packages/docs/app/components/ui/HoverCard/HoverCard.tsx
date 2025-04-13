import { type ComponentProps } from "react"
import { Root, Trigger, Content } from "@radix-ui/react-hover-card"
import { tv } from "tailwind-variants"
import { kebabCase } from "lodash-es"

const hoverCardVariants = tv({
  base: [
    "tw:z-50 tw:w-64 tw:rounded-md tw:border tw:bg-popover tw:p-4 tw:text-popover-foreground tw:shadow-md tw:outline-hidden",
    "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
    "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
    "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
    "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
    "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
  ]
})

type HoverCardProps = ComponentProps<typeof Root>
const HoverCard = (props: HoverCardProps) => (
  <Root data-tag={kebabCase(HoverCard.displayName)} {...props} />
)

type HoverCardTriggerProps = ComponentProps<typeof Trigger>
const HoverCardTrigger = (props: HoverCardTriggerProps) => (
  <Trigger data-tag={kebabCase(HoverCardTrigger.displayName)} {...props} />
)

type HoverCardContentProps = ComponentProps<typeof Content>
const HoverCardContent = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: HoverCardContentProps) => (
  <Content
    data-tag={kebabCase(HoverCardContent.displayName)}
    align={align}
    sideOffset={sideOffset}
    className={hoverCardVariants({ className })}
    {...props}
  />
)

HoverCard.displayName = 'HoverCard'
HoverCardTrigger.displayName = 'HoverCardTrigger'
HoverCardContent.displayName = 'HoverCardContent'

namespace Type {
  export type HoverCard = HoverCardProps
  export type HoverCardTrigger = HoverCardTriggerProps
  export type HoverCardContent = HoverCardContentProps
}

export {
  hoverCardVariants,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  type Type
}
