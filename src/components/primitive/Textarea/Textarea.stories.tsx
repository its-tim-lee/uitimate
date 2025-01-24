import { Textarea } from "./Textarea.tsx"

export default {
  title: 'Example/Textarea',
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
  render: () => <Textarea label="Label" description="Description" placeholder="Type your message here." />
};