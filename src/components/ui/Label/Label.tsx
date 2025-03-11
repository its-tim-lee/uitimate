import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { tv } from "tailwind-variants"

const labelVariants = tv({
  base: [
    "text-sm leading-none font-medium select-none",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
  ]
})
type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root>
const Label = ({
  className,
  ...props
}: LabelProps) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={labelVariants({ className })}
      {...props}
    />
  )
}

export { Label, type LabelProps, labelVariants }
