import SliderDemo from "#/components/demo/slider-demo.tsx"
export default {
  title: 'Example/Slider',
  includeStories: [],
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
  render: () => <SliderDemo />
};