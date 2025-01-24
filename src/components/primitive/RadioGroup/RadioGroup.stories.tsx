import { Label } from "../label/index.tsx";
import {
  RadioGroup,
  RadioGroupItem
} from "./RadioGroup.tsx"

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
  render: () => {
    return (
      <RadioGroup label="Select a meal" defaultValue="comfortable">
        <RadioGroupItem value="default" title="Default" outline="Default description" />
        <RadioGroupItem value="comfortable" title="Comfortable" outline="Comfortable description" />
      </RadioGroup>
    )
  },
};
