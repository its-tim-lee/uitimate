import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content, VersatileTabs2List, VersatileTabs2Trigger } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./DropdownMenu.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="dropdownmenu-demo"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 variant="underline" defaultValue="dropdownmenu-mix1">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="dropdownmenu-mix1">Common</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="dropdownmenu-mix2">Checkbox & Radio</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="dropdownmenu-mix1" demoId="dropdownmenu-mix1" />
        <VersatileTabs2Content value="dropdownmenu-mix2" demoId="dropdownmenu-mix2" />
      </VersatileTabs2>


    </>
  )
}