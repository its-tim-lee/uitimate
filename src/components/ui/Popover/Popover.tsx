import { type ComponentProps } from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { tv, type VariantProps } from "tailwind-variants"

const popoverVariants = tv({
  base: [
    "tw:z-50 tw:rounded-md tw:border tw:bg-popover tw:p-4 tw:text-popover-foreground tw:shadow-md tw:outline-hidden",
    "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
    "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
    "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
    "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
    "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2",
  ],
})

type PopoverContentProps =
  ComponentProps<typeof PopoverPrimitive.Content> &
  VariantProps<typeof popoverVariants>

/**
 * - By default, the popover content will be rendered into <body> (ie., due to <Portal>)
 */
const PopoverContent = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={popoverVariants({ className })}
      {...props}
    />
  </PopoverPrimitive.Portal>
)
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverAnchor = PopoverPrimitive.Anchor

Popover.displayName = 'Popover';
PopoverTrigger.displayName = 'PopoverTrigger';
PopoverAnchor.displayName = 'PopoverAnchor';
PopoverContent.displayName = 'PopoverContent';

export {
  popoverVariants,
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  type PopoverContentProps,
}
