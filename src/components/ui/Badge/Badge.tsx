import { type ComponentProps } from "react";
import {
  tv,
  type VariantProps
} from 'tailwind-variants';
import { Slot } from "@radix-ui/react-slot";

/**
 * TBD: For more details such as demos and guidelines, check:
 */

/**
 * TBD: words on doc: Badge vs. Button
 * - why not merge them?
 * - differences: style, span vs. button
 * - differences: mode vs. variant
 */

export const badgeVariants = tv({
  base: [
    "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-md tw:outline tw:transition-colors",
    "tw:focus:outline-hidden tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2",
    "tw:data-[mode='pill']:rounded-full tw:data-[mode='pill']:has-data-avatar:pl-0! tw:data-[mode='pill']:justify-between tw:data-[mode='pill']:py-0",
    "tw:data-[mode='icon']:p-0"
  ],
  variants: {
    variant: {
      primary:
        "tw:outline-transparent tw:bg-primary tw:text-primary-foreground tw:hover:bg-primary/80",
      secondary:
        "tw:outline-transparent tw:bg-secondary tw:text-secondary-foreground tw:hover:bg-secondary/50",
      destructive:
        "tw:outline-transparent tw:bg-destructive tw:text-destructive-foreground tw:hover:bg-destructive/80",
      outline: [
        "tw:text-foreground tw:bg-background",
        "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
      ],
      ghost: [
        "tw:bg-background tw:text-foreground tw:outline-transparent",
        "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
      ]
    },
    size: {
      sm: 'tw:text-xs tw:px-2.5 tw:py-0.5  tw:data-[mode="icon"]:size-5 tw:[&_[data-avatar]]:size-5 tw:data-[mode="pill"]:h-5', // h 20
      md: 'tw:text-sm tw:px-3 tw:py-0.5 tw:data-[mode="icon"]:size-6 tw:[&_[data-avatar]]:size-6 tw:data-[mode="pill"]:h-6', // h 24
      lg: 'tw:text-md tw:px-3.5 tw:py-0.5  tw:data-[mode="icon"]:size-7 tw:[&_[data-avatar]]:size-7 tw:data-[mode="pill"]:h-7', // h 28
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

export type BadgeProps = (
  VariantProps<typeof badgeVariants> &
  ComponentProps<'span'> &
  { asChild?: boolean, icon?: boolean, mode?: 'pill' | 'icon' }
)
export const Badge = ({
  size, variant, mode,
  asChild = false,
  className, children, ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot : 'span'
  return <Comp
    data-mode={mode || undefined}
    className={badgeVariants({ variant, className, size })} {...props}>
    {children}
  </Comp>
}
Badge.displayName = "Badge"