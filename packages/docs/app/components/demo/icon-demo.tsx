import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { Cta } from "#/components/ui/Cta/Cta.tsx";
export default () => (
  <Cta
    variant='outline'
    className='tw:rounded-2xl tw:bg-muted/50 tw:font-normal tw:text-muted-foreground tw:shadow-none tw:flex tw:justify-start'
  >
    <Icon icon='lucide:search' />
    <kbd className='tw:pointer-events-none tw:select-none tw:gap-1 tw:rounded tw:border tw:bg-muted tw:px-1.5 tw:font-mono tw:text-[12px] tw:font-medium tw:sm:flex tw:items-center'>
      <span className="tw:text-[16px]">⌘</span>K
    </kbd>
  </Cta>
)