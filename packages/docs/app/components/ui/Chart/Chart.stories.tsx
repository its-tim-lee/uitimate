import ChartDemo from "#/components/demo/chart-demo";

export default {
  title: 'Example/Chart',
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
  render: () => <ChartDemo />
};