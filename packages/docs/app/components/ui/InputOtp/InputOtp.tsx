import "./index.css"
import { type ComponentProps, useContext } from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import { tv } from "tailwind-variants"
import { kebabCase } from "lodash-es"
const inputOtpVariants = tv({
  slots: {
    root: [
      "tw:disabled:cursor-not-allowed",
    ],
    container: "tw:flex tw:items-center tw:gap-2 tw:has-disabled:opacity-50",
    group: "tw:flex tw:items-center",
    slot: [
      "tw:relative tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center tw:text-sm",
      "tw:border-y tw:border-r tw:shadow-xs tw:transition-all",
      "tw:first:rounded-l-md tw:first:border-l tw:last:rounded-r-md",
      "tw:border-input tw:ring-ring/10 tw:dark:ring-ring/20",
      "tw:dark:outline-ring/40 tw:outline-ring/50",
      "tw:data-[active=true]:z-10 tw:data-[active=true]:ring-4 tw:data-[active=true]:outline-1"
    ],
    caret: "tw:pointer-events-none tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center",
    caretBlink: "tw:animate-[caret-blink_1.25s_ease-out_infinite] tw:bg-foreground tw:h-4 tw:w-px tw:duration-1000"
  }
})

const { root, container, group, slot, caret, caretBlink } = inputOtpVariants()

type InputOTPProps = ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}
const InputOTP = ({
  className,
  containerClassName,
  ...props
}: InputOTPProps) => (
  <OTPInput
    data-tag={kebabCase(InputOTP.displayName)}
    className={root({ className })}
    containerClassName={container({ className: containerClassName })}
    {...props}
  />
)

type InputOTPGroupProps = ComponentProps<"div">
const InputOTPGroup = ({
  className,
  ...props
}: InputOTPGroupProps) => (
  <div
    data-tag={kebabCase(InputOTPGroup.displayName)}
    className={group({ className })}
    {...props}
  />
)

type InputOTPSlotProps = ComponentProps<"div"> & {
  index: number
}
const InputOTPSlot = ({
  index,
  className,
  ...props
}: InputOTPSlotProps) => {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      data-tag={kebabCase(InputOTPSlot.displayName)}
      data-active={isActive}
      className={slot({ className })}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={caret()}>
          <div className={caretBlink()} />
        </div>
      )}
    </div>
  )
}

type InputOTPSeparatorProps = ComponentProps<"div">
const InputOTPSeparator = ({
  ...props
}: InputOTPSeparatorProps) => (
  <div
    data-tag={kebabCase(InputOTPSeparator.displayName)}
    role="separator"
    {...props}
  >
    <Icon icon="lucide:minus" />
  </div>
)

InputOTP.displayName = "InputOTP"
InputOTPGroup.displayName = "InputOTPGroup"
InputOTPSlot.displayName = "InputOTPSlot"
InputOTPSeparator.displayName = "InputOTPSeparator"

namespace Type {
  export type InputOTP = InputOTPProps
  export type InputOTPGroup = InputOTPGroupProps
  export type InputOTPSlot = InputOTPSlotProps
  export type InputOTPSeparator = InputOTPSeparatorProps
}

export {
  inputOtpVariants,
  OTPInputContext,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  type Type
}
