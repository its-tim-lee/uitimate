import IconV2 from "../ui/Icon/IconV2";
import { Button } from "../ui/Button/Button";
import { cn } from "@/lib/utils";
export default () => (
  <Button
    variant='outline'
    className={cn(
      'tw:rounded-2xl tw:bg-muted/50 tw:font-normal tw:text-muted-foreground tw:shadow-none',
      'tw:flex tw:justify-start'
    )}
  >
    <IconV2 icon='lucide:search' />
    <kbd className={cn(
      'tw:pointer-events-none tw:select-none tw:gap-1 tw:rounded tw:border tw:bg-muted tw:px-1.5 tw:font-mono tw:text-[12px] tw:font-medium',
      'tw:sm:flex tw:items-center'
    )}>
      <span className="tw:text-[16px]">⌘</span>K
    </kbd>
  </Button>
)