import { useState } from "react";
import {
  Switch
} from "./Switch.tsx"

export default {
  title: 'Example/Switch',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'On',
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch
        label="This is a label"
        description="This is a description"
        checked={checked}
        onCheckedChange={setChecked}
      />
    )
  },
};