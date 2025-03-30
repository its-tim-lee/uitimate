import { useLoaderData } from "react-router";
import type { Route } from "../+types/root";

export const loader = async ({ request, params }: Route.LoaderArgs) => {

  console.log(`server loader params: ${JSON.stringify(params)}`);
  return {
    greeting: "Hello",
  }
}

export default function Tutorials() {
  const { query } = useLoaderData<typeof clientLoader>();
  return <div>
    Visit "/tutorials/a-random-word" to see this page.
    This is catch-all route, but named as "Splate Route" in RR
    <br />
    <br />
    Query: {query}
  </div>;
}

export async function clientLoader({ serverLoader, request, params }: any) {
  // const serverData = await serverLoader();
  // console.log(`serverData: ${JSON.stringify(serverData)}`);
  console.log(`params: ${JSON.stringify(params)}`);
  await new Promise(resolve => setTimeout(resolve, 3000));
  return {
    query: params['*'],
    // serverData: serverData.greeting,
  }
}