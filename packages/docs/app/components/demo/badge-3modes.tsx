import { Badge } from "#/components/ui/Badge/Badge.tsx";
import { Icon } from "#/components/ui/Icon/Icon.tsx";

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-4">
      <section className="tw:flex tw:gap-2 tw:items-start">
        <span>Normal</span>

        <Badge variant='outline'>
          <Icon icon='lucide:github' />
          <span className="tw:sr-only">View on Github</span>
          View on Github
        </Badge>
      </section>
      <section className="tw:flex tw:gap-2 tw:items-start">
        <span>Icon</span>
        <Badge variant='outline' mode='icon'>
          <Icon icon='lucide:github' />
          <span className="tw:sr-only">View on Github</span>
        </Badge>
      </section>
      <section className="tw:flex tw:gap-2 tw:items-start">
        <span>Pill</span>
        <Badge variant='outline' mode='pill'>
          <Icon icon='lucide:github' />
          <span className="tw:sr-only">View on Github</span>
          View on Github
        </Badge>
      </section>
    </div>
  )
};
