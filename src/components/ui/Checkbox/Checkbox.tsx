import { type ComponentProps } from "react"
import { Root, Indicator, type CheckedState } from "@radix-ui/react-checkbox"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { tv } from "tailwind-variants"

const variants = tv({
  slots: {
    root: [
      "tw:peer tw:h-4 tw:w-4 tw:shrink-0",
      "tw:rounded-sm tw:border tw:border-primary tw:shadow",

      "tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring",
      "tw:disabled:cursor-not-allowed tw:disabled:opacity-50",

      "tw:data-[state=checked]:bg-primary tw:data-[state=checked]:text-primary-foreground"
    ],
    indicator: [
      "tw:flex tw:items-center tw:justify-center tw:text-current"
    ]
  }
})
const { root, indicator } = variants()

type CheckboxProps = ComponentProps<typeof Root>
const Checkbox = ({
  className,
  ...props
}: CheckboxProps) => {
  return (
    <Root
      className={root({ className })}
      {...props}
    >
      <Indicator className={indicator()}>
        <Icon icon="lucide:check" className="tw:size-4" />
      </Indicator>
    </Root>
  )
}

Checkbox.displayName = 'Checkbox'

export {
  Checkbox,
  variants as checkboxVariants,
  type CheckboxProps,
  type CheckedState
}
