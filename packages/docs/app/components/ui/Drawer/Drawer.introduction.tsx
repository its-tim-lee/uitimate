import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import { QA2, QA2Item, QA2Trigger, QA2Content } from "#/components/internal/QA2.tsx";
import meta from "./Drawer.meta.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>
      <QuickDemoSection />
      <VersatileTabs2 defaultValue="drawer-demo" variant="underline">
        <VersatileTabs2Content value="drawer-demo" demoId="drawer-demo" />
      </VersatileTabs2>


      <QuickStartSection />
      <p>
        Here's how the component is structured:
      </p>
      <CodeBlock>{meta.anatomy ? String(meta.anatomy) : ''}</CodeBlock>

      <br />
      <p>
        TL;DR: This component works just like our <b><Link className="tw:link" to="./../../dialog/introduction">Dialog</Link></b>.
        The main difference? <b>Drawer</b> uses <b className="tw:brand"><Link className="tw:link" to="https://github.com/emilkowalski/vaul">vaul</Link></b>
        (built on <b className="tw:brand">@radix-ui/react-dialog</b>) while our <b>Dialog</b> uses <b className="tw:brand">HeadlessUI</b>'s <b>Dialog</b>.

        <br />
        <br />
      </p>
      <p>
        🔑 Key thing to remember: When using <code className="tw:code">{`<Drawer/>`}</code>, props go straight to {' '}
        <b className="tw:brand">vaul</b>'s <code className="tw:code"><Link className='tw:link' to='https://vaul.emilkowal.ski/api#root' target="_blank">Root</Link></code>.
        You'll need to handle the open state yourself with <code className="tw:code">open</code> and <code className="tw:code">onOpenChange</code> props - no auto-management here!

        Here's a real-world example (switch to mobile view and hit the "more" icon):
      </p>
      <VersatileTabs2 defaultValue="breadcrumb-expansible-collapse" variant="underline">
        <VersatileTabs2Content value="breadcrumb-expansible-collapse" demoId="breadcrumb-expansible-collapse" />
      </VersatileTabs2>

      <QASection />

      <QA2>
        <QA2Item value="directions">
          <QA2Trigger>Why no auto-management for open state?</QA2Trigger>
          <QA2Content>
            <p>
              Same deal as our <b><Link className="tw:link" to="./../../dialog/introduction">Dialog</Link></b> - check out the explanation there.
              While <b className="tw:brand">vaul</b> gives us <code className="tw:code">Trigger</code> (exported as <code className="tw:code">DrawerTrigger</code>),
              we don't support it, nor we'd recomand to use it.

              Manual control = Better and scalable control! 💪
            </p>
          </QA2Content>
        </QA2Item>
      </QA2>
    </>
  )
}