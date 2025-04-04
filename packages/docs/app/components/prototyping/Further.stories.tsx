import DevelopmentToolsDemo from "#/components/demo/development-tools-demo.tsx";
import AllProductsDemo from "#/components/demo/all-products-demo.tsx";
import AccordionFigma from '#/components/demo/accordion-figma.tsx';

export default {
  title: 'Prototyping/Further',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const DevelopmentTools = {
  name: 'Development Tools',
  render: () => <DevelopmentToolsDemo />
};

export const AllProducts = {
  name: 'All Products',
  render: () => <AllProductsDemo />
};


export const FigmaDesign = {
  name: 'Figma Design',
  render: () => <AccordionFigma />
}