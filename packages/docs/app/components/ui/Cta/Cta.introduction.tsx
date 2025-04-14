import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA.tsx";
import meta from "./Cta.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
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
            title: "Button",
            type: "preview",
            demoId: "button-progress",
          },
          {
            title: "Badge",
            type: "preview",
            demoId: "cta-rounded-badge",
          },
          {
            title: "Toggle",
            type: "preview",
            demoId: "button-toggle",
          },
        ]}
      />

      <br />

      <QuickStartSection />
      <p>
        First, you shouldn't think about that this component is just something like "an advanced version of a button".
        because such understanding will only fall you short quickly,
        and finally will affect your productivity on using this component.
        <br />
        <br />
        Instead, think about it's a concept of: a call-to-attention from certain small widget;
        once user got the attention, he may or may not perform the action to interact with the widget.
        <br />
        <br />
        If you thought the description here is a bit vague, it'd become very clear through the following explanation.
        Right now, since the "small widget" will only be certain kind, it's fine to think about that it can only be either a button, badge, or toggle,
        if that would help your understanding.
        <br />
        <br />
        <InfoBanner>
          Please check the code snippet of each demo below during your reading
        </InfoBanner>
        <br />
        <br />
      </p>
      <Heading size='h3'>1️⃣ button vs. badge</Heading>
      <p>
      Understanding the differences between button and badge is counter-intuitively extreme important at first.
      <br />
      <br />
      Comparing to button, on the surface, normally badge is flat, smaller, and uninteractive by default (because that's why it's called badge).
        <br />
        <br />
      </p>

      <p>
      Here is the listing of all the possible variants and sizes they can have:
      </p>
      <br />
      <VersatileTabs
        settings={[
          {
            title: "6 variants",
            type: "preview",
            demoId: "button-6variants",
          },
          {
            title: "3 sizes",
            type: "preview",
            demoId: "button-3sizes",
          },
        ]}
      />
        <p>
          The take-away here is that, while they share the same API of <code className='tw:code'>variant</code> and <code className='tw:code'>size</code>,
          the visual comparison clearly dipicts the difference between button and badge. You might find out the badges showing here are interactive,
          that's NOT the problem in some UI design, but later we'll show how to make it non-interactive.
</p>


      <br />
      <br />

      <Heading size='h3'>2️⃣ icon (cta)</Heading>
      <p>
      Through the previous section, you can see that, the default shape of <b>Cta</b> is button,
        and you can override that by providing the option(s) via <code className='tw:code'>shapes</code>. Currently, it has 4 possibilities:
        <br />

      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "cta-possible-shapes",
          },
        ]}
      />
      <p>

      They're quite self-explanatory, but one thing to note is the "icon". The reason that why "icon" is considered as a unique shape is because,
        it forces <b>Cta</b> to be in even dimension, so it deserves its seat in <code className='tw:code'>shapes</code> in terms of API design.
      </p>
      <br />
      <br />

      <Heading size='h3'>3️⃣ toggle</Heading>

      <p>
        Since <b>Cta</b> is stateless by default, it can't remain in pressed state after being clicked.
        So, in case the such state is important to you, that's where the "toggle" comes in.
      </p>
      <br />
      <p>

      Enabling the toggle behavior is straightforward, for example,
      if somehow you want to implement a <b>Cta</b> that is pressed initially,
      by intuitively using the prop <code className='tw:code'>defaultPressed</code>,
      now your <b>Cta</b> will manage the toggle state internally:
      </p>

      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "button-toggle",
          },
        ]}
      />
      <p>
        Using <code className='tw:code'>pressed</code>and/or <code className='tw:code'>onPressedChange</code>
        will also make the <b>Cta</b> a toggle:
      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "button-group-single-selection",
          },
        ]}
      />


