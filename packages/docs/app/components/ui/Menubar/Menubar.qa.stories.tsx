import type { Meta, StoryObj } from '@storybook/react';
import MenubarDemo from "#/components/demo/menubar-demo.tsx";
import { userEvent } from '@storybook/testing-library';
import { within } from '@storybook/testing-library';

export default {
  title: 'QA/Menubar',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta;

export const Normal_file_submenu: StoryObj = {
  render: () => <MenubarDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('File');
    await userEvent.click(openButton);
  }
};

export const Normal_view_submenu: StoryObj = {
  render: () => <MenubarDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('View');
    await userEvent.click(openButton);
  }
};

export const Normal_profiles_submenu: StoryObj = {
  render: () => <MenubarDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByText('Profiles');
    await userEvent.click(openButton);
  }
};
