import { type ComponentProps } from "react"
import { Root, Item, Indicator } from "@radix-ui/react-radio-group"
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"

const radioGroupVariants = tv({
  slots: {
    root: "tw:grid tw:gap-3",
    item: [
      "tw:aspect-square tw:size-4 tw:shrink-0 tw:rounded-full",
      "tw:border tw:border-input tw:shadow-xs",
      "tw:transition-[color,box-shadow]",

      "tw:text-primary tw:ring-ring/10 tw:dark:ring-ring/20",
      "tw:dark:outline-ring/40 tw:outline-ring/50",

      "tw:focus-visible:ring-4 tw:focus-visible:outline-1",
      "tw:disabled:cursor-not-allowed tw:disabled:opacity-50",
      "tw:aria-invalid:focus-visible:ring-0"
    ],
    indicator: "tw:relative tw:flex tw:items-center tw:justify-center"
  }
})

const { root, item, indicator } = radioGroupVariants()

type RadioGroupProps = ComponentProps<typeof Root> & {
  onChange?: (value: string) => void
}
const RadioGroup = ({
  className,
  onChange,
  onValueChange,
  ...props
}: RadioGroupProps) => (
  <Root
    data-slot="radio-group"
    className={root({ className })}
    onValueChange={(v) => { // see #20250318
      onChange?.(v as any);
      onValueChange?.(v);
    }}
    {...props}
  />
)

type RadioGroupItemProps = ComponentProps<typeof Item>
const RadioGroupItem = ({
  className,
  ...props
}: RadioGroupItemProps) => (
  <Item
    data-slot="radio-group-item"
    className={item({ className })}
    {...props}
  >
    <Indicator
      data-slot="radio-group-indicator"
      className={indicator()}
    >
      <Icon
        icon="lucide:circle"
        className="tw:fill-primary tw:absolute tw:top-1/2 tw:left-1/2 tw:size-2 tw:-translate-x-1/2 tw:-translate-y-1/2"
      />
    </Indicator>
  </Item>
)

RadioGroup.displayName = "RadioGroup"
RadioGroupItem.displayName = "RadioGroupItem"

export {
  radioGroupVariants,
  RadioGroup,
  RadioGroupItem,
  type RadioGroupProps,
  type RadioGroupItemProps
}
