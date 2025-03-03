import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // TODO: Caveat: this can only open VSC, not Cursor,
    // so the compromise can be showing the code on the Storybook UI
    "storybook-addon-source-link",
    'storybook-dark-mode',
    '@storybook/addon-themes'
  ],
  core: {
    builder: {
      name: '@storybook/builder-vite', // this enables us to configure vite manually
      options: {
        viteConfigPath: './.storybook/vite.config.ts'
      }
    }
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
