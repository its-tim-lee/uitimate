import { type ComponentProps } from "react"
import { Root } from "@radix-ui/react-separator"
import { tv, type VariantProps } from "tailwind-variants"


const variant = tv({
  base: "tw:shrink-0 tw:bg-border",
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

export type SeparatorProps = ComponentProps<typeof Root> & VariantProps<typeof variant>;

export const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => {
  return (
    <Root
      decorative={decorative}
      orientation={orientation}
      className={variant({ orientation, className })}
      {...props}
    />
  )
}