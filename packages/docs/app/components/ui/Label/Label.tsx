import type { ComponentProps } from "react"
import * as LabelPrimitive from "@uitimate/lib-label"
import { tv } from "tailwind-variants"
import { casing } from "#/helpers/utils.ts"

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
      data-tag={casing.kebabCase(Label.displayName)}
      className={labelVariants({ className })}
      {...props}
    />
  )
}

Label.displayName = "Label"

namespace Type {
  export type Label = ComponentProps<typeof LabelPrimitive.Root>
}

export * from "@uitimate/lib-label"
export { Label, labelVariants, type Type }
