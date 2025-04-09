import ToastDemo from "../../demo/toast-demo.tsx";

export default {
  title: 'Example/Sonner',
  includeStories: [],
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
  render: () => <ToastDemo />
};

