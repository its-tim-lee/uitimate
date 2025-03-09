import { Icon } from "@/components/ui/Icon/Icon.tsx";
import { Badge } from "@/components/ui/Badge/Badge.tsx";

export default () => {
  return (
    <Badge variant='ghost' size='sm' asChild>
      <a href="#" target="_blank">
        <Icon icon='lucide:git-branch' />
        21 Branches
      </a>
    </Badge>
  )
}