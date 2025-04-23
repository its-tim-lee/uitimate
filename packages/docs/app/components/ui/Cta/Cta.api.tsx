import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="cta-demo"
        enableHeading
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="button-6variants" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="button-6variants">6 Variants</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-3sizes">3 Sizes</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-anchor-icon">Anchor</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-toggle">Toggle Button</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="badge-apidoc">API Doc</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="cta-badge-on-icon">Tiny Badge</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-progress">Progress Button</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-switch">Switch Button</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="cta-rounded-badge">Pill Badge</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-search">Search Button</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-include-badge">Meta-info Button</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-dial">Circle Button</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="cta-command-instruction">Command Instruction</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="button-6variants" demoId="button-6variants" />
        <VersatileTabs2Content value="button-3sizes" demoId="button-3sizes" />
        <VersatileTabs2Content value="button-anchor-icon" demoId="button-anchor-icon" />
        <VersatileTabs2Content value="button-toggle" demoId="button-toggle" />
        <VersatileTabs2Content value="badge-apidoc" demoId="badge-apidoc" />
        <VersatileTabs2Content value="cta-badge-on-icon" demoId="cta-badge-on-icon" />
        <VersatileTabs2Content value="button-progress" demoId="button-progress" />
        <VersatileTabs2Content value="button-switch" demoId="button-switch" />
        <VersatileTabs2Content value="cta-rounded-badge" demoId="cta-rounded-badge">
          <p>
            Side note: Some component libraries expose a prop just to implement this pill-style badge, but that's overkill with our component - it's super easy to implement!
          </p>
        </VersatileTabs2Content>
        <VersatileTabs2Content value="button-search" demoId="button-search" />
        <VersatileTabs2Content value="button-include-badge" demoId="button-include-badge" />
        <VersatileTabs2Content value="button-dial" demoId="button-dial" />
        <VersatileTabs2Content value="cta-command-instruction" demoId="cta-command-instruction">
          <p>
            Quick implementation note: Here we want the parent not to be hovered, but the child should be hoverable without affecting the parent.
            <br />
            <br />
            This is one of the reasons why we created the <code className='tw:code'>muted</code> prop.
          </p>
        </VersatileTabs2Content>
      </VersatileTabs2>


      <DemoRecipeSection />
      <VersatileTabs2 defaultValue="cta-ratings" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="cta-ratings">Ratings</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-group-single-selection">Toggle Group (Single Selection)</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-group-multiple-selection">Toggle Group (Multiple Selection)</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="cta-ratings" demoId="cta-ratings" />
        <VersatileTabs2Content value="button-group-single-selection" demoId="button-group-single-selection" />
        <VersatileTabs2Content value="button-group-multiple-selection" demoId="button-group-multiple-selection" />
      </VersatileTabs2>


      <DependenciesSection />
      <ul className="tw:list-disc tw:pl-5">
        <li>
          <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/toggle" target="_blank" rel="noopener noreferrer">@radix-ui/primitives</Link>
        </li>
        <li>
          <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/utilities/slot" target="_blank" rel="noopener noreferrer">@radix-ui/react-slot</Link>
        </li>
        <li>
          <Link className="tw:link tw:w-fit" to="https://www.npmjs.com/package/@radix-ui/react-primitive" target="_blank" rel="noopener noreferrer">@radix-ui/react-primitive</Link>
        </li>
      </ul>
    </>
  )
}
