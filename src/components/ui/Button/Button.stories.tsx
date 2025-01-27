import { Icon } from "@iconify/react";
import { Loader2 } from "lucide-react";
import {
  Button
} from "./Button.tsx"

export default {
  title: 'Example/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}


export const Variant1 = {
  name: 'variant=default, size=sm', // `variant="default"` is default
  render: () => <Button size="sm">Button</Button>
};

export const Variant2 = {
  name: 'variant=secondary, size=lg',
  render: () => <Button variant="secondary" size="lg">Button</Button>
};

export const Variant3 = {
  name: 'variant=destructive: Text + Icon',
  render: () => <Button variant="destructive"><Icon icon="lucide:chevron-right" /> Button</Button>
};

export const Variant4 = {
  name: 'variant=outline, size=icon',
  render: () => <Button variant="outline" size="icon"><Icon icon="lucide:chevron-right" /></Button>
};

export const Variant5 = {
  name: 'variant=ghost',
  render: () => <Button variant="ghost">Button</Button>
};

export const Variant6 = {
  name: 'variant=link',
  render: () => <Button variant="link">Button</Button>
};

export const Variant7 = {
  name: 'disabled: Loading',
  render: () => <Button disabled>
    <Icon icon="lucide:loader-circle" className="tw-animate-spin" />
    Please wait
  </Button>
}
/**
 * The end result:
 *  the classes generated from <Button> will be applied to the child,
 *  in this case, the <a> tag, then the child will be unwrapped (ie., <Button> is gone)
 *
 * So it's basically applying the styling mechanism from <Button> to the child
 */
export const Variant8 = {
  name: 'Anchor',
  render: () => <Button asChild target="_blank"><a href="#">Login</a></Button>
};