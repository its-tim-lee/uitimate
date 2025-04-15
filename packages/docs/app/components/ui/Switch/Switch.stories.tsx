import SwitchDemo from "#/components/demo/switch-demo.tsx";
import SwitchDetectOnOff from "#/components/demo/switch-detect-on-off.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/Switch',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <SwitchDemo />
};

export const DETECT_ON_OFF = {
  name: 'DETECT ON/OFF',
  render: () => <SwitchDetectOnOff />
};