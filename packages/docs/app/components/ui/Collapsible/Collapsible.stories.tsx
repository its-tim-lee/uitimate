import CollapsibleDemo from "../../demo/collapsible-demo"
import CollapsibleStepper from "../../demo/collapsible-stepper";

export default {
  title: 'Example/Collapsible',
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
  render: () => <CollapsibleDemo />
};

export const Stepper = {
  name: 'Scenario / Stepper',
  render: () => <CollapsibleStepper />
};

// there's a real use case in Figma, but it's kind of complicated to implement