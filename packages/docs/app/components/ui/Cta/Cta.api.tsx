import {
  UsageSection,
  DemoApiSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Cta.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="cta-demo"
        anatomy="<Cta/>"
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "6 Variants",
            type: "preview",
            demoId: "button-6variants",
          },
          {
            title: "3 Sizes",
            type: "preview",
            demoId: "button-3sizes",
          },
          {
            title: "Anchor",
            type: "preview",
            demoId: "button-anchor-icon",
          },
          {
            title: "Toggle Button",
            type: "preview",
            demoId: "button-toggle",
          },
          {
            title: "API Doc",
            type: "preview",
            demoId: "badge-apidoc",
          },
          {
            title: "Tiny Badge",
            type: "preview",
            demoId: "cta-badge-on-icon"
          },
          {
            title: "Progress Button",
            type: "preview",
            demoId: "button-progress",
          },
          {
            title: "Switch Button",
            type: "preview",
            demoId: "button-switch",
          },
          {
            title: "Pill Badge",
            type: "preview",
            demoId: "cta-rounded-badge",
            content: (
              <p>
                Side notes: there're some compoent libraries even expose a prop to just
                implement such pill-outlook badge, but it's not making much sense when using our component,
                since it can be implemented so easy.
                <br />
                <br />
              </p>
            )
          },
          {
            title: "Search Button",
            type: "preview",
            demoId: "button-search",
          },
          {
            title: "Meta-info Button",
            type: "preview",
            demoId: "button-include-badge",
          },
          {
            title: "Circle Button",
            type: "preview",
            demoId: "button-dial",
          },
          {
            title: "Command Instruction",
            type: "preview",
            demoId: "cta-command-instruction",
            content: (
              <p>
                This deserves some explanation in terms of the implementation:
                so what we want here is that the parent don't want to be hovered,
                but the only child want to be hovered, and when hovering, don't affect to the parent.
                <br />
                <br />
                To achieve this, that's part of the reasons that why we invented the <code className='tw:code'>muted</code> prop.
                <br />
                <br />
              </p>
            )
          },
        ]}
      />

      <br />
      <br />

      <DemoRecipeSection />
      <VersatileTabs
        settings={[
          {
            title: "Ratings",
            type: "preview",
            demoId: "cta-ratings"
          },
          {
            title: "Toggle Group (Single Selection)",
            type: "preview",
            demoId: "button-group-single-selection",
          },
          {
            title: "Toggle Group (Multiple Selection)",
            type: "preview",
            demoId: "button-group-multiple-selection",
          },
        ]}
      />

      <br />
      <br />

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
