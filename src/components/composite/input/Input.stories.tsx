import { Input } from './index.tsx';

export default {
  title: 'Example/Input',
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
  render: () => {
    return <Input
        label="This is a label"
        description="This is a description"
        placeholder="This is a placeholder"
      />
  },
};
