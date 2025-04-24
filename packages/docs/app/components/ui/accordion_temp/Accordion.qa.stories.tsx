import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { casing } from "#/helpers/utils.ts";
import AccordionDemo from '#/components/demo/accordion-demo.tsx';
import { AccordionTrigger } from "./Accordion.tsx";

export default {
  title: 'QA/Accordion',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const Toggle_on: StoryObj = {
  render: () => <AccordionDemo />,
  play: async ({ canvasElement }) => {
    const triggerSelector = `[data-tag="${casing.kebabCase(AccordionTrigger.displayName)}"]`;
    const firstTrigger = canvasElement.querySelector(triggerSelector);
    await userEvent.click(firstTrigger!);
  }
};