import { type ComponentProps } from "react"
import { Root } from "@radix-ui/react-separator"
import { tv, type VariantProps } from "tailwind-variants"
import { kebabCase } from "lodash-es"

const separatorVariants = tv({
  base: [
    "tw:shrink-0 tw:bg-border"
  ],
  variants: {
    orientation: {
      horizontal: "tw:h-[1px] tw:w-full",
      vertical: "tw:h-full tw:w-[1px]"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
})

type SeparatorProps = ComponentProps<typeof Root> & VariantProps<typeof separatorVariants>
const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => {
  return (
    <Root
      data-tag={kebabCase(Separator.displayName)}
      decorative={decorative}
      orientation={orientation}
      className={separatorVariants({ orientation, className })}
      {...props}
    />
  )
}

Separator.displayName = "Separator"

namespace Type {
  export type Separator = SeparatorProps
}

export {
  Separator,
  type Type
}