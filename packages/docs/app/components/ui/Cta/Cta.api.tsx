import { startCase } from "lodash-es";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import VersatileTabs from "#/components/internal/VersatileTabs";


const anatomy = `<Cta/>`;
// // Should allow me to provide a tooltip on this link, cuz Cta is not just a Toggle
const apiLink = "https://www.radix-ui.com/primitives/docs/components/toggle";

export default () => {
  return (
    <>
      <ComponentPageHero

        title={startCase('cta')}
        subtitle="Call-to-action widget that can be a button, badge, or toggle."
        apiLink={apiLink}
      />

      <br />

      <Heading size="h2">
        <HeadingTitle>Usage</HeadingTitle>
        <HeadingSubtitle>How you can play this component.</HeadingSubtitle>
      </Heading>
      <ComponentPageUsage
        demoId="cta-demo"
        anatomy={anatomy}

      />

      <br />
      <br />

      <Heading size="h2">
        <HeadingTitle>Design Notes</HeadingTitle>
        <HeadingSubtitle>The implementation details that some would appreciate.</HeadingSubtitle>
      </Heading>
      <p>
        "Bro, why on earth you merge all of them into one component?" I guess this
        could be the first biggest question you'd rise up. The short answer is:
        becausse you'll love it :) A bit longer answer is: to understand why this
        approach can finally make you incredible productive, you must take a look
        of introduction. For futher questions, head to Q/A.
      </p>

      <br />
      <br />

      <Heading size="h2">
        <HeadingTitle>Introduction</HeadingTitle>
        <HeadingSubtitle>The fastest way you can master this component.</HeadingSubtitle>
      </Heading>

      Cta is a sophisticated component such that you can even decide what it
      should render into (eg., anchor), so it'd be helpful to just think it as
      what its name represented: call-to-action; because it doesn't always need to
      be a button.
      <br />
      What Cta will end up with is determined by 4 factors: size, variant, shape, and
      behavior. Below we demo what these factos are in short:
      <br />
      Regarding sizes, there're 3: sm (small), md (medium), and lg (large), specify
      by `size` prop. (note that, Cta can end up in many kinds of styles, so different
      sizes on those styles might give you different looks and feels; below we only
      show button and badge because right now, we only want you to get a sense of "size"
      would look like)



      Regarding variant, there're 6: (You may think about "variant" is certain
      group of styles if such word is confusing to you)


      Regarding shape, there're 2: icon, badge. Since you can even detemine the
      shape of Cta is the combination of icon and badge, so the prop name is pural
      "shapes" instead of singular "shape". If you don't specify `shapes`, the
      default shape is the normal button.



      Regarding behavior, I'd like to use different way to explain. First, we've
      no problem about button, but what's badge? There're fair amount of design
      situations that a badge shouldn't be an interactable thing like button, but
      roughly speaking, you may imagine a badge can be seens as a thin and
      no-shadow button.

      <br />
      So when a badge is not interactive, we may simply just use the word "badge",
      and when it's just a different style of button, which is interactive, "badge
      button" can be used. But note that, in some designs, a badge can look like a
      plain badge, but in reality, it's rendered as an anchor, which has different
      behavior from a normal plain badge (eg., span) and button.

      <br />
      Just one more thing: Toggle. It's just an advanced button that has some special
      behaviors than the normal button. Cta will be shifted into a Toggle automatically
      when you use Cta like a Toggle:


      To wrap up, if now we want to create a Cta that is 1) rendered as an anchor,
      2) secondary variant, 3) an icon in the shape of badge:

      <br />
      For all other API usage examples, simply review all the demos

      <Heading size="h2">
        <HeadingTitle>Example / API</HeadingTitle>
        <HeadingSubtitle>This tries to show all the API/Component usages.</HeadingSubtitle>
      </Heading>
      <VersatileTabs
        settings={[
          {
            title: "6 Variants",
            type: "preview",
            demoId: "button-6variants",
          },
          {
            title: "Anchor",
            type: "preview",
            demoId: "button-anchor-icon",
          },
          {
            title: "3 Sizes",
            type: "preview",
            demoId: "button-3sizes",
          },
          {
            title: "Toggle Button",
            type: "preview",
            demoId: "button-toggle",
          },
        ]}

      />

      <br />
      <br />

      <Heading size="h2">
        <HeadingTitle>Example / Scenario</HeadingTitle>
        <HeadingSubtitle>This lists common real-world use cases.</HeadingSubtitle>
      </Heading>
      <VersatileTabs
        settings={[
          {
            title: "Progress Button",
            type: "preview",
            demoId: "button-progress",
          },
          {
            title: "Switch Button",
            type: "preview",
            demoId: "button-switch",
          },
          {
            title: "Pill Badge",
            type: "preview",
            demoId: "cta-rounded-badge",
          },
          {
            title: "Search Button",
            type: "preview",
            demoId: "button-search",
          },
          {
            title: "API Doc",
            type: "preview",
            demoId: "badge-apidoc",
          },
          {
            title: "Meta-info Button",
            type: "preview",
            demoId: "button-include-badge",
          },
          {
            title: "Command Instruction",
            type: "preview",
            demoId: "cta-command-instruction",
          },
          {
            title: "Circle Button",
            type: "preview",
            demoId: "button-dial",
          },
          {
            title: "Toggle Group (Single Selection)",
            type: "preview",
            demoId: "button-group-single-selection",
          },
          {
            title: "Toggle Group (Multiple Selection)",
            type: "preview",
            demoId: "button-group-multiple-selection",
          },
        ]}

      />
    </>
  );
};
