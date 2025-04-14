import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "../ui/DropdownMenu/DropdownMenu";
import { Button } from "../improper/Button/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar/Avatar";

// TBD: ideally the avatar code can be re-used from avatar-demo.tsx,
// but the code is for demo, so better be the code block can have other tabs to show other code
export default () => <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" mode="icon" className="tw:rounded-full">
      <Avatar>
        <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
        <AvatarFallback>TL</AvatarFallback>
      </Avatar>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="tw:w-[200px]">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
        <DropdownMenuPortal>
          <DropdownMenuSubContent>
            <DropdownMenuItem disabled>Email</DropdownMenuItem>
            <DropdownMenuItem>More...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>
      <DropdownMenuItem>
        New Team
        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>