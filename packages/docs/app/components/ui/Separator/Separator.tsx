import { type ComponentProps } from "react"
import { Root } from "@radix-ui/react-separator"
import { tv, type VariantProps } from "tailwind-variants"

const variants = tv({
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

type SeparatorProps = ComponentProps<typeof Root> & VariantProps<typeof variants>

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => {
  return (
    <Root
      decorative={decorative}
      orientation={orientation}
      className={variants({ orientation, className })}
      {...props}
    />
  )
}

Separator.displayName = 'Separator'

export {
  Separator,
  type SeparatorProps
}