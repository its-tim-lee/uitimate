import type { Meta, StoryObj } from "@storybook/react";
import CalendarDemo from "#/components/demo/calendar-demo.tsx"
import CalendarDatePicker from "#/components/demo/recipe/date-picker.tsx"
import { userEvent, within } from "@storybook/test";

export default {
  title: 'QA/Calendar',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta;

export const normal: StoryObj = {
  render: () => <CalendarDemo />,
};

export const datePicker: StoryObj = {
  render: () => <CalendarDatePicker />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ctaButton = canvas.getByTestId("date-picker-cta");
    await userEvent.click(ctaButton);
  }
};
