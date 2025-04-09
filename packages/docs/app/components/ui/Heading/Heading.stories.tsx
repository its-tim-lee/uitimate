import HeadingAlert from "#/components/demo/heading-alert.tsx";
import Heading6Levels from "#/components/demo/heading-6levels.tsx";
import HeadingOnlyTitle from "#/components/demo/heading-only-title.tsx";
import HeadingArticle from "#/components/demo/heading-article.tsx";
import HeadingCard from "#/components/demo/heading-card.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/Heading',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

/**
 * #202504092
 */
export const Variant1 = {
  name: 'API / 6 Levels',
  render: () => <Heading6Levels />
};

/**
 * #202504091
 */
export const Variant2 = {
  name: 'API / Only title',
  render: () => <HeadingOnlyTitle />
};

export const Variant3 = {
  name: 'Scenario / Article',
  render: () => <HeadingArticle />
};

export const Variant4 = {
  name: 'Scenario / Card',
  render: () => <HeadingCard />
}

export const FigmaAlert = {
  name: 'Figma / Alert',
  render: () => <HeadingAlert />
}