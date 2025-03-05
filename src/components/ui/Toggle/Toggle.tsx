import { type ComponentProps } from "react"
import { Root } from "@radix-ui/react-toggle"
import { tv, type VariantProps } from "tailwind-variants"

// status: hover before toggle-on
// status: hover after toggle-on -> nothing happens
// status-a: toggle-on
// status-b: click outside when toggle-on -> nothing happens
// status-c: toggle-off

export const toggleVariants = tv({
  base: [
    "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-md tw:font-medium tw:transition-colors tw:cursor-pointer",
    "tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring",
    "tw:disabled:pointer-events-none tw:disabled:opacity-50",
    "tw:[&_svg]:pointer-events-none tw:[&_svg]:size-4 tw:[&_svg]:shrink-0",

    "tw:bg-background tw:text-foreground",
    "tw:[&_*]:bg-background tw:[&_*]:text-foreground",
    "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
    "tw:hover:[&_*]:bg-secondary tw:hover:[&_*]:text-secondary-foreground",
  ],
  variants: {
    variant: {
      primary: [],
      outline: ["tw:border tw:border-secondary tw:shadow-sm"],
    },
    size: {
      sm: "tw:text-sm tw:h-9 tw:rounded-md tw:px-3 tw:data-icon-btn:w-9 tw:data-icon-btn:p-0",
      md: "tw:text-md tw:h-10 tw:px-4 tw:py-2 tw:data-icon-btn:w-10 tw:data-icon-btn:p-0",
      lg: "tw:text-lg tw:h-11 tw:rounded-md tw:px-8 tw:data-icon-btn:w-11 tw:data-icon-btn:p-0",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  }
})

export type ToggleProps = ComponentProps<typeof Root> & VariantProps<typeof toggleVariants>;

export const Toggle = ({ className, variant, size, ...props }: ToggleProps) => (
  <Root
    className={toggleVariants({ variant, size, className })}
    {...props}
  />
)

Toggle.displayName = 'Toggle'
