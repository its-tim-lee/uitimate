import { redirect } from "react-router";

export async function loader() {
  return redirect("/docs/get-started/introduction");
}

export default function Index() {
  return null
}