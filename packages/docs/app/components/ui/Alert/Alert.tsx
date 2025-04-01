import { type ComponentProps } from "react"
import {
  tv,
  type VariantProps
} from 'tailwind-variants'
import { cn } from "#/helpers/css"

export const alertVariants = tv({
  base: [
    "tw:relative tw:w-full tw:rounded-lg tw:border tw:px-4 tw:py-3 tw:text-sm",
    "tw:[&>svg+div]:translate-y-[-3px] tw:[&>svg]:absolute tw:[&>svg]:left-4 tw:[&>svg]:top-4 tw:[&>svg]:text-foreground tw:[&>svg~*]:pl-7"
  ],
  variants: {
    variant: {
      primary: "tw:bg-background tw:text-foreground",
      destructive:
        "tw:border-destructive/50 tw:text-destructive tw:dark:border-destructive tw:[&>svg]:text-destructive",
    },
  },
  defaultVariants: {
    variant: "primary",
  }
})

export type AlertProps = ComponentProps<'div'> & VariantProps<typeof alertVariants>;

export const Alert = ({ className, variant, ...props }: AlertProps) => (
  <div
    role="alert"
    className={alertVariants({ variant, className })}
    {...props}
  />
)

export const AlertTitle = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn("tw:font-semibold tw:leading-none tw:tracking-tight", className)}
    {...props}
  />
)

export const AlertDescription = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn("tw:text-sm tw:[&_p]:leading-relaxed", className)}
    {...props}
  />
)

Alert.displayName = "Alert"
AlertTitle.displayName = "AlertTitle"
AlertDescription.displayName = "AlertDescription"
