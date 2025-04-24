import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import TooltipInstant from "#/components/demo/tooltip-instant.tsx";
import { TooltipTrigger } from "./Tooltip.tsx";
import { casing, sleep } from "#/helpers/utils.ts";


export default {
  title: 'QA/Tooltip',
  parameters: {
    layout: 'centered',
  },
  // tags: ['qa', 'fullpage'],
} as Meta;

/**
 * FIXME: #20250424A
 * It seems that there are some limitations on Argos's side.
 * So this case just cannot capture the hovered content,
 * but this is not a problem in HoverCard story.
 */
export const INSTANT: StoryObj = {
  render: () => <TooltipInstant />,
  play: async ({ canvasElement }) => {
    const triggerSelector = `[data-tag="${casing.kebabCase(TooltipTrigger.displayName)}"]`;
    const tooltipTrigger = canvasElement.querySelector(triggerSelector);
    await userEvent.hover(tooltipTrigger!);
    await userEvent.pointer({ keys: '[MouseRight]', target: tooltipTrigger! });
    await sleep(1000);
  }
};