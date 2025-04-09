
import CommandDemo from "../../demo/command-demo.tsx"
import CommandDialogDemo from "../../demo/command-dialog.tsx"
export default {
  title: 'Example/Command',
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
  render: () => <CommandDemo />
};

export const Dialog = {
  name: 'Dialog',
  render: () => <CommandDialogDemo />
}