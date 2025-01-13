import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

const labelVariants = cva(
  "tw-text-sm tw-font-medium tw-leading-none peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"
)

const Label = ({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) => (
  <LabelPrimitive.Root
    className={cn(labelVariants(), className)}
    {...props}
  />
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
