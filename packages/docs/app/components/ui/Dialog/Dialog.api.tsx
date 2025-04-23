import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content, VersatileTabs2List, VersatileTabs2Trigger } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Dialog.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="dialog-demo"
        enableHeading
        anatomy={meta.anatomy}
      />

      <DemoScenariosSection />
      <VersatileTabs2 variant="underline" defaultValue="dialog-alert">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="dialog-alert">Alert Dialog</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="dialog-loading">Undismissable Loading</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="dialog-optional-overlay">Optional Overlay</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="dialog-modal-a">Modal Dialog</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="dialog-scroll">Scrollable Content</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="dialog-alert" demoId="dialog-alert" />
        <VersatileTabs2Content value="dialog-loading" demoId="dialog-loading">
          <p>
            Sometimes you need to block all dialog dismissal (like <b className="tw:brand">Discord</b>'s "Downloading update" screen)
            <br />
            <br />
          </p>
        </VersatileTabs2Content>
        <VersatileTabs2Content value="dialog-optional-overlay" demoId="dialog-optional-overlay" />
        <VersatileTabs2Content value="dialog-modal-a" demoId="dialog-modal-a" />
        <VersatileTabs2Content value="dialog-scroll" demoId="dialog-scroll" />
      </VersatileTabs2>


      <DependenciesSection />
      <span>
        Built with <Link className="tw:link tw:w-fit" to="https://headlessui.com/react/dialog" target="_blank" rel="noopener noreferrer">@headlessui/react</Link>'s dialog
      </span>
    </>
  )
}