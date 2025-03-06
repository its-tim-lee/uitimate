import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/DropdownMenu/DropdownMenu";
import { useState } from "react";
import { Button } from "../ui/Button/Button";
import IconV2 from "../ui/Icon/IconV2";
import { Checkbox } from "../ui/Checkbox/Checkbox";
import { Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle } from "../ui/Dialog/Dialog";
import { Input } from "../ui/Input/Input";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button mode='icon' variant='outline' size='sm'>
            <IconV2 icon='icon-park-solid:down-one' ></IconV2>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="tw:w-56">

          <DropdownMenuLabel className='tw:flex tw:justify-between'>
            Lists
            <IconV2 icon='lucide:x'></IconV2>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem >
              <Checkbox title="AI" className='tw:leading-none' />
            </DropdownMenuItem>
            <DropdownMenuItem >
              <Checkbox title="UI" />
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem className='tw:flex tw:items-center tw:leading-none' onClick={() => setIsOpen(true)}>
            <IconV2 icon='lucide:plus' className='tw:text-lg'></IconV2>
            Create list
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>


      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeading size="h4">
          <DialogTitle>Create list</DialogTitle>
          <DialogSubtitle>Create a list to organize your starrted repositories.</DialogSubtitle>
        </DialogHeading>
        <Input placeholder="Name this list" />
        <DialogAction>
          <Button variant='primary'>Create</Button>
        </DialogAction>
      </Dialog>
    </>
  )
}