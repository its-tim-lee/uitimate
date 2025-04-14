import { Button } from "~/app/components/improper/Button/Button";
import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/Avatar/Avatar.tsx";

export default () => (
  <Button variant="ghost" mode="icon" className="tw:rounded-full">
    <Avatar>
      <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
      <AvatarFallback>TL</AvatarFallback>
    </Avatar>
  </Button>
)