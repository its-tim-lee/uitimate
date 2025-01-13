import { useState } from 'react';
import { Checkbox } from './index.tsx';

export default {
  title: 'Example/Checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Checked Initially',
  render: () => {
    const [checked, setChecked] = useState(true)
    return <Checkbox
        label="This is a label"
        description="This is a description"
        defaultChecked
        onCheckedChange={(checked) => setChecked(checked === "indeterminate" ? false : checked)}
        value={checked.toString()}
      />
  },
};


// // TBD: using form compomnent with props of checkbox: `name`, `required`, and `value`; `disabled`