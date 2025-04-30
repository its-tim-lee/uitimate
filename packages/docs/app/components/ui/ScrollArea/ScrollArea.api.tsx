import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import {
  VersatileTabs2,
  VersatileTabs2Content,
} from "#/components/internal/VersatileTabs2.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="scroll-area-demo"
        enableHeading
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="scroll-area-horizontal" variant="underline">
        <VersatileTabs2Content
          value="scroll-area-horizontal"
          demoId="scroll-area-horizontal"
        >
          <p>
            Horizontal scrolling requires to use another family component <code className="tw:code">{`<ScrollAreaScrollBar />`}</code>.
            And this is probably the only case that you will NOT just use <code className="tw:code">{`<ScrollArea />`}</code> to build the scrolling.
            <br />
            <br />
          </p>
        </VersatileTabs2Content>
      </VersatileTabs2>


      <DependenciesSection />
      <a className="tw:link tw:w-fit" href="https://www.radix-ui.com/primitives/docs/components/scroll-area" target="_blank" rel="noopener noreferrer">@radix-ui/react-scroll-area</a>
    </>
  )
}