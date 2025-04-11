import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "./Heading.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Heading.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />


      <br />

      <Heading size="h2">
        <HeadingTitle>Usage</HeadingTitle>
        <HeadingSubtitle>How you can play this component.</HeadingSubtitle>
      </Heading>
      <ComponentPageUsage
        demoId="heading-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <Heading size="h2">
        <HeadingTitle>DEMO / API</HeadingTitle>
        <HeadingSubtitle>This tries to show all the API/Component usages, but this can be insufficient/impossible in some cases, and we'd then use "DEMO / Scenario" (see that section below on this page) to express.</HeadingSubtitle>
      </Heading>
      <VersatileTabs
        settings={[
          {
            title: "4 Levels",
            type: "preview",
            demoId: "heading-6levels",
          },
          {
            title: "Only Title",
            type: "preview",
            demoId: "heading-only-title",
          },
        ]}
      />

      <br />
      <br />

      <Heading size="h2">
        <HeadingTitle>DEMO /  Scenario</HeadingTitle>
        <HeadingSubtitle>This lists common real-world use cases.</HeadingSubtitle>
      </Heading>
      <VersatileTabs
        settings={[
          {
            title: "Article",
            type: "preview",
            demoId: "heading-article",
          },
          {
            title: "Card",
            type: "preview",
            demoId: "heading-card",
          },
          {
            title: "Alert",
            type: "preview",
            demoId: "heading-alert",
          },
        ]}
      />

      <br />
      <br />
    </>
  );
};