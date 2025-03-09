import { Badge } from "@/components/ui/Badge/Badge.tsx";
import { Icon } from "@/components/ui/Icon/Icon.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar/Avatar";

export default () => <div className="tw:flex tw:flex-col tw:items-start">
  <Badge variant="secondary" mode='pill'>
    <Avatar>
      <AvatarImage src='https://bitl.to/44ls' alt="@itistimlee" />
      <AvatarFallback>TL</AvatarFallback>
    </Avatar>
    Tim Lee
  </Badge>
  <br />
  <Badge variant="secondary" mode='pill'>
    <Icon icon='lucide:github' />
    Github
  </Badge>
  <br />
  <span>Used by {''} <Badge variant="secondary" mode='pill'>73.3k</Badge></span>


</div>
