import CollapsibleDemo from "../../demo/collapsible-demo"

export default {
  title: 'Example/Collapsible',
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

// there's a real use case in Figma, but it's kind of complicated to implement