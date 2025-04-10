import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import VersatileTabs from "#/components/internal/VersatileTabs";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./meta";

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
        demoId="icon-size"
      />

      <br />
      <br />

      <Heading size="h2">
        <HeadingTitle>DEMO / Scenario</HeadingTitle>
        <HeadingSubtitle>This lists common real-world use cases.</HeadingSubtitle>
      </Heading>
      <VersatileTabs
        settings={[
          {
            title: "Search",
            type: "preview",
            demoId: "icon-demo",
          },
        ]}
      />


    </>
  )
}