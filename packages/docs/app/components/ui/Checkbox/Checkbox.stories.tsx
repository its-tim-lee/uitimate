import Checkbox2LabelOrientationsDemo from '../../demo/checkbox-2-label-orientations.tsx';
import CheckboxMultipleLinesDemo from '../../demo/checkbox-multiple-lines.tsx';
import CheckboxDemo from '../../demo/checkbox-demo.tsx';
export default {
  title: 'Example/Checkbox',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
export const DEMO = {
  name: 'DEMO',
  render: () => <CheckboxDemo />
};

// // TBD: using form compomnent with props of checkbox: `name`, `required`, and `value`; `disabled`
// TBD: doc: if only having on child, which should be a label, then no need to use `CheckboxTitle`
export const Variant2 = {
  name: 'Scenario / 2 Label Orientations',
  render: () => <Checkbox2LabelOrientationsDemo />
};

// TBD: doc:
// This shows how to manage the style when the label is in multiple lines
// It also reveals that you can put some stuff other than text in the label
export const MULTIPLE_LINES = {
  name: 'Scenario / Multiple lines',
  render: () => <CheckboxMultipleLinesDemo />
}



// // TBD: using form compomnent with props of checkbox: `name`, `required`, and `value`; `disabled`