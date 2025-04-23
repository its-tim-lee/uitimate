import Checkbox2LabelOrientationsDemo from '#/components/demo/checkbox-2-label-orientations.tsx';
import type { Meta } from '@storybook/react';

export default {
  title: 'QA/Checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],

} as Meta

export const Normal = {
  render: () => <Checkbox2LabelOrientationsDemo />
};