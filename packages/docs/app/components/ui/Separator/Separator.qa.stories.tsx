import type { Meta } from '@storybook/react';
import SeparatorVertical from "#/components/demo/separator-vertical.tsx";

export default {
  title: 'QA/Separator',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const Normal = {
  render: () => <SeparatorVertical />
};