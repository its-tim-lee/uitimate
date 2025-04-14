import { useState } from "react";
import { Button } from "~/app/components/improper/Button/Button";
import { Icon } from "#/components/ui/Icon/Icon.tsx";

export default () => {
  const [align, setAlign] = useState<string>('');
  return (
    <div className='tw:flex'>
      <Button mode='icon' className='tw:rounded-none' pressed={align === 'justify'} onPressedChange={e => setAlign(e ? 'justify' : '')}>
        <Icon icon='lucide:align-justify' />
      </Button>
      <Button mode='icon' className='tw:rounded-none' pressed={align === 'left'} onPressedChange={e => setAlign(e ? 'left' : '')}>
        <Icon icon='lucide:align-left' />
      </Button>
      <Button mode='icon' className='tw:rounded-none' pressed={align === 'right'} onPressedChange={e => setAlign(e ? 'right' : '')}>
        <Icon icon='lucide:align-right' />
      </Button>
    </div>
  )
}