import type { Meta } from '@storybook/react';
import AccordionDemo from '#/components/demo/accordion-demo.tsx';
import AccordionOverview from '#/components/demo/accordion-overview.tsx';

export default {
  title: 'Example/Accordion',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <AccordionDemo />
};

export const Overview = {
  name: 'API / Overview',
  render: () => <AccordionOverview />
};