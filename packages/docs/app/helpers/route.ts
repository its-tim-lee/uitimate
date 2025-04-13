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
  changelog: Record<string, string>;
};

/**
 * WARN:
 * for some reasons, path alias can't work with `meta.glob`,
 * (the filtered components will always be empty)
 * but at least it still allows the filtered files to use path alias
 */
const coreComponents = import.meta.glob('./../components/ui/**/*.{api,introduction}.tsx', { eager: true, import: 'default', });
const recipeComponents = import.meta.glob('./../components/demo/recipe/*.tsx', { eager: true, import: 'default', });
const changelogs = import.meta.glob('./../components/ui/**/CHANGELOG.md', { eager: true, as: 'raw' });

export const componentRegistry: ComponentRegistry = { core: {}, recipe: {}, changelog: {} };
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

// Process changelog files
Object.entries(changelogs).forEach(([path, content]) => {
  const parts = path.split('/');
  const name = parts[parts.length - 2].toLowerCase(); // component directory name, eg., "cta"
  if (name) {
    componentRegistry.changelog[name] = content
    componentUris.push(`/docs/components/core/${name}/changelog`);
  }
});
// Generate Core items for site navigation
export const coreItems: DocTreeItem[] = [];
export const recipeItems: DocTreeItem[] = [];

// Track which components have which pages
const componentPages = new Map<string, Set<string>>();

// Process core components for navigation
// eg., the `componentPages` will be like:
// {
//   cta: new Set(['api', 'introduction']),
//   ...
// }
//
Object.keys(componentRegistry.core).forEach(key => {
  const [name, page] = key.split('/');
  if (!componentPages.has(name)) {
    componentPages.set(name, new Set());
  }
  componentPages.get(name)?.add(page);
});

// Add changelog pages to navigation
// eg., the `componentPages` will be like:
// {
//   cta: new Set(['api', 'introduction', 'changelog']),
//   ...
// }
//
Object.keys(componentRegistry.changelog).forEach(name => {
  if (!componentPages.has(name)) {
    componentPages.set(name, new Set());
  }
  componentPages.get(name)?.add('changelog');
});

componentPages.forEach((pages, name) => {
  coreItems.push(createComponentNavItem(name, pages));
});

// Process recipe components for navigation
Object.keys(componentRegistry.recipe).forEach(name => {
  recipeItems.push(createRecipeNavItem(name));
});

function createComponentNavItem(name: string, pages: Set<string>): DocTreeItem {
  const items: DocTreeItem[] = [];

  if (pages.has('introduction')) {
    items.push({
      type: 'link' as const,
      title: 'Introduction',
      href: `/docs/components/core/${name}/introduction`,
      labels: [],
      items: []
    });
  }

  if (pages.has('api')) {
    items.push({
      type: 'link' as const,
      title: 'API',
      href: `/docs/components/core/${name}/api`,
      labels: [],
      items: []
    });
  }

  if (pages.has('changelog')) {
    items.push({
      type: 'link' as const,
      title: 'Changelog',
      href: `/docs/components/core/${name}/changelog`,
      labels: [],
      items: []
    });
  }

  return {
    type: 'collapsible' as const,
    title: name,
    href: '',
    labels: [],
    items
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
