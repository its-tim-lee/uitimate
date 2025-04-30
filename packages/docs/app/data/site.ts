import { coreItems, recipeItems } from '../helpers/route';
import { generateGitHubUrl } from '../helpers/uri';
import repo from './repo';

export type DocTreeItem = {
  type: 'link' | 'subheader' | 'collapsible';
  title: string;
  labels: string[];
  href: string;
  items: DocTreeItem[];
  tags?: {
    root?: string[];
    tutorial?: string[];
  };
}

export default {
  domain: 'https://uitimate.web.app',
  twitter: 'https://twitter.com/itistimlee',
  github: generateGitHubUrl({
    owner: repo.owner,
    repo: repo.name,
    action: 'base'
  }),
  docsTree: [
    {
      type: 'subheader',
      title: 'Get Started',
      href: '',
      items: [
        {
          type: 'link',
          title: 'Introduction',
          href: '/docs/get-started/introduction',
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
              href: '/docs/get-started/setup/read-me-first',
              labels: [],
              items: []
            },
            // {
            //   type: 'link',
            //   title: 'Component Lib Integration',
            //   href: '/docs/get-started/component-lib-integration',
            //   labels: [],
            //   items: []
            // }
          ],
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
          title: 'Get Help',
          href: '/docs/extra-topics/get-help',
          labels: [],
          items: []
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
  ] as DocTreeItem[]
}