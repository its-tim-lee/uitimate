/**
 * #2025-04-01
 * HACK: Workaround before RR integrated with RSC
 * Basically, the current implementation of `loader` in a route can't return the result that contains the component,
 * but that's literally what we need.
 * For more info: see https://github.com/remix-run/remix/discussions/8048
 */
import React from 'react';
import { orderBy } from 'lodash-es';
import type { DocTreeItem } from '../data/site';
import { allDocs } from '#/lib/contentlayer';
import { casing } from './utils';

export type CoreComponentKey = `${string}/${string}`;
type ComponentRegistry = {
  core: Record<CoreComponentKey, React.ComponentType>;
  recipe: Record<string, React.ComponentType>;
  changelog: Record<string, string>;
};

/**
 * WARN: #2025-04-29A
 * for some reasons, path alias can't work with `meta.glob`,
 * (the filtered components will always be empty)
 * but at least it still allows the filtered files to use path alias
 */


const ALLOWED_MDX_FILE_TYPES = ['introduction', 'api', 'tutorial', 'setup'] as const;
export const POSSIBLE_PAGES_FOR_CORE_COMPONENT = [...ALLOWED_MDX_FILE_TYPES, 'changelog'] as const;
/**
  * eg., the `coreComponentHasWhatPages` can have the item that has the most pages as:
  * {
  *   cta: new Set(['api', 'introduction', 'changelog', 'tutorial', 'setup']),
  *   ...
  * }
 */
const coreComponentHasWhatPages = new Map<string, Set<typeof POSSIBLE_PAGES_FOR_CORE_COMPONENT[number]>>();

export const componentRegistry: ComponentRegistry = { core: {}, recipe: {}, changelog: {} };
export const componentUris: string[] = [];

// #2025-04-29A
const coreComponents = import.meta.glob('./../components/ui/**/*.{api,introduction}.tsx', { eager: true, import: 'default', });
// Process core components
Object.entries(coreComponents).forEach(([path, component]) => {
  const parts = path.split('/');
  const componentName = casing.kebabCase(parts[parts.length - 2]); // eg., "dropdown-menu"
  const filename = parts[parts.length - 1]; // eg., "Cta.api.tsx"
  const pageMatch = filename.match(/\.?(api|introduction)\.tsx$/);
  if (!pageMatch) return;
  const page = casing.lowerCase(pageMatch[1]) as Extract<typeof POSSIBLE_PAGES_FOR_CORE_COMPONENT[number], 'api' | 'introduction'>; // eg., "api" or "introduction"

  componentRegistry.core[`${componentName}/${page}`] = component as React.ComponentType;
  componentUris.push(`/docs/components/core/${componentName}/${page}`);
  if (!coreComponentHasWhatPages.has(componentName)) {
    coreComponentHasWhatPages.set(componentName, new Set());
  }
  coreComponentHasWhatPages.get(componentName)?.add(page);
});

// #2025-04-29A
const recipeComponents = import.meta.glob('./../components/demo/recipe/*.tsx', { eager: true, import: 'default', });
// Process recipe components
Object.entries(recipeComponents).forEach(([path, component]) => {
  const parts = path.split('/');
  const componentName = casing.kebabCase(parts[parts.length - 1].replace('.tsx', '')); // eg., result: "cta-ratings"
  if (componentName) {
    componentRegistry.recipe[componentName] = component as React.ComponentType;
    componentUris.push(`/docs/components/recipe/${componentName}`);
  }
});

// #2025-04-29A
const changelogs = import.meta.glob('./../components/ui/**/CHANGELOG.md', { eager: true, as: 'raw' });
// Process changelog files
Object.entries(changelogs).forEach(([path, content]) => {
  const parts = path.split('/');
  const componentName = casing.kebabCase(parts[parts.length - 2]); // eg., "dropdown-menu"
  if (componentName) {
    componentRegistry.changelog[componentName] = content
    componentUris.push(`/docs/components/core/${componentName}/changelog`);
    if (!coreComponentHasWhatPages.has(componentName)) {
      coreComponentHasWhatPages.set(componentName, new Set());
    }
    coreComponentHasWhatPages.get(componentName)?.add('changelog');
  }
});

