import Checkbox2LabelOrientationsDemo from '#/components/demo/checkbox-2-label-orientations.tsx';
import CheckboxMultipleLinesDemo from '#/components/demo/checkbox-multiple-lines.tsx';
import CheckboxDemo from '#/components/demo/checkbox-demo.tsx';
import type { Meta } from '@storybook/react';

export default {
  title: 'Example/Checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <CheckboxDemo />
};

export const Variant2 = {
  name: 'Scenario / 2 Label Orientations',
  render: () => <Checkbox2LabelOrientationsDemo />
};

// This story seems redundant
export const MULTIPLE_LINES = {
  name: 'Scenario / Multiple lines',
  render: () => <CheckboxMultipleLinesDemo />
}


