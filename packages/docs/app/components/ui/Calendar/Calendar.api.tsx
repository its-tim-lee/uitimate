import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { Link } from "react-router";
import { VersatileTabs2, VersatileTabs2Content, VersatileTabs2List, VersatileTabs2Trigger } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="calendar-demo"
        enableHeading
      />

      <DemoRecipeSection />
      <VersatileTabs2 defaultValue="calendar-date-picker" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="calendar-date-picker">Date Picker</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="calendar-date-range-picker">Range Picker</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="calendar-date-picker" demoId="calendar-date-picker" />
        <VersatileTabs2Content value="calendar-date-range-picker" demoId="calendar-date-range-picker" />
      </VersatileTabs2>


    </>
  )
}