import { useLoaderData } from "react-router";

// export async function loader() {
//   console.log("🔥 SSR: address-book loader");
//   return {
//     greeting: "Hello",
//   }
// }

export async function clientLoader() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("🔥 CSR: address-book loader");
  return {
    greeting: "Hello",
  }
}


export function HydrateFallback() { // will show while the client-loader is loading
  return <div>Loading...</div>;
}


export default function AddressBook() {
  return <div className="tw:text-4xl">Address Book</div>;
}
