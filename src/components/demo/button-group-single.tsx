import { useState } from "react";
import { Button } from "../ui/Button/Button";
import IconV2 from "../ui/Icon/IconV2";

export default () => {
  const [align, setAlign] = useState<string>('');
  return (
    <div className='tw:flex'>
      <Button mode='icon' className='tw:rounded-none' pressed={align === 'justify'} onPressedChange={e => setAlign(e ? 'justify' : '')}>
        <IconV2 icon='lucide:align-justify' />
      </Button>
      <Button mode='icon' className='tw:rounded-none' pressed={align === 'left'} onPressedChange={e => setAlign(e ? 'left' : '')}>
        <IconV2 icon='lucide:align-left' />
      </Button>
      <Button mode='icon' className='tw:rounded-none' pressed={align === 'right'} onPressedChange={e => setAlign(e ? 'right' : '')}>
        <IconV2 icon='lucide:align-right' />
      </Button>
    </div>
  )
}