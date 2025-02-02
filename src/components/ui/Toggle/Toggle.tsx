import { type ComponentProps } from "react"
import { Root } from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * We don't use secondary theme here, cuz I can't see too much differences visually when hover
 */
const secondary = `
  tw:shadow-sm
  tw:bg-transparent tw:text-primary
  tw:hover:bg-accent tw:data-[state=on]:bg-accent
`
// TODO: implement "link" just like button
const toggleVariants = cva(
  `tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-md tw:text-sm tw:font-medium tw:transition-colors tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:disabled:pointer-events-none tw:disabled:opacity-50 tw:[&_svg]:pointer-events-none tw:[&_svg]:size-4 tw:[&_svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: `
          tw:shadow
          tw:bg-primary tw:text-primary-foreground
          tw:hover:bg-primary/80 tw:data-[state=on]:bg-primary/80
        `,
        destructive:
          `
          tw:shadow
          tw:bg-destructive tw:text-destructive-foreground
          tw:hover:bg-destructive/80 tw:data-[state=on]:bg-destructive/80
          `,
        outline: `tw:shadow tw:border tw:border-input ${secondary}`,
        secondary
        /**
         * We don't have "ghost" variant, cuz it literally just equals to secondary with no shadow.
         * We also don't do "link" variant, cuz it should be easy to add by consumer, also, its use case is not that many and common.
         */
      },
      size: {
        default: "tw:h-9 tw:px-2 tw:min-w-9",
        sm: "tw:h-8 tw:px-1.5 tw:min-w-8",
        lg: "tw:h-10 tw:px-2.5 tw:min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = (
  { className, variant, size, ...props }: ComponentProps<typeof Root> & VariantProps<typeof toggleVariants>,
) => (
  <Root
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
)

Toggle.displayName = Root.displayName

export { Toggle, toggleVariants }
