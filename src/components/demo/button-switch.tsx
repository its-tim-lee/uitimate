import IconV2 from "../ui/Icon/IconV2";
import { Button } from "../ui/Button/Button";
import { useState } from "react";

export default () => {
  const [themeIcon, setThemeIcon] = useState<'lucide:sun' | 'lucide:moon'>('lucide:sun');
  return (
    <Button
      variant='outline' icon size='lg'
      onClick={() => setThemeIcon(themeIcon === 'lucide:sun' ? 'lucide:moon' : 'lucide:sun')}
    >
      <IconV2 icon={themeIcon} />
      <span className="tw:sr-only">Switch between dark and light mode</span>
    </Button>
  )
}