import { Icon } from "@iconify/react"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "./ToggleGroup.tsx"

export default {
  title: 'Example/ToggleGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Multiple Toggable',
  render: () => {
    return (
      <>
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" variant="secondary" aria-label="Toggle bold">
          <Icon icon='lucide:bold' /> Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <Icon icon='lucide:underline' />
        </ToggleGroupItem>
      </ToggleGroup>
      </>
    )
  },
};
