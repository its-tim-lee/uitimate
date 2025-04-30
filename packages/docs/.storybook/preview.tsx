// this is the enviornment for the Storybook canvas
import React from 'react';
import '#/style/index.css';
import { type Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { withThemeByClassName } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Toaster } from '#/components/ui/Toast/Toast';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    /**
     * This only applies when Argos is going to take a snapshot of any story,
     * and the way it works is that depends on the number of modes declared below,
     * it will take a snapshot for each mode.
     *
     * eg., for the case of dark/light mode:
     * before it takes the snapshot of a story in dark mode,
     * it'd first manipulate the theme global variable injected by the `withThemeByClassName` addon,
     * and then take the snapshot.
     */
    argos: {
      modes: {
        light: {
          theme: '',
        },
        dark: {
          theme: 'dark',
        }
      }
    },
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

const withToaster = (Story: any) => (
  <>
    <Toaster />
    <Story />
  </>
);

export const decorators = [
  withToaster,
  /**
   * In strict mode, React will call many things twice to find out accidental impurities:
   * - The component function
   * - `useState`
   *   - Initializer function
   *   - Updater function
   */
  withStrictMode,
  listenSidebarTogglingInCanvas,
  /**
   * this will add a "theme" global variable
   */
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark', // the value here is the class name that will be applied to the HTML element when the theme is switched to dark
    },
    defaultTheme: 'light',
  }),
];