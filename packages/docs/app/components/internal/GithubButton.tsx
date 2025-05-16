import { Cta } from "#/components/ui/Cta/Cta";
import { Icon } from "#/components/ui/Icon/Icon";
import data from "#/data/site";
import type { Type } from "#/components/ui/Cta/Cta";

export default ({ ...props }: Type.Cta) => {
  return (
    <Cta variant="ghost" size="sm" asChild {...props}>
      <a
        href={data.github}
        target="_blank"
        className="tw:no-underline"
      >
        Star Us
        <Icon icon='lucide:github' /><span className="tw:sr-only">GitHub</span>
      </a>
    </Cta>
  )
}
