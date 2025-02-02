// this is the enviornment for the Storybook canvas
import React from 'react';
import './../helpers/styles/index.css';
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
};

export default preview;

import { listenSidebarTogglingInCanvas } from './lib/toggling-sidebar';

const withStrictMode = (Story) => {
  return React.createElement(
    React.StrictMode,
    null,
    React.createElement(Story, null)
  );
};

export const decorators = [
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