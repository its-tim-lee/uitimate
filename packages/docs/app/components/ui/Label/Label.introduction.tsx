import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import meta from "./Label.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection } from "#/components/internal/IntroductionDoc.tsx";
import { Flat } from "#/components/preset/flat/index.tsx";
import { Icon } from "#/components/ui/Icon/Icon.tsx";

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
            demoId: "checkbox-demo",
          },
        ]}
      />
      <br />

      <QuickStartSection />
      <Flat size="sm" className="tw:flex tw:items-center tw:gap-2 tw:border-primary">
        <Icon icon='lucide:info' className='tw:mt-1 tw:size-5' />
        <p>You may ignore this componen if you don't care about the accessibility it provides.</p>
      </Flat >
      <br />
      <p>

      Label, in most of the times, is used with the form control elements (eg., text area, input, ... ) to handle the accessibility.
      <br />
      <br />
      To allow it to provide accessibility features, just make sure match the <code className='tw:code'>htmlFor</code>prop to the id of the associated form control element.
      <br />
      <br />
        Note that:
        <ul className="tw:list-disc tw:pl-5">
          <li>one label can only associate with one form control element.</li>
          <li>ensure the form control element use the native element such as <b>input</b>, <b>textarea</b> as a base.</li>
        </ul>
      </p>

    </>
  )
}