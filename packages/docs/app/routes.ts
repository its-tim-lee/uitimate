import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

/**
 * - This defines route modules
 * - If only `flatRoutes` is used, simply `export default` that
 * - Every route in routes.ts is nested inside the special app/root.tsx module (Root Route).
 */
export default [
  // HACK: for some reasons, `flatRoutes` can't convert routes/index.tsx into the path `/`,
  // but `index`, that's why we need to manually convert it at here
  index("./routes/index.tsx"),
  ...(await flatRoutes({
    rootDirectory: "routes",
    ignoredRouteFiles: ["routes/**/*.test.{ts,tsx}", "routes/index.tsx"],
  }))
] satisfies RouteConfig;

