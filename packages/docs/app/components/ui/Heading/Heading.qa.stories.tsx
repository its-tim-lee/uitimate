import HeadingAlert from "#/components/demo/heading-alert.tsx";
import Heading6Levels from "#/components/demo/heading-6levels.tsx";
import HeadingOnlyTitle from "#/components/demo/heading-only-title.tsx";
import HeadingArticle from "#/components/demo/heading-article.tsx";
import HeadingCard from "#/components/demo/heading-card.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'QA/Heading',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

/**
 * #202504092
 */
export const SixLevels = {
  render: () => <Heading6Levels />
};

/**
 * #202504091
 */
export const OnlyTitle = {
  render: () => <HeadingOnlyTitle />
};

export const Article = {
  render: () => <HeadingArticle />
};

export const Card = {
  render: () => <HeadingCard />
}

export const Alert = {
  render: () => <HeadingAlert />
}