import { Icon as Root, type IconProps as _IconProps } from "@iconify/react";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
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
 *
 * But now i can confirm that, if the Icon is Not used in those context,
 * it's necessary to have a `size` prop to size the Icon,
 * cuz people will simply forget they need to use Tailwind's `size-*` to size the Icon.
 *
 * Currently, to size the Icon, use Tailwind's `size-*`
 *
 * TBD: doc: the rendered result is just a svg
 */
// Wrapping svg into span is considered a best practice, cuz there're many issues of using
// a svg directly. Eg., inside a flex container, the svg dimension will be a problem.
type IconProps = _IconProps & { label?: string }
const Icon = ({ label, ...props }: IconProps) =>
(
  <AccessibleIcon label={label || ''}>
    <span><Root data-icon {...props} /></span>
  </AccessibleIcon>
)

Icon.displayName = "Icon";

export {
  Icon as Icon,
  AccessibleIcon,
  type IconProps,
}