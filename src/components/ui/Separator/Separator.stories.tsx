import { Separator } from "./Separator.tsx"

export default {
  title: 'Example/Separator',
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
      <>
        Below is a separator
        <Separator className="tw-my-4" />
        Above is a separator
      </>
    )
  }
};