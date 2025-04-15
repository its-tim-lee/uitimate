import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "#/components/ui/DropdownMenu/DropdownMenu";
import { useState } from "react";
import { Cta } from "#/components/ui/Cta/Cta";
import { Icon } from "#/components/ui/Icon/Icon";
import { Checkbox } from "#/components/ui/Checkbox/Checkbox";
import { Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle } from "#/components/ui/Dialog/Dialog";
import { Input } from "#/components/ui/Input/Input";

export default () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild  >
          <Cta shapes={['icon']} variant='outline' size='sm' >
            <Icon icon='icon-park-solid:down-one' />
          </Cta>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="tw:w-56">

          <DropdownMenuLabel className='tw:flex tw:justify-between'>
            Lists
            <Icon icon='lucide:x' onClick={() => setIsDropdownOpen(false)}></Icon>
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

          <DropdownMenuItem className='tw:flex tw:items-center tw:leading-none' onClick={() => setIsDialogOpen(true)}>
            <Icon icon='lucide:plus'></Icon>
            Create list
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>


      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogHeading size="h4">
          <DialogTitle>Create list</DialogTitle>
          <DialogSubtitle>Create a list to organize your starrted repositories.</DialogSubtitle>
        </DialogHeading>
        <Input placeholder="Name this list" />
        <DialogAction>
          <Cta variant='primary'>Create</Cta>
        </DialogAction>
      </Dialog>
    </>
  )
}