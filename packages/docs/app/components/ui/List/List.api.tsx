import {
  UsageSection,
  DemoScenariosSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./List.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Heading } from "../Heading/Heading.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="list-indent-border"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Simple 1",
            type: "preview",
            demoId: "list-demo",
          },
          {
            title: "Simple 2",
            type: "preview",
            demoId: "list-firebase-setting-list-1",
          },
          {
            title: "With Dropdown",
            type: "preview",
            demoId: "list-optional-indent-v4"
          },
          {
            title: "Inset",
            type: "preview",
            demoId: "list-inset",
            content: (
              <p>
                The 2nd indented item below is by intention.
                <br />
                <br />
                What we want to show here is that,
                while some component libraries provide the prop like {` `}
                <code className='tw:code'>inset</code>to just help you to do the indent things (usually it's very simple) for you,
                we'll never provide that kind of stuff, because if you can just use <b className='tw:brand'>Tailwind</b> to do so, which is the extreme common CSS knowledge that too many companies including the big techs like Google, Netflix, ...,
                and you even can see more and more AI tools that use <b className='tw:brand'>Tailwind</b> by default (because AI really like it),
                why in the world that you'll think such prop-design is a good idea? And what's the point to learn that?
                <br />
                <br />
                So here, we don't do such <code className='tw:code'>inset</code> thing, but still can achieve the same result.
                <br />

                <br /></p>
            )
          },
          {
            title: "Collapsible v1",
            type: "preview",
            demoId: "list-optional-indent-v1",
          },
          {
            title: "Collapsible v2",
            type: "preview",
            demoId: "list-optional-indent-v2",
            content: (
              <p>
                This functions the same as the v1, but just use the <code className='tw:code'>Collapsible</code> in a more decoupling fashion if this approach makes more sense to you to align with our instructions
                <br />
                <br />
              </p>
            )
          },
          {
            title: "Collapsible v3",
            type: "preview",
            demoId: "list-optional-indent-v3",
            content: (
              <p>
                This functions still the same as other versions, but with no indent.
                <br />
                <br />
              </p>
            )
          },
        ]}
      />
      <br />
      <br />
      <DemoRecipeSection />
      <VersatileTabs
        settings={[
          {
            title: "File Tree 1",
            type: "preview",
            demoId: "list-notion-sidebar",
          },

          {
            title: "File Tree 2",
            type: "preview",
            demoId: "list-vsc-git",
          },

          {
            title: "Collapse-To-Icon",
            type: "preview",
            demoId: "list-firebase-sidebar-list",
            content: (
              <div>
                Lots of concepts are packed here:
                <br />
                <br />
                <Heading size='h5'>Why not create a sidebar component for this?</Heading>
                <p>
                  If what you're thinking is kind of providing the list feature in a sidebar, then unfortunatelly, that is the wrong move.
                  <br />
                  <br />
                  If you don't believe it, then, ask youself honestly:
                  <i>"Do you really think that the sidebar component provided by <b className='tw:brand'>Shadcn</b> is really easy to learn and use?"</i>
                  <br />
                  <br />
                  If you being butely honest, the answer will only be very straight: NO!
                  <br />
                  <br />
                  In fact, we wrote a didicated article on how a sidebar component should be designed, so we'll not repeat it here.
                  <br />
                  <br />
                </p>
                <Heading size='h5'>Why not embed the collapse-to-icon feature into List component?</Heading>
                <p>
                  By interacting with this demo, you can collapse it into the "icon list".
                  Some component libraries provide such thing to you, and make people think about that it's awesome.
                  But in reality, it's a fantasy, and such out-of-the-box feature will never be scalable.
                  <br />
                  <br />
                  Unless your implementation target is very specific (and usually very simple),
                  then yes, out-of-the-box feature works great. But in the real world,
                  there're just way more cases that are far more complicated than that
                  (look carefully on the demo to see the differences between before-collapse and after-collapse),
                  which the out-of-the-box approach will never work.
                  <br />
                  <br />
                  So, you need to implement collapse-to-icon manually. Here, we showed a clean way to do so (please check the code snippet);
                  the downside is that, you can't have a nice transition during collapse/expand.
                  But let's face it, it's really really not a big deal!
                  In fact, there're so many great products out there that they just don't have such nice transition,
                  and they still work extreme well, and people like them anyway!
                  <br />
                  <br />
                </p>
              </div>
            )
          },
        ]}
      />
      <br />
      <br />
    </>
  )
}


