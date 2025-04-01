import * as React from "react"

import { cn } from "#/helpers/css"

const Table = ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  <div className="tw:relative tw:w-full tw:overflow-auto">
    <table
      data-tag="table"
      className={cn("tw:w-full tw:caption-bottom tw:text-sm", className)}
      {...props}
    />
  </div>
)

/**
 * If there're more than one table row used in table's header, you may want to group them together
 * using this component.
 * But it's no harm to always use it.
 */
const TableHeader = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead data-tag="table-header"
    className={cn("tw:[&_tr]:border-b", className)} {...props} />
)

const TableBody = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody
    data-tag="table-body"
    className={cn("tw:[&_tr:last-child]:border-0", className)}
    {...props}
  />
)

const TableFooter = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tfoot
    data-tag="table-footer"
    className={cn(
      "tw:bg-muted/50 tw:border-t tw:font-medium tw:[&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
)

/**
 * it's general row that can be used in table's header, body or footer
 */
const TableRow = ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr
    data-tag="table-row"
    className={cn(
      "tw:hover:bg-muted/50 tw:data-[state=selected]:bg-muted tw:border-b tw:transition-colors",
      className
    )}
    {...props}
  />
)

/**
 * It's the cell used in table's header
 */
const TableHead = ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    data-tag="table-head"
    className={cn(
      "tw:text-muted-foreground tw:h-10 tw:px-2 tw:text-left tw:align-middle tw:font-medium tw:[&:has([role=checkbox])]:pr-0 tw:[&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
)

/**
 * It's the cell used in table's body
 * FIXME: should rename it to TableData to remind that it's <td>
 */
const TableCell = ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td
    data-tag="table-cell"
    className={cn(
      "tw:p-2 tw:align-middle tw:[&:has([role=checkbox])]:pr-0 tw:[&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
)

const TableCaption = ({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) => (
  <caption
    data-tag="table-caption"
    className={cn("tw:text-muted-foreground tw:mt-4 tw:text-sm", className)}
    {...props}
  />
)

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

Table.displayName = "Table"
TableHeader.displayName = "TableHeader"
TableBody.displayName = "TableBody"
TableFooter.displayName = "TableFooter"
TableRow.displayName = "TableRow"
TableHead.displayName = "TableHead"
TableCell.displayName = "TableCell"
TableCaption.displayName = "TableCaption"
