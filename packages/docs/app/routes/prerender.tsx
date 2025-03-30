import { Link, useLoaderData } from "react-router";

export async function loader() {
  console.log("prerender loader!!!!!");
  return {
    greeting: "Hello",
  }
}

export default function Prerender() {
  const { greeting } = useLoaderData<typeof loader>();
  return <div>
    <h1>{greeting}</h1>
    <Link to="/tutorials/address-book">Go to tutorials/address-book!!</Link>

  </div>;
}