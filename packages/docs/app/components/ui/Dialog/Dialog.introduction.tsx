import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA.tsx";
import meta from "./Dialog.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading.tsx";
import InfoBanner from "../../internal/InfoBanner.tsx";

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
            demoId: "dialog-demo",
          },
        ]}
      />

      <br />
      <br />

      <QuickStartSection />
      <p>
        This component is used under the anatomy of:
      </p>
      <CodeBlock>{meta.anatomy}</CodeBlock>
      <br />
      <Heading size='h3'>1️⃣ Dialog</Heading>
      <p className="tw:leading-loose">
        Our <code className='tw:code'>{`<dialog>`}</code> heavily relies on <Link className="tw:link" to='https://headlessui.com/react/dialog' >the relevant components</Link>
        {` `} of dialog from <b className='tw:brand'>HeadlessUI</b>:
        <ul className="tw:list-disc tw:list-inside">
          <li>
            <code className='tw:code'>DialogBackdrop</code>
          </li>
          <li>
            <code className='tw:code'>DialogPanel</code>
          </li>
          <li>
            <code className='tw:code'>Dialog</code>
          </li>
        </ul>
        <br />
        All of them are always included, but you still can customize the style on the entire dialog content (ie., <code className='tw:code'>DialogPanel</code>) via <b className='tw:brand'>Tailwind</b>,
        and all the props will be forwarded to the last one (ie., <code className='tw:code'>Dialog</code>). For example, you can always opt out the overlay effect:
      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "dialog-optional-overlay",
          },
        ]}
      />
      <br />
      <br />

      <Heading size='h3'>
        <HeadingTitle>2️⃣ Dialog vs. Modal vs. Alert Dialog</HeadingTitle>
        <HeadingSubtitle>
          Almost all the component libraries really don't clearly explain the differences, but it's overwhelming important to know that before coding.
        </HeadingSubtitle>

      </Heading>
      <p className="tw:leading-loose">
        Both <b>Modal</b> and <b>Alert Dialog</b> are dialogs that block interaction with the rest of the interface, until the user makes an explicit decision;
        so the differences are:
        <ul className="tw:list-disc tw:list-inside">
          <li>
            <b>Alert Dialog</b> is very strict, so implicit dismissing techniques like 1) pressing-esc, 2) clicking-outside,
            and even using 3) "right-upper corner 'canceling' icon" are extreme uncommon for this type.
          </li>
          <li>
            <b>Modal</b> is not that strict, so some might apply 1) "right-upper corner 'canceling' icon" in the design.
            It might because some people think about the icon is still represeting a partial explicit action.
          </li>
        </ul>
        <br />
        The strict nature of <b>Alert Dialog</b> gives us the opportunity to simplify any dialog into 2 types － either it's an <b>Alert Dialog</b> or not (tip: try any dismissing techniques you can think of when playing around the demos below):
        <br />
      </p>
      <VersatileTabs
        settings={[
          {
            title: "Alert",
            type: "preview",
            demoId: "dialog-alert",

          },
          {
            title: "Modal",
            type: "preview",
            demoId: "dialog-modal-a",
            content: <p>
              <code className="tw:code">onClose</code>comes from <b className="tw:brand">HeadlessUI</b>'s, but we extend it, so that you will better know that where the closing source is.
              Currently, it'd be triggered under 2 categories:
              <br />
              <br />
              <ul className="tw:list-disc tw:list-inside">
                <li>
                  <code className="tw:code">x</code>: "x-icon" is clicked
                </li>
                <li>
                  <code className="tw:code">implicit</code>: "esc" is pressed, or click outside the dialog
                </li>
              </ul>
              <br />
              The category corresponds to the value of <code className="tw:code">from</code>in <code className="tw:code">onClose</code> (toggle on the code snippet below for more details)
              <br />
              <br />
            </p>
          },
        ]}
      />
      <br />
      <br />

      <Heading size='h3'>2️⃣ DialogHeading</Heading>
      <p>
        This family component is just the same as <Link className="tw:link" to="./../../heading/introduction">Heading</Link> component,
        so the API usage is just the same, but it's re-implemented to better suit the context of dialog.
        <br />
        <br />
        So whenever this component is used, the relevant ARIA attributes will be applied automatically
        (you may inspect the rendered result from any demos on the page to see the attributes via the browser's DevTools)
        <br />
        <br />
      </p>
      <br />
      <br />
      <Heading size='h3'>3️⃣ DialogAction</Heading>
      <p>

        Since it's extremely common to have some call-to-actions in a dialog, and oftenly they stack in certain fashion in different breakpoints to provide a better UX,
        so, <code className="tw:code">DialogAction</code>is the component that is meant to include such things (you may try to adjust the breakpoint of any demos on this page)
      </p>
      <br />
      <br />

      <p>
        For more examples and detailed API documentation, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
      <br />
      <br />

      <QASection />

      <QA items={[
        {
          value: 'dialog-vs-modal',
          trigger: <span>Why not just use <b className='tw:brand'>Radix</b>'s dialog?</span>,
          content: (
            <p>
              Because they just have too much issues and design flaws which incredibly hurts DX.
              Frankly, unless you're using it in an extreme simple case, it's just too hard to be used.
            </p>
          )
        },
        {
          value: 'open-control',
          trigger: <span>Why <code className='tw:code'>open</code> always needs to be provided on the <code className='tw:code'>Dialog</code>component?</span>,
          content: (
            <p>
              This turns out to be the best practice when designing a dialog component.
              Many component libraries will promote their dialog can be self-controlled (ie., the open status can be controlled by the component itself),
              so that the consumer no need to maintain such states themselves, and make the code a bit clean.
              <br />
              <br />
              But this is a huge mistake in terms of software design, because providing such little value (ie., make the code a "bit" clean)
              actually will sacrifice the scalability of the component
              (ie., in some cases, the component will have problem in some use cases, so now user might need to do workaround or so)
            </p>
          )
        },
      ]} />
    </>
  )
}