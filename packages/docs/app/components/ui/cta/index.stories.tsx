// import Ratings from "../../demo/cta-ratings.tsx";
// import BadgeOnIcon from "../../demo/cta-badge-on-icon.tsx";
// import BadgeOnIconEdgeCase from "../../demo/cta-edge-case-badge-on-icon.tsx";
// import ButtonRoundedBadge from "../../demo/cta-rounded-badge.tsx";
// import CtaAll from "../../demo/cta-all";
// import CtaProgress from "../../demo/button-progress.tsx";
// import CtaDial from "../../demo/button-dial.tsx";
// import BadgeAPIDoc from "@/components/demo/badge-apidoc.tsx";
// import ButtonIncludeBadge from "../../demo/button-include-badge.tsx";
// import ButtonSearch from "../../demo/button-search.tsx";
// import Button3Sizes from "../../demo/button-3sizes.tsx";
// import ButtonAnchorIcon from "../../demo/button-anchor-icon.tsx";
// import Cta6Variants from "../../demo/button-6variants.tsx";
// import ButtonSwitch from "../../demo/button-switch.tsx";
// import ToggleButton from "../../demo/button-toggle.tsx";
// import ToggleGroupSingleSelection from "../../demo/button-group-single-selection.tsx";
// import ToggleGroupMultipleSelection from "../../demo/button-group-multiple-selection.tsx";
// import CtaCommandInstruction from "../../demo/cta-command-instruction.tsx";
export default {
  title: 'Example/Cta',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// export const DEMO = {
//   name: 'Edge Cases / All',
//   render: () => CtaAll()
// };

// export const Variant2 = {
//   name: 'API / 6 Variants',
//   render: () => <Cta6Variants />
// };

// // TBD: using asChild doesn't always mean you want it to be muted
// // This is where you can use stuff like Next.js Link
// export const Variant8 = {
//   name: 'API / Anchor',
//   render: () => <ButtonAnchorIcon />
// };

// export const Variant9 = {
//   name: 'API / 3 Sizes',
//   render: () => <Button3Sizes />

// };

// export const Variant3 = {
//   name: 'Scenario / Progress Button', // Tag: disabled, loading
//   render: () => <CtaProgress />
// };

// export const Variant4 = {
//   name: 'Scenario / Switch Button',
//   render: () => <ButtonSwitch />
// };

// // TBD: Doc: it's totally not worth it to expose this as API
// export const RoundedBadge = { // Tag: search-button
//   name: 'Scenario / Pill Badge',
//   render: () => <ButtonRoundedBadge />
// }

// // Doc: rounded Button
// export const Variant10 = { // Tag: search-button
//   name: 'Scenario / Search Button',
//   render: () => <ButtonSearch />
// }

// // Doc: remove so many effects (eg., cursor pointer, hover effect, ...)
// // Muted Badge
// export const MutedBadge = { // Tag: api-doc
//   name: 'Scenario / API Doc',
//   render: () => <BadgeAPIDoc />
// };

// // Tag: meta-info in button
// export const BadgeInButton = { // Nested Cta: Badge in button
//   name: 'Scenario / Meta-info Button',
//   render: () => <ButtonIncludeBadge />
// };

// // Doc: parent don't want to be hovered, and only child want to be hovered, and when hovering, don't affect to parent
// export const ButtonInBadge = { // Nested Cta: Button in badge
//   name: 'Scenario / Command Instruction',
//   render: () => <CtaCommandInstruction />
// };

// export const Variant12 = {
//   name: 'Scenario / Circle Button',
//   render: () => <CtaDial />
// };
// // Doc: you can only fully control the toggling status, which is a need when implementing a toggle group
// export const Variant13 = {
//   name: 'API / Togglable Button',
//   render: () => <ToggleButton />
// };

// export const Variant15 = {
//   name: 'Scenario / Toggle Group (Single Selection)',
//   render: () => <ToggleGroupSingleSelection />
// };

// export const Variant16 = {
//   name: 'Scenario / Toggle Group (Multiple Selection)',
//   render: () => <ToggleGroupMultipleSelection />
// };

// export const Variant17 = {
//   name: 'Scenario / Badge on Icon',
//   render: () => <BadgeOnIcon />
// };

// export const Variant18 = {
//   name: 'Edge Case / Badge on Icon',
//   render: () => <BadgeOnIconEdgeCase />
// };

// export const Variant19 = {
//   name: 'Scenario / Ratings',
//   render: () => <Ratings />
// };