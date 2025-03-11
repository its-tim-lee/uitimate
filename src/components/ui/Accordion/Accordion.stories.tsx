import AccordionDemo from '../../demo/accordion-demo.tsx';
import AccordionOverview from '../../demo/accordion-overview.tsx';

export default {
  title: 'Example/Accordion',
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
  render: () => <AccordionDemo />
}

export const Multiple = {
  name: 'API / Overview',
  render: () => <AccordionOverview />
}