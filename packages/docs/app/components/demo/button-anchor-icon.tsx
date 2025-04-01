import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { Cta } from "#/components/ui/Cta/Cta.tsx";
export default () => (
  /**
         * The end result:
         *  the classes generated from `<Button>` will be applied to the child,
         *  in this case, the `<a>` tag, then the child will be unwrapped (ie., `<Button>` is gone)
         *
         * So it's basically applying the styling mechanism from `<Button>` to the child
         */
  <Cta asChild variant='ghost' size='sm' className='tw:shadow-none' >
    <a href="#" target="_blank" rel="noreferrer">
      <Icon icon='lucide:git-branch' />
      21 Branches
    </a>
  </Cta>
)