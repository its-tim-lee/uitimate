import { Icon, type IconProps as IconifyIconProps } from "@/components/ui/Icon/Icon.tsx";
import type { ComponentProps } from "react";

// FIXME: there just have some cases that we want to control the size of the icon
type IconProps = (
  IconifyIconProps &
  ComponentProps<"svg"> &
  (
    { icon: SVGGElement; ssr?: true; } |
    { icon: string; ssr?: false; }
  ));

/**
 * WARN:
 * This is only meant to be used as an internal component, and the reason is simply because
 * the feats of it is not versatile like the Icon component provided by iconify,
 * although in this project, the only prop we used to use on the Icon component provided by iconify is only just `icon`.
 *
 * The reason we don't wrap Iconify component under the hood is because it doesn't support SSR,
 * even thought it does support that in v5, but the way it supports conflict with how Astro works.
 *
 * In case one is wondering why an icon need to support SSR, below is just one of many cases:
 * - When a React component has used some icons, and those icons don't make sense to be passed in from the outside,
 *   and for the SEO consideration, this React component needs to be rendered on the server side.
 *   (so without further handling on the icon, on Astro project, after the render, icon will not show up)
 *
 * Below structure is referring to how Iconify will render.
 * Regarding `viewBox`, the most modern icon systems,
 * the default `viewBox` is always 0 0 24 24, no matter what size you set.
 *
 * HACK:
 * This complication should be all because Astro, otherwise our Icon component is simply just a wrapper of Iconify component.
 */
export default ({ icon, ssr = false, ...props }: IconProps) => {
  if (!ssr) return <Icon icon={icon as string} {...props} />
  return <svg
    data-icon
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    dangerouslySetInnerHTML={{ __html: icon }}
    {...props}
  />
}