import * as LabelPrimitive from "@radix-ui/react-label"
import { tv, type VariantProps } from "tailwind-variants"

import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

const labelVariants = tv({
  base: "tw:text-sm tw:font-medium tw:leading-none tw:peer-disabled:cursor-not-allowed tw:peer-disabled:opacity-70"
})

const Label = ({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) => (
  <LabelPrimitive.Root
    className={cn(labelVariants(), className)}
    data-label {...props}
  />
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
