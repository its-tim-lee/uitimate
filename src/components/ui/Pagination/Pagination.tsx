import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { type ComponentProps } from "react"
import { type ButtonProps, buttonVariants } from "@/components/ui/Button/Button.tsx"
import { tv, type VariantProps } from "tailwind-variants"

const paginationVariants = tv({
  slots: {
    nav: "tw:mx-auto tw:flex tw:w-full tw:justify-center",
    list: "tw:flex tw:flex-row tw:items-center tw:gap-1",
    previous: "tw:gap-1 tw:pl-2.5",
    next: "tw:gap-1 tw:pr-2.5",
    ellipsis: "tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center"
  }
})

const { nav, list, previous, next, ellipsis } = paginationVariants()

export type PaginationProps = ComponentProps<"nav">;
export type PaginationItemProps = ComponentProps<"li">;
export type PaginationLinkProps = (
  Pick<ButtonProps, "size"> &
  ComponentProps<"a"> &
  { isActive?: boolean }
);
export type PaginationPreviousProps = PaginationLinkProps;
export type PaginationNextProps = PaginationLinkProps;
export type PaginationEllipsisProps = ComponentProps<"span">;

// TBD: doc: `asChild`
// TBD: doc: `isActive`
export const Pagination = ({ className, children, ...props }: PaginationProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={nav({ className })}
    {...props}
  >
    <ul className={list()}>{children}</ul>
  </nav>
)

export const PaginationItem = ({ ...props }: PaginationItemProps) => <li {...props} />

export const PaginationLink = ({
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

export const PaginationPrevious = ({
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

export const PaginationNext = ({
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

export const PaginationEllipsis = ({
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
