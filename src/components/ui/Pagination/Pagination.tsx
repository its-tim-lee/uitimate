import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { type ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { type ButtonProps, buttonVariants } from "@/components/ui/Button/Button.tsx"

const Pagination = ({ className, children, ...props }: ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("tw-mx-auto tw-flex tw-w-full tw-justify-center", className)}
    {...props}
  >
    <ul className="tw-flex tw-flex-row tw-items-center tw-gap-1">
      {children}
    </ul>
  </nav>
)

const PaginationItem = ({ className, ...props }: ComponentProps<"li">) => <li className={className} {...props} />

interface PaginationLinkProps extends Pick<ButtonProps, "size">, ComponentProps<"a"> {
  isActive?: boolean
}

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)

const PaginationPrevious = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("tw-gap-1 tw-pl-2.5", className)}
    {...props}
  >
    <Icon icon='lucide:chevron-left' className="tw-h-4 tw-w-4" />
    <span>Previous</span>
  </PaginationLink>
)

const PaginationNext = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("tw-gap-1 tw-pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <Icon icon='lucide:chevron-right' className="tw-h-4 tw-w-4" />
  </PaginationLink>
)

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center", className)}
    {...props}
  >
    <Icon icon='lucide:more-horizontal' className="tw-h-4 tw-w-4" />
    <span className="tw-sr-only">More pages</span>
  </span>
)

Pagination.displayName = "Pagination"
PaginationItem.displayName = "PaginationItem"
PaginationLink.displayName = "PaginationLink"
PaginationPrevious.displayName = "PaginationPrevious"
PaginationNext.displayName = "PaginationNext"
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
