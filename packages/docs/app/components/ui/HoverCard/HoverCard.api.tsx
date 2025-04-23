import meta from './HoverCard.meta.tsx';
import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import {
  VersatileTabs2,
  VersatileTabs2Content,
  VersatileTabs2List,
  VersatileTabs2Trigger
} from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="hovercard-demo"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="hovercard-api-doc" variant="underline">
        <VersatileTabs2Content value="hovercard-api-doc" demoId="hovercard-api-doc" />
      </VersatileTabs2>


      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/hover-card" target="_blank" rel="noopener noreferrer">@radix-ui/react-hover-card</Link>
    </>
  );
}