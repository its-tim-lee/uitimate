import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import VersatileTabs from "#/components/internal/VersatileTabs";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA";
import meta from "./meta";

export default () => {
  return (
    <>
      <Heading size="h1">
        <HeadingTitle>Introduction</HeadingTitle>
        <HeadingSubtitle>{meta.description}</HeadingSubtitle>
      </Heading>
      <br />
      <br />
      <Heading size="h2">Quick Demo</Heading>

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

      <Heading size="h2">Quick Start</Heading>
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
      <br />

      <Heading size="h2">Q&A</Heading>

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
