import type { Meta } from '@storybook/react';
import MenubarDemo from "#/components/demo/menubar-demo.tsx";

export default {
  title: 'Example/Menubar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <MenubarDemo />
};

