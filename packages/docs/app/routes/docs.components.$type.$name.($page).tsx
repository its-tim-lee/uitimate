import DocPageLayout from "#/components/internal/layout/DocPageLayout";
import { useLoaderData } from "react-router";
import type { Route } from "../+types/root";
import { componentRegistry, type CoreComponentKey } from "#/helpers/route";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const type = (params.type?.toLowerCase() || 'core') as 'core' | 'recipe';
  const name = params.name?.toLowerCase() || '';
  const page = params.page?.toLowerCase() || 'api';
  const key = type === 'core' ? `${name}/${page}` : name;
  return { type, key };
};

/**
 * #2025-04-01
 * HACK: providing `key` from `loader` to `useLoaderData` for retrieving the component
 * is literally just the current limitation of React Router.
 * Once they integrate with RSC, we should be able to return the component directly from `loader`
 */
export default () => {
  const { type, key } = useLoaderData<typeof loader>();
  let Component: React.ComponentType | undefined;
  if (type === 'core') {
    Component = componentRegistry.core[key as CoreComponentKey];
  } else if (type === 'recipe') {
    Component = componentRegistry.recipe[key];
  }
  return (
    <DocPageLayout>
      {Component ? <Component /> : <div>Component not found: {type}/{key}</div>}
    </DocPageLayout>
  )
}
