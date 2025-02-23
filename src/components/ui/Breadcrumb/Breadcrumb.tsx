import { Slot } from "@radix-ui/react-slot"
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils"
import { type ComponentProps } from "react"

const Breadcrumb = ({ ...props }: ComponentProps<'nav'>) => <nav aria-label="breadcrumb" {...props} />

const BreadcrumbList = ({ className, ...props }: ComponentProps<'ol'>) => (
  <ol
    className={cn(
      "tw:flex tw:flex-wrap tw:items-center tw:gap-1.5 tw:break-words tw:text-sm tw:text-muted-foreground tw:sm:gap-2.5",
      className
    )}
    {...props}
  />
)

const BreadcrumbItem = ({ className, ...props }: ComponentProps<'li'>) => (
  <li className={cn("tw:inline-flex tw:items-center tw:gap-1.5", className)} {...props} />
)

const BreadcrumbLink = ({ asChild, className, ...props }: ComponentProps<'a'> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "a"
  return <Comp className={cn("tw:transition-colors tw:hover:text-foreground", className)} {...props} />
}

/**
 * This is the component that we usually use as the final item of the breadcrumb which will have more eye-catching style than other items.
 */
const BreadcrumbPage = ({ className, ...props }: ComponentProps<'span'>) => (
  <span role="link" aria-disabled="true" aria-current="page" className={cn("tw:font-normal tw:text-foreground", className)} {...props} />
)

const BreadcrumbEllipsis = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center", className)}
    {...props}
  >
    <Icon icon='lucide:more-horizontal' className="tw:h-4 tw:w-4" />
    <span className="tw:sr-only">More</span>
  </span>
)

const BreadcrumbSeparator = ({ children, className, ...props }: ComponentProps<'li'>) => (
  <li role="presentation" aria-hidden="true" className={cn("tw:[&>svg]:w-3.5 tw:[&>svg]:h-3.5", className)} {...props}>
    {children ?? <Icon icon='lucide:chevron-right' />}
  </li>
)

Breadcrumb.displayName = "Breadcrumb"
BreadcrumbList.displayName = "BreadcrumbList"
BreadcrumbItem.displayName = "BreadcrumbItem"
BreadcrumbLink.displayName = "BreadcrumbLink"
BreadcrumbPage.displayName = "BreadcrumbPage"
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