// Add meta registry to store component meta information
const metaRegistry: Record<string, { tags?: { root?: string[], tutorial?: string[] } }> = {};
// #2025-04-29A
export const componentMeta = import.meta.glob('./../components/ui/**/*.meta.tsx', { eager: true, import: 'default', });
// Process meta files
Object.entries(componentMeta).forEach(([path, meta]) => {
  const parts = path.split('/');
  const componentName = casing.kebabCase(parts[parts.length - 2]); // eg., "dropdown-menu"
  if (componentName && meta && typeof meta === 'object' && 'tags' in meta) {
    metaRegistry[componentName] = meta as { tags?: { root?: string[], tutorial?: string[] } };
  }
});

// Generate Core items for site navigation
export const coreItems: DocTreeItem[] = [];
export const recipeItems: DocTreeItem[] = [];

// Process MDX files from contentlayer for navigation
// This ensures MDX files are included in the sidebar
allDocs.forEach(doc => {
  const componentName = casing.kebabCase(doc.component?.toLowerCase()); // eg., dropdown-menu
  if (!componentName) return;

  const fileType = casing.lowerCase(doc._raw?.flattenedPath?.split('.')?.[1]) as typeof ALLOWED_MDX_FILE_TYPES[number]; // e.g., "introduction", "api", "tutorial", or "setup"
  if (!fileType || !ALLOWED_MDX_FILE_TYPES.includes(fileType as typeof ALLOWED_MDX_FILE_TYPES[number])) return;
  if (!coreComponentHasWhatPages.has(componentName)) {
    coreComponentHasWhatPages.set(componentName, new Set());
  }
  coreComponentHasWhatPages.get(componentName)?.add(fileType);
  componentUris.push(`/docs/components/core/${componentName}/${fileType}`);
});

coreComponentHasWhatPages.forEach((pages, componentName) => {
  coreItems.push(createComponentNavItem(componentName, pages));
});

// Process recipe components for navigation
Object.keys(componentRegistry.recipe).forEach(name => {
  recipeItems.push(createRecipeNavItem(name));
});

// Sort the arrays alphabetically by title
coreItems.splice(0, coreItems.length, ...orderBy(coreItems, ['title'], ['asc']));
recipeItems.splice(0, recipeItems.length, ...orderBy(recipeItems, ['title'], ['asc']));

function createComponentNavItem(
  coreComponentName: string,
  pages: Set<typeof POSSIBLE_PAGES_FOR_CORE_COMPONENT[number]>
): DocTreeItem {
  const items: DocTreeItem[] = [];
  const meta = metaRegistry[coreComponentName];

  if (pages.has('setup')) {
    items.push({
      type: 'link' as const,
      title: 'Setup',
      href: `/docs/components/core/${coreComponentName}/setup`,
      labels: [],
      items: []
    });
  }

  if (pages.has('introduction')) {
    items.push({
      type: 'link' as const,
      title: 'Introduction',
      href: `/docs/components/core/${coreComponentName}/introduction`,
      labels: [],
      items: []
    });
  }

  if (pages.has('tutorial')) {
    items.push({
      type: 'link' as const,
      title: 'Tutorial',
      href: `/docs/components/core/${coreComponentName}/tutorial`,
      labels: [],
      items: [],
      // Only add tutorial tags to the tutorial page
      tags: meta?.tags?.tutorial ? { tutorial: meta.tags.tutorial } : undefined
    });
  }

  if (pages.has('api')) {
    items.push({
      type: 'link' as const,
      title: 'API',
      href: `/docs/components/core/${coreComponentName}/api`,
      labels: [],
      items: []
    });
  }

  if (pages.has('changelog')) {
    items.push({
      type: 'link' as const,
      title: 'Changelog',
      href: `/docs/components/core/${coreComponentName}/changelog`,
      labels: [],
      items: []
    });
  }

  return {
    type: 'collapsible' as const,
    title: casing.camelCase(coreComponentName),
    href: '',
    labels: [],
    items,
    // Only add root tags to the collapsible parent
    tags: meta?.tags?.root ? { root: meta.tags.root } : undefined
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
