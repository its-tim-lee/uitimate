import ResizableDemo from "../../demo/resizable-demo.tsx";

export default {
  title: 'Example/Resizable',
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
  render: () => <ResizableDemo />
};