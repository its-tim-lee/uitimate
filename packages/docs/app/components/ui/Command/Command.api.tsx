import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Command.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="command-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Command Dialog",
            type: "preview",
            demoId: "command-dialog",
          }
        ]}
      />
      <br />
      <br />
      <DemoRecipeSection />
      <VersatileTabs
        settings={[
          {
            title: "Combobox",
            type: "preview",
            demoId: "combobox-demo",
          }
        ]}
      />
      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://github.com/pacocoursey/cmdk" target="_blank" rel="noopener noreferrer">cmdk</Link>
    </>
  )
}