import { useState } from "react";
import {
  Switch
} from "./Switch.tsx"
import SwitchDemo from "../../demo/switch-demo.tsx";

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

export const DEMO = {
  name: 'DEMO',
  render: () => <SwitchDemo />
};