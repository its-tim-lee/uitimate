export type DocTreeItem = {
  type: 'group' | 'link';
  title: string;
  labels: string[];
  href?: string;
  items?: DocTreeItem[];
}

export default {
  domain: 'https://keypointerui.web.app',
  twitter: 'https://twitter.com/itistimlee',
  docsTree: [
    {
      type: 'group',
      title: 'Getting Started',
      items: [
        {
          type: 'link',
          title: 'Introduction',
          href: '/docs/getting-started/introduction',
          labels: []
        },
        {
          type: 'link',
          title: 'Installation',
          href: '/docs/getting-started/installation',
          labels: []
        },
        {
          type: 'link',
          title: 'Figma',
          href: '/docs/getting-started/figma',
          labels: []
        },
        {
          type: 'link',
          title: 'Changelog',
          href: '/docs/getting-started/changelog',
          labels: []
        }
      ],
      labels: []
    },
    {
      type: 'group',
      title: 'Components',
      items: [
        {
          type: 'link',
          title: 'Badge',
          href: '/docs/components/badge',
          labels: []
        },
        {
          type: 'link',
          title: 'Aspect Ratio',
          href: '/docs/components/aspect-ratio',
          labels: []
        },
        {
          type: 'link',
          title: 'Heading',
          href: '/docs/components/heading',
          labels: []
        },
        {
          type: 'link',
          title: 'Button',
          href: '/docs/components/button',
          labels: []
        },
        {
          type: 'link',
          title: 'Icon',
          href: '/docs/components/icon',
          labels: []
        },
        {
          type: 'link',
          title: 'Tabs',
          href: '/docs/components/tabs',
          labels: []
        },
        {
          type: 'link',
          title: 'Avatar',
          href: '/docs/components/avatar',
          labels: []
        },
        {
          type: 'link',
          title: 'Label',
          href: '/docs/components/label',
          labels: []
        },
        {
          type: 'link',
          title: 'Tooltip',
          href: '/docs/components/tooltip',
          labels: []
        },
        {
          type: 'link',
          title: 'Skeleton',
          href: '/docs/components/skeleton',
          labels: []
        },
        {
          type: 'link',
          title: 'Image',
          href: '/docs/components/image',
          labels: []
        },
        {
          type: 'link',
          title: 'Progress',
          href: '/docs/components/progress',
          labels: []
        },
        {
          type: 'link',
          title: 'Slider',
          href: '/docs/components/slider',
          labels: []
        },
        {
          type: 'link',
          title: 'Separator',
          href: '/docs/components/separator',
          labels: []
        },
        {
          type: 'link',
          title: 'Breadcrumb',
          href: '/docs/components/breadcrumb',
          labels: []
        },
        {
          type: 'link',
          title: 'Toast',
          href: '/docs/components/toast',
          labels: []
        },
        {
          type: 'link',
          title: 'Popover',
          href: '/docs/components/popover',
          labels: []
        },
        {
          type: 'link',
          title: 'DropdownMenu',
          href: '/docs/components/dropdownmenu',
          labels: []
        },
        {
          type: 'link',
          title: 'Pagination',
          href: '/docs/components/pagination',
          labels: []
        },
        {
          type: 'link',
          title: 'Resizable',
          href: '/docs/components/resizable',
          labels: []
        },
        {
          type: 'link',
          title: 'Menubar',
          href: '/docs/components/menubar',
          labels: []
        },
        {
          type: 'link',
          title: 'HoverCard',
          href: '/docs/components/hovercard',
          labels: []
        },
        {
          type: 'link',
          title: 'ScrollArea',
          href: '/docs/components/scroll-area',
          labels: []
        },
        {
          type: 'link',
          title: 'Dialog',
          href: '/docs/components/dialog',
          labels: []
        },
        {
          type: 'link',
          title: 'Checkbox',
          href: '/docs/components/checkbox',
          labels: []
        },
        {
          type: 'link',
          title: 'Input',
          href: '/docs/components/input',
          labels: []
        },
        {
          type: 'link',
          title: 'Select',
          href: '/docs/components/select',
          labels: []
        },
        {
          type: 'link',
          title: 'Switch',
          href: '/docs/components/switch',
          labels: []
        },
        {
          type: 'link',
          title: 'Textarea',
          href: '/docs/components/textarea',
          labels: []
        },
        {
          type: 'link',
          title: 'Cta',
          href: '/docs/components/cta',
          labels: []
        },
        {
          type: 'link',
          title: 'Accordion',
          href: '/docs/components/accordion',
          labels: []
        },
        {
          type: 'link',
          title: 'ContextMenu',
          href: '/docs/components/contextmenu',
          labels: []
        },
        {
          type: 'link',
          title: 'NavigationMenu',
          href: '/docs/components/navigationmenu',
          labels: []
        },
        {
          type: 'link',
          title: 'Command',
          href: '/docs/components/command',
          labels: []
        },
        {
          type: 'link',
          title: 'Collapsible',
          href: '/docs/components/collapsible',
          labels: []
        },
        {
          type: 'link',
          title: 'Drawer',
          href: '/docs/components/drawer',
          labels: []
        },
        {
          type: 'link',
          title: 'InputOtp',
          href: '/docs/components/inputotp',
          labels: []
        },
        {
          type: 'link',
          title: 'RadioGroup',
          href: '/docs/components/radio-group',
          labels: []
        },
        {
          type: 'link',
          title: 'Carousel',
          href: '/docs/components/carousel',
          labels: []
        },
        {
          type: 'link',
          title: 'Calendar',
          href: '/docs/components/calendar',
          labels: []
        },
        {
          type: 'link',
          title: 'Combobox',
          href: '/docs/components/combobox',
          labels: []
        }
      ],
      labels: []
    },
    {
      type: 'group',
      title: 'Component Patterns',
      items: [
        {
          type: 'link',
          title: 'Card',
          href: '/docs/component-patterns/card',
          labels: []
        },



      ],
      labels: []
    },
  ] as DocTreeItem[]
}