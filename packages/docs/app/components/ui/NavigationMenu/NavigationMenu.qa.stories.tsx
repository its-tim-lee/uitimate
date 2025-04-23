import NavigationMenuDemo from "#/components/demo/navigationmenu-demo.tsx"
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'QA/NavigationMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta;

export const Default: StoryObj = {
  render: () => <NavigationMenuDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const runTrigger = await canvas.findByText('Run');
    await userEvent.hover(runTrigger);
  }
}