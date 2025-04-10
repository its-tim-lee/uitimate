import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "./Heading.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Heading.meta.tsx";

const anatomy = `
  <Heading>
    <HeadingTitle/>
    <HeadingSubtitle/>
  </Heading>
`;

export default () => {
  return (
    <>
      <Heading size="h1">
        <HeadingTitle>API</HeadingTitle>
        <HeadingSubtitle>{meta.description}</HeadingSubtitle>
      </Heading>


      <br />

      <Heading size="h2">
        <HeadingTitle>Usage</HeadingTitle>
        <HeadingSubtitle>How you can play this component.</HeadingSubtitle>
      </Heading>
      <ComponentPageUsage
        demoId="heading-demo"
        anatomy={anatomy}
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