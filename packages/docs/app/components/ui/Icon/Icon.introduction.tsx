import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA.tsx";
import meta from "./Icon.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={meta.description} />
      <br />

      <QuickDemoSection />

      <VersatileTabs
        settings={[
          {
            title: "Sizing",
            type: "preview",
            demoId: "icon-size",
          },
          {
            title: "Search",
            type: "preview",
            demoId: "icon-demo",
            content: ''
          },
        ]}
      />

      <br />
      <br />

      <QuickStartSection />
      <p>
        This component uses <Link className="tw:link" to="https://iconify.design/docs/icon-components/react/" target="_blank" rel="noopener noreferrer">@iconify/react</Link> under the hood, so any prop from that is supported.
        It also uses <Link className="tw:link" to="https://www.radix-ui.com/primitives/docs/utilities/accessible-icon" target="_blank" rel="noopener noreferrer">Radix's AccessibleIcon</Link>, so you can specify an accessibility label as:
      </p>
      <CodeBlock>
        {`          <Icon icon="lucide:search" label="Search" />
        `}
      </CodeBlock>
      <br />
      <p>
        To adjust the size of the icon, simply use <b className="tw:brand">Tailwind</b>:
      </p>
      <CodeBlock>
        {`
          <Icon icon="lucide:search" label="Search" className="tw:size-6" />
        `}
      </CodeBlock>
      <br />

      <p>
        Let's! For more on its family components to use, and more demos on showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
      <br />
      <br />

      <QASection />

      <QA items={[

        {
          value: 'icon-naming',
          trigger: <span>Why even use <b className="tw:brand">Iconify</b>?</span>,
          content: (
            <p className="tw:text-muted-foreground">
              It's <Link className="tw:link" to="https://icon-sets.iconify.design" target="_blank" rel="noopener noreferrer">the largest icon library</Link> in the world, period.
            </p>
          )
        },
        {
          value: 'accessibility',
          trigger: "SSR support?",
          content: (
            <p className="tw:text-muted-foreground">
              You can use the approach something like:
              <CodeBlock>
                {`
                import { default as githubSVG } from '@iconify/icons-lucide/github'
                `}
              </CodeBlock>

            </p>
          )
        },
      ]} />
    </>
  )
}
