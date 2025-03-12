import CarouselDemo from '../../demo/carousel-demo.tsx';
import CarouselUseApi from '../../demo/carousel-use-api.tsx';
import CarouselAutoLoop from '../../demo/carousel-auto-loop.tsx';

export default {
  title: 'Example/Carousel',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

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
