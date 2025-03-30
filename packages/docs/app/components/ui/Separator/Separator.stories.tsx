import SeparatorDemo from "../../demo/separator-demo.tsx";
import SeparatorVertical from "../../demo/separator-vertical.tsx";

export default {
  title: 'Example/Separator',
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
  render: () => <SeparatorDemo />
};

export const VERTICAL = {
  name: 'API / Vertical',
  render: () => <SeparatorVertical />
};