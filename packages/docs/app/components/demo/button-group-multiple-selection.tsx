import { useState } from 'react';
import { Cta } from '@/components/ui/Cta/Cta.tsx';
import { Icon } from '@/components/ui/Icon/Icon.tsx';

export default () => {
  const [selections, setSelections] = useState<Record<string, boolean>>({
    justify: false,
    left: false,
    right: false
  });

  const toggleSelection = (key: string) => {
    setSelections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return <div className='tw:flex tw:flex-col tw:gap-4'>
    <div className='tw:flex'>
      <Cta
        shapes={['icon']}
        variant='ghost'
        className='tw:rounded-none'
        pressed={selections.justify}
        onPressedChange={() => toggleSelection('justify')}
      >
        <Icon icon='lucide:align-justify' />
      </Cta>
      <Cta
        shapes={['icon']}
        variant='ghost'
        className='tw:rounded-none'
        pressed={selections.left}
        onPressedChange={() => toggleSelection('left')}
      >
        <Icon icon='lucide:align-left' />
      </Cta>
      <Cta
        shapes={['icon']}
        variant='ghost'
        className='tw:rounded-none'
        pressed={selections.right}
        onPressedChange={() => toggleSelection('right')}
      >
        <Icon icon='lucide:align-right' />
      </Cta>
    </div>
  </div>
}
