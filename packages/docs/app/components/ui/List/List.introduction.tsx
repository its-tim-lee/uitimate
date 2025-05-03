import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import InfoBanner from '#/components/internal/InfoBanner.tsx';
import InfoDetails from '#/components/internal/InfoDetails.tsx';
import { QA2, QA2Item, QA2Trigger, QA2Content } from "../../internal/QA2.tsx";

export default () => {
  return (
    <>
      <QuickDemoSection />

      <VersatileTabs2 defaultValue="list-demo" variant="underline">
        <VersatileTabs2Content value="list-demo" demoId="list-demo" showCode={false} />
      </VersatileTabs2>
      <br />
      <InfoBanner>
        The source code's simplicity might fool you ⎯ this component is way more sophisticated than it looks.
        Why? 'Cause its design is totally different from any other UI lib out there. Intrigued? Keep scrolling.
      </InfoBanner>


      <QuickStartSection />
      <h4>1️⃣ Mindset Shift</h4>
      <p>
        First things first: Forget everything you *think* a list component should be or do.
      </p>
      <p>
        Seriously, this is step #1 for grokking our list component. Those old expectations probably came from wonky implementations in other libs/plugins/whatever. Holding onto that old way of thinking will just trip you up here.
      </p>

      <h4>2️⃣ What is a List Component?</h4>
      <h5># The Big Picture</h5>
      <p>
        Think of native <code className='tw:code'>{`<ul>`}</code> and <code className='tw:code'>{`<ol>`}</code> as "a set of items managed somehow."
        Our list component shares that core idea but narrows "somehow" to "vertical stacking only".
        So, while you could use native tags for horizontal lists, our list items strictly stack vertically.
        <br />
        <br />
        <InfoBanner>
          Only use our list component for vertical layouts. Honestly, that's how most people picture a "list" anyway.
        </InfoBanner>
      </p>
      <h5># Inside the List Item</h5>
      <p>
        Let's break down the "list item": It's basically just a generic card (component, if you prefer).
        But, the layout patterns for its inner elements usually stick to a tighter range than the infinite possibilities of a general card.
      </p>
      <InfoDetails
        title="Wait, aren't card designs pretty limited?"
      >
        Not really, especially when you think about scalability. If you've only used cards in limited ways,
        it's likely because something (a designer, a platform like a blog, a design system, etc.)
        restricted their use. But a generic card can pop up anywhere, and there are zero rules dictating how its inner elements must be laid out.
      </InfoDetails>
      <p>
        Often, the elements inside a list item stack horizontally. BUT, that doesn't mean we should bake that assumption in and create a bunch of related components (like <code className='tw:code'>{`<ListItemAvatar>`}</code>, <code className='tw:code'>{`<ListItemAction>`}</code>, etc.).
      </p>
      <p>
        <i>"Why not?"</i> you ask. Because in the real world, horizontal stacking isn't always the case.
        You can't just say <i>"other stacking methods aren't common"</i> (because they totally are). Plus, the elements inside can vary wildly.
        And honestly, creating those specific components is dead simple with <b className='tw:brand'>Tailwind</b> anyway.
      </p>
      <p>
        <i>"So...?"</i> Still confused? This means the right design should NEVER assume anything about what goes inside a list item.
        Instead, you should put whatever content you need in there and handle the layout manually with <b className='tw:brand'>Tailwind</b> for maximum flexibility.
      </p>
      <p>
        <i>"Then what's the point of using components at all?"</i> you wonder. Ah, that's why I said this component is sophisticated! It might seem confusing now, but stick with me!
      </p>
      <h4>3️⃣ The Component Family</h4>
      <p>
        Following our general theming approach, all components mentioned below use flexbox. They're flex containers with super minimal default styles (you'll thank us later!). Think of it like we're giving you near-headless components.
      </p>
      <h5># {`<List>`}</h5>
      <p>
        The only thing that goes directly inside a <b>{`<List>`}</b> is a <b>{`<ListItem>`}</b>. Period.
        Just like people don't typically toss random elements besides <code className='tw:code'>{`<li>`}</code>
        into native <code className='tw:code'>{`<ul>`}</code> or <code className='tw:code'>{`<ol>`}</code>, we're sticking to that common sense.
      </p>
      <h5># {`<ListItem>`}</h5>
      <p>
        Since only <b>{`<ListItem>`}</b>s go in a <b>{`<List>`}</b>,
        anything else you need to integrate (icons, buttons, text, custom components) goes inside the <b>{`<ListItem>`}</b>.
      </p>
      <InfoBanner>
        Our list family has just 2 components: <b>{`<List>`}</b> & <b>{`<ListItem>`}</b>.
      </InfoBanner>
      <h4>4️⃣ Nested Lists</h4>
      <p>
        Nested lists are super common, especially in sidebars. We built support for this right in, so you can nest lists as deep as you need. You can achieve UIs like this:
      </p>
      <VersatileTabs2 defaultValue="list-vsc-git" variant="underline">
        <VersatileTabs2Content value="list-vsc-git" demoId="list-vsc-git" showCode={false} />
      </VersatileTabs2>
      <p>
        Most of the time, nested lists have an indent style. You get that automatically just by putting a <code className='tw:code'>{`<List>`}</code> inside a <code className='tw:code'>{`<ListItem>`}</code>:
      </p>
      <CodeBlock>{`
  {/* Nest as deep as you want! */}\n  <List>
    <ListItem>
      Level 1 Item Title
      <List>
        <ListItem>Level 2 Item Title</ListItem>
        {/* more <ListItem/>... */}
      </List>
    </ListItem>
    <ListItem>Another Level 1 Item</ListItem>
    {/* more <ListItem/>... */}
  </List>
      `}</CodeBlock>
      <p>
        Keep in mind, a nested list structure is quite specific. A <code className='tw:code'>ListItem</code> containing a list typically includes:
      </p>
      <ul className="tw:list-disc tw:list-inside tw:space-y-2 tw:p-3">
        <li>
          A title (doesn't have to be plain text; it represents what the nested list is about).
        </li>
        <li>
          A list representation (doesn't have to be our <code className='tw:code'>List</code> component, but usually is).
        </li>
      </ul>
      <p>
        If these instructions seem a bit high-level, that's intentional. The best way to really get it is to play around with the "Collapsible nested list" demos below. Check out the code snippets and compare them to what we've explained here:
      </p>
      <VersatileTabs2 defaultValue="list-optional-indent-v1" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="list-optional-indent-v1">v1</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-optional-indent-v2">v2</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-optional-indent-v3">v3</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-optional-indent-v4">v4</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="list-optional-indent-v1" demoId="list-optional-indent-v1" />
        <VersatileTabs2Content value="list-optional-indent-v2" demoId="list-optional-indent-v2">
          <p>
            Same functionality as v1, but uses <code className='tw:code'>Collapsible</code> in a more decoupled way. See if this clicks better with our instructions!
            <br />
            <br />
          </p>
        </VersatileTabs2Content>
        <VersatileTabs2Content value="list-optional-indent-v3" demoId="list-optional-indent-v3">
          <p>
            Still works the same, but with no indentation.
            Notice how little effort it took? Just 2 CSS classes! Resetting padding and margin makes sense here. While indentation is common for nested lists, this shows how easy it is to achieve a different style when needed.
          </p>
        </VersatileTabs2Content>
        <VersatileTabs2Content value="list-optional-indent-v4" demoId="list-optional-indent-v4">
          <p>
            This one's a bit different ⎯ it's NOT a nested list. Hey, nobody said you always have to nest, right? Your design might not require it.
          </p>
        </VersatileTabs2Content>
      </VersatileTabs2>
      <br />


      <h4>5️⃣ Real-World Examples Galore</h4>
      <p>
        Compared to other component libs, the examples in our docs serve some extra IMPORTANT purposes:
      </p>
      <ul>
        <li>
          <b>Shift Your Thinking</b>:
          Through these examples, we show you from different angles why list components should be designed this way.
          This helps avoid confusion like <i>"Why don't you provide feature X?"</i>.
          Get familiar with our approach, and you'll be super productive (fingers crossed!).
        </li>
        <li>
          <b>Code Templates</b>:
          Since our design encourages manual styling and feature implementation (using <b className='tw:brand'>Tailwind</b>),
          providing lots of real-world examples is key. Think of them as common templates you can copy-paste.
          The big win? You won't get bogged down trying to customize complex, black-box components by digging through endless API docs.
          With our approach, it's mostly just <b className='tw:brand'>Tailwind</b> + our minimal list components!
        </li>

      </ul>
      <p>
        Alright! To explore the family components and see more demos showcasing this component's versatility, head over to <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
      <QASection />

      <QA2>
        <QA2Item value="why-no-padding-margin">
          <QA2Trigger id='why-no-common-default-list-style'>Why no default padding, margin, or hover/animation styles?</QA2Trigger>
          <QA2Content>
            <p>
              If we added those, you'd inevitably run into situations where the defaults don't work (happens more often than you'd think!).
              Then you'd be stuck resetting styles like crazy—back to the old, frustrating way. We provide the bare minimum so *you* have 100% control.
            </p>
          </QA2Content>
        </QA2Item>
      </QA2>
    </>
  )
}