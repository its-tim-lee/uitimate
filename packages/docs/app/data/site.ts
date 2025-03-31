export type DocTreeItem = {
  type: 'link' | 'subheader' | 'collapsible';
  title: string;
  labels: string[];
  href: string;
  items: DocTreeItem[];
}

export default {
  domain: 'https://uitimate.web.app',
  twitter: 'https://twitter.com/itistimlee',
  docsTree: [
    {
      type: 'subheader',
      title: 'Get Started',
      href: '',
      items: [
        {
          type: 'collapsible',
          title: 'Introduction',
          href: '',
          labels: [],
          items: []
        },
        {
          type: 'collapsible',
          title: 'Setup',
          href: '',
          items: [
            {
              type: 'link',
              title: 'Read Me First',
              href: '/docs/getting-started/readme',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Component Lib Integration',
              href: '/docs/getting-started/component-lib-integration',
              labels: [],
              items: []
            }
          ],
          labels: []
        },
      ],
      labels: []
    },
    {
      type: 'subheader',
      title: 'Components',
      href: '',
      items: [
        {
          type: 'collapsible',
          title: 'Core',
          href: '',
          items: [
            {
              type: 'collapsible',
              title: 'Form',
              href: '/docs/components/form',
              items: [
                {
                  type: 'link',
                  title: 'Introduction',
                  href: '/docs/components/form/introduction',
                  labels: [],
                  items: []
                },
                {
                  type: 'link',
                  title: 'API',
                  href: '/docs/components/form/api',
                  labels: [],
                  items: []
                }
              ],
              labels: []
            },
            {
              type: 'link',
              title: 'Heading',
              href: '/docs/components/heading',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Button',
              href: '/docs/components/button',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Icon',
              href: '/docs/components/icon',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Tabs',
              href: '/docs/components/tabs',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Avatar',
              href: '/docs/components/avatar',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Label',
              href: '/docs/components/label',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Tooltip',
              href: '/docs/components/tooltip',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Skeleton',
              href: '/docs/components/skeleton',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Image',
              href: '/docs/components/image',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Progress',
              href: '/docs/components/progress',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Slider',
              href: '/docs/components/slider',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Separator',
              href: '/docs/components/separator',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Breadcrumb',
              href: '/docs/components/breadcrumb',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Toast',
              href: '/docs/components/toast',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Popover',
              href: '/docs/components/popover',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'DropdownMenu',
              href: '/docs/components/dropdownmenu',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Pagination',
              href: '/docs/components/pagination',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Resizable',
              href: '/docs/components/resizable',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Menubar',
              href: '/docs/components/menubar',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'HoverCard',
              href: '/docs/components/hovercard',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'ScrollArea',
              href: '/docs/components/scroll-area',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Dialog',
              href: '/docs/components/dialog',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Checkbox',
              href: '/docs/components/checkbox',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Input',
              href: '/docs/components/input',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Select',
              href: '/docs/components/select',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Switch',
              href: '/docs/components/switch',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Textarea',
              href: '/docs/components/textarea',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Cta',
              href: '/docs/components/cta',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Accordion',
              href: '/docs/components/accordion',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'ContextMenu',
              href: '/docs/components/contextmenu',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'NavigationMenu',
              href: '/docs/components/navigationmenu',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Command',
              href: '/docs/components/command',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Collapsible',
              href: '/docs/components/collapsible',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Drawer',
              href: '/docs/components/drawer',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'InputOtp',
              href: '/docs/components/inputotp',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'RadioGroup',
              href: '/docs/components/radio-group',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Carousel',
              href: '/docs/components/carousel',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Calendar',
              href: '/docs/components/calendar',
              labels: [],
              items: []
            },
            {
              type: 'link',
              title: 'Combobox',
              href: '/docs/components/combobox',
              labels: [],
              items: []
            }
          ],
          labels: []
        },
        {
          type: 'collapsible',
          title: 'Recipe',
          href: '',
          items: [],
          labels: []
        },
      ],
      labels: []
    },
    {
      type: 'subheader',
      title: 'Extra Topics',
      href: '',
      items: [
        {
          type: 'link',
          title: 'Changelog',
          href: '/docs/extra-topics/changelog',
          labels: [],
          items: []
        },
        {
          type: 'link',
          title: 'Q&A',
          href: '/docs/extra-topics/qa',
          labels: [],
          items: []
        },
      ],
      labels: []
    },
  ] as DocTreeItem[]
}