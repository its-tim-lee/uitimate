import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import Banner from "#/components/internal/InfoBanner.tsx";
import { QuickDemoSection, QuickStartSection } from "#/components/internal/IntroductionDoc.tsx";
import { DependenciesSection } from "#/components/internal/ApiDoc";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <QuickDemoSection />
      <VersatileTabs2 variant="underline" defaultValue="checkbox-demo">
        <VersatileTabs2Content value="checkbox-demo" demoId="checkbox-demo" />
      </VersatileTabs2>


      <QuickStartSection />
      <p>
        Label, in most of the times, is used with the form control elements (eg., text area, input, ... ) to handle the accessibility.
      </p>
      <p>
        To allow it to provide accessibility features, just make sure match the <code className='tw:code'>htmlFor</code> prop to the id of the associated form control element.
        Note that:
      </p>
      <ul className="tw:list-disc tw:pl-5">
        <li>one label can only associate with one form control element.</li>
        <li>ensure the form control element use the native element such as <b>input</b>, <b>textarea</b> as a base.</li>
      </ul>
      <p>
        Since Label is usually used with form controls, it's probably often used in the {` `}
        <Link
          className="tw:link tw:w-fit"
          to="./../../form/introduction"
        >
          form context
        </Link>,
        and in that case, you will use <code className='tw:code'>{`<FormLabel>`}</code> inside <code className='tw:code'>{`<Label>`}</code>,
        and then the matching thing we mentioned will just be handled automatically under the hood.
      </p>
    </>
  )
}