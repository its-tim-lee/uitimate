import {
  DemoScenariosSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Breadcrumb.meta.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="breadcrumb-demo"
        enableHeading
        anatomy={meta.anatomy}
        preview={
          <p>
            <code className='tw:code'>{`<BreadcrumbFinal>`}</code> is optional - it just highlights the current page with a more eye-catching style
            <br />
            <br />
          </p>
        }
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="breadcrumb-mix" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="breadcrumb-mix">Advanced</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="breadcrumb-expansible-collapse">Expansible</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="breadcrumb-mix" demoId="breadcrumb-mix" />
        <VersatileTabs2Content value="breadcrumb-expansible-collapse" demoId="breadcrumb-expansible-collapse">
          <p>
            The hidden menu under the ellipsis shows up on click, with different styles for desktop and mobile
            <br />
          </p>
        </VersatileTabs2Content>
      </VersatileTabs2>

    </>
  )
}