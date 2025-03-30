import { Slot } from "@radix-ui/react-slot"
import { type ComponentProps, createContext, useContext } from "react"
import { Icon } from "../Icon/Icon";
import { tv, type VariantProps } from "tailwind-variants"

const variants = tv({
  slots: {
    nav: "tw:inline-block tw:[&_ol.tw\\:w-full]:w-full",
    list: "tw:flex tw:flex-wrap tw:items-center tw:gap-1.5 tw:break-words tw:text-sm tw:text-muted-foreground tw:sm:gap-2.5",
    item: "tw:inline-flex tw:items-center tw:gap-1.5",
    link: "tw:transition-colors tw:hover:text-foreground",
    final: "tw:font-normal tw:text-foreground",
    ellipsis: "tw:flex tw:h-4 tw:w-4 tw:items-center tw:justify-center",
    separator: "tw:[&_[data-icon]]:w-3.5 tw:[&_[data-icon]]:h-3.5"
  }
})

const { nav, list, item, link, final, ellipsis, separator } = variants()

/**
 * `nav` is like a ghost, and it shouldn't have problem for issues like styling such as:
 *  - styling on <nav>: in most of time, no need to style on <nav>
 *  - styling on <ol>: having full width will have problem due to the default style of <ol>, but such component shouldn't need to be full width
 */
const Breadcrumb = ({
  className,
  children,
  ...props
}: BreadcrumbProps) => (
  <nav
    className={nav({})}
    aria-label="breadcrumb"
  >
    <ol
      className={list({ className })}
      {...props}
    >
      {children}
    </ol>
  </nav>
)

const BreadcrumbItem = ({ className, ...props }: BreadcrumbItemProps) => (
  <li className={item({ className })} {...props} />
)

const BreadcrumbLink = ({ asChild, className, ...props }: BreadcrumbLinkProps) => {
  const Comp = asChild ? Slot : "a"
  return <Comp className={link({ className })} {...props} />
}

/**
 * This is the component, having more eye-catching style than other similar items,
 * that we usually use as the final item of the entire breadcrumb component composition
 * to indicate the current viewing page.
 */
const BreadcrumbFinal = ({ className, ...props }: BreadcrumbFinalProps) => (
  <span role="link" aria-disabled="true" aria-current="page" className={final({ className })} {...props} />
)

const BreadcrumbEllipsis = ({ className, ...props }: BreadcrumbEllipsisProps) => (
  <span
    className={ellipsis({ className })}
    {...props}
  >
    <Icon icon="lucide:more-horizontal" className="tw:h-4 tw:w-4" />
    <span className="tw:sr-only">More</span>
  </span>
)

const BreadcrumbSeparator = ({ children, className, ...props }: BreadcrumbSeparatorProps) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={separator({ className })}
    {...props}
  >
    {children || <Icon icon="lucide:chevron-right" className="tw:text-muted-foreground/40" />}
  </li>
)

export type BreadcrumbProps = ComponentProps<'ol'>;
export type BreadcrumbItemProps = ComponentProps<'li'>;
export type BreadcrumbLinkProps = ComponentProps<'a'> & { asChild?: boolean };
export type BreadcrumbFinalProps = ComponentProps<'span'>;
export type BreadcrumbEllipsisProps = ComponentProps<'span'>;
export type BreadcrumbSeparatorProps = ComponentProps<'li'>;

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbFinal,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
