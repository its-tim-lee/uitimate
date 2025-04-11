import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Icon.meta.tsx";
import { Link } from "react-router";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
export default () => {
  return (
    <>

      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <Heading size="h2" id="usage">
        <HeadingTitle>Usage</HeadingTitle>
        <HeadingSubtitle>How you can play this component.</HeadingSubtitle>
      </Heading>
      <ComponentPageUsage
        demoId="icon-size"
      />

      <br />
      <br />

      <Heading size="h2" id="demo-scenarios">
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

      <Heading size="h2" id="dependencies">
        <HeadingTitle>Dependencies</HeadingTitle>
        <HeadingSubtitle>Below lists out the 3rd-party libaries that this component depends on.</HeadingSubtitle>
      </Heading>


      <Link className="tw:link tw:w-fit" to="https://iconify.design/docs/icon-components/react/" target="_blank" rel="noopener noreferrer">@iconify/react</Link>
      <br />
      <br />
    </>
  )
}