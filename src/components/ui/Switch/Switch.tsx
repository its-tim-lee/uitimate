import { type ComponentProps } from "react"
import { Root, Thumb } from "@radix-ui/react-switch"
import { tv } from "tailwind-variants"

const variants = tv({
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
const { root, thumb } = variants()

type SwitchProps = ComponentProps<typeof Root> & {
  onChange?: (checked: boolean) => void
}
/**
 * #1, #2 see #20250318
 */
const Switch = ({
  className,
  onChange,
  onCheckedChange,
  ...props
}: SwitchProps) => {
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
      <Thumb className={thumb()} />
    </Root>
  )
}

Switch.displayName = 'Switch'

export {
  Switch,
  type SwitchProps
}
