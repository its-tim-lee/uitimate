import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "./Heading.tsx";
import {
  UsageSection,

  DemoScenariosSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Heading.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="heading-demo"
        anatomy={meta.anatomy}
      />


      <br />
      <br />

      <DemoScenariosSection />
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