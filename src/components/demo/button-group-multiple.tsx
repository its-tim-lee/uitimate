import { useState } from "react";
import { Button } from "../ui/Button/Button";
import IconV2 from "../ui/Icon/IconV2";

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
      <Button
        mode='icon'
        className='tw:rounded-none'
        pressed={selections.justify}
        onPressedChange={() => toggleSelection('justify')}
      >
        <IconV2 icon='lucide:align-justify' />
      </Button>
      <Button
        mode='icon'
        className='tw:rounded-none'
        pressed={selections.left}
        onPressedChange={() => toggleSelection('left')}
      >
        <IconV2 icon='lucide:align-left' />
      </Button>
      <Button
        mode='icon'
        className='tw:rounded-none'
        pressed={selections.right}
        onPressedChange={() => toggleSelection('right')}
      >
        <IconV2 icon='lucide:align-right' />
      </Button>
    </div>
  </div>
}