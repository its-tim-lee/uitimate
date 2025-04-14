import { Button } from "../improper/Button/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu/DropdownMenu"
import { Icon } from "../ui/Icon/Icon"

export default () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" mode="icon" size='lg' className='tw:rounded-full tw:border-dashed tw:border-2 tw:border-gray-300 tw:scale-200'>
          <Icon icon="lucide:plus" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="tw:p-3">
        <DropdownMenuItem>Upload Photo</DropdownMenuItem>
        <DropdownMenuItem>Use DALL·E</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}