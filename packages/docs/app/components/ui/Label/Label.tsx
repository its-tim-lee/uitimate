import type { ComponentProps } from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { tv } from "tailwind-variants"
import { kebabCase } from "lodash-es"

const labelVariants = tv({
  base: [
    "text-sm leading-none font-medium select-none",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
  ]
})

type LabelProps = Type.Label
const Label = ({
  className,
  ...props
}: LabelProps) => {
  return (
    <LabelPrimitive.Root
      data-label
      data-tag={kebabCase(Label.displayName)}
      className={labelVariants({ className })}
      {...props}
    />
  )
}

Label.displayName = "Label"

namespace Type {
  export type Label = ComponentProps<typeof LabelPrimitive.Root>
}

export { Label, labelVariants, type Type }
