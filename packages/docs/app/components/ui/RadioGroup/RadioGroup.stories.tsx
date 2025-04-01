import RadioGroupDemo from "#/components/demo/radio-group-demo.tsx"

export default {
  title: 'Primitive/RadioGroup',
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
  render: () => <RadioGroupDemo />
};
