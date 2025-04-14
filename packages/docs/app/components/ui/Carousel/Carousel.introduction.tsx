import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA.tsx";
import meta from "./Carousel.meta.tsx";
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
            type: "preview",
            demoId: "carousel-demo",
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
      <Heading size='h3'>1️⃣ CarouselContent vs. CarouselItem</Heading>
      <p>
        The reason that slides (in this case, <code className="tw:code">CarouselItem</code>), can be managed horizontally by <code className="tw:code">CarouselContent</code> is just because of using Flexbox,
        so you can imagine <code className="tw:code">CarouselContent</code> is a Flexbox container, and <code className="tw:code">CarouselItem</code> is a Flexbox item.
        <br />
        <br />
        And now it should all make sense to you that why, the code in <b>Quick Demo</b>, we use <code className="tw:code">flex-basis</code> to control the width of each <code className="tw:code">CarouselItem</code>.
      </p>
      <br />

      <Heading size='h3'>2️⃣ Carousel</Heading>
      <p>
        Since <Link className='tw:link' to="https://github.com/davidjerleke/embla-carousel" target="_blank">Embla</Link> is used under the hood,
        to pass the configuration or/and plugins to the Embla instance, you can use the <code className="tw:code">opts</code> and <code className="tw:code">plugins</code> props:
      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "carousel-auto-loop",
          },
        ]}
      />
      <p>

        In case more control is needed, you can even access the <b className='tw:brand'>Embla</b>'s instance (so that you may start to use <Link className='tw:link' to='https://www.embla-carousel.com/api/' target="_blank">their API</Link>) by using the <code className="tw:code">setApi</code> prop:
      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "carousel-use-api",
          },
        ]}
      />

      <QASection />

      <QA items={[
        {
          value: 'embla-api',
          trigger: "Any caveats to be aware of?",
          content: (
            <p>
              Yes, there's a one (see below), but that's more about the consequence from <b className='tw:brand'>Embla</b>'s design, it doesn't necessarily be considered as a caveat.
              <br />
              <br />
              Basically, if you somehow extract <code className="tw:code">CarouselItem</code>out of <code className="tw:code">CarouselContent</code>,
              (ie., You put <code className="tw:code">CarouselItem</code>into a dedicated component), you will encounter some animation issue.
              <br />
              <br />
              This is because now the CarouselItem is a new instance in every render, but <b className='tw:brand'>Embla</b>expects an exact the same DOM node in every render to animate properly.
              <br />
              <br />
              So if you really want to extract the <code className="tw:code">CarouselItem</code>as a separate component, make sure to use <b className='tw:brand'>React</b>'s <code className="tw:code">memo</code>to memoize it.
            </p>
          )
        },
      ]} />
    </>
  )
}