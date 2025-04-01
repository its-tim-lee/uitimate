import { type ComponentProps } from "react"
import { Root, Indicator, type CheckedState } from "@radix-ui/react-checkbox"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
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

type CheckboxProps = ComponentProps<typeof Root> & {
  onChange?: (checked: boolean) => void
}
/**
 * #20250318
 * #1, #2
 * This is literally for supporting the integration with React-hook-form (RHF).
 * To allow RHF to control the Checkbox, the component must provide the standard props:
 * - value
 * - onChange
 * - onBlur
 *
 * Since Radix uses the non-standard ones, here we need to manually connect them as shown in #1 and #2.
 * Note that, #2 is special in this integration context, cuz both Radix and RHF define `value` prop,
 * the former needs it a string, but RHF will feed it a boolean.
 * This shouldn't be a problem, cuz RHF when using RHF, the needs to use the Radix `value` should be very rare,
 * and the real value of the checkbox will be fully controlled by RHF.
 *
 */
const Checkbox = ({
  className,
  onChange,
  onCheckedChange,
  ...props
}: CheckboxProps) => {
  return (
    <Root
      className={root({ className })}
      checked={!!props.value} // #2
      onCheckedChange={(v) => {
        onChange?.(v as boolean); // #1
        onCheckedChange?.(v as boolean);
      }}
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
