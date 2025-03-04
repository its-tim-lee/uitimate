import { type ComponentProps } from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { tv, type VariantProps } from "tailwind-variants"

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverAnchor = PopoverPrimitive.Anchor

const variant = tv({
  base: [
    "tw:z-50 tw:w-72 tw:rounded-md tw:border tw:bg-popover tw:p-4 tw:text-popover-foreground tw:shadow-md tw:outline-hidden",
    "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
    "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
    "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
    "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
    "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2",
  ],
  variants: {
    size: {
      md: "tw:w-72",
      sm: "tw:w-60",
      lg: "tw:w-80",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type PopoverContentProps =
  ComponentProps<typeof PopoverPrimitive.Content> &
  VariantProps<typeof variant>

/**
 * - By default, the popover content will be rendered into <body> (ie., due to <Portal>)
 */
export const PopoverContent = ({
  className,
  align = "center",
  sideOffset = 4,
  size,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={variant({ size, className })}
      {...props}
    />
  </PopoverPrimitive.Portal>
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName