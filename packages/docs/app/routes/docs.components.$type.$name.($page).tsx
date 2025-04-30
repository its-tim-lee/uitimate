import DocPageLayout from "#/components/internal/layout/DocPageLayout";
import { useLoaderData } from "react-router";
import type { Route } from "../+types/root";
import { componentRegistry, type CoreComponentKey, componentMeta, POSSIBLE_PAGES_FOR_CORE_COMPONENT } from "#/helpers/route";
import ReactMarkdown from "react-markdown";
import { allDocs } from '#/lib/contentlayer'
import { Mdx } from '#/components/internal/Mdx'
import ComponentPageHero from "#/components/internal/ComponentPageHero";
import { casing } from "#/helpers/utils";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const type = (casing.kebabCase(params.type || '') || 'core') as 'core' | 'recipe';
  const componentName = casing.kebabCase(params.name || '');
  const page = casing.kebabCase(params.page || '') as (typeof POSSIBLE_PAGES_FOR_CORE_COMPONENT)[number];
  const key = type === 'core' ? `${componentName}/${page}` : componentName;
  const doc = allDocs.find(d => {
    const fileType = casing.kebabCase(d._raw?.flattenedPath?.split('.')?.pop() || ''); // eg., "Test/Test.introduction" -> "introduction"
    return casing.kebabCase(d.component) === componentName && fileType === page;
  });
  const metaFilePath = Object.keys(componentMeta).find(path => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1]
    return fileName.includes(`${casing.pascalCase(componentName)}.meta`)
  });
  const meta = metaFilePath ? componentMeta[metaFilePath] : null;
  return { type, key, page, name: componentName, doc, meta };
};

/**
 * #2025-04-01
 * HACK: providing `key` from `loader` to `useLoaderData` for retrieving the component
 * is literally just the current limitation of React Router.
 * Once they integrate with RSC, we should be able to return the component directly from `loader`
 */
export default () => {
  const { type, key, name, page, doc, meta } = useLoaderData<typeof loader>();
  console.log('meta', meta);
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
        <div className="tw:prose tw:dark:prose-invert tw:max-w-none">
          {meta && <ComponentPageHero title={`${name}/${page}`} subtitle={(meta as any).description} />}
          <Component />
        </div>
      ) : (
        <div>Component not found: {type}/{key}</div>
      )}
    </DocPageLayout>
  );
}