import { Badge } from "@/components/ui/Badge/Badge.tsx";
import IconV2 from "@/components/ui/Icon/IconV2.tsx";
import githubSVG from "@iconify/icons-lucide/github";
const { body: github } = githubSVG as any;

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-2">
      <section className="tw:flex tw:gap-2 tw:items-start">
        <span>Normal</span>

        <Badge variant='outline'>
          <IconV2 ssr icon={github} />
          <span className="tw:sr-only">View on Github</span>
          View on Github
        </Badge>
      </section>
      <section className="tw:flex tw:gap-2 tw:items-start">
        <span>Icon</span>
        <Badge variant='outline' mode='icon'>
          <IconV2 ssr icon={github} />
          <span className="tw:sr-only">View on Github</span>
        </Badge>
      </section>
      <section className="tw:flex tw:gap-2 tw:items-start">
        <span>Pill</span>
        <Badge variant='outline' mode='pill'>
          <IconV2 ssr icon={github} />
          <span className="tw:sr-only">View on Github</span>
          View on Github
        </Badge>
      </section>
    </div>
  )
};
