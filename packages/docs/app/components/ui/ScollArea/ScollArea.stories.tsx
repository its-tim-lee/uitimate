import ScrollAreaDemo from "../../demo/scroll-area-demo.tsx"
import ScrollAreaHorizontal from "../../demo/scroll-area-horizontal.tsx";

export default {
  title: 'Example/ScrollArea',
  includeStories: [],
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
  render: () => <ScrollAreaDemo />
};


export const Corner = {
  name: 'API / Horizontal',
  render: () => <ScrollAreaHorizontal />
};


