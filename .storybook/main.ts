import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
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
