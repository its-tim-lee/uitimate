import {
  Flat
} from "./index.tsx"

export default {
  title: 'Preset/Flat',
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
    return (
      <Flat>
        <div>Hello</div>
      </Flat>
    )
  },
};