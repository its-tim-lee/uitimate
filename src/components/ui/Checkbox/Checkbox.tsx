import { Root, Indicator, type CheckedState } from "@radix-ui/react-checkbox"
import { cn } from '@/lib/utils'
import type { ComponentProps } from "react"
import IconV2 from "@/components/ui/Icon/IconV2"

type CheckboxProps = ComponentProps<typeof Root>
const Checkbox = ({
  className,
  ...props
}: CheckboxProps) => {
  return (
    <Root
      className={cn(
        "tw:peer tw:h-4 tw:w-4 tw:shrink-0 tw:rounded-sm tw:border tw:border-primary tw:shadow",
        "tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring",
        "tw:disabled:cursor-not-allowed tw:disabled:opacity-50",
        "tw:data-[state=checked]:bg-primary tw:data-[state=checked]:text-primary-foreground", className)}
      {...props}
    >
      <Indicator className={cn("tw:flex tw:items-center tw:justify-center tw:text-current", className)}>
        <IconV2 icon="lucide:check" className="tw:size-4" />
      </Indicator>
    </Root>
  )
}

Checkbox.displayName = 'Checkbox'

export { Checkbox, type CheckedState }
