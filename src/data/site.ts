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
        }
      ],
      labels: []
    }
  ] as DocTreeItem[]
}