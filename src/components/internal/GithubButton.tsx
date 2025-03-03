import { Button } from "@/components/ui/Button/Button";
import IconV2 from "@/components/ui/Icon/IconV2";
import githubSVG from "@iconify/icons-lucide/github";
const { default: { body: github } } = githubSVG as any;

export default () => {
  return (
    <Button variant="ghost" size="sm" icon asChild>
      <a
        href="https://github.com/keypointer/keypointer-ui"
        target="_blank"
        rel="noreferrer"
      >
        <IconV2 icon={github} ssr /><span className="tw:sr-only">GitHub</span>
      </a>
    </Button>
  )
}
