import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import meta from "./Collapsible.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection } from "#/components/internal/IntroductionDoc.tsx";
import InfoBanner from "#/components/internal/InfoBanner.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={meta.description} />

      <br />

      <QuickDemoSection />
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "collapsible-demo",
          },
        ]}
      />

      <br />
      <br />

      <QuickStartSection />
      <InfoBanner>
        If you 100% sure that you are fully understand how <b className='tw:brand'>Radix</b>'s Collapsible works, you may skip this introduction.
      </InfoBanner>
      <br />

      <p>
        Collapsible is one of the components from <b className='tw:brand'>Radix</b> that I believe is heavily depreciated due to the
        inappropriate demo and the relevant argubly misleading introduction from their documentation.

        <br />
        <br />
        It's, however, an incredible component that I think it's really worth to says with a few words, so that you will know more its potential, and the use cases.
        <br />
        <br />
      </p>
      <p>
        This component is used under the anatomy of:
      </p>
      <CodeBlock>{meta.anatomy}</CodeBlock>
      <br />
      <p>
        It's quite simple, huh? But the key is understanding that <code className="tw:code">CollapsibleContent</code>
        will take a space from the layout, so that no matter it's collapsed or not, it will always affect the surrounding elements/spaces.
        <br />
        <br />
        So now I encourage you to turn on the devtool from the browser and just try to inspect how <code className="tw:code">CollapsibleContent</code>
        would be rendered in the DOM.
        <br />
        <br />
        I hope the demo above will not limit your imagination on what you can do with this component.
        If now you have high level understanding of how it works, I bet it shouldn't be hard for you to understand that it can be used in the following situation:
      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "collapsible-stepper",
          },
        ]}
      />
      <br />
      <p>
        For more on its family components to use, and more demos on showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
      <br />
      <br />
    </>
  );
};