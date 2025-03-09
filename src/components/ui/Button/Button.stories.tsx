import {
  Button,
} from "./Button.tsx"
import githubSVG from "@iconify/icons-lucide/github";
import ButtonProgress from "../../demo/button-progress.tsx";
import ButtonDial from "../../demo/button-dial.tsx";
import ButtonBadge from "../../demo/button-badge.tsx";
import ButtonSearch from "../../demo/button-search.tsx";
import Button3Sizes from "../../demo/button-3sizes.tsx";
import ButtonAnchorIcon from "../../demo/button-anchor-icon.tsx";
import Button6Variants from "../../demo/button-6variants.tsx";
import ButtonSwitch from "../../demo/button-switch.tsx";
import { useState } from "react";
import ButtonToggle from "../../demo/button-toggle.tsx";
import { Icon } from "../Icon/Icon.tsx";
const { body: github } = githubSVG as any;
export default {
  title: 'Example/Button',
  parameters: {
    layout: 'centered',
    // docs: {
    //   source: {
    //     type: 'dynamic',
    //   }
    // }
  },
  component: Button,
  displayName: 'Button',
  // tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'lg', 'icon'] },
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    asChild: { control: 'boolean' },
  },

}

export const Variant2 = {
  name: 'API / 6 Variants',
  render: () => <Button6Variants />
};

export const Variant3 = {
  name: 'Loading / Disabled',
  render: () => <ButtonProgress />
};

export const Variant4 = {
  name: 'Scenario / Switch',
  render: () => <ButtonSwitch />
};

export const Variant8 = {
  name: 'API / Anchor & Icon',
  render: () => <ButtonAnchorIcon />
};

export const Variant10 = {
  name: 'Scenario / Search',
  render: () => <ButtonSearch />
}

export const Variant9 = {
  name: 'API / 3 Sizes',
  render: () => <Button3Sizes />

};

export const Variant11 = {
  name: 'Scenario / Badge',
  render: () => <ButtonBadge />
};

export const Variant12 = {
  name: 'Scenario / Dial',
  render: () => <ButtonDial />
};

export const Variant13 = {
  name: 'API / Toggle',
  render: () => <ButtonToggle />
};

export const Variant15 = {
  name: 'Scenario / Button Group',
  render: () => {
    const [align, setAlign] = useState<string>('');
    return (
      <div>
        <h3>Single Selection</h3>
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
      </div>
    )

  }
};

export const Variant16 = {
  name: 'Scenario / Multiple Selection Button Group',
  render: () => {
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
          <Icon icon='lucide:align-justify' />
        </Button>
        <Button
          mode='icon'
          className='tw:rounded-none'
          pressed={selections.left}
          onPressedChange={() => toggleSelection('left')}
        >
          <Icon icon='lucide:align-left' />
        </Button>
        <Button
          mode='icon'
          className='tw:rounded-none'
          pressed={selections.right}
          onPressedChange={() => toggleSelection('right')}
        >
          <Icon icon='lucide:align-right' />
        </Button>
      </div>
    </div>
  }
};