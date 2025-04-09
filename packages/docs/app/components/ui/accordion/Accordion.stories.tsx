import type { Meta, StoryObj } from '@storybook/react';
import AccordionDemo from '../../demo/accordion-demo.tsx';
import AccordionOverview from '../../demo/accordion-overview.tsx';



export default {
  title: 'Example/Accordion',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const DEMO = {
  name: 'DEMO',
  render: () => <AccordionDemo />
}

export const Multiple = {
  name: 'API / Overview',
  render: () => <AccordionOverview />
}