// this is the enviornment for the Storybook canvas
import React from 'react';
import '#/style/index.css';
import { type Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
      light: { ...themes.normal, appBg: 'white' }
    }
  },
  // args: {
  //   onArgsChange: (args: any) => {
  //     console.log('Controls changed:', args);
  //   },
  // },
};


export default preview;

import { listenSidebarTogglingInCanvas } from './lib/toggling-sidebar';

const withStrictMode = (Story: any) => <React.StrictMode><Story /></React.StrictMode>;



export const decorators = [
  /**
   * In strict mode, React will call many things twice to find out accidental impurities:
   * - The component function
   * - `useState`
   *   - Initializer function
   *   - Updater function
   */
  withStrictMode,
  listenSidebarTogglingInCanvas,
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];