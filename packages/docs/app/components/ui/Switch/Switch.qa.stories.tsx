import SwitchDemo from "#/components/demo/switch-demo.tsx";
import SwitchDetectOnOff from "#/components/demo/switch-detect-on-off.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'QA/Switch',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],

} as Meta

export const Normal = {
  render: () => <SwitchDemo />
};
