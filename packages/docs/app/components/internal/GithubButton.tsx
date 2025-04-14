import { Cta } from "#/components/ui/Cta/Cta";
import { Icon } from "#/components/ui/Icon/Icon";

export default () => {
  return (
    <Cta variant="ghost" size="sm" shapes={['icon']} asChild>
      <a
        href="https://github.com/keypointer/keypointer-ui"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon='lucide:github' /><span className="tw:sr-only">GitHub</span>
      </a>
    </Cta>
  )
}
