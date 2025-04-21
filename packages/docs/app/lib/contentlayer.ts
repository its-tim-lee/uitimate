/**
 * HACK: This setup is just for React-Router v7.
 * Traditionally, setting up contentlayer needs us to declare below thing under tsconfig.json:
 * ```
 * "paths": {
 *   "contentlayer/generated": [
 *     "./.contentlayer/generated"
 *   ],
 *   ...
 * }
 * ```
 * And then you might think that using "vite-tsconfig-paths" in vite.config.ts is enough,
 * but it's not.
 * This is because when we use the path something like "contentlayer/generated", it's call "Virtual/Special Module Paths",
 * which needs the build tool to support, but other paths like "~/" is just a regular file paths,
 * which don't need the build tool to support.
 *
 * When we run the react router app, it actually first start React Router server,
 * and it will respect tsconfig.json to really compile the code,
 * since in that moment, Vite server is not running yet,
 * processing "Virtual/Special Module Paths" will be failed.
 */
import * as generated from './../../.contentlayer/generated'

export const { allDocs } = generated
export type { Doc } from './../../.contentlayer/generated'