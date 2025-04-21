import { allDocs, type Doc } from '#/lib/contentlayer'
import { useMDXComponent } from '#/helpers/hooks/useMDXComponent'
import { useLoaderData } from "react-router";
import { UsageSection } from '#/components/internal/ApiDoc.tsx'
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
const components = {
  UsageSection,
  ComponentPageHero,
}

export const loader = async ({ params }: any) => {
  const name = params.name?.toLowerCase() || '';
  const doc = allDocs.find(d => d.component === name)
  return { doc };
};

export default () => {
  const { doc } = useLoaderData<typeof loader>();
  const MDXContent = useMDXComponent(doc!.body?.code)
  return (
    <div className="tw:prose tw:dark:prose-invert tw-max-w-none">
      <MDXContent components={components} />
    </div>
  )
}