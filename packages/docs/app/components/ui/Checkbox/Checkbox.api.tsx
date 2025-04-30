import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content, VersatileTabs2List, VersatileTabs2Trigger } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="checkbox-demo"
        enableHeading
      />


      <DemoScenariosSection />
      <VersatileTabs2 variant="underline" defaultValue="checkbox-2-label-orientations">
        <VersatileTabs2Content value="checkbox-2-label-orientations" demoId="checkbox-2-label-orientations" />
      </VersatileTabs2>

    </>
  );
}