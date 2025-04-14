import CollapsibleDemo from "#/components/demo/collapsible-demo"
import CollapsibleOpenControl from "#/components/demo/collapsible-open-control"
import CollapsibleStepper from "#/components/demo/recipe/collapsible-stepper"
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/Collapsible',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <CollapsibleDemo />
};

export const OpenControl = {
  name: 'DEMO / Open Control',
  render: () => <CollapsibleOpenControl />
};

export const Stepper = {
  name: 'Scenario / Stepper',
  render: () => <CollapsibleStepper />
};