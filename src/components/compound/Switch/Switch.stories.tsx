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
  name: 'Default',
  render: () => {
    const [checked, setChecked] = useState(true)
    return (
      <Switch checked={checked} onCheckedChange={setChecked}/>
    )
  },
};