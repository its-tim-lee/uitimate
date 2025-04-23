import DropdownMenuMix1 from "#/components/demo/dropdownmenu-mix1.tsx";
import DropdownMenuMix2 from "#/components/demo/dropdownmenu-mix2.tsx";
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent } from "@storybook/test";
import { casing } from "#/helpers/utils.ts";
import { DropdownMenuTrigger } from "./DropdownMenu.tsx";

export default {
  title: 'QA/DropdownMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta

export const Mix1: StoryObj = {
  render: () => <DropdownMenuMix1 />,
  play: async ({ canvasElement }) => {
    const triggerSelector = `[data-tag="${casing.kebabCase(DropdownMenuTrigger.displayName)}"]`;
    const firstTrigger = canvasElement.querySelector(triggerSelector);
    await userEvent.click(firstTrigger!);
  }
};

export const checkbox_and_radio: StoryObj = {
  render: () => <DropdownMenuMix2 />,
  play: async ({ canvasElement }) => {
    const triggerSelector = `[data-tag="${casing.kebabCase(DropdownMenuTrigger.displayName)}"]`;
    const firstTrigger = canvasElement.querySelector(triggerSelector);
    await userEvent.click(firstTrigger!);
  }
};
