import IconV2 from "../ui/Icon/IconV2";
import { Button } from "../ui/Button/Button";
import githubSVG from "@iconify/icons-lucide/github";
const { body: github } = githubSVG as any;
export default () => (
  /**
         * The end result:
         *  the classes generated from `<Button>` will be applied to the child,
         *  in this case, the `<a>` tag, then the child will be unwrapped (ie., `<Button>` is gone)
         *
         * So it's basically applying the styling mechanism from `<Button>` to the child
         */
  <Button asChild variant='outline' mode="icon" size='sm' className='tw:shadow-none' >
    <a href="#" target="_blank" rel="noreferrer">
      <IconV2 icon={github} ssr />
    </a>
  </Button>
)