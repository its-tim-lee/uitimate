import { type ComponentProps, type ElementRef, useContext } from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Icon } from "@/components/ui/Icon/Icon.tsx"

import { cn } from "@/lib/utils"

const InputOTP = (
  { className, containerClassName, ...props }: ComponentProps<typeof OTPInput>
) => (
  <OTPInput
    containerClassName={cn(
      "tw:flex tw:items-center tw:gap-2 tw:has-disabled:opacity-50",
      containerClassName
    )}
    className={cn("tw:disabled:cursor-not-allowed", className)}
    {...props}
  />
)

const InputOTPGroup = ({ className, ...props }: ComponentProps<"div">) => <div className={cn("tw:flex tw:items-center", className)} {...props} />

const InputOTPSlot = (
  { index, className, ...props }: ComponentProps<"div"> & { index: number },
) => {
  const inputOTPContext = useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      className={cn(
        "tw:relative tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center tw:border-y tw:border-r tw:border-input tw:text-sm tw:shadow-sm tw:transition-all tw:first:rounded-l-md tw:first:border-l tw:last:rounded-r-md",
        isActive && "tw:z-10 tw:ring-1 tw:ring-ring",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="tw:pointer-events-none tw:absolute tw:inset-0 tw:flex tw:items-center tw:justify-center">
          <div className="tw:h-4 tw:w-px tw:animate-caret-blink tw:bg-foreground tw:duration-1000" />
        </div>
      )}
    </div>
  )
}

const InputOTPSeparator = (props: ComponentProps<"div">) => <div role="separator" {...props}><Icon icon='lucide:minus' /></div>


InputOTP.displayName = "InputOTP"
InputOTPGroup.displayName = "InputOTPGroup"
InputOTPSlot.displayName = "InputOTPSlot"
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
