import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";


// export default [
//   index("routes/home.tsx"),
//   route("about/", "./routes/about.tsx"),
//   ...prefix("doc/", [ // path prefix
//     index("./routes/picking-a-mode.tsx"),
//     route("routing/", "./routes/routing.tsx"),
//   ]),
// ] satisfies RouteConfig;


/**
 * - This defines route modules
 * - If only `flatRoutes` is used, simply `export default` that
 * - Every route in routes.ts is nested inside the special app/root.tsx module (Root Route).
 */
export default [
  // route('prerender', './routes/prerender.tsx'),
  route('dashboard', './routes/dashboard.tsx', [
    index('./routes/dashboard-home.tsx'), // this will be a default route under the parent route, so can be accessed via `dashboard/`
    // route('settings', './routes/settings.tsx'), // can only be seen under `dashboard/settings`
  ]),
  ...(await flatRoutes({
    rootDirectory: "pages",
    ignoredRouteFiles: ["pages/not-a-route.tsx", "pages/**/*.test.{ts,tsx}"],
  }))
] satisfies RouteConfig;

