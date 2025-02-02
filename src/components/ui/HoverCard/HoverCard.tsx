import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

const HoverCard = HoverCardPrimitive.Root
const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = ({ className, align = "center", sideOffset = 4, ...props }: React.ComponentProps<typeof HoverCardPrimitive.Content>) => (
  <HoverCardPrimitive.Content
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "tw:z-50 tw:w-64 tw:rounded-md tw:border tw:bg-popover tw:p-4 tw:text-popover-foreground tw:shadow-md tw:outline-hidden tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0 tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95 tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2 tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
)
HoverCardContent.displayName = 'HoverCardContent'
HoverCardTrigger.displayName = 'HoverCardTrigger'
HoverCard.displayName = 'HoverCard'

export { HoverCard, HoverCardTrigger, HoverCardContent }
