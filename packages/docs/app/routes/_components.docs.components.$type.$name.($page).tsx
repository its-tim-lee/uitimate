import { useLoaderData } from "react-router";
import type { Route } from "../+types/root";
import { componentRegistry } from "@/helpers/route";

type ComponentType = 'core' | 'recipe';

export const loader = async ({ params }: Route.LoaderArgs) => {
  // Ensure we have valid values and type safety
  const type = (params.type?.toLowerCase() || 'core') as ComponentType;
  const name = params.name?.toLowerCase() || '';
  const page = params.page?.toLowerCase() || 'api';

  // Construct the correct key based on component type
  const key = type === 'core' ? `${name}/${page}` : name;

  return { type, key };
};

export default () => {
  const { type, key } = useLoaderData<typeof loader>();

  // Create a type-safe way to look up the component
  let Component: React.ComponentType | undefined;

  if (type === 'core') {
    Component = componentRegistry.core[key as `${string}/${string}`];
  } else if (type === 'recipe') {
    Component = componentRegistry.recipe[key];
  }

  return Component ? <Component /> : <div>Component not found: {type}/{key}</div>;
}
