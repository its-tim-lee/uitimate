import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "./Heading";
import VersatileTabs from "../../internal/VersatileTabs";
import ComponentPageUsage from "../../internal/ComponentPageUsage";

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
        <HeadingSubtitle>Heading is a title and an optional subtitle blend together to form the concept of "heads up” for readers that getting more attention than the normal text.</HeadingSubtitle>
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
        <HeadingTitle>DEMO/API</HeadingTitle>
        <HeadingSubtitle>This tries to show all the API/Component usages.</HeadingSubtitle>
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
        <HeadingTitle>DEMO/Scenario</HeadingTitle>
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