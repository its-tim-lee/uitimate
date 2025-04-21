import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA.tsx";
import meta from "./Sidebar.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection, DefinitionSection } from "#/components/internal/IntroductionDoc.tsx";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible";
import { Cta } from "#/components/ui/Cta/Cta";
import { Icon } from "../Icon/Icon.tsx";
import InfoBanner from "../../internal/InfoBanner.tsx";
import { LinkScrollTo } from "../../internal/LinkScrollTo.tsx";
import InfoDetails from "../../internal/InfoDetails.tsx";
import { Heading } from "../Heading/Heading.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={meta.description} prefix={meta.name} />

      <br />

      <QuickDemoSection />
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "sidebar-chatgpt",
            showCode: false,
          }
        ]}
      />

      <br />
      <br />

      <DefinitionSection>
        <div className="tw:prose tw:prose-gray dark:tw:prose-invert tw:max-w-none">
          <p>The word "sidebar" actually has at least two different meanings. It can be:</p>
          <ul>
            <li>A context, or</li>
            <li>A physical card (to represent the shape of "sidebar")</li>
          </ul>

          <p>Physically, a sidebar itself is actually just a card, and nothing more. But since it is called "sidebar", it's obvious that people use such "card" in a narrow use cases compare to the infinite use cases of a general card.</p>

          <p>The "narrow use cases" are actually reflected on:</p>
          <ul>
            <li>How usually the sidebar affects the surround elements?</li>
            <li>What're the usual things inside the sidebar?</li>
          </ul>

          <p>In fact, such use cases just came from the usage experience of human being:</p>

          <Collapsible className="tw:my-4">
            <CollapsibleTrigger className="tw:flex tw:items-center tw:gap-2 tw:group">
              <Icon icon='lucide:chevron-right' className="tw:text-gray-500 tw:group-data-[state=open]:rotate-90" />
              For sidebar's outside world
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="tw:mt-2 tw:pl-7">
                <li>When it shows up, it may or may not affect the size of the surrounding elements (eg., if the sidebar is floating, it usually don't affect any kind of other stuff)</li>
                <li>It can be always there, or can choose to be hidden</li>
                <li>On desktop, the sidebar will only be presented horizontally (ie., it's incredible extreme rare that a desktop sidebar is showing up vertically, like, from the bottom of the page)</li>
                <li>On mobile, the sidebar can appear from any edge (ie., top, right, bottom, left), although from the top is almost not the case.</li>
                <li>There can have more than one sidebar, but it's usually just two, and it's hard to see more than two at the same time. Even if a page has more than two, usually many of them are only meant to be showing up under certain scenarios.</li>
                <li>There's no any restriction that how sidebars can be stacked together, or how the next/previous sidebar should be showing up</li>
                <li>That's. Probably no other patterns</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="tw:my-4">
            <CollapsibleTrigger className="tw:flex tw:items-center tw:gap-2 tw:group">
              <Icon icon='lucide:chevron-right' className="tw:text-gray-500 tw:group-data-[state=open]:rotate-90" />
              For sidebar's inside world
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="tw:mt-2 tw:pl-7">
                <li>Beside the fact that list(s) is almost always there, no other patterns are really fixed or just as common as list(s), but people really can put any kind of stuff inside the sidebar.</li>
                <li>Note that, even thought the list(s) are common elements in the sidebar, DOES NOT mean that it'd not be a sidebar if it doesn't have such elements</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <p>Now, these observed patterns are only happened/used under certain context, so it's important to give the name to the context, and we can simply just call it "sidebar (context)".</p>
        </div>
      </DefinitionSection>

      <br />
      <br />

      <QuickStartSection />
      <InfoBanner>
        Without fully understanding <LinkScrollTo to="definition">the definition</LinkScrollTo> first, you might hit a wall when reading below, because it can refer any concept/jargon that has been explained well there.
      </InfoBanner>
      <div className="tw:prose tw:prose-gray dark:tw:prose-invert tw:max-w-none tw:mt-4">

        <p>
          Our sidebar component exposes 3 family components:
        </p>
        <Collapsible className="tw:my-4">
          <CollapsibleTrigger className="tw:flex tw:items-center tw:gap-2 tw:group">
            <Icon icon='lucide:chevron-right' className="tw:text-gray-500 tw:group-data-[state=open]:rotate-90" />
            SidebarLayout
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="">
              <li>Usually contains exactly two child components: <code>Sidebar</code> and <code>SidebarPeer</code></li>
              <li>Implements the core functionality of the "sidebar context"</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="tw:my-4">
          <CollapsibleTrigger className="tw:flex tw:items-center tw:gap-2 tw:group">
            <Icon icon='lucide:chevron-right' className="tw:text-gray-500 tw:group-data-[state=open]:rotate-90" />
            Sidebar
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="">
              <li>From the high level view, you may imagine that it's just like a card in the sidebar context, nothing special.</li>
              <li>Since it's just a card, you can put anything you want into it; no restriction.</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="tw:my-4">
          <CollapsibleTrigger className="tw:flex tw:items-center tw:gap-2 tw:group">
            <Icon icon='lucide:chevron-right' className="tw:text-gray-500 tw:group-data-[state=open]:rotate-90" />
            SidebarPeer
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ul className="">
              <li>The name of this component should already explain everything. It's… the peer of the Sidebar, the most boring one.</li>
              <li>Typically contains the main content of your application, but in fact, there's no any kind of restriction that what kind of thing you can put it in.</li>
            </ul>
          </CollapsibleContent>
        </Collapsible>

        <p>
          Before we get into more details, how about playing with a very simple demo and briefly looking into the corresponding code snippet:
        </p>
      </div>
      <VersatileTabs
        compact
        settings={[
          {
            type: "preview",
            demoId: "sidebar-toggle-control",
          }
        ]}
      />






      <InfoDetails title={<span>If now you have a little voice in your mind: <i>“Wow! This is very different from <b className='tw:brand'>Shadcn</b>’s Sidebar!”</i></span>}>
        <div className="tw:prose tw:prose-gray dark:tw:prose-invert tw:max-w-none">
          <p>
            Yes, you’re right about your keen sense!
          </p>
          <p>
            Again, anything in our sidebar component all come from <LinkScrollTo to="definition">the definition</LinkScrollTo>, but in fact, all the statements there are just common sense / practical observation.
          </p>
          <p>
            Without a strong spec, a component design will never be right, and it might look fancy at certain time, but it’d have the devastating consequences.
          </p>
        </div>
      </InfoDetails>

      <br />
      <br />

      <Heading size='h3'>1️⃣ The Sidebar</Heading>
      <p>
        Our Sidebar will use <Link to='./../../drawer/introduction' className='tw:link'>Drawer</Link> (we call it “mobile sidebar”) under the hood when in the small breakpoint, so this leads to below use cases:

        1. You only want to have a desktop sidebar (ie., the sidebar will be the same at any breakpoint)
        2. You just want to use our solution anyway
        3. There’re probably other cases, but should be rare or just easy to come up with the solutions

        The first case will be explained in the next section. Below I explain what you need to know in the 2nd case:

        So any prop or class you pass into Sidebar will be forwarded to both desktop and mobile sidebar (note: the desktop sidebar is just a div with some styles; nothing special.)

        Since the inner layout in the mobile sidebar can be different from the desktop’s (actually, it’s very common to have different designs), so our policy is: whenever you use Sidebar, you must explicit specify what kinds of inner layout you want in each sidebar by using <code className='tw:code'>Sidebar.Mobile</code> and <code className='tw:code'>Sidebar.Desktop</code>:
      </p>
      <CodeBlock>{`

    {/* To have the left Sidebar: */}
    <SidebarLayout>
      <SidebarPeer/>
    </SidebarLayout>

    {/* To have the right Sidebar: */}
    <SidebarLayout>
      <SidebarPeer/>
      <Sidebar/>
    </SidebarLayout>

      `}</CodeBlock>

      <br />

      <p>
        Let's! For more on its family components to use, and more demos on showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
      <br />
      <br />

      <QASection />

      <QA items={[
        {
          value: 'vertical-desktop-sidebar',
          trigger: "Why the desktop sidebar can't be in direction vertically?",
          content: (
            <p>

            </p>
          )
        }
      ]} />
    </>
  )
}