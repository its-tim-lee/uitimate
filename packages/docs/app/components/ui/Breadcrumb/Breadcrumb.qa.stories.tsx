import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { casing } from "#/helpers/utils.ts";
import BreadcrumbExpansibleCollapse from "#/components/demo/breadcrumb-expansible-collapse.tsx";
import BreadcrumbDemo from "#/components/demo/breadcrumb-demo.tsx";
import { BreadcrumbEllipsis } from "./Breadcrumb.tsx";

export default {
  title: 'QA/Breadcrumb',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const normal: StoryObj = {
  render: () => <BreadcrumbDemo />,
};

export const Show_more_via_dropdown_menu: StoryObj = {
  render: () => <BreadcrumbExpansibleCollapse />,
  play: async ({ canvasElement }) => {
    const triggerSelector = `[data-tag="${casing.kebabCase(BreadcrumbEllipsis.displayName)}"]`;
    const firstTrigger = canvasElement.querySelector(triggerSelector);
    await userEvent.click(firstTrigger!);
  }
};