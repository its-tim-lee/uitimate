import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./Select.tsx"

export default {
  title: 'Example/Select',
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
  render: () =>
  <Select>
    <SelectTrigger >
      <SelectValue placeholder="Select a meal" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectSeparator />
        <SelectItem value="cherry">Cherry</SelectItem>
        <SelectItem value="date">Date</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectItem value="milk">Milk</SelectItem>
      <SelectItem value="water">Water</SelectItem>
    </SelectContent>
  </Select>
};

