import DevelopmentToolsDemo from "#/components/demo/development-tools-demo.tsx";
import AllProductsDemo from "#/components/demo/all-products-demo.tsx";

export default {
  title: 'Prototyping/Further',
  includeStories: [],
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