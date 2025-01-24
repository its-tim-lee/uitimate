import { Root, Item, Indicator } from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"
import { type ComponentProps } from "react"
import { Circle } from "lucide-react"
import { Label } from "@/components/primitive/label/index.tsx"
import { SHA256 } from "crypto-js"

const RadioGroup = ({ className, label, ...props }: ComponentProps<typeof Root> & { label?: string }) => {
  const $radioGroup = (
    <Root
      className={cn("tw-grid tw-gap-2", className)}
      {...props}
    />
  )

  return !label ? $radioGroup : (
    <div className="tw-flex tw-flex-col tw-space-y-3">
      <Label className="tw-text-sm tw-font-medium tw-leading-none">
        {label}
      </Label>
      {$radioGroup}
    </div>
  )
}

const RadioGroupItem = (
  { className, title, outline, ...props }: RadioGroupItemProps) => {
  const id = title && `id${SHA256(title)}`

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

  return !title ? $radioItem : (
    <div className="tw-items-top tw-flex tw-space-x-2">
      {$radioItem}
      {title && (
        <div className="tw-grid tw-gap-1.5 tw-leading-none">
          <Label htmlFor={id}
            className="tw-text-sm tw-font-medium tw-leading-none peer-disabled:tw-cursor-not-allowed peer-disabled:tw-opacity-70"
          >
            {title}
          </Label>
          {outline && <p className="tw-text-sm tw-text-muted-foreground">{outline}</p>}
        </div>
      )}
    </div>
  )
}

export interface RadioGroupItemProps extends ComponentProps<typeof Item> {
  title?: string
  outline?: string
}

RadioGroup.displayName = "RadioGroup"
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
