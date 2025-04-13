import type { Meta } from '@storybook/react';
import SliderDemo from "#/components/demo/slider-demo.tsx"

export default {
  title: 'Example/Slider',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <SliderDemo />
};