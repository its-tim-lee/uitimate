import IconV2 from "./IconV2.tsx";
import Icon from "./IconV2.tsx"
import githubSVG from "@iconify/icons-lucide/github";
const { body: github } = githubSVG as any;

export default {
  title: 'Example/Icon',
  parameters: {
    layout: 'centered',
    // docs: {
    //   source: {
    //     type: 'dynamic',
    //   }
    // }
  },
  component: Icon,
  displayName: 'Icon',
  // tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'lg', 'icon'] },
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    asChild: { control: 'boolean' },
  },

}

export const Variant1 = {
  name: 'SSR & CSR',
  render: () =>
    <div className="tw:flex tw:flex-col tw:gap-2">

      <div className="tw:flex tw:gap-2 tw:items-center">
        <IconV2 icon="lucide:loader-circle" />
        <h5 className='tw:m-auto tw:text-left'>Client-side render only icon</h5>
      </div>

      <div className="tw:flex tw:gap-2 tw:items-center">
        <IconV2 icon={github} className='tw:text-red-500' ssr />
        <IconV2 icon={github} className='tw:text-red-500' ssr />
        <h5 className='tw:m-auto tw:text-left'>SSR friendly icon</h5>
      </div>

    </div>
};

