import { Button } from "@/components/ui/Button/Button"
import { Input } from "@/components/ui/Input/Input"
import { Label } from "@/components/ui/Label/Label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover/Popover"
import { Flat } from "../preset/flat"
import { Icon } from "../ui/Icon/Icon"
import { Separator } from "../ui/Separator/Separator"
import { Checkbox } from "../ui/Checkbox/Checkbox"

export default () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='tw:shadow-none' variant="outline" size='sm'>Notify me: <b>on Github, Email</b></Button>
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
          <Button variant="outline" size='sm' className='tw:shadow-none'>Cancel</Button>
          <Button variant="primary" size='sm' className='tw:shadow-none'>Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
