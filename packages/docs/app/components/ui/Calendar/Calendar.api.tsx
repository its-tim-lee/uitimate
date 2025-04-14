import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Calendar.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="calendar-demo"
      />

      <br />
      <br />
      <DemoRecipeSection />
      <VersatileTabs
        settings={[
          {
            title: "Date Picker",
            type: "preview",
            demoId: "calendar-date-picker",
          },
          {
            title: "Date Range Picker",
            type: "preview",
            demoId: "calendar-date-range-picker",
          },
        ]}
      />
      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://react-day-picker.js.org/" target="_blank" rel="noopener noreferrer">react-day-picker</Link>
    </>
  )
}