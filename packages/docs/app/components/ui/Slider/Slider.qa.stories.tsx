import type { Meta } from '@storybook/react';
import SliderDemo from "#/components/demo/slider-demo.tsx"

export default {
  title: 'QA/Slider',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const Normal = {
  render: () => <SliderDemo />
};