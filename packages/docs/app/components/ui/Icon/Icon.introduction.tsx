import {
  VersatileTabs2,
  VersatileTabs2Content,
  VersatileTabs2List,
  VersatileTabs2Trigger,
} from "#/components/internal/VersatileTabs2";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import { QA2, QA2Content, QA2Item, QA2Trigger } from "#/components/internal/QA2";
import meta from "./Icon.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>

      <QuickDemoSection />

      <VersatileTabs2 defaultValue="icon-size" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="icon-size">Sizing</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="icon-demo">Search</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="icon-size" demoId="icon-size" />
        <VersatileTabs2Content value="icon-demo" demoId="icon-demo" />
      </VersatileTabs2>


      <QuickStartSection />
      <p>
        This component uses <Link className="tw:link" to="https://iconify.design/docs/icon-components/react/" target="_blank" rel="noopener noreferrer">@iconify/react</Link> under the hood, so any prop from that is supported.
        It also uses <Link className="tw:link" to="https://www.radix-ui.com/primitives/docs/utilities/accessible-icon" target="_blank" rel="noopener noreferrer">Radix's AccessibleIcon</Link>, so you can specify an accessibility label as:
      </p>
      <CodeBlock>
        {`          <Icon icon="lucide:search" label="Search" />
        `}
      </CodeBlock>
      <p>
        To adjust the size of the icon, simply use <b className="tw:brand">Tailwind</b>:
      </p>
      <CodeBlock>
        {`
          <Icon icon="lucide:search" label="Search" className="tw:size-6" />
        `}
      </CodeBlock>

      <p>
        Let's! For more on its family components to use, and more demos on showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>

      <QASection />

      <QA2>
        <QA2Item value="icon-naming">
          <QA2Trigger id='why-iconify'>
            <span>
              Why even use <b className="tw:brand">Iconify</b>?
            </span>
          </QA2Trigger>
          <QA2Content>
            <p className="tw:text-muted-foreground">
              It's{" "}
              <Link
                className="tw:link"
                to="https://icon-sets.iconify.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                the largest icon library
              </Link>{" "}
              in the world, period.
            </p>
          </QA2Content>
        </QA2Item>
        <QA2Item value="ssr-support">
          <QA2Trigger id='ssr-support-in-icon'>SSR support?</QA2Trigger>
          <QA2Content>
            <p className="tw:text-muted-foreground">
              You can use the approach something like:
              <CodeBlock>
                {`
                import { default as githubSVG } from '@iconify/icons-lucide/github'
                `}
              </CodeBlock>
            </p>
          </QA2Content>
        </QA2Item>
      </QA2>
    </>
  )
}
