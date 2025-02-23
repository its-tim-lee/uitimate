// this is the enviornment for the Storybook canvas
import React from 'react';
import '@/index.css';
import { type Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  args: {
    onArgsChange: (args: any) => {
      console.log('Controls changed:', args);
    },
  },
};
/**
 * A decorator that:
 *  1) Renders the story’s Docs description (if any) on the Canvas
 *     > This will take JSDoc into the canvas, so if that's not what you want, define `parameters.docs.description.story` on the story to override it
 *  2) Builds a code snippet from the story’s args and shows a copy button
 */
export const withDescriptionAndSnippetOnCanvas = (Story, context) => {
  const description = context.parameters.docs?.description?.story;
  const { args, component } = context;
  const componentName = component?.displayName || component?.name || 'Component';
  const propLines = Object.entries(args)
    .map(([key, val]) => `  ${key}={${JSON.stringify(val)}}`)
    .join('\n');

  const snippet = `<${componentName} ${propLines} />`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
    } catch (error) {
      console.error('Failed to copy snippet:', error);
    }
  };
  return (
    <div className="tw-font-sans tw-p-4">
      {description && (
        <p className="tw:italic tw:mb-2">
          {description}
        </p>
      )}
      <Story />
      <pre className="tw:mt-4 tw:bg-gray-100 tw:p-4 tw:rounded">
        {snippet}
      </pre>
      <button className="tw:mt-4 tw:bg-gray-100 tw:p-4 tw:rounded" onClick={($e) => {
        handleCopy();
        ($e.target as HTMLButtonElement).innerText = 'Code Copied';
      }}>
        Copy Code
      </button>
    </div>
  );
};

export default preview;

import { listenSidebarTogglingInCanvas } from './lib/toggling-sidebar';

const withStrictMode = (Story) => <React.StrictMode><Story /></React.StrictMode>;



export const decorators = [
  withDescriptionAndSnippetOnCanvas,
  /**
   * In strict mode, React will call many things twice to find out accidental impurities:
   * - The component function
   * - `useState`
   *   - Initializer function
   *   - Updater function
   */
  withStrictMode,
  listenSidebarTogglingInCanvas
];