import { Icon as Root, type IconProps } from "@iconify/react";
/**
 * TBD: doc:
 * In case one is wondering why an icon need to support SSR, below is just one of many cases:
 * - When a React component has used some icons, and those icons don't make sense to be passed in from the outside,
 *   and for the SEO consideration, this React component needs to be rendered on the server side.
 *   (so without further handling on the icon, on Astro project, after the render, icon will not show up)
 *
 * TBD: keep observating the necessity of creating `size` prop
 * As long as Icon is used in the context of Button, Badge,...
 * since they already can scale the icon together, sizing is not an issue.
 * So the need of `size` prop will seem only be required when Icon and text is used out of the context of Button, Badge,...
 * but currently, I haven't encounter any case that need to scale icon differently with text.
 *
 * Currently, to size the Icon, use Tailwind's `size-*`
 */
const Icon = (props: IconProps) => <Root data-icon {...props} />
Icon.displayName = "Icon";
export {
  Icon as Icon,
  type IconProps,
}