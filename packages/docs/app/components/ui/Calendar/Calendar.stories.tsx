import CalendarDatePicker from "@/components/demo/calendar-date-picker"
import CalendarDemo from "@/components/demo/calendar-demo"
import CalendarDateRangePicker from "@/components/demo/calendar-date-range-picker"
export default {
  title: 'Example/Calendar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

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
