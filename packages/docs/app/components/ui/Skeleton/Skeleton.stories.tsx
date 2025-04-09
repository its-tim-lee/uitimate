import SkeletonDemo from "../../demo/skeleton-demo.tsx";

export default {
  title: 'Example/Skeleton',
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
  name: 'Card',
  render: () => <SkeletonDemo />
};


