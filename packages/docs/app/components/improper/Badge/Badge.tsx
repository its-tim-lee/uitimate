import { type ComponentProps } from "react";
import {
  tv,
  type VariantProps
} from 'tailwind-variants';
import { Slot } from "@radix-ui/react-slot";

export const badgeVariants = tv({
  base: [
    "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-md tw:outline tw:transition-colors",
    "tw:focus:outline-hidden tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2",
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
    mode: {
      icon: ["tw:p-0!"],
      pill: ["tw:rounded-full tw:has-data-avatar:pl-0! tw:justify-between tw:py-0!",]
    },
    size: {
      sm: 'tw:text-xs tw:px-2.5 tw:py-0.5  tw:[&_[data-avatar]]:size-5 ',
      md: 'tw:text-sm tw:px-3 tw:py-0.5 tw:[&_[data-avatar]]:size-6 ',
      lg: 'tw:text-md tw:px-3.5 tw:py-0.5  tw:[&_[data-avatar]]:size-7 '
    }
  },
  compoundVariants: [
    {
      mode: 'icon',
      size: 'sm',
      class: 'tw:size-5',
    },
    {
      mode: 'icon',
      size: 'md',
      class: 'tw:size-6',
    },
    {
      mode: 'icon',
      size: 'lg',
      class: 'tw:size-7',
    },
    {
      mode: 'pill',
      size: 'sm',
      class: 'tw:h-5', // h 20
    },
    {
      mode: 'pill',
      size: 'md',
      class: 'tw:h-6', // h 24
    },
    {
      mode: 'pill',
      size: 'lg',
      class: 'tw:h-7', // h 28
    },
  ],
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
  className, ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot : 'span'
  return <Comp className={badgeVariants({ variant, mode, className, size })} {...props} />
}
Badge.displayName = "Badge"