import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import meta from "./List.meta.tsx"; // Modified: ComponentName -> List
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import InfoBanner from '#/components/internal/InfoBanner.tsx';
import InfoDetails from '#/components/internal/InfoDetails.tsx';
import { Heading } from "../Heading/Heading.tsx";
import { Accordion, AccordionItem, AccordionTrigger } from "../Accordion/Accordion.tsx";
import { Icon } from "../Icon/Icon.tsx";
import QA from "../../internal/QA.tsx";

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
            demoId: "list-demo", // Modified: demo-file-name -> list-indent-border
          },
        ]}
      />

      <InfoBanner>
        The complexity of the source code will never reflect how the sophisticated this component is,
        because the design here is entirely different from all other UI libs on the market. Curious? Keep reading.
      </InfoBanner>

      <br />
      <br />

      <QuickStartSection />
      <Heading size='h4'>1️⃣ Paradigm shift</Heading>
      <p>
        First, I want you to throw out whatever the expectations that you think a list component should have/be.
        <br />
        <br />
        This is by far the most important step you should do at first to learn our list component, because those expectations actually came from the inappropriate implementations from all other component libraries/plugins/whatever. If you possessed this old thinking in your mind, things will never get right.
        <br />

        <br />
      </p>

      <Heading size='h4'>2️⃣ A list component</Heading>
      <Heading size='h5'>Overall contextural</Heading>
      <p>
        If the native <code className='tw:code'>ul</code> and <code className='tw:code'>ol</code>
        can be defined as a set of items managed in certain fashion.
        Our list component share the same essence but limit "certain fashion" into a vertical stacking manner; meaning that,
        while one really can use those natives to horizontally mange a set of items,
        {` `} our list items can only be managed vertically.
        <br />
        <br />
        <InfoBanner>
          The takeaway is: only use our list component in a vertical context. In fact, from the common sense, that's how the general public think a "list" should be.
        </InfoBanner>
        <br />
      </p>
      <Heading size='h5'>Inner contextural</Heading>
      <p>
        Let's demystify the list item: it's actually just a general card (component, if you may),
        but the stacking patterns of the inner elements usually fall into the narrow space (or the limited layouts) than infinite possibilities.
      </p>
      <InfoDetails
        title="If you think a card actually has a limited set of designs..."
      >
        That's incorrect in terms of the scalability sense. You used a card in that manner is because something (eg., from a designer, a platform such as blog, a design system, …) limits its usages, but a general card can appear in many places, and there's just NO any kind of constraint the inner elements should be layout with.
      </InfoDetails>
      <p>
        Usually, the inner elements will stack in the horizontal fashion in the list item, BUT that doesn't mean we should follow this move, and extract the relevant patterns into a family components (eg., <b>ListItemAvatar</b>, <b>ListItemAction</b>, …)
        <br />
        <br />
        <i>"Why not?"</i> you asked. Because in the real world, the horizontal stacking is NOT always the case, nor anyone can say that <i>"but stacking in other ways is not that common"</i> (because it's actually quite common), also, the elements put inside can be very different.
        <br />
        <br />
        <i>"So?"</i> you confused. This means the correct design should NEVER assume anything inside the list item. Instead, in there, one should put whatever they want and do the layout via <b className='tw:brand'>Tailwind</b> manually to achieve the scalability.
        <br />
        <br />
        <i>"Then, what's the point of using components?"</i> you questioned. We try to gradually give you the correct concepts, and here we reveal what's meant to be a correct, high level design point  for implementing a list component; later, you will see the overall picture. So just keep reading!
        <br />
        <br />
      </p>
      <Heading size='h4'>3️⃣ The family components</Heading>
      <p>
        As per our general theming policy, all below components are in flex context: they’re all flex containers with extreme bare minimum default styles (you’ll appreciate such defaults!). You may imagine our way of the implementation is a bit like providing them as headless components.
        <br />
        <br />
      </p>
      <Heading size='h5'>List</Heading>
      <p>
        The only inner element will be <b>ListItem</b> and nothing more. It's just like, people really don't put elements other than <code className='tw:code'>li</code> into the natives <code className='tw:code'>ul</code> or <code className='tw:code'>ol</code>, and here, we just follow the same common sense.
        <br />
        <br />
      </p>
      <Heading size='h5'>ListItem</Heading>
      <p>
        Since we’ve mentioned the only elements in <b>List</b> will be <b>ListItem</b>, so to integrate with other components (eg., <b>Accordion</b>, <b>Collapsible</b>, …etc), you’ll put them INSIDE the <b>ListItem</b>.
        <br />
        <br />
      </p>

      <Heading size='h4'>4️⃣ The nested lists</Heading>
      <p>
        This is a pattern a list can have, and it’s very common to see especially on the sidebar, so we take care of that in our implementation, such that you can nest the lists whatever deep you like, and achieve the UI such as:
        <br />
        <VersatileTabs
          settings={[
            {
              type: "preview",
              demoId: "list-vsc-git", // Modified: demo-file-name -> list-indent-border
              showCode: false,
            },
          ]}
        />
        <p>
          To have such indent style, simply put <code className='tw:code'>List</code>into a <code className='tw:code'>ListItem</code>:
        </p>
        <CodeBlock>{`
  {/* You can go whatever deep nesting you want: */}
  <List>
    <ListItem>
      Some 1st level item title
      <List>
        <ListItem>Some 2nd level item title</ListItem>
        {/* more <ListItem/> ... */}
      </List>
    </ListItem>
    <ListItem>Some another 1st level item title</ListItem>
    {/* more <ListItem/> ... */}
  </List>
      `}</CodeBlock>
        <br />
        Note that, a nested list is a very constraint style such that the <code className='tw:code'>ListItem</code>which contains a list will generally include the elements:
        <ul className="tw:list-disc tw:list-inside tw:space-y-2 tw:p-3">
          <li>
            A title representation (to represent what the nested list is; it doesn’t need to be a pure text)
          </li>
          <li>
            A list representation (it doesn’t must be a literal <code className='tw:code'>List</code>component)
          </li>
        </ul>
        <br />
        In case the instructions here is kind of vague, that’s by intention, because it’s on high level, and the best way you can master it is just playing around the “Collapsible nested list” demos below with reading the corresponding code snippets (and compare to our instructions):
        <br />
        <br />
      </p>
      <VersatileTabs
        settings={[
          {
            title: "v1",
            type: "preview",
            demoId: "list-optional-indent-v1",
          },
          {
            title: "v2",
            type: "preview",
            demoId: "list-optional-indent-v2",
            content: <p>
              This functions the same as the v1, but just use the <code className='tw:code'>Collapsible</code> in a more decoupling fashion if this approach makes more sense to you to align with our instructions
              <br />
              <br />
            </p>
          },
          {
            title: "v3",
            type: "preview",
            demoId: "list-optional-indent-v3",
            content: <p>
              This functions still the same as other versions, but with no indent.
              <br />
              <br />
              Take a look how a little, and the most ignorable, effort we just put into to make that work? Just 2 classes! Not only such resetting is making sense (ie., just resetting both left padding and margin), but this is actually a special style (ie., in most of the cases, people want an indent style for a nested list), so that the necessary resetting here just makes more sense.
              <br />
              <br />
            </p>
          },
          {
            title: "v4",
            type: "preview",
            demoId: "list-optional-indent-v4",
            content: <p>
              The functions on this version is a bit different, because it’s not a nested list. Frankly, no one forces you to always use a nested list, nor the design you’re implementing will always be.
              <br />
              <br />
            </p>
          },
        ]}
      />
      <br />


      <Heading size='h4'>5️⃣ Many real world samples</Heading>
      <p>
        <i>“Why this even needs to be mentioned?”</i> you yelled. Because, … we took a very unusual move on this component design,
        and the relevant things can also be unusual that most people might not notice, that’s why it really worths a few words here.
        <br />
      </p>
      <InfoDetails
        title="Side note: "
      >
        I found that when a very unusual paradigm is emerging, human being take a very long time to fully understand it,
        mostly because the paradigm shift is not easy for many people. It’s just like after <b className='tw:brand'>Shadcn</b>,
        who is probably the first one purposed the component code copy-paste instead of the traditional packaging onto NPM,
        launched his component library (although he claimed that it’s NOT a component library),
        you can see that lots of people asked the questions and fired the issues on the Github that really just don’t make sense to me,
        because many of those are really just belonging to the sense of the traditional packaged library.
      </InfoDetails>
      <p>
        Below are major considerations of providing such things besides all other general benefits you can get from the samples:
        <ul className="tw:list-disc tw:list-inside tw:space-y-2 tw:p-3">
          <li>
            <b>Code templates</b>:
            Since our design IMPLICITLY encourages the fact that many styles and features should be done manually instead of accepting out-of-box solutions,
            it’s more important to us to provide many real world sample codes, so in some sense,
            it’s like providing many common templates that you can copy-paste,
            but you don’t suffer from not knowing how to customize it without heavily looking into the long,
            complicated (and unclear in many times) API documentation like from the traditional sense,
            because it’s still just <b className='tw:brand'>Tailwind</b> with our almost-headless (with bare minimum features) list components!
          </li>
          <li>
            <b>Shift you mind</b>:
            through some samples, we actually have a great position to show you, from the different aspects,
            why list components should really be designed in the way we just presented,
            so that you don’t get confused in some situations and wonder something like: <i>“why you even don’t provide the XXX feature?”</i>,
            and just be more familiar with our approach, then finally being super productive (hopefully!)
          </li>
        </ul>
      </p>
      <br />
      <p>
        Let's! For more on its family components to use, and more demos on showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
      <br />
      <br />

      <QASection />

      <QA items={[
        {
          value: 'why-no-padding-margin',
          trigger: <span>Why not even provide some default padding, margin, and animation styles such as hovering?</span>,
          content: (
            <p>
              By doing so, you'll encounter the situations that those default styles don't fit well in certain cases (frankly, it can be many),
              and you fall into the old trap again: resetting the styles like a dummy.
            </p>
          )
        },
      ]} />
    </>
  )
}