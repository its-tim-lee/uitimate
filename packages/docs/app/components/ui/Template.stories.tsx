import ComponentDemo from "@/components/demo/component-demo.tsx";

export default {
  title: 'Example/Component',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Demo = {
  name: 'Demo',
  render: () => <ComponentDemo />
};