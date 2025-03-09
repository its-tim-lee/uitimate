import HoverCardDemo from "../../demo/hovercard-demo.tsx";
import HoverCardApiDoc from "../../demo/hovercard-api-doc.tsx";

export default {
  title: 'Components/HoverCard',
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
  render: () => <HoverCardDemo />
};


export const API_DOC = {
  name: 'API / API DOC',
  render: () => <HoverCardApiDoc />
};
