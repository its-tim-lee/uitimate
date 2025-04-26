import { type ComponentProps } from "react"
import { Root, Thumb } from "@uitimate/lib-switch"
import { tv } from "tailwind-variants"
import { casing } from "#/helpers/utils.ts"

const switchVariants = tv({
  slots: {
    root: [
      "tw:ring-ring/10 tw:dark:ring-ring/20 tw:dark:outline-ring/40 tw:outline-ring/50 tw:inline-flex tw:h-5 tw:w-9 tw:shrink-0 tw:items-center tw:rounded-full tw:border-2 tw:border-transparent tw:shadow-xs tw:transition-[color,box-shadow]",
      "tw:focus-visible:ring-4 tw:focus-visible:outline-hidden tw:focus-visible:outline-1",
      "tw:disabled:cursor-not-allowed tw:disabled:opacity-50",
      "tw:aria-invalid:focus-visible:ring-0",
      "tw:data-[state=checked]:bg-primary tw:data-[state=unchecked]:bg-input",
    ],
    thumb: [
      "tw:bg-background tw:pointer-events-none tw:block tw:size-4 tw:rounded-full tw:ring-0 tw:shadow-lg tw:transition-transform",
      "tw:data-[state=checked]:translate-x-4 tw:data-[state=unchecked]:translate-x-0",
    ]
  }
})
const { root, thumb } = switchVariants()

/**
 * #20250318
 * #1, #2
 * This is literally for supporting the integration with React-hook-form (RHF).
 * To allow RHF to control this very form element, the component must provide the standard props:
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
type SwitchProps = ComponentProps<typeof Root> & { onChange?: (checked: boolean) => void }
const Switch = ({
  className,
  onChange,
  onCheckedChange,
  ...props
}: SwitchProps) => {
  return (
    <Root
      data-tag={casing.kebabCase(Switch.displayName)}
      className={root({ className })}
      {...(props.value !== undefined && { checked: !!props.value })} // #2
      onCheckedChange={(v) => {
        onChange?.(v as boolean); // #1
        onCheckedChange?.(v as boolean);
      }}
      {...props}
    >
      <Thumb className={thumb()} />
    </Root>
  )
}

Switch.displayName = 'Switch'

namespace Type {
  export type Switch = SwitchProps
}

export * from "@uitimate/lib-switch"
export {
  type Type,
  switchVariants,
  Switch,
}