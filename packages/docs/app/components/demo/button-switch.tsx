import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { useState, type ComponentProps } from "react";
import { Cta } from "#/components/ui/Cta/Cta.tsx";

export default ({ ...props }: ComponentProps<typeof Cta>) => {
  const [themeIcon, setThemeIcon] = useState<'lucide:sun' | 'lucide:moon'>('lucide:sun');
  return (
    <Cta
      variant='outline' shapes={['icon']} size='lg'
      onClick={() => setThemeIcon(themeIcon === 'lucide:sun' ? 'lucide:moon' : 'lucide:sun')}
      {...props}
    >
      <Icon icon={themeIcon} />
      <span className="tw:sr-only">Switch between dark and light mode</span>
    </Cta>
  )
}