import DocPageLayout from "#/components/internal/layout/DocPageLayout";
import { useLoaderData } from "react-router";
import type { Route } from "../+types/root";
import { componentRegistry, type CoreComponentKey } from "#/helpers/route";
import ReactMarkdown from "react-markdown";
import { allDocs } from '#/lib/contentlayer'
import { Mdx } from '#/components/internal/Mdx'
import ComponentPageHero from "#/components/internal/ComponentPageHero";

const componentMetas = import.meta.glob('./../components/ui/**/*.meta.tsx', { eager: true, import: 'default' });
export const loader = async ({ params }: Route.LoaderArgs) => {
  const type = (params.type?.toLowerCase() || 'core') as 'core' | 'recipe';
  const name = params.name?.toLowerCase() || '';
  const page = params.page?.toLowerCase() || 'api';
  const key = type === 'core' ? `${name}/${page}` : name;
  const doc = allDocs.find(d => {
    const fileType = d._raw?.flattenedPath?.split('.')?.pop(); // eg., "Test/Test.introduction" -> "introduction"
    return d.component === name && fileType === page;
  });
  const metaFilePath = Object.keys(componentMetas).find(path => path.toLowerCase().includes(`/${name}/${name}.meta`));
  const meta = metaFilePath ? componentMetas[metaFilePath] : null;
  return { type, key, page, name, doc, meta };
};

/**
 * #2025-04-01
 * HACK: providing `key` from `loader` to `useLoaderData` for retrieving the component
 * is literally just the current limitation of React Router.
 * Once they integrate with RSC, we should be able to return the component directly from `loader`
 */
export default () => {
  const { type, key, name, page, doc, meta } = useLoaderData<typeof loader>();

  if (type === 'core' && page === 'changelog') {
    return (
      <DocPageLayout>
        <div className="tw:prose tw:dark:prose-invert tw:max-w-none">
          <ReactMarkdown>{componentRegistry.changelog[name]}</ReactMarkdown>
        </div>
      </DocPageLayout>
    );
  }
  if (doc?.body?.code) {
    return (
      <DocPageLayout>
        <div className="tw:prose tw:dark:prose-invert tw:max-w-none">
          {meta && <ComponentPageHero title={`${name}/${page}`} subtitle={(meta as any).description} />}
          <Mdx code={doc.body.code} />
        </div>
      </DocPageLayout>
    );
  }

  // Fallback to legacy TSX components
  let Component: React.ComponentType | undefined;
  if (type === 'core') {
    Component = componentRegistry.core[key as CoreComponentKey];
  } else if (type === 'recipe') {
    Component = componentRegistry.recipe[key];
  }

  return (
    <DocPageLayout>
      {Component ? (
        <Component />
      ) : (
        <div>Component not found: {type}/{key}</div>
      )}
    </DocPageLayout>
  );
}