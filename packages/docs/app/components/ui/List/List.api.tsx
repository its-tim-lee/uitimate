import {
  DemoScenariosSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./List.meta.tsx";
import { Heading } from "../Heading/Heading.tsx";
import { Link } from "react-router";
export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="list-indent-border"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="list-demo" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="list-demo">Simple 1</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-firebase-setting-list-1">Simple 2</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-optional-indent-v4">With Dropdown</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-inset">Inset</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-optional-indent-v1">Collapsible v1</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-optional-indent-v2">Collapsible v2</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-optional-indent-v3">Collapsible v3</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="list-demo" demoId="list-demo" />
        <VersatileTabs2Content value="list-firebase-setting-list-1" demoId="list-firebase-setting-list-1" />
        <VersatileTabs2Content value="list-optional-indent-v4" demoId="list-optional-indent-v4" />
        <VersatileTabs2Content value="list-inset" demoId="list-inset">
          <p>
            Heads up: The indent on the 2nd item below is intentional.
            <br />
            <br />
            Here's the deal: Some UI libs give you an <code className='tw:code'>inset</code> prop to handle simple indentation.
            We'll never do that. Why? Because you can achieve the exact same thing with basic <b className='tw:brand'>Tailwind</b> classes.
            <b className='tw:brand'>Tailwind</b> is industry standard (Google, Netflix, etc., use it), and even AI coding tools love it (and more and more Big tech's AI are using it).
            So, why learn a one-off prop when you can use standard CSS knowledge?
            <br />
            <br />
            Point is: We skip the unnecessary <code className='tw:code'>inset</code> prop, and you still get the same result easily.
            <br />
            <br />
          </p>
        </VersatileTabs2Content>
        <VersatileTabs2Content value="list-optional-indent-v1" demoId="list-optional-indent-v1" />
        <VersatileTabs2Content value="list-optional-indent-v2" demoId="list-optional-indent-v2">
          <p>
            Same functionality as v1, but uses <code className='tw:code'>Collapsible</code> in a more decoupled way. See if this clicks better with the approach outlined in the intro!
            <br />
            <br />
          </p>
        </VersatileTabs2Content>
        <VersatileTabs2Content value="list-optional-indent-v3" demoId="list-optional-indent-v3">
          <p>
            Still works the same as other versions, just without the indent.
            <br />
            <br />
          </p>
        </VersatileTabs2Content>
      </VersatileTabs2>


      <DemoRecipeSection />
      <VersatileTabs2 defaultValue="list-notion-sidebar" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="list-notion-sidebar">File Tree 1</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-vsc-git">File Tree 2</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="list-firebase-sidebar-list">Collapse-To-Icon</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="list-notion-sidebar" demoId="list-notion-sidebar" />
        <VersatileTabs2Content value="list-vsc-git" demoId="list-vsc-git" />
        <VersatileTabs2Content value="list-firebase-sidebar-list" demoId="list-firebase-sidebar-list">
          <div>
            <Heading size='h5'>Why not create a dedicated Sidebar component for this?</Heading>
            <p>
              Thinking of wrapping list features into a Sidebar component? Yeah, that's probably the wrong move, sorry!
              <br />
              <br />
              Don't believe us? Ask yourself honestly:
              <i>"Is the Sidebar component from <b className='tw:brand'>Shadcn</b> actually easy to learn and use?"</i>
              <br />
              <br />
              If you're 100% honest, the answer is a straight-up NO.
              <br />
              <br />
              We actually wrote <Link to="./../../sidebar/introduction" className="tw:link">a whole article</Link> about how sidebar components *should* be designed, so we won't rehash it here.
              <br />
              <br />
            </p>
            <Heading size='h5'>Why not build the collapse-to-icon feature *into* the List component?</Heading>
            <p>
              Play with this demo – you can collapse it down to just icons.
              Some libs offer this out-of-the-box (usually via props) and make it seem awesome.
              But honestly? It's mostly smoke and mirrors. That kind of built-in feature rarely scales well.
              <br />
              <br />
              Sure, if your target implementation is super specific and simple, an out-of-the-box solution might work.
              But the real world is messy. You'll encounter far more complex scenarios
              (look closely at the demo – notice the differences before and after collapsing).
              <br />
              <br />
              Bottom line: You often need to implement collapse-to-icon manually.
              We show a clean way to do it here (check the code snippet).
              The only minor downside? No fancy transition animation during collapse/expand.
              But let's be real: it's really, really NOT A BIG DEAL!
              Tons of great products skip fancy transitions, work extremely well, and people love 'em anyway!
              <br />
              <br />
            </p>
          </div>
        </VersatileTabs2Content>
      </VersatileTabs2>
    </>
  )
}


