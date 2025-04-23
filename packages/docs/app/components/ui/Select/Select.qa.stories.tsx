import type { Meta, StoryObj } from "@storybook/react";
import SelectScrollable from "#/components/demo/select-scrollable.tsx";
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'QA/Select',
  parameters: {
    layout: 'centered',
  },
  includeStories: [],
  tags: ['qa', 'fullpage'],
} as Meta

/**
 * #20250423
 */
export const Scrollable: StoryObj = {
  render: () => <SelectScrollable />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectTrigger = canvas.getByRole('combobox');
    await userEvent.click(selectTrigger);
  }
};


