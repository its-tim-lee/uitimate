/**
 * #2025-04-01
 * HACK: Workaround before RR integrated with RSC
 * Basically, the current implementation of `loader` in a route can't return the result that contains the component,
 * but that's literally what we need.
 * For more info: see https://github.com/remix-run/remix/discussions/8048
 */
import React from 'react';
import type { DocTreeItem } from '../data/site';


export type CoreComponentKey = `${string}/${string}`;
type ComponentRegistry = {
  core: Record<CoreComponentKey, React.ComponentType>;
  recipe: Record<string, React.ComponentType>;
};

/**
 * WARN:
 * for some reasons, path alias can't work with `meta.glob`,
 * (the filtered components will always be empty)
 * but at least it still allows the filtered files to use path alias
 */
const coreComponents = import.meta.glob('./../components/ui/**/*.{api,introduction}.tsx', { eager: true, import: 'default', });
const recipeComponents = import.meta.glob('./../components/demo/recipe/*.tsx', { eager: true, import: 'default', });

export const componentRegistry: ComponentRegistry = { core: {}, recipe: {} };
export const componentUris: string[] = [];

// Process core components
Object.entries(coreComponents).forEach(([path, component]) => {
  const parts = path.split('/');
  const name = parts[parts.length - 2].toLowerCase(); // component directory name, eg., "cta"
  const filename = parts[parts.length - 1]; // eg., "Cta.api.tsx"
  const pageMatch = filename.match(/\.?(api|introduction)\.tsx$/);
  if (!pageMatch) return;
  const page = pageMatch[1].toLowerCase(); // eg., "api"

  componentRegistry.core[`${name}/${page}`] = component as React.ComponentType;
  componentUris.push(`/docs/components/core/${name}/${page}`);
});

// Process recipe components
Object.entries(recipeComponents).forEach(([path, component]) => {
  const parts = path.split('/');
  const name = parts[parts.length - 1].replace('.tsx', '').toLowerCase(); // eg., result: "cta-ratings"
  componentRegistry.recipe[name] = component as React.ComponentType;
  componentUris.push(`/docs/components/recipe/${name}`);
});

// Generate Core items for site navigation
export const coreItems: DocTreeItem[] = [];
export const recipeItems: DocTreeItem[] = [];

// Track which components have which pages
const componentPages = new Map<string, Set<string>>();

// Process core components for navigation
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

// Process recipe components for navigation
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
