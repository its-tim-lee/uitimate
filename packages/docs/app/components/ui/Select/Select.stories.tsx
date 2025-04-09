import SelectDemo from "../../demo/select-demo.tsx";
import SelectScrollable from "../../demo/select-scrollable.tsx";


export default {
  title: 'Example/Select',
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
  render: () => <SelectDemo />
};



export const Scrollable = {
  name: 'API / Scrollable',
  render: () => <SelectScrollable />
};

// TBD: doc: demostrate how to use it with form

