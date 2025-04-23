import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "#/components/ui/DropdownMenu/DropdownMenu";
import { Cta } from "#/components/ui/Cta/Cta";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/Avatar/Avatar";

// TBD: ideally the avatar code can be re-used from avatar-demo.tsx,
// but the code is for demo, so better be the code block can have other tabs to show other code
export default () => <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Cta variant="ghost" shapes={['icon']} className="tw:rounded-full not-prose">
      <Avatar>
        <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
        <AvatarFallback>TL</AvatarFallback>
      </Avatar>
    </Cta>
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