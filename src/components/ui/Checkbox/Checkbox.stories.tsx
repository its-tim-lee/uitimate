import { useState } from 'react';
import { Checkbox } from './Checkbox.tsx';
import type { CheckedState } from '@radix-ui/react-checkbox';

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
  name: 'Checked',
  render: () => {
    const [checked, setChecked] = useState<CheckedState>(true)
    return <Checkbox
        title="This is a label"
        outline="This is a description"
        checked={checked}
        onCheckedChange={setChecked}
      />
  },
};


// // TBD: using form compomnent with props of checkbox: `name`, `required`, and `value`; `disabled`