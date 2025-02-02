import {
  TextHeader,
} from "./TextHeader.tsx"

export default {
  title: 'Example/TextHeader',
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
  render: () => <TextHeader
    title={<h1 className='tw:text-red-500'>This is in the customized tag `h1`</h1>}
    subtitle={'This is just a pure text without any tag customization'}
  />
};
