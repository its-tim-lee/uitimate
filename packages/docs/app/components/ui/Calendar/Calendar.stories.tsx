import CalendarDatePicker from "#/components/demo/recipe/calendar-date-picker.tsx"
import CalendarDemo from "#/components/demo/calendar-demo.tsx"
import CalendarDateRangePicker from "#/components/demo/calendar-date-range-picker.tsx"
import type { Meta } from "@storybook/react";
export default {
  title: 'Example/Calendar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <CalendarDemo />
};

export const DatePicker = {
  name: 'Date Picker',
  render: () => <CalendarDatePicker />
};

export const DateRangePicker = {
  name: 'Date Range Picker',
  render: () => <CalendarDateRangePicker />
};
