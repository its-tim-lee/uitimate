import type { Meta } from '@storybook/react';
import {
  Flat
} from "./index.tsx"

export default {
  title: 'Preset/Flat',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <Flat>
        <div>Hello</div>
      </Flat>
    )
  },
};