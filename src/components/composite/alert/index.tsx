import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "tw-relative tw-w-full tw-rounded-lg tw-border tw-px-4 tw-py-3 tw-text-sm [&>svg+div]:tw-translate-y-[-3px] [&>svg]:tw-absolute [&>svg]:tw-left-4 [&>svg]:tw-top-4 [&>svg]:tw-text-foreground [&>svg~*]:tw-pl-7",
  {
    variants: {
      variant: {
        default: "tw-bg-background tw-text-foreground",
        destructive:
          "tw-border-destructive/50 tw-text-destructive dark:tw-border-destructive [&>svg]:tw-text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
interface AlertProps extends App.ComponentProps, VariantProps<typeof alertVariants> {}

const Alert = ({ className, variant, attributes, ...props }: AlertProps) => (
  <div
    role="alert"
    className={cn(alertVariants({ variant }), attributes.className, className)}
    {...props}
  />
)
Alert.displayName = "Alert"

const AlertTitle = ({ className, attributes, ...props }: App.ComponentProps) => (
  <div
    className={cn("tw-mb-1 tw-font-medium tw-leading-none tw-tracking-tight", attributes.className, className)}
    {...props}
  />
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = ({ className, attributes, ...props }: App.ComponentProps) => (
  <div
    className={cn("tw-text-sm [&_p]:tw-leading-relaxed", attributes.className, className)}
    {...props}
  />
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
