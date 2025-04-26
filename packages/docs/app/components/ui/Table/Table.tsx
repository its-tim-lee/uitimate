import type { ComponentProps } from "react"
import { casing, cn } from "#/helpers/utils.ts"

type TableProps = ComponentProps<"table">;
const Table = ({ className, ...props }: TableProps) => (
  <div className="tw:relative tw:w-full tw:overflow-auto">
    <table
      data-tag={casing.kebabCase(Table.displayName!)}
      className={cn("tw:w-full tw:caption-bottom tw:text-sm", className)}
      {...props}
    />
  </div>
);

/**
 * If there're more than one table row used in table's header, you may want to group them together
 * using this component.
 * But it's no harm to always use it.
 */
type TableHeaderProps = ComponentProps<"thead">;
const TableHeader = ({ className, ...props }: TableHeaderProps) => (
  <thead
    data-tag={casing.kebabCase(TableHeader.displayName!)}
    className={cn("tw:[&_tr]:border-b", className)}
    {...props}
  />
);

type TableBodyProps = ComponentProps<"tbody">;
const TableBody = ({ className, ...props }: TableBodyProps) => (
  <tbody
    data-tag={casing.kebabCase(TableBody.displayName!)}
    className={cn("tw:[&_tr:last-child]:border-0", className)}
    {...props}
  />
);

type TableFooterProps = ComponentProps<"tfoot">;
const TableFooter = ({ className, ...props }: TableFooterProps) => (
  <tfoot
    data-tag={casing.kebabCase(TableFooter.displayName!)}
    className={cn(
      "tw:bg-muted/50 tw:border-t tw:font-medium tw:[&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
);

/**
 * it's general row that can be used in table's header, body or footer
 */
type TableRowProps = ComponentProps<"tr">;

const TableRow = ({ className, ...props }: TableRowProps) => (
  <tr
    data-tag={casing.kebabCase(TableRow.displayName!)}
    className={cn(
      "tw:hover:bg-muted/50 tw:data-[state=selected]:bg-muted tw:border-b tw:transition-colors",
      className
    )}
    {...props}
  />
);

/**
 * It's the cell used in table's header
 */
type TableHeadProps = ComponentProps<"th">;
const TableHead = ({ className, ...props }: TableHeadProps) => (
  <th
    data-tag={casing.kebabCase(TableHead.displayName!)}
    className={cn(
      "tw:text-muted-foreground tw:h-10 tw:px-2 tw:text-left tw:align-middle tw:font-medium tw:[&:has([role=checkbox])]:pr-0 tw:[&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
);

/**
 * It's the cell used in table's body
 * FIXME: should rename it to TableData to remind that it's <td>
 */
type TableCellProps = ComponentProps<"td">;
const TableCell = ({ className, ...props }: TableCellProps) => (
  <td
    data-tag={casing.kebabCase(TableCell.displayName!)}
    className={cn(
      "tw:p-2 tw:align-middle tw:[&:has([role=checkbox])]:pr-0 tw:[&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
);

type TableCaptionProps = ComponentProps<"caption">;
const TableCaption = ({ className, ...props }: TableCaptionProps) => (
  <caption
    data-tag={casing.kebabCase(TableCaption.displayName!)}
    className={cn("tw:text-muted-foreground tw:mt-4 tw:text-sm", className)}
    {...props}
  />
);

Table.displayName = "Table";
TableHeader.displayName = "TableHeader";
TableBody.displayName = "TableBody";
TableFooter.displayName = "TableFooter";
TableRow.displayName = "TableRow";
TableHead.displayName = "TableHead";
TableCell.displayName = "TableCell";
TableCaption.displayName = "TableCaption";

namespace Type {
  export type Table = TableProps;
  export type TableHeader = TableHeaderProps;
  export type TableBody = TableBodyProps;
  export type TableFooter = TableFooterProps;
  export type TableRow = TableRowProps;
  export type TableHead = TableHeadProps;
  export type TableCell = TableCellProps;
  export type TableCaption = TableCaptionProps;
}

export {
  type Type,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
