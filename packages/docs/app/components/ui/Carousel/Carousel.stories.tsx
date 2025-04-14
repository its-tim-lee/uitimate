import CarouselDemo from '#/components/demo/carousel-demo.tsx';
import CarouselUseApi from '#/components/demo/carousel-use-api.tsx';
import CarouselAutoLoop from '#/components/demo/carousel-auto-loop.tsx';
import { type Meta } from '@storybook/react';

export default {
  title: 'Example/Carousel',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'Demo',
  render: () => <CarouselDemo />
}

export const SCENARIO_USE_API = {
  name: 'Scenario / Use API',
  render: () => <CarouselUseApi />
}

export const AutoLoop = {
  name: 'Scenario / Auto Loop',
  render: () => <CarouselAutoLoop />
}
