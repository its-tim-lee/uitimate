import type { Meta } from "@storybook/react";
import PathAdjuster from "../../internal/PathAdjuster";

export default {
  title: 'Example/Test',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <PathAdjuster adjustablePath='components/ui' />
};