import type { Meta, StoryObj } from '@storybook/react';
import HoverCardApiDoc from "#/components/demo/hovercard-api-doc.tsx";
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'QA/HoverCard',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta;

export const ApiDoc: StoryObj = {
  render: () => <HoverCardApiDoc />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bluetoothElement = await canvas.findByText('BluetoothDevice[]');
    await userEvent.hover(bluetoothElement);
  },
};
