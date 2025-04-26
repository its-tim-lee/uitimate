import type { Meta } from '@storybook/react';
import { useState } from "react";
import { Cta } from "#/components/ui/Cta/Cta";
import { Icon } from "#/components/ui/Icon/Icon";

export default {
  title: 'Theme',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

const ThemeSwitch = () => {
  const [themeIcon, setThemeIcon] = useState<'lucide:sun' | 'lucide:moon'>('lucide:sun');
  const toggle = () => {
    setThemeIcon(themeIcon === 'lucide:sun' ? 'lucide:moon' : 'lucide:sun');
    document.documentElement.classList.toggle('dark');
  }
  return (
    <Cta
      variant='outline' size='lg' shapes={['icon']}
      onClick={toggle}
    >
      <Icon icon={themeIcon} />
      <span className="tw:sr-only">Switch between dark and light mode</span>
    </Cta>
  )
}

export const Variant1 = {
  name: 'Demo',
  render: () => {
    document.documentElement.classList.add('dark');
    return (
      <>
        <div className='tw:flex tw:justify-end'>
          <ThemeSwitch />
        </div>
        <div className='tw:dark:bg-black tw:p-4'>
          <div className="tw:flex tw:flex-col tw:gap-2">
            <div className='tw:flex tw:gap-2 tw:items-center'>
              <span className='tw:text-black tw:dark:text-white'>Background</span>
              <div className='tw:size-5 tw:bg-background'></div>
            </div>
            <div className='tw:flex tw:gap-2 tw:items-center'>
              <span className='tw:text-black tw:dark:text-white'>Primary</span>
              <div className='tw:size-5 tw:bg-primary'></div>
            </div>
            <div className='tw:flex tw:gap-2 tw:items-center'>
              <span className='tw:text-black tw:dark:text-white'>Secondary</span>
              <div className='tw:size-5 tw:bg-secondary'></div>
            </div>
            <div className='tw:flex tw:gap-2 tw:items-center'>
              <span className='tw:text-black tw:dark:text-white'>Destructive</span>
              <div className='tw:size-5 tw:bg-destructive'></div>
            </div>
            <div className='tw:flex tw:gap-2 tw:items-center'>
              <span className='tw:text-black tw:dark:text-white'>Muted</span>
              <div className='tw:size-5 tw:bg-muted'></div>
            </div>
            <div className='tw:flex tw:gap-2 tw:items-center'>
              <span className='tw:text-black tw:dark:text-white'>Accent</span>
              <div className='tw:size-5 tw:bg-accent'></div>
            </div>
          </div>
          <br />
          <div className='tw:text-foreground tw:p-2'>foreground</div>
          <div className='tw:text-primary-foreground tw:p-2'>primary-foreground</div>
          <div className='tw:text-secondary-foreground'>secondary-foreground</div>
          <div className='tw:text-destructive-foreground tw:p-2'>destructive-foreground</div>
          <div className='tw:text-muted-foreground'>muted-foreground</div>
          <div className='tw:text-accent-foreground'>accent-foreground</div>
        </div>
      </>
    )
    //   .tw\: w - 5 {
    //   width: calc(var(--tw - spacing) * 5);
    // }
  }
};