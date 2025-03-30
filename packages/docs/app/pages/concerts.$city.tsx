import { useLoaderData } from "react-router";
import type { Route } from "../+types/root";

// TODO: `serverLoader` vs `loader`?
export const loader = async ({ request, params }: Route.LoaderArgs) => {
  if (params.city === 'not-a-city') {
    throw new Response('Enter a valid city', { status: 404 });
  }
  return {
    city: params.city,
  }
}
export const handle = {
  its: "all yours",
};

export default function ConcertList({ loaderData, matches }: Route.ComponentProps) {
  console.log(matches);
  const { city } = useLoaderData<typeof loader>(); // = loaderData.city
  return <div>Concerts in {city}</div>;
}

import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
