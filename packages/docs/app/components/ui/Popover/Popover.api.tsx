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
      <VersatileTabs2 defaultValue="calendar-date-picker" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="calendar-date-picker">Date Picker</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="calendar-date-range-picker">Range Picker</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="combobox-demo">Combobox</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="calendar-date-picker" demoId="calendar-date-picker" />
        <VersatileTabs2Content value="calendar-date-range-picker" demoId="calendar-date-range-picker" />
        <VersatileTabs2Content value="combobox-demo" demoId="combobox-demo" />
      </VersatileTabs2>


      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/popover" target="_blank" rel="noopener noreferrer">@radix-ui/react-popover</Link>
    </>
  )
}