import { type ComponentProps } from "react"
import { Flat } from "#/components/preset/flat"
import { Icon } from "#/components/ui/Icon/Icon"
import { cn } from "#/helpers/utils"

export default ({ children, className }: ComponentProps<'p'>) => {
  return (
    <Flat size="sm" className={cn("tw:flex tw:items-start tw:gap-2 tw:border-primary not-prose", className)}>
      <Icon icon='lucide:info' className='tw:mt-1 tw:size-5' />
      <div>{children}</div>
    </Flat >
  )
}