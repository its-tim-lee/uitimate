import CollapsibleDemo from "#/components/demo/collapsible-demo";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

export default {
  title: 'QA/Collapsible',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const DEMO: StoryObj = {
  name: 'DEMO',
  render: () => <CollapsibleDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('', { selector: '[data-tag="collapsible-trigger"]' });
    await userEvent.click(trigger);
  }
};