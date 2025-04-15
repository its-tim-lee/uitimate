import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Dialog.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="dialog-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Alert Dialog",
            type: "preview",
            demoId: "dialog-alert",
          },
          {
            title: "Undismissable Loading",
            type: "preview",
            demoId: "dialog-loading",
            content: <p>
              There are some cases that you really don't want user to interrupt your dialog (eg., <b className="tw:brand">Discord</b>'s "Downloading update")
              <br />
              <br />
            </p>
          },
          {
            title: "Optional Overlay",
            type: "preview",
            demoId: "dialog-optional-overlay",
          },
          {
            title: "Modal Dialog",
            type: "preview",
            demoId: "dialog-modal-a",
          },
          {
            title: "Scrollable Content",
            type: "preview",
            demoId: "dialog-scroll",
          },
        ]}
      />
      <br />
      <br />

      <DependenciesSection />
      <span>
        The dialog component from <Link className="tw:link tw:w-fit" to="https://headlessui.com/react/dialog" target="_blank" rel="noopener noreferrer">@headlessui/react</Link>
      </span>
    </>
  )
}