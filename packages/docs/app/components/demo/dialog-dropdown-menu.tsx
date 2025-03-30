import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/DropdownMenu/DropdownMenu";
import { useState } from "react";
import { Button } from "../ui/Button/Button";
import { Icon } from "../ui/Icon/Icon";
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
            <Icon icon='icon-park-solid:down-one' ></Icon>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="tw:w-56">

          <DropdownMenuLabel className='tw:flex tw:justify-between'>
            Lists
            <Icon icon='lucide:x'></Icon>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem >
              <Checkbox>AI</Checkbox>
            </DropdownMenuItem>
            <DropdownMenuItem >
              <Checkbox>UI</Checkbox>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem className='tw:flex tw:items-center tw:leading-none' onClick={() => setIsOpen(true)}>
            <Icon icon='lucide:plus'></Icon>
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