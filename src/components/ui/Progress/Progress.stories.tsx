import ProgressDemo from "../../demo/progress-demo.tsx";

export default {
  title: 'Example/Progress',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => <ProgressDemo />
};