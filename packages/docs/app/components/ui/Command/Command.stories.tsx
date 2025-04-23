import CommandDemo from "#/components/demo/command-demo.tsx"
import CommandDialogDemo from "#/components/demo/command-dialog.tsx"
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/Command',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const DEMO = {
  name: 'DEMO',
  render: () => <CommandDemo />
};

export const Dialog = {
  name: 'Dialog',
  render: () => <CommandDialogDemo />
}