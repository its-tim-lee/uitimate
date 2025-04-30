import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading.tsx";
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import { QA2, QA2Item, QA2Trigger, QA2Content } from "#/components/internal/QA2.tsx";
import meta from "./Cta.meta.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import InfoBanner from "#/components/internal/InfoBanner.tsx";

export default () => {
  return (
    <>
      <QuickDemoSection />
      <VersatileTabs2 defaultValue="button-progress" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="button-progress">Button</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="cta-rounded-badge">Badge</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-toggle">Toggle</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="button-progress" demoId="button-progress" />
        <VersatileTabs2Content value="cta-rounded-badge" demoId="cta-rounded-badge" />
        <VersatileTabs2Content value="button-toggle" demoId="button-toggle" />
      </VersatileTabs2>


      <QuickStartSection />
      <p>
        First, don't think of this component as just "an advanced button" - that mindset will limit your productivity with it.
        <br />
        <br />
        Instead, think of it as: a call-to-attention widget that may or may not require user interaction.
        <br />
        <br />
        If that sounds vague, don't worry - it'll become clear through the examples below. For now, it helps to know it can take the form of a button, badge, or toggle.
        <br />
        <br />
        <InfoBanner>
          Check the code snippets in each demo as you read!
        </InfoBanner>
      </p>
      <h3>1️⃣ Button vs. Badge</h3>
      <p>
        Understanding the difference between button and badge is surprisingly important.
        <br />
        <br />
        Compared to buttons, badges are typically flat, smaller, and non-interactive by default (that's what makes them badges).
      </p>

      <p>
        Here are all possible variants and sizes:
      </p>
      <VersatileTabs2 defaultValue="button-6variants" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="button-6variants">6 variants</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="button-3sizes">3 sizes</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="button-6variants" demoId="button-6variants" />
        <VersatileTabs2Content value="button-3sizes" demoId="button-3sizes" />
      </VersatileTabs2>
      <p>
        Key takeaway: While they share the same <code className='tw:code'>variant</code> and <code className='tw:code'>size</code> API,
        the visual differences are clear. The badges shown here are interactive, which is fine for some designs - we'll show how to make them non-interactive later.
      </p>


      <h3>2️⃣ Icon (CTA)</h3>
      <p>
        From the previous section, you've seen that the default shape of <b>Cta</b> is a button,
        which you can override via the <code className='tw:code'>shapes</code> prop. Currently, there are 4 options:
      </p>
      <VersatileTabs2 defaultValue="cta-possible-shapes" variant="underline">
        <VersatileTabs2Content value="cta-possible-shapes" demoId="cta-possible-shapes" />
      </VersatileTabs2>
      <p>
        These are mostly self-explanatory, but worth noting: "icon" is considered a unique shape because it forces <b>Cta</b> to have equal width and height, earning its place in the <code className='tw:code'>shapes</code> API.
      </p>

      <h3>3️⃣ Toggle</h3>

      <p>
        By default, <b>Cta</b> is stateless and won't remain pressed after being clicked.
        If you need this state persistence, that's where "toggle" comes in.
      </p>
      <p>
        Enabling toggle behavior is straightforward - for example, to create a <b>Cta</b> that's initially pressed,
        just use the <code className='tw:code'>defaultPressed</code> prop and it will manage the toggle state internally:
      </p>

      <VersatileTabs2 defaultValue="button-toggle" variant="underline">
        <VersatileTabs2Content value="button-toggle" demoId="button-toggle" />
      </VersatileTabs2>
      <p>
        Using <code className='tw:code'>pressed</code> and/or <code className='tw:code'>onPressedChange</code>
        will also make <b>Cta</b> a toggle:
      </p>
      <VersatileTabs2 defaultValue="button-group-single-select" variant="underline">
        <VersatileTabs2Content value="button-group-single-select" demoId="button-group-single-select" />
      </VersatileTabs2>


      <br />

      <h3>4️⃣ Muted</h3>

      <p>
        Sometimes you need a <b>Cta</b> that's not interactive but also not disabled.
        That's exactly when to use the <code className='tw:code'>muted</code> prop to make it non-interactive.
      </p>
      <VersatileTabs2 defaultValue="cta-command-instruction" variant="underline">
        <VersatileTabs2Content value="cta-command-instruction" demoId="cta-command-instruction" />
      </VersatileTabs2>


      <br />
      <h3>5️⃣ Wrapup</h3>
      <p>
        Since <b>Cta</b> is a call-to-attention widget, start by choosing what <code className='tw:code'>shapes</code> you want,
        then decide its <code className='tw:code'>variant</code> and <code className='tw:code'>size</code>. Simple!
        <br />
        <br />
        For more examples showing how versatile this component can be, check out <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>

      <QASection />

      <QA2>
        <QA2Item value="why-one-component">
          <QA2Trigger>Why using one component instead of separate button, badge, and toggle components?</QA2Trigger>
          <QA2Content>
            <p>
              Short answer: because they share the same essence.
              <br />
              <br />
              Long answer:
              This is really an essay-worthy question, but I'll stick to the high-level perspective here.
              <br />
              <br />
              <h5># The problem</h5>
              <br />
              Most component libraries don't clearly define the differences between buttons, badges, and toggles
              (some might call them "chips" or other names). These differences exist in the creators' minds
              implicitly or explicitly, leading to separate components for each.
              <br />
              <br />
              These "differences" form part of the design definition, and if they're inappropriate,
              the component design will never be quite right, hurting DX sooner or later.
              <br />
              <br />
              Most devs don't overthink this - they just use the library. But the smart ones notice
              they constantly fight against default styles or need heavy customization for UI patterns
              these separate components can't handle, despite those components are seeming "common to use".
              <br />
              <br />
              <h5># The solution</h5>
              <p>
                Some think providing minimal styles (like <b className="tw:brand">Shadcn</b>) solves this,
                and it helps, but it's still not enough.
                <br />
                <br />
                This hits the classic software design challenge - without principles like <Link className="tw:link" to="https://en.wikipedia.org/wiki/SOLID">SOLID</Link>,
                intuition-based design falls short.
                <br />
                <br />
                Engineers who deeply understand design principles can "feel" when something's off
                and know when to couple vs. separate concerns. In this case, coupling these components makes 100% sense.
              </p>
            </p>
          </QA2Content>
        </QA2Item>
        <QA2Item value="why-not-icon-button">
          <QA2Trigger>Some component libraries invented "Icon Button", why not just follow through?</QA2Trigger>
          <QA2Content>
            <p>
              This relates to the previous question about separate components.
              <br />
              <br />
              Want proof? Try using an "Icon Button" component in real projects.
              Unless you're building something super simple, you'll hit limitations fast.
            </p>
          </QA2Content>
        </QA2Item>
      </QA2>
    </>
  )
}