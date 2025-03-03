import { Badge } from "@/components/ui/Badge/Badge.tsx";
import { Icon } from "@/components/ui/Icon/Icon.tsx";

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-2">
      <Badge text='Composition API Style'>
        <Icon icon='lucide:github' />
        <a href='https://www.tailwind-variants.org/docs/getting-started'>
          Composition API Style
        </a>
      </Badge>
    </div>
  );
};
