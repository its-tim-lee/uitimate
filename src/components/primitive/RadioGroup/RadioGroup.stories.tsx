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
      <RadioGroup defaultValue="comfortable">
        <div className="tw-flex tw-items-center tw-space-x-2">
          <RadioGroupItem value="default" label="Default" description="Default description" />
        </div>
        <div className="tw-flex tw-items-center tw-space-x-2">
          <RadioGroupItem value="comfortable" label="Comfortable" description="Comfortable description" />
        </div>
      </RadioGroup>
    )
  },
};
