import DialogModalA from "#/components/demo/dialog-modal-a.tsx";
import DialogModal from "#/components/demo/dialog-alert.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/testing-library";
import { within } from "@storybook/testing-library";

export default {
  title: 'QA/Dialog',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta


export const MODAL: StoryObj = {
  render: () => DialogModal(),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Delete GPT');
    await userEvent.click(openButton);
  }
}

export const MODAL_A: StoryObj = {
  render: () => DialogModalA(),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open');
    await userEvent.click(openButton);
  }
}
