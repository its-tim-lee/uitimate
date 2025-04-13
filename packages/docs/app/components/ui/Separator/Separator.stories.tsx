import type { Meta } from '@storybook/react';
import SeparatorDemo from "#/components/demo/separator-demo.tsx";
import SeparatorVertical from "#/components/demo/separator-vertical.tsx";

export default {
  title: 'Example/Separator',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <SeparatorDemo />
};

export const Vertical = {
  name: 'Vertical',
  render: () => <SeparatorVertical />
};