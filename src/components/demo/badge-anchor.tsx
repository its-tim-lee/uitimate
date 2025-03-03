import IconV2 from "@/components/ui/Icon/IconV2.tsx";
import { Badge } from "@/components/ui/Badge/Badge.tsx";

export default () => {
  return (
    <Badge variant='ghost' size='sm' asChild>
      <a href="#" target="_blank">
        <IconV2 icon='lucide:git-branch' />
        21 Branches
      </a>
    </Badge>
  )
}