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
        "tw:peer tw:inline-flex tw:h-5 tw:w-9 tw:shrink-0 tw:cursor-pointer tw:items-center tw:rounded-full tw:border-2 tw:border-transparent tw:shadow-sm tw:transition-colors tw:focus-visible:outline-hidden tw:focus-visible:ring-2 tw:focus-visible:ring-ring tw:focus-visible:ring-offset-2 tw:focus-visible:ring-offset-background tw:disabled:cursor-not-allowed tw:disabled:opacity-50 tw:data-[state=checked]:bg-primary tw:data-[state=unchecked]:bg-input",
        className
      )}
      {...props}
    >
      <Thumb
        className={cn(
          "tw:pointer-events-none tw:block tw:h-4 tw:w-4 tw:rounded-full tw:bg-background tw:shadow-lg tw:ring-0 tw:transition-transform tw:data-[state=checked]:translate-x-4 tw:data-[state=unchecked]:translate-x-0"
        )}
      />
    </Root>
  )

  return !label ? $switch : (
    <div className="tw-items-top tw:flex tw:space-x-2">
      {$switch}
      <div className="tw:grid tw:gap-1.5 tw:leading-none">
        <Label htmlFor={id}
          className="tw:text-sm tw:font-medium tw:leading-none tw:peer-disabled:cursor-not-allowed tw:peer-disabled:opacity-70"
        >{label}</Label>
        {description && <p className="tw:text-sm tw:text-muted-foreground">{description}</p>}
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
