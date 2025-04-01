/**
 * HACK: Workaround before RR integrated with RSC
 * Basically, the current implementation of `loader` in a route can't return the result that contains the component,
 * but that's literally what we need.
 * For more info: see https://github.com/remix-run/remix/discussions/8048
 */
import React from 'react';
import type { DocTreeItem } from '../data/site';

// Create mock components for missing pages
const MockComponent = () => React.createElement('div', null, 'Component Not Implemented Yet');
import CtaApi from '../components/ui/Cta/api.tsx';
// Define more specific types for the registry
type CoreComponent = `${string}/${string}`;
type ComponentRegistry = {
  core: Record<CoreComponent, React.ComponentType>;
  recipe: Record<string, React.ComponentType>;
};

/**
 * Component registry organized by type (core/recipe)
 */
export const componentRegistry: ComponentRegistry = {
  core: {
    'cta/api': MockComponent,
    'cta/introduction': MockComponent,
    'button/api': MockComponent
  },
  recipe: {
    'dashboard': MockComponent
  }
};

// Auto-generate componentUris from the registry
export const componentUris: string[] = [
  // Core component URIs
  ...Object.keys(componentRegistry.core).map(key => {
    const [name, page] = key.split('/');
    return `/docs/components/core/${name}/${page}`;
  }),
  // Recipe component URIs
  ...Object.keys(componentRegistry.recipe).map(name =>
    `/docs/components/recipe/${name}`
  )
];

// Generate Core items for site navigation
export const coreItems: DocTreeItem[] = [];
export const recipeItems: DocTreeItem[] = [];

// Track which components have which pages
const componentPages = new Map<string, Set<string>>();

// Process core components
Object.keys(componentRegistry.core).forEach(key => {
  const [name, page] = key.split('/');
  if (!componentPages.has(name)) {
    componentPages.set(name, new Set());
  }
  componentPages.get(name)?.add(page);
});

componentPages.forEach((pages, name) => {
  coreItems.push(createComponentNavItem(name, pages));
});


// Process recipe components
Object.keys(componentRegistry.recipe).forEach(name => {
  recipeItems.push(createRecipeNavItem(name));
});


function createComponentNavItem(name: string, pages: Set<string>): DocTreeItem {
  const hasApi = pages.has('api');
  const hasIntro = pages.has('introduction');

  if (hasApi && hasIntro) {
    return {
      type: 'collapsible',
      title: name,
      href: '',
      labels: [],
      items: [
        {
          type: 'link',
          title: 'Introduction',
          href: `/docs/components/core/${name}/introduction`,
          labels: [],
          items: []
        },
        {
          type: 'link',
          title: 'API',
          href: `/docs/components/core/${name}/api`,
          labels: [],
          items: []
        }
      ]
    };
  }

  return {
    type: 'link',
    title: name,
    href: `/docs/components/core/${name}/${hasApi ? 'api' : 'introduction'}`,
    labels: [],
    items: []
  };
}

function createRecipeNavItem(name: string): DocTreeItem {
  return {
    type: 'link',
    title: name,
    href: `/docs/components/recipe/${name}`,
    labels: [],
    items: []
  };
}

// Generate navigation items for core components
