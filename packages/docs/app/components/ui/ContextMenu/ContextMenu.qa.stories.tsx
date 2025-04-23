import ContextMenuDemo from "#/components/demo/contextmenu-demo.tsx"
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'QA/ContextMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const Normal: StoryObj = {
  render: () => <ContextMenuDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggerElement = canvas.getByText('Right click here');

    // Get element dimensions
    const rect = triggerElement.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Simulate right-click with specific coordinates
    await userEvent.pointer({
      keys: '[MouseRight]',
      target: triggerElement,
      coords: { clientX: x, clientY: y },
    });
  }
};
