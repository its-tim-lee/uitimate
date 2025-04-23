import type { Meta, StoryObj } from "@storybook/react";
import CalendarDemo from "#/components/demo/calendar-demo.tsx"

export default {
  title: 'QA/Calendar',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const normal: StoryObj = {
  render: () => <CalendarDemo />,
};
