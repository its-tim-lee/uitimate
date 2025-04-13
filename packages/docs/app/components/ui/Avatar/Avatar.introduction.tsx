import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import meta from "./Avatar.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={meta.description} />

      <br />

      <QuickDemoSection
      />

      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "avatar-demo",
          },
        ]}
      />



    </>
  )
}