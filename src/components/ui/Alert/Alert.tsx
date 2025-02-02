import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "tw:relative tw:w-full tw:rounded-lg tw:border tw:px-4 tw:py-3 tw:text-sm tw:[&>svg+div]:translate-y-[-3px] tw:[&>svg]:absolute tw:[&>svg]:left-4 tw:[&>svg]:top-4 tw:[&>svg]:text-foreground tw:[&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "tw:bg-background tw:text-foreground",
        destructive:
          "tw:border-destructive/50 tw:text-destructive tw:dark:border-destructive tw:[&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
interface AlertProps extends App.ComponentProps, VariantProps<typeof alertVariants> { }

const Alert = ({ className, variant, ...props }: AlertProps) => (
  <div
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
)
Alert.displayName = "Alert"

const AlertTitle = ({ className, ...props }: App.ComponentProps) => (
  <div
    className={cn("tw:mb-1 tw:font-medium tw:leading-none tw:tracking-tight", className)}
    {...props}
  />
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = ({ className, ...props }: App.ComponentProps) => (
  <div
    className={cn("tw:text-sm tw:[&_p]:leading-relaxed", className)}
    {...props}
  />
)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
