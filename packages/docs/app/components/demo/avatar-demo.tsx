import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar/Avatar.tsx";

export default () => (
  <Avatar>
    <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
    <AvatarFallback>TL</AvatarFallback>
  </Avatar>
)