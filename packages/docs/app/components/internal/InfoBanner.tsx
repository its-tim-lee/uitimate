import { type ComponentProps } from "react"
import { Flat } from "#/components/preset/flat"
import { Icon } from "#/components/ui/Icon/Icon"

export default ({ children }: ComponentProps<'p'>) => {
  return (
    <Flat size="sm" className="tw:flex tw:items-start tw:gap-2 tw:border-primary not-prose">
      <Icon icon='lucide:info' className='tw:mt-1 tw:size-5' />
      <>{children}</>
    </Flat >
  )
}