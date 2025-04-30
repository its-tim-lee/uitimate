import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc";
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Popover.meta";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="popover-open-control"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="popover-demo" variant="underline">
        <VersatileTabs2Content value="popover-demo" demoId="popover-demo" />
      </VersatileTabs2>


      <DemoRecipeSection />
      <VersatileTabs2 defaultValue="date-picker" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="date-picker">Date Picker</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="calendar-date-range-picker">Range Picker</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="combobox">Combobox</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="date-picker" demoId="date-picker" />
        <VersatileTabs2Content value="calendar-date-range-picker" demoId="calendar-date-range-picker" />
        <VersatileTabs2Content value="combobox" demoId="combobox" />
      </VersatileTabs2>


    </>
  )
}