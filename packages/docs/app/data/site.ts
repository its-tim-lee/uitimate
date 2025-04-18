import { coreItems, recipeItems } from '../helpers/route';

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
          items: coreItems,
          labels: []
        },
        {
          type: 'collapsible',
          title: 'Recipe',
          href: '',
          items: recipeItems,
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