<br />

      <Heading size='h3'>4️⃣ muted</Heading>

      <p>
        There will be the case that when a <b>Cta</b> is not interactive, but it's NOT disabled,
        then we can use the <code className='tw:code'>muted</code> prop to make it a non-interactive element.
      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "cta-command-instruction",
          },
        ]}
      />


      <br />
      <Heading size='h3'>5️⃣ Wrapup</Heading>
      <p>
        So, since <b>Cta</b> is a call-to-attention from certain small widget, to manifest it, think about what kind of <code className='tw:code'>shapes</code> you want?
        and then decide its <code className='tw:code'>variant</code> and <code className='tw:code'>size</code>. This should all be straight and making sense!
        <br />
        <br />
        Let's! For more on its family components to use, and more demos on showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
      <br />
      <br />

      <QASection />

      <QA items={[
        {
          value: 'why-one-component',
          trigger: "Why using one component instead of separate button, badge, and toggle components?",
          content: (
            <p>
              Short answer: because they share the same essence.
              <br />
              <br />
              Long answer:
              To be fair, this is actually an essay question, so it deserves an article of words, but at here,
              only high level perpsepective will be used.
              <br />
              <br />
              <Heading size='h5'>The problem</Heading>
              Even though almost all the component libraries not clearly define the differences between button, badge, and toggle
              (note that, the library creator might prefer different naming such as "chip"),
              those differences are in their mind either explicitly or implicitly,
              and (interestingly) finally lead to the design: a separate button, badge, and toggle components
              (again, the naming here are quite common, but still not the universal standard, and some might finally land on the design such as "icon button").
              <br />
              <br />
              The "differences" is actually a part of the design definition, and if it's inappropriate,
              the component design will never be right, and that will lead to the burn on DX sonner or later.
              <br />
              <br />
              Most of the programmer just don't care about this, and they just use the library anyway,
              and some of them are smart and senstitive enough to see that, from the usage experience,
              they still fight a lots on the default styles from those components,
              or/and sometimes customize them heavily due to some kind of UI patterns that those components can't cover,
              despect "the fact" that they think those components are common to have.
              <br />
              <br />
              <Heading size='h5'>The solution</Heading>
              <p>

              Some might think that by providing the minimum styles for those component (eg., the solution from <b className="tw:brand">Shadcn</b>)
              will alleviate the problem, and to some extent, it's true. But it's still entirely not enough.
              <br />
                <br />
                This again hits the classical problem of software design, and without the design principle such as <Link className="tw:link" to="https://en.wikipedia.org/wiki/SOLID">SOLID</Link>,
                simply using someone's intuitive sense to do the design doesn't work well.
              <br />
                <br />
                The sophisticated engineers who understanding those design principle deeply in heart can oftenly "feel" something is wrong from the design,
                and know when to do coupling, and when to do separation. And here, simply put (again, thousand words can be put on here due to this is acually an essay question),
                coupling them is the way to go.
                <br />
                <br />
              </p>
            </p>
          )
        },
        {
          value: 'why-not-icon-button',
          trigger: 'Some component libraries invented "Icon Button", why not just follow through?',
          content: (
            <p>
              This again, relates to the previous question "Why using one component instead of separate button, badge, and toggle components?".
              I've explained everything there on high level, so these are actually the same question.
              <br />
              <br />
              There's actually a hard way for you to realize this inapporpriate design in pain:
              you can just use such "Icon Button" in the daily development,
              and unless you're always developing something too simple,
              otherwise you'll encounter the obstacle(s) very soon.
              <br />
              <br />
            </p>

          )
        },
        {
          value: 'pointer-events-none-vs-muted',
          trigger: <span>Why not just use <code className='tw:code'>pointer-events-none</code>from <b className='tw:brand'>Tailwind</b>, but <code className='tw:code'>muted</code>?</span>,
          content: (
            <p>
              Because <code className='tw:code'>pointer-events-none</code> has its limitation, and using that will make the implementation on some UI designs extremely hard, and even impossible.
            </p>
          )
        },
      ]} />
    </>
  )
}