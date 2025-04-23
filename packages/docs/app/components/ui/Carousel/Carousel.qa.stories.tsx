import CarouselUseApi from '#/components/demo/carousel-use-api.tsx';
import { type Meta } from '@storybook/react';

export default {
  title: 'QA/Carousel',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta

export const SCENARIO_USE_API = {
  render: () => <CarouselUseApi />
}
