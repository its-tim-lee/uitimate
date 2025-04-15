import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA.tsx";
import meta from "./Drawer.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import { Heading } from "../Heading/Heading.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={meta.description} />

      <br />

      <QuickDemoSection />

      <VersatileTabs
        settings={[
          {
            title: "Basic Drawer",
            type: "preview",
            demoId: "drawer-demo",
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
      <p>
        The usage pattern on this component is almost the same as our <b><Link className="tw:link" to="./../../dialog/introduction">Dialog</Link></b>,
        so feel free to navigate there for more details. The difference is, <b>Drawer</b> relies on <b className="tw:brand"><Link className="tw:link" to="https://github.com/emilkowalski/vaul">vaul</Link></b>, which uses <b className="tw:brand">@radix-ui/react-dialog</b> under the hood,
        but our <b>Dialog</b> uses <b className="tw:brand">HeadlessUI</b>'s <b>Dialog</b>.

        <br />
        <br />
      </p>
      <p>
        When using <code className="tw:code">{`<Drawer/>`}</code>, all the props will be forwarded to <b className="tw:brand">vaul</b>'s <code className="tw:code"><Link className='tw:link' to='https://vaul.emilkowal.ski/api#root' target="_blank">Root</Link></code>, and you always need to manually control the open state using <code className="tw:code">open</code>and <code className="tw:code">onOpenChange</code>props.
        Below is another example to show one of the real-world scenarios (change to the mobile viewport and click the "more" icon):

        <br />
        <br />
      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "breadcrumb-expansible-collapse",
          },
        ]}
      />
      <br />
      <br />

      <QASection />

      <QA items={[
        {
          value: 'directions',
          trigger: "Have you provided 'open state' auto management?",
          content: (
            <p>
              Just like our <b><Link className="tw:link" to="./../../dialog/introduction">Dialog</Link></b>, we don't (see the relevant explanation in our Dialog introduction page).
              Even thought <b className="tw:brand">vaul</b> provides <code className="tw:code">Trigger</code> (which we do export as <code className="tw:code">DrawerTrigger</code>),
              we don't support it, nor we'd recomand to use it.
            </p>
          )
        },
      ]} />
    </>
  )
}