import type { Meta, StoryObj } from '@storybook/react';
import * as CtaStories from './Cta.stories.tsx';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'QA/Cta',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const EdgeCasesAll = CtaStories.DEMO;
export const SixVariants = CtaStories.Variant2;
export const Anchor = CtaStories.Variant8;
export const ThreeSizes = CtaStories.Variant9;
export const SwitchButton = CtaStories.Variant4;
export const PilledBadge = CtaStories.RoundedBadge;
export const MutedBadge = CtaStories.MutedBadge;
export const BadgeInButton = CtaStories.BadgeInButton;
export const ButtonInBadge = CtaStories.ButtonInBadge;
export const SearchButton = CtaStories.Variant10;
export const CircleButton = CtaStories.Variant12;
export const ToggleGroup: StoryObj = {
  render: CtaStories.Variant15.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstButton = canvas.getAllByRole('button')[0];
    await userEvent.click(firstButton);
  }
};
export const BadgeOnIcon = CtaStories.Variant17;