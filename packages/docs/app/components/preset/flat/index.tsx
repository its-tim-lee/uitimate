import {
  tv,
  type VariantProps,
} from 'tailwind-variants';
import { type ComponentProps } from "react"

/**
 * TODO: need to implement lots of different kinds of cards to see what kinds of props we should provide for this component
 * TODO: think about the applicability, cuz in practice, there're stil many design cases that
 * can be different kind of variations (eg., no bottom border), and implemeting them using code can be tedious
 * (we might need to reset a lot on `Flat` component)
 *
 * Or maybe we should only allow a few variations, so it's easier to use in both design and development
 */

export const flatVariants = tv({
  base: [
    "tw:bg-background tw:shadow-sm tw:border tw:border-solid tw:border-zinc-200 tw:rounded-[8px]",
  ],
  variants: {
    size: {
      sm: "tw:p-3",
      md: "tw:p-6",
      lg: "tw:p-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type FlatProps =
  ComponentProps<'div'> &
  VariantProps<typeof flatVariants>

export const Flat =
  ({ size, className, children, ...props }: FlatProps) => {
    return (
      <div
        {...props}
        className={flatVariants({ size, className })}
      >
        {children}
      </div>
    )
  }

Flat.displayName = "Flat"