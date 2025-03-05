import { Button } from "../ui/Button/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu/DropdownMenu"
import IconV2 from "../ui/Icon/IconV2"

export default () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" mode="icon" size='lg' className='tw:rounded-full tw:border-dashed tw:border-2 tw:border-gray-300 tw:scale-200'>
          <IconV2 icon="lucide:plus" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="tw:p-3">
        <DropdownMenuItem>Upload Photo</DropdownMenuItem>
        <DropdownMenuItem>Use DALL·E</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}