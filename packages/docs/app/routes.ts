import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

/**
 * - This defines route modules
 * - If only `flatRoutes` is used, simply `export default` that
 * - Every route in routes.ts is nested inside the special app/root.tsx module (Root Route).
 */
export default [
  ...(await flatRoutes({
    rootDirectory: "routes",
    ignoredRouteFiles: ["routes/not-a-route.tsx", "routes/**/*.test.{ts,tsx}"],
  }))
] satisfies RouteConfig;

