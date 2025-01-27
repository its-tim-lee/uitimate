import { Root, Thumb } from "@radix-ui/react-switch"
import { type ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { Label } from "~/src/components/ui/Label/Label.tsx"
import { SHA256 } from "crypto-js"

const Switch = (
  { className, label, description, ...props }: SwitchProps,
) => {
  const id = label && `id${SHA256(label)}`

  const $switch = (
    <Root
      id={id}
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

  return !label ? $switch : (
    <div className="tw-items-top tw-flex tw-space-x-2">
      {$switch}
      <div className="tw-grid tw-gap-1.5 tw-leading-none">
        <Label htmlFor={id}
          className="tw-text-sm tw-font-medium tw-leading-none peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"
        >{label}</Label>
        {description && <p className="tw-text-sm tw-text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}

Switch.displayName = "Switch"

export { Switch }

export interface SwitchProps extends ComponentProps<typeof Root> {
  label?: string
  description?: string
}
