import { Root, Item, Indicator } from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"
import { type ComponentProps } from "react"
import { Circle } from "lucide-react"
import { Label } from "@/components/primitive/label/index.tsx"
import { SHA256 } from "crypto-js"

const RadioGroup = (
  { className, ...props }: ComponentProps<typeof Root>) => {
  return (
    <Root
      className={cn("tw-grid tw-gap-2", className)}
      {...props}
    />
  )
}

const RadioGroupItem = (
  { className, label, description, ...props }: RadioGroupItemProps) => {
  const id = label && `id${SHA256(label)}`

  const $radioItem = (
    <Item
      id={id}
      className={cn(
        "tw-aspect-square tw-h-4 tw-w-4 tw-rounded-full tw-border tw-border-primary tw-text-primary tw-shadow focus:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
        className
      )}
      {...props}
    >
      <Indicator className="tw-flex tw-items-center tw-justify-center">
        <Circle className="tw-h-3.5 tw-w-3.5 tw-fill-primary" />
      </Indicator>
    </Item>
  )

  return !label ? $radioItem : (
    <div className="tw-items-top tw-flex tw-space-x-2">
      {$radioItem}
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
  )
}

export interface RadioGroupItemProps extends ComponentProps<typeof Item> {
  label?: string
  description?: string
}

RadioGroup.displayName = "RadioGroup"
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
