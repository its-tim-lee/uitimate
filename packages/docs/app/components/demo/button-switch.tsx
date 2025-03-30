import { Icon } from "../ui/Icon/Icon";
import { useState } from "react";
import { Cta } from "../ui/Cta/Cta";

export default () => {
  const [themeIcon, setThemeIcon] = useState<'lucide:sun' | 'lucide:moon'>('lucide:sun');
  return (
    <Cta
      variant='outline' shapes={['icon']} size='lg'
      onClick={() => setThemeIcon(themeIcon === 'lucide:sun' ? 'lucide:moon' : 'lucide:sun')}
    >
      <Icon icon={themeIcon} />
      <span className="tw:sr-only">Switch between dark and light mode</span>
    </Cta>
  )
}