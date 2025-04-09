import TextareaDemo from "#/components/demo/textarea-demo.tsx";

export default {
  title: 'Example/Textarea',
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
  render: () => <TextareaDemo />
};