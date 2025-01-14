import { type ComponentProps } from "react"
import { Root, Indicator } from "@radix-ui/react-checkbox"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/compound/icon/Icon.tsx"
import { SHA256 } from "crypto-js"
import { Label } from "@/components/primitive/label/index.tsx"

const Checkbox = ({ className, label, description, ...props }: CheckboxProps) => {
  const id = label && `id${SHA256(label)}`
  return <div className="tw-items-top tw-flex tw-space-x-2">
    <Root id={id} {...props}
      className={cn(
        "tw-peer tw-h-4 tw-w-4 tw-shrink-0 tw-rounded-sm tw-border tw-border-primary tw-shadow focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-cursor-not-allowed disabled:tw-opacity-50 data-[state=checked]:tw-bg-primary data-[state=checked]:tw-text-primary-foreground",
        className
      )}
    >
      <Indicator
        className={cn("tw-flex tw-items-center tw-justify-center tw-text-current")}
      >
        <Icon icon="lucide:check" className="tw-h-4 tw-w-4" />
      </Indicator>
    </Root>
    {label && (
      <div className="tw-grid tw-gap-1.5 tw-leading-none">
        <Label htmlFor={id}
          className="tw-text-sm tw-font-medium tw-leading-none peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"
        >
          {label}
        </Label>
        {description && <p className="tw-text-sm tw-text-muted-foreground">{description}</p>}
      </div>
    )}
  </div>
}
Checkbox.displayName = Root.displayName

export { Checkbox }

export interface CheckboxProps extends ComponentProps<typeof Root> {
  label?: string
  description?: string
}