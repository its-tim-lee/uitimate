// this is the enviornment for the Storybook canvas
import './global.scss';
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
export const decorators = [listenSidebarTogglingInCanvas];