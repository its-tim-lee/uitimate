import { Root, Thumb } from "@radix-ui/react-switch"
import { type ComponentProps } from "react"
import { cn } from "@/lib/utils"

const Switch = (
  { className, ...props }: ComponentProps<typeof Root>,
) => (
  <Root
    className={cn(
      "tw-peer tw-inline-flex tw-h-5 tw-w-9 tw-shrink-0 tw-cursor-pointer tw-items-center tw-rounded-full tw-border-2 tw-border-transparent tw-shadow-sm tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-ring focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-background disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=unchecked]:tw-bg-input",
      className
    )}
    {...props}
  >
    <Thumb
      className={cn(
        "tw-pointer-events-none tw-block tw-h-4 tw-w-4 tw-rounded-full tw-bg-background tw-shadow-lg tw-ring-0 tw-transition-transform data-[state=checked]:tw-translate-x-4 data-[state=unchecked]:tw-translate-x-0"
      )}
    />
  </Root>
)

Switch.displayName = "Switch"

export { Switch }
