import { Badge } from "@/components/ui/Badge/Badge.tsx";
import IconV2 from "@/components/ui/Icon/IconV2.tsx";
import githubSVG from "@iconify/icons-lucide/github";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar/Avatar";
import timleeImage from '@/assets/timlee.jpg'
const { body: github } = githubSVG as any;



export default () => <>
  <Badge variant="secondary" mode='pill'>
    <Avatar>
      <AvatarImage src='https://bitl.to/44ls' alt="@itistimlee" />
      <AvatarFallback>TL</AvatarFallback>
    </Avatar>
    Tim Lee
  </Badge>
  <br />
  <Badge variant="secondary" mode='pill'>
    <IconV2 ssr icon={github} />
    Github
  </Badge>
  <br />
  Used by {''}
  <Badge variant="secondary" mode='pill'>73.3k</Badge>
</>
