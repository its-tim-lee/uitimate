import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Tooltip.meta.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="tooltip-instant"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="tooltip-click-to-show" variant="underline">
        <VersatileTabs2Content value="tooltip-click-to-show" demoId="tooltip-click-to-show">
          <p>
            This example uses click-to-show and also reveal a technique of "de-coupling the tooltip composition from the context".
            <br />
            The context in this example is the icon; here, the entire tooltip component has no composition relationship with the icon (ie., <code className='tw:code'>{`<TooltipTrigger>`}</code>doesn't need to wrap the icon)
          </p>
        </VersatileTabs2Content>
      </VersatileTabs2>

    </>
  )
}