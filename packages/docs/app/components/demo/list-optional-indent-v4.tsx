import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { List, ListItem } from "#/components/ui/List/List.tsx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "#/components/ui/DropdownMenu/DropdownMenu.tsx";

export default () => {
  return (
    <List>
      <ListItem className='tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>Sponsers</ListItem>
      <br />
      <ListItem className='tw:text-sm tw:text-muted-foreground tw:p-2 tw:flex tw:items-center tw:justify-between tw:gap-2'>
        Building Your Application
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Icon icon='lucide:ellipsis-vertical' className='tw:cursor-pointer' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="tw:p-3">
            <DropdownMenuItem>option 1</DropdownMenuItem>
            <DropdownMenuItem>option 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ListItem>
      <ListItem className='tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>
        Routing
      </ListItem>
      <ListItem className='tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>
        Data Fetching
      </ListItem>
    </List>
  )
}