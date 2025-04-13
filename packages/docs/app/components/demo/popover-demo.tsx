import { Cta } from "#/components/ui/Cta/Cta"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/components/ui/Popover/Popover"
import { Icon } from "#/components/ui/Icon/Icon"
import { Separator } from "#/components/ui/Separator/Separator"
import { Checkbox } from "#/components/ui/Checkbox/Checkbox"

export default () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Cta className='tw:shadow-none' variant="outline" size='sm'>Notify me: <b>on Github, Email</b></Cta>
      </PopoverTrigger>
      <PopoverContent className='tw:w-85'>
        <header className="tw:flex tw:items-center tw:justify-between">
          <h6 className="tw:font-black">Select notification channels</h6>
          <Icon icon='lucide:x' className="tw:cursor-pointer tw:text-muted-foreground" />
        </header>
        <Separator className="tw:my-4" />
        <div className="tw:flex tw:flex-col tw:gap-2">
          <div className="tw:flex tw:items-center tw:gap-2">
            <Checkbox /> Github
          </div>
          <div className="tw:flex tw:items-center tw:gap-2">
            <Checkbox /> Email
          </div>
        </div>
        <Separator className="tw:my-4" />
        <div className="tw:flex tw:justify-end tw:gap-2">
          <Cta variant="outline" size='sm' className='tw:shadow-none'>Cancel</Cta>
          <Cta variant="primary" size='sm' className='tw:shadow-none'>Save</Cta>
        </div>
      </PopoverContent>
    </Popover>
  )
}
