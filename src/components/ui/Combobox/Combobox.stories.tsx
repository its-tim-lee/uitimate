import ComboboxDemo from "@/components/demo/combobox-demo.tsx";

export default {
  title: 'Example/Combobox',
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
  render: () => <ComboboxDemo />
};