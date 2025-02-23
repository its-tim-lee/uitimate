import { Icon } from "@iconify/react";
import {
  Button,
  type ButtonProps
} from "./Button.tsx"

export default {
  title: 'Example/Button',
  parameters: {
    layout: 'centered',
    // docs: {
    //   source: {
    //     type: 'dynamic',
    //   }
    // }
  },
  component: Button,
  displayName: 'Button',
  // tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'lg', 'icon'] },
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    asChild: { control: 'boolean' },
  },

}

export const Variant3 = {
  name: 'Text + Icon',
  args: {
    variant: 'outline',
    disabled: true,
  },
  render: (args: ButtonProps) => <Button {...args}>
    <Icon icon="lucide:loader-circle" className="tw:animate-spin" />
    Please wait
  </Button>
};

export const Variant4 = {
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
  name: 'Just icon',
  args: {
    variant: 'outline',
    size: 'icon',
  },
  render: (args: ButtonProps) => <Button {...args}><Icon icon="lucide:chevron-right" /></Button>
};

/**
 * The end result:
 *  the classes generated from `<Button>` will be applied to the child,
 *  in this case, the `<a>` tag, then the child will be unwrapped (ie., `<Button>` is gone)
 *
 * So it's basically applying the styling mechanism from `<Button>` to the child
 */
export const Variant8 = {
  name: 'Anchor',
  args: {
    asChild: true,
    target: "_blank"
  },
  render: (args: ButtonProps) => {

    return (
      <Button {...args}>
        <a href="#">Login</a>
      </Button>
    )
  }
};