/**
 * This file is actually called "root route"
 */
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "react-router";
import pkg from "../package.json";
import type { Route } from "./+types/root";
import cssHref from "./style/index.css?url";
const colorSchemeCode = await import(
  "@/components/internal/color-scheme-control/fout-preventer.ts?raw"
);
import SiteHeader from "@/components/internal/SiteHeader.tsx";
import SiteFooter from "@/components/internal/SiteFooter.tsx";
import DocPageLayout from "./components/internal/layout/DocPageLayout";

/**
 * This will always be called on the server even if no ssr (ie., in no-ssr case, server = build time server)
 */
export async function loader() {
  console.log("🔥 Root loader");
  return {
    version: pkg.version,
  }
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: cssHref },
  {
    rel: 'icon',
    type: "image/svg+xml",
    href: "/favicon.svg"
  }
];

// called "app shell"
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorSchemeCode.default }} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Uitimate</title>
      </head>
      <body>
        <SiteHeader />
        <main>
          {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
          {children}
        </main>
        <SiteFooter />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback({ loaderData }: Route.ComponentProps) {
  console.log("🔥 HydrateFallback", loaderData);
  return <p>Loading...{loaderData.version}</p>;
}



export default function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  console.log("🔥 isNavigating", isNavigating);
  return (
    <DocPageLayout>
      <Outlet />
    </DocPageLayout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
