import { type ComponentProps } from "react"
import { Icon } from "#/components/ui/Icon/Icon"
import { cn } from "#/helpers/utils"

export default ({ children, className, ...props }: ComponentProps<'p'>) => {
  return (
    <div
      {...props}
      className={cn("tw:bg-background tw:shadow-sm tw:border tw:border-solid tw:border-primary tw:rounded-[8px] tw:p-3 tw:flex tw:items-start tw:gap-2 not-prose", className)}
    >
      <Icon icon='lucide:info' className='tw:mt-1 tw:size-5' />
      <div>{children}</div>
    </div>
  )
}