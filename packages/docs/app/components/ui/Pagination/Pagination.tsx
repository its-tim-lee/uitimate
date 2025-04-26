import { type ComponentProps } from "react"
import { buttonVariants } from "#/components/ui/Cta/Cta.tsx"
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"

const paginationVariants = tv({
  slots: {
    nav: "tw:mx-auto tw:flex tw:w-full tw:justify-center",
    list: "tw:flex tw:flex-row tw:items-center tw:gap-1",
    previous: "tw:gap-1 tw:pl-2.5",
    next: "tw:gap-1 tw:pr-2.5",
    ellipsis: "tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center"
  }
})
const {
  nav,
  list,
  previous,
  next,
  ellipsis
} = paginationVariants()

type PaginationProps = ComponentProps<"nav">
const Pagination = ({
  className,
  children,
  ...props
}: PaginationProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={nav({ className })}
    {...props}
  >
    <ul className={list()}>{children}</ul>
  </nav>
)
type PaginationItemProps = ComponentProps<"li">
const PaginationItem = ({ ...props }: PaginationItemProps) => <li {...props} />

type PaginationLinkProps = ComponentProps<"a"> & {
  isActive?: boolean
}
const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={buttonVariants({ variant: isActive ? "outline" : "ghost", className })}
    {...props}
  />
)

type PaginationPreviousProps = PaginationLinkProps
const PaginationPrevious = ({
  className,
  ...props
}: PaginationPreviousProps) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={previous({ className })}
    {...props}
  >
    <Icon icon='lucide:chevron-left' className="tw:h-4 tw:w-4" />
    <span>Previous</span>
  </PaginationLink>
)

type PaginationNextProps = PaginationLinkProps
const PaginationNext = ({
  className,
  ...props
}: PaginationNextProps) => (
  <PaginationLink
    aria-label="Go to next page"
    className={next({ className })}
    {...props}
  >
    <span>Next</span>
    <Icon icon='lucide:chevron-right' className="tw:h-4 tw:w-4" />
  </PaginationLink>
)

type PaginationEllipsisProps = ComponentProps<"span">
const PaginationEllipsis = ({
  className,
  ...props
}: PaginationEllipsisProps) => (
  <span
    aria-hidden
    className={ellipsis({ className })}
    {...props}
  >
    <Icon icon='lucide:more-horizontal' className="tw:h-4 tw:w-4" />
    <span className="tw:sr-only">More pages</span>
  </span>
)

Pagination.displayName = "Pagination"
PaginationItem.displayName = "PaginationItem"
PaginationLink.displayName = "PaginationLink"
PaginationPrevious.displayName = "PaginationPrevious"
PaginationNext.displayName = "PaginationNext"
PaginationEllipsis.displayName = "PaginationEllipsis"

namespace Type {
  export type Pagination = PaginationProps
  export type PaginationItem = PaginationItemProps
  export type PaginationLink = PaginationLinkProps
  export type PaginationPrevious = PaginationLink
  export type PaginationNext = PaginationLink
  export type PaginationEllipsis = PaginationEllipsisProps
}

export {
  paginationVariants,
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  type Type
}
