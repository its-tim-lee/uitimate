import ListIndentBasicDemo from '#/components/demo/list-indent-border.tsx';
import type { Meta } from '@storybook/react';

export default {
  title: 'QA/List',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const OneLevelIndentWithBorder = {
  render: () => <ListIndentBasicDemo />
}
