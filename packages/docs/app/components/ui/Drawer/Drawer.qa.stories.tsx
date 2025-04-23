import type { Meta, StoryObj } from "@storybook/react";
import DrawerDemo from "#/components/demo/drawer-demo.tsx";
import { userEvent } from "@storybook/testing-library";
import { within } from "@storybook/testing-library";
export default {
  title: 'QA/Drawer',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta

export const DesktopDrawer: StoryObj = {
  render: () => <DrawerDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Open');
    await userEvent.click(openButton);
  }
};
