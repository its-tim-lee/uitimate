import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";

export default () => {
  return (
    <Button variant="ghost" size="sm" mode="icon" asChild>
      <a
        href="https://github.com/keypointer/keypointer-ui"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon='lucide:github' /><span className="tw:sr-only">GitHub</span>
      </a>
    </Button>
  )
}
