import {
  Button,
} from "./Button.tsx"
import githubSVG from "@iconify/icons-lucide/github";
import ButtonProgress from "../../demo/button-progress.tsx";
import ButtonDial from "../../demo/button-dial.tsx";
import ButtonBadge from "../../demo/button-badge.tsx";
import ButtonSearch from "../../demo/button-search.tsx";
import Button3Sizes from "../../demo/button-3sizes.tsx";
import ButtonAnchorIcon from "../../demo/button-anchor-icon.tsx";
import Button6Variants from "../../demo/button-6variants.tsx";
import ButtonSwitch from "../../demo/button-switch.tsx";
const { body: github } = githubSVG as any;
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

export const Variant2 = {
  name: 'API / 6 Variants',
  render: () => <Button6Variants />
};

export const Variant3 = {
  name: 'Loading / Disabled',
  render: () => <ButtonProgress />
};

export const Variant4 = {
  name: 'Scenario / Switch',
  render: () => <ButtonSwitch />
};

export const Variant8 = {
  name: 'API / Anchor & Icon',
  render: () => <ButtonAnchorIcon />
};

export const Variant10 = {
  name: 'Scenario / Search',
  render: () => <ButtonSearch />
}

export const Variant9 = {
  name: 'API / 3 Sizes',
  render: () => <Button3Sizes />

};

export const Variant11 = {
  name: 'Scenario / Badge',
  render: () => <ButtonBadge />
};

export const Variant12 = {
  name: 'Scenario / Dial',
  render: () => <ButtonDial />
};