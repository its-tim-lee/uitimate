import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import VersatileTabs from "#/components/internal/VersatileTabs";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Icon.meta.tsx";
import { Link } from "react-router";
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

      <br />
      <br />

      <Heading size="h2">
        <HeadingTitle>Dependencies</HeadingTitle>
        <HeadingSubtitle>Below lists out the 3rd-party libaries that this component depends on.</HeadingSubtitle>
      </Heading>


      <Link className="tw:link tw:w-fit" to="https://iconify.design/docs/icon-components/react/" target="_blank" rel="noopener noreferrer">@iconify/react</Link>
      <br />
      <br />
    </>
  )
}