import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "tw:inline-flex tw:items-center tw:rounded-md tw:border tw:px-2.5 tw:py-0.5 tw:text-xs tw:font-semibold tw:transition-colors tw:focus:outline-hidden tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "tw:border-transparent tw:bg-primary tw:text-primary-foreground tw:shadow tw:hover:bg-primary/80",
        secondary:
          "tw:border-transparent tw:bg-secondary tw:text-secondary-foreground tw:hover:bg-secondary/80",
        destructive:
          "tw:border-transparent tw:bg-destructive tw:text-destructive-foreground tw:shadow tw:hover:bg-destructive/80",
        outline: "tw:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends App.ComponentProps,
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
)
Badge.displayName = "Badge"
export { Badge, badgeVariants }
