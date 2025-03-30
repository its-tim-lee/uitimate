import TooltipDemo from "@/components/demo/tooltip-demo.tsx";
import TooltipInstant from "@/components/demo/tooltip-instant.tsx";

export default {
  title: 'Example/Tooltip',
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
  render: () => <TooltipDemo />
};


export const INSTANT = {
  name: 'INSTANT',
  render: () => <TooltipInstant />
};