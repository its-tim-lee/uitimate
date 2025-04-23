import CollapsibleDemo from "#/components/demo/collapsible-demo";
import { CollapsibleTrigger } from "./Collapsible.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { casing } from "#/helpers/utils.ts";

export default {
  title: 'QA/Collapsible',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const Toggle_on: StoryObj = {
  render: () => <CollapsibleDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByText('', { selector: `[data-tag="${casing.kebabCase(CollapsibleTrigger.displayName)}"]` });
    await userEvent.click(trigger);
  }
};