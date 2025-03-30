import TimelineDemo from "@/components/demo/timeline-demo.tsx";

export default {
  title: 'Example/Timeline',
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
  render: () => <TimelineDemo />
};