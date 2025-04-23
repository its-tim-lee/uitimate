import { Cta } from "#/components/ui/Cta/Cta"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "#/components/ui/DropdownMenu/DropdownMenu"
import { Icon } from "#/components/ui/Icon/Icon"

export default () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Cta variant="ghost" shapes={['icon']} size='lg' className='tw:rounded-full tw:border-dashed tw:border-2 tw:border-gray-300 tw:scale-200'>
          <Icon icon="lucide:plus" />
        </Cta>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="tw:p-3">
        <DropdownMenuItem>Upload Photo</DropdownMenuItem>
        <DropdownMenuItem>Use DALL·E</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}