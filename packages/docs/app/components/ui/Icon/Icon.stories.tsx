import { Icon } from "./Icon.tsx";
import IconDemo from "../../demo/icon-demo.tsx";
import IconSize from "../../demo/icon-size.tsx";
import { default as githubSVG } from '@iconify/icons-lucide/github';
const { body: github } = githubSVG as any;

export default {
  title: 'Example/Icon',
  includeStories: [],
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

export const DEMO = {
  name: 'DEMO',
  render: () => IconDemo()
}

export const SIZE = {
  name: 'API / Size',
  render: () => IconSize()
}