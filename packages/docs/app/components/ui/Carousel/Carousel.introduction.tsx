import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import { QA2, QA2Item, QA2Trigger, QA2Content } from "#/components/internal/QA2.tsx";
import meta from "./Carousel.meta.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>
      <QuickDemoSection />
      <VersatileTabs2 defaultValue="carousel-demo" variant="pill">
        <VersatileTabs2Content value="carousel-demo" demoId="carousel-demo" />
      </VersatileTabs2>


      <QuickStartSection />
      <p>
        This component follows this anatomy:
      </p>
      <CodeBlock>{meta.anatomy ? String(meta.anatomy) : ''}</CodeBlock>

      <br />
      <h3>1️⃣ CarouselContent vs. CarouselItem</h3>
      <p>
        Slides (aka <code className="tw:code">CarouselItem</code>) are managed horizontally by <code className="tw:code">CarouselContent</code> using Flexbox.
        Think of <code className="tw:code">CarouselContent</code> as a Flexbox container and <code className="tw:code">CarouselItem</code> as a Flexbox item.
        <br />
        <br />
        That's why in the <b>Quick Demo</b>, we use <code className="tw:code">flex-basis</code> to control each <code className="tw:code">CarouselItem</code>'s width.
      </p>

      <h3>2️⃣ Carousel</h3>
      <p>
        We use <Link className='tw:link' to="https://github.com/davidjerleke/embla-carousel" target="_blank">Embla</Link> under the hood.
        You can pass config options and plugins to Embla using the <code className="tw:code">opts</code> and <code className="tw:code">plugins</code> props:
      </p>
      <VersatileTabs2 defaultValue="carousel-auto-loop" variant="pill">
        <VersatileTabs2Content value="carousel-auto-loop" demoId="carousel-auto-loop" />
      </VersatileTabs2>
      <p>
        Need more control? Access <b className='tw:brand'>Embla</b>'s instance directly with the <code className="tw:code">setApi</code> prop to use <Link className='tw:link' to='https://www.embla-carousel.com/api/' target="_blank">their full API</Link>:
      </p>
      <VersatileTabs2 defaultValue="carousel-use-api" variant="pill">
        <VersatileTabs2Content value="carousel-use-api" demoId="carousel-use-api" />
      </VersatileTabs2>

      <QASection />

      <QA2>
        <QA2Item value="embla-api">
          <QA2Trigger id='embla-caveats'>Any caveats to be aware of?</QA2Trigger>
          <QA2Content>
            <p>
              Yes, but it's more about Embla's design than a true caveat.
              <br />
              <br />
              If you extract <code className="tw:code">CarouselItem</code> out of <code className="tw:code">CarouselContent</code>
              (by putting <code className="tw:code">CarouselItem</code> into its own component), you'll hit animation issues.
              <br />
              <br />
              Why? Because now CarouselItem becomes a new instance on every render, but <b className='tw:brand'>Embla</b> needs the exact same DOM node across renders for smooth animations.
              <br />
              <br />
              Solution: If you really need to extract <code className="tw:code">CarouselItem</code> into a separate component, wrap it with <b className='tw:brand'>React</b>'s <code className="tw:code">memo</code>.
            </p>
          </QA2Content>
        </QA2Item>
      </QA2>
    </>
  )
}