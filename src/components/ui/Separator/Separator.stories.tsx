import SeparatorDemo from "../../demo/separator-demo.tsx";

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

export const Variant1 = {
  name: 'Default',
  render: () => <SeparatorDemo />
};