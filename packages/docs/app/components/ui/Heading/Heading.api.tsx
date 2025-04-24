import {
  DemoScenariosSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content, VersatileTabs2List, VersatileTabs2Trigger } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Heading.meta.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="heading-demo"
        enableHeading
        anatomy={meta.anatomy}
      />

      <DemoScenariosSection />
      <VersatileTabs2
        variant="underline"
        defaultValue="heading-6levels"
      >
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="heading-6levels">6 Levels</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="heading-only-title">Only Title</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="heading-article">Article</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="heading-card">Card</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="heading-alert">Alert</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="heading-6levels" demoId="heading-6levels" />
        <VersatileTabs2Content value="heading-only-title" demoId="heading-only-title" />
        <VersatileTabs2Content value="heading-article" demoId="heading-article" />
        <VersatileTabs2Content value="heading-card" demoId="heading-card" />
        <VersatileTabs2Content value="heading-alert" demoId="heading-alert" />
      </VersatileTabs2>

    </>
  );
};