import { VersatileTabs2, VersatileTabs2Content, VersatileTabs2List, VersatileTabs2Trigger } from "#/components/internal/VersatileTabs2.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import { QA2, QA2Item, QA2Trigger, QA2Content } from "#/components/internal/QA2.tsx";
import meta from "./Dialog.meta.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading.tsx";
import InfoBanner from "../../internal/InfoBanner.tsx";

export default () => {
  return (
    <>
      <QuickDemoSection />
      <VersatileTabs2 variant="underline" defaultValue="dialog-demo">
        <VersatileTabs2Content value="dialog-demo" demoId="dialog-demo" showCode={false} />
      </VersatileTabs2>


      <QuickStartSection />
      <p>
        Here's how the component is structured:
      </p>
      <CodeBlock>{meta.anatomy ? String(meta.anatomy) : ''}</CodeBlock>
      <h3>1️⃣ {`<Dialog/>`}</h3>
      <p className="tw:leading-loose">
        Our <code className='tw:code'>{`<dialog>`}</code> is built on top of <Link className="tw:link" to='https://headlessui.com/react/dialog' >these 3 core components</Link>
        {` `} from <b className='tw:brand'>HeadlessUI</b>:
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
        All 3 are always included. You can style the dialog content (<code className='tw:code'>DialogPanel</code>) with <b className='tw:brand'>Tailwind</b>,
        and all props go to <code className='tw:code'>Dialog</code>. Here's how to remove the overlay:
      </p>
      <VersatileTabs2 variant="underline" defaultValue="dialog-optional-overlay">
        <VersatileTabs2Content value="dialog-optional-overlay" demoId="dialog-optional-overlay" />
      </VersatileTabs2>

      <h3>2️⃣ Dialog vs. Modal vs. Alert Dialog</h3>
      <p>
        Most libraries don't explain these differences well, but it's super important to know before you code.
      </p>
      <p className="tw:leading-loose">
        Both <b>Modal</b> and <b>Alert Dialog</b> block user interaction until they make a choice. Here's how they differ:
        <ul className="tw:list-disc tw:list-inside">
          <li>
            <b>Alert Dialog</b> is super strict - no ESC key, no outside clicks, and no 'X' button in the corner. 0 implicit dismissal.
          </li>
          <li>
            <b>Modal</b> is more chill - usually has an 'X' button since it's seen as a semi-explicit action.
          </li>
        </ul>
        <br />
        Thanks to <b>Alert Dialog</b>'s strict nature, we can simplify dialogs into just 2 types: Alert or not. Try the dismissal tricks in these demos:
        <br />
      </p>
      <VersatileTabs2 variant="underline" defaultValue="dialog-alert">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="dialog-alert">Alert</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="dialog-modal-a">Modal</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="dialog-alert" demoId="dialog-alert" />
        <VersatileTabs2Content value="dialog-modal-a" demoId="dialog-modal-a">
          <p>
            We've extended <b className="tw:brand">HeadlessUI</b>'s <code className="tw:code">onClose</code> to tell you exactly how the dialog was closed:
            <br />
            <br />
            <ul className="tw:list-disc tw:list-inside">
              <li>
                <code className="tw:code">x</code>: User clicked the X button
              </li>
              <li>
                <code className="tw:code">implicit</code>: ESC key or outside click
              </li>
            </ul>
            <br />
            Check the code snippet below to see how <code className="tw:code">from</code> works in <code className="tw:code">onClose</code>
            <br />
            <br />
          </p>
        </VersatileTabs2Content>
      </VersatileTabs2>

      <h3>3️⃣ {`<DialogHeading/>`}</h3>
      <p>
        Works just like the <Link className="tw:link" to="./../../heading/introduction">Heading</Link> component,
        but it's rebuilt for dialogs. It auto-adds all the right ARIA attributes
        (check any demo's DevTools to see them in action).
        <br />
        <br />
      </p>
      <h3>4️⃣ {`<DialogAction/>`}</h3>
      <p>
        Since dialogs often need buttons that stack differently on mobile/desktop for better UX,
        we made <code className="tw:code">DialogAction</code> to handle this. Try resizing any demo to see it in action!
      </p>

      <p>
        Want more examples? Check out the <Link className="tw:link" to="./../api">API docs</Link>.
      </p>

      <QASection />

      <QA2>
        <QA2Item value="dialog-vs-modal">
          <QA2Trigger id='why-not-radix-dialog'>Why not just use <b className='tw:brand'>Radix</b>'s dialog?</QA2Trigger>
          <QA2Content>
            <p>
              TBH, their DX is pretty rough. Unless you're doing something super basic,
              it's just too painful to use.
            </p>
          </QA2Content>
        </QA2Item>
        <QA2Item value="open-control">
          <QA2Trigger id='why-always-open-control-in-dialog'>Why do I always need to provide <code className='tw:code'>open</code> to the <code className='tw:code'>Dialog</code>?</QA2Trigger>
          <QA2Content>
            <p>
              This is 100% best practice. Sure, other libraries let dialogs control themselves to save you a few lines of code.
              But that's a trap - it kills component scalability and you'll hit weird edge cases.
              You'll end up with hacky workarounds. Trust us on this one!
            </p>
          </QA2Content>
        </QA2Item>
      </QA2>
    </>
  )
}