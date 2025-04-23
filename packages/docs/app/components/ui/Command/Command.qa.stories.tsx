import CommandDialogDemo from "#/components/demo/command-dialog.tsx"
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'QA/Command',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta;

export const CommandDialog: StoryObj = {
  render: () => <CommandDialogDemo />,
  play: async ({ canvasElement }) => {
    const event = new KeyboardEvent('keydown', {
      keyCode: 66,
      altKey: true,
    });
    document.dispatchEvent(event);
  }
}