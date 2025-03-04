import { type ComponentProps } from "react"
import { Slot } from "@radix-ui/react-slot"
import {
  tv,
  type VariantProps,
} from 'tailwind-variants';
export const buttonVariants = tv({
  base: [
    "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-md tw:font-medium tw:transition-colors tw:cursor-pointer",
    "tw:[&_svg]:size-4 tw:[&_svg]:shrink-0 tw:[&_svg]:pointer-events-none",
    "tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring",
    "tw:disabled:pointer-events-none tw:disabled:opacity-50"
  ],
  variants: {
    variant: {
      primary:
        [
          "tw:bg-primary tw:text-primary-foreground tw:shadow",
          "tw:[&_*]:bg-primary tw:[&_*]:text-primary-foreground",
          "tw:hover:bg-primary/80 tw:hover:[&_*]:bg-primary/80"
        ],
      secondary:
        [
          "tw:bg-secondary tw:text-secondary-foreground tw:shadow-sm",
          "tw:[&_*]:bg-secondary tw:[&_*]:text-secondary-foreground",
          "tw:hover:bg-secondary/50 tw:hover:[&_*]:bg-secondary/50"
        ],
      destructive:
        [
          "tw:bg-destructive tw:text-destructive-foreground tw:shadow-sm",
          "tw:[&_*]:bg-destructive tw:[&_*]:text-destructive-foreground",
          "tw:hover:bg-destructive/80 tw:hover:[&_*]:bg-destructive/80"
        ],
      outline:
        [
          "tw:border tw:border-input tw:bg-background tw:text-foreground tw:shadow-sm",
          "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
          "tw:hover:[&_*]:bg-secondary tw:hover:[&_*]:text-secondary-foreground",
        ],
      ghost: [
        "tw:bg-background tw:text-foreground",
        "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
        "tw:hover:[&_*]:bg-secondary tw:hover:[&_*]:text-secondary-foreground",
      ],
      link: [
        "tw:text-primary tw:underline-offset-4",
        "tw:[&_*]:text-primary",
        "tw:hover:underline"
      ],
    },
    // TBD: different size should have different sized icon: src/components/demo/dropdownmenu-mix2.tsx
    size: {
      sm: "tw:text-sm tw:h-9 tw:rounded-md tw:px-3 tw:data-icon-btn:w-9 tw:data-icon-btn:p-0",
      md: "tw:text-md tw:h-10 tw:px-4 tw:py-2 tw:data-icon-btn:w-10 tw:data-icon-btn:p-0",
      lg: "tw:text-lg tw:h-11 tw:rounded-md tw:px-8 tw:data-icon-btn:w-11 tw:data-icon-btn:p-0",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

export type ButtonProps =
  ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> &
  { asChild?: boolean, icon?: boolean }

/**
 * Implementation notes:
 * - #1: simply having a prop called "icon" turns out to be the best solution; surprisingly,
 *       such simple design decision actually reduces lots of unforeseeable issues.
 *
 * HACK: A caveat when using `asChild` in Astro
 * Somehow, on Astro, `Slot` will not apply classes onto the "asChild" element,
 * and that's all because doing the component composition in .astro file,
 * so the solution is just doing that in a dedicated tsx file, and then import it to the .astro file.
 */
export const Button =
  ({

    variant, size, asChild = false,
    icon = false, // #1 FIXME: refactor to mode='icon' to align with the api design as Badge
    className, children,
    ...props
  }: ButtonProps) => {
    const Comp = asChild ? Slot : "button"
    return <Comp data-icon-btn={icon || undefined} {...props} className={buttonVariants({ variant, size, className })}>
      {children}
    </Comp>
  }

Button.displayName = "Button"

