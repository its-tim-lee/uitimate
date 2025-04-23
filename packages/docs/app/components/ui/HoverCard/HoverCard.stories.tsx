import type { Meta } from '@storybook/react';
import HoverCardDemo from "#/components/demo/hovercard-demo.tsx";
import HoverCardApiDoc from "#/components/demo/hovercard-api-doc.tsx";

export default {
  title: 'Example/HoverCard',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <HoverCardDemo />
};

export const ApiDoc = {
  name: 'API Doc',
  render: () => <HoverCardApiDoc />
};
