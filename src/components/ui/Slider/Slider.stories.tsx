import { Slider } from "./Slider.tsx"

export default {
  title: 'Example/Slider',
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
      <Slider defaultValue={[50]} className={"tw-w-[320px]"}
    />
    )
  },
};