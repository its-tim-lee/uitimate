import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc";
import VersatileTabs from "#/components/internal/VersatileTabs";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Popover.meta";
import ComponentPageHero from "#/components/internal/ComponentPageHero";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title="API" subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="popover-open-control"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Github notification",
            type: "preview",
            demoId: "popover-demo",
          }
        ]}
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
          }
        ]}
      />
      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/popover" target="_blank" rel="noopener noreferrer">@radix-ui/react-popover</Link>
    </>
  )
}