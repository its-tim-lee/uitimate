import { useState } from "react";
import { Cta } from "#/components/ui/Cta/Cta";
import { Icon } from "#/components/ui/Icon/Icon.tsx";

export default () => {
  const [align, setAlign] = useState<string>('');
  return (
    <div className='tw:flex'>
      <Cta shapes={['icon']} className='tw:rounded-none' pressed={align === 'justify'} onPressedChange={e => setAlign(e ? 'justify' : '')}>
        <Icon icon='lucide:align-justify' />
      </Cta>
      <Cta shapes={['icon']} className='tw:rounded-none' pressed={align === 'left'} onPressedChange={e => setAlign(e ? 'left' : '')}>
        <Icon icon='lucide:align-left' />
      </Cta>
      <Cta shapes={['icon']} className='tw:rounded-none' pressed={align === 'right'} onPressedChange={e => setAlign(e ? 'right' : '')}>
        <Icon icon='lucide:align-right' />
      </Cta>
    </div>
  )
}