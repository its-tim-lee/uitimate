import type { Meta } from '@storybook/react';
import AccordionDemo from '#/components/demo/accordion-demo.tsx';
import AccordionOverview from '#/components/demo/accordion-overview.tsx';

export default {
  title: 'Example/Accordion',
  /**
   * TODO: the complete testing suites.
   * That's hard by hand, but totally doable by AI.
   * For this dynamic component, visual testing + behavior testing are needed.
   * Now we only test the visual one, and choosing "Overview" as the major test is becausse
   * it involves many common scenarios.
   */
  includeStories: ['Overview'],
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