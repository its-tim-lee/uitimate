import CtaPossibleShapes from "#/components/demo/cta-possible-shapes.tsx";
import Ratings from "#/components/demo/cta-ratings.tsx";
import BadgeOnIcon from "#/components/demo/cta-badge-on-icon.tsx";
import BadgeOnIconEdgeCase from "#/components/demo/cta-edge-case-badge-on-icon.tsx";
import ButtonRoundedBadge from "#/components/demo/cta-rounded-badge.tsx";
import CtaAll from "#/components/demo/cta-all";
import CtaProgress from "#/components/demo/button-progress.tsx";
import CtaDial from "#/components/demo/button-dial.tsx";
import BadgeAPIDoc from "#/components/demo/badge-apidoc.tsx";
import ButtonIncludeBadge from "#/components/demo/button-include-badge.tsx";
import ButtonSearch from "#/components/demo/button-search.tsx";
import Button3Sizes from "#/components/demo/button-3sizes.tsx";
import ButtonAnchorIcon from "#/components/demo/button-anchor-icon.tsx";
import Cta6Variants from "#/components/demo/button-6variants.tsx";
import ButtonSwitch from "#/components/demo/button-switch.tsx";
import ToggleButton from "#/components/demo/button-toggle.tsx";
import ToggleGroupSingleSelection from "#/components/demo/button-group-single-selection.tsx";
import ToggleGroupMultipleSelection from "#/components/demo/button-group-multiple-selection.tsx";
import CtaCommandInstruction from "#/components/demo/cta-command-instruction.tsx";
import type { Meta } from '@storybook/react';

export default {
  title: 'Example/Cta',
  // includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const DEMO = {
  name: 'Edge Cases / All',
  render: () => <CtaAll />
};

export const Variant2 = {
  name: 'API / 6 Variants',
  render: () => <Cta6Variants />
};

export const Variant8 = {
  name: 'API / Anchor',
  render: () => <ButtonAnchorIcon />
};

export const Variant9 = {
  name: 'API / 3 Sizes',
  render: () => <Button3Sizes />
};

export const Variant3 = {
  name: 'Scenario / Progress Button',
  render: () => <CtaProgress />
};

export const Variant4 = {
  name: 'Scenario / Switch Button',
  render: () => <ButtonSwitch />
};

export const RoundedBadge = {
  name: 'Scenario / Pill Badge',
  render: () => <ButtonRoundedBadge />
};

export const Variant10 = {
  name: 'Scenario / Search Button',
  render: () => <ButtonSearch />
};

export const MutedBadge = {
  name: 'Scenario / API Doc',
  render: () => <BadgeAPIDoc />
};

/**
 * This happens to be an interesting case:
 * a nested Cta － a badge in a button
 */
export const BadgeInButton = {
  name: 'Scenario / Meta-info Button',
  render: () => <ButtonIncludeBadge />
};

/**
 * This happens to be an interesting case:
 * a nested Cta － a button in a badge
 */
export const ButtonInBadge = {
  name: 'Scenario / Command Instruction',
  render: () => <CtaCommandInstruction />
};

export const Variant12 = {
  name: 'Scenario / Circle Button',
  render: () => <CtaDial />
};

export const Variant13 = {
  name: 'API / Togglable Button',
  render: () => <ToggleButton />
};

export const Variant15 = {
  name: 'Scenario / Toggle Group (Single Selection)',
  render: () => <ToggleGroupSingleSelection />
};

export const Variant16 = {
  name: 'Scenario / Toggle Group (Multiple Selection)',
  render: () => <ToggleGroupMultipleSelection />
};

export const Variant17 = {
  name: 'Scenario / Badge on Icon',
  render: () => <BadgeOnIcon />
};

export const Variant18 = {
  name: 'Edge Case / Badge on Icon',
  render: () => <BadgeOnIconEdgeCase />
};

export const Variant19 = {
  name: 'Recipe / Ratings',
  render: () => <Ratings />
};

export const Variant20 = {
  name: 'Doc / Possible Shapes',
  render: () => <CtaPossibleShapes />
};