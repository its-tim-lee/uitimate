import { Cta } from "#/components/ui/Cta/Cta";
import { Icon } from "#/components/ui/Icon/Icon";
import data from "#/data/site";
export default () => {
  return (
    <Cta variant="ghost" size="sm" shapes={['icon']} asChild>
      <a
        href={data.github}
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon='lucide:github' /><span className="tw:sr-only">GitHub</span>
      </a>
    </Cta>
  )
}
