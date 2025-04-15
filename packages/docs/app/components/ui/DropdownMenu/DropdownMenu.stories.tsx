import DialogDropdownMenu from "#/components/demo/dialog-dropdown-menu.tsx";
import DropdownMenuMix1 from "#/components/demo/dropdownmenu-mix1.tsx";
import DropdownMenuDemo from "#/components/demo/dropdownmenu-demo.tsx";
import DropdownMenuMix2 from "#/components/demo/dropdownmenu-mix2.tsx";
import type { Meta } from '@storybook/react';

export default {
  title: 'Example/DropdownMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const Demo = {
  name: 'Demo',
  render: () => <DropdownMenuDemo />
};

export const Mix1 = {
  name: 'Mix1',
  render: () => <DropdownMenuMix1 />
};

export const Mix2 = {
  name: 'Mix2',
  render: () => <DropdownMenuMix2 />
};

// this hasn't been referred in the relevant docs
// This example has been built to show the huge differences from the inappropriate demo: https://ui.shadcn.com/docs/components/dialog
export const WithDialog = {
  name: 'With Dialog',
  render: () => <DialogDropdownMenu />
};
