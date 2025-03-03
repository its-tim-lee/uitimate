import { type ComponentProps } from "react"
import { Root, Indicator, type CheckedState } from "@radix-ui/react-checkbox"
import { cn } from "@/lib/utils"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { SHA256 } from "crypto-js"
import { Label } from "~/src/components/ui/Label/Label.tsx"

const Checkbox = ({ className, title, subtitle, outline, ...props }: CheckboxProps) => {
  const id = title && `id${SHA256(title)}`

  const $checkbox = (
    <Root id={id} {...props}
      className={cn(
        "tw:peer tw:h-4 tw:w-4 tw:shrink-0 tw:rounded-sm tw:border tw:border-primary tw:shadow tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:disabled:cursor-not-allowed tw:disabled:opacity-50 tw:data-[state=checked]:bg-primary tw:data-[state=checked]:text-primary-foreground",
        className
      )}
    >
      <Indicator
        className={cn("tw:flex tw:items-center tw:justify-center tw:text-current")}
      >
        <Icon icon="lucide:check" className="tw:h-4 tw:w-4" />
      </Indicator>
    </Root>
  )

  return !title ? $checkbox : (
    <div className="tw-items-top tw:flex tw:space-x-2">
      {$checkbox}
      {title && (
        <div className="tw:grid tw:gap-1.5 tw:leading-none">
          <Label htmlFor={id}
            className="tw:text-sm tw:font-medium tw:leading-none tw:peer-disabled:cursor-not-allowed tw:peer-disabled:opacity-70"
          >
            {title}
          </Label>
          {outline && <div className="tw:text-sm tw:text-muted-foreground">{outline}</div>}
          {subtitle && <div className="tw:text-sm tw:text-muted-foreground">{subtitle}</div>}
        </div>
      )}
    </div>
  )
}
type CheckboxTitleProps = ComponentProps<typeof Label>
const CheckboxTitle = ({ id, className, children, ...props }: CheckboxTitleProps) => {
  return <Label htmlFor={id}
    data-title
    className={cn("tw:text-sm tw:font-medium tw:leading-none tw:peer-disabled:cursor-not-allowed tw:peer-disabled:opacity-70", className)}
    {...props}
  >
    {children}
  </Label>
}

Checkbox.displayName = Root.displayName
export type { CheckedState }
export { Checkbox }

export interface CheckboxProps extends ComponentProps<typeof Root> {
  title?: string;
  subtitle?: string;
  outline?: string;
}