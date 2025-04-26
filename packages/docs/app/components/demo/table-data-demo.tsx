import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#/components/ui/Table/Table.tsx"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "#/components/ui/DropdownMenu/DropdownMenu.tsx"
import {
  type ColumnDef,
  flexRender,
  getPaginationRowModel,
  getCoreRowModel,
  useReactTable,
  type SortingState,
  getSortedRowModel,
  type ColumnFiltersState,
  getFilteredRowModel,
  type VisibilityState,
} from "@tanstack/react-table"
import { useState } from "react"
import { Input } from "#/components/ui/Input/Input.tsx"
import { Checkbox } from "#/components/ui/Checkbox/Checkbox.tsx"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import { Cta } from "#/components/ui/Cta/Cta.tsx"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export default function TableDataDemo() {
  const columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Cta
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <Icon icon="lucide:arrow-up-down" className="tw:ml-2 tw:h-4 tw:w-4" />
          </Cta>
        )
      },
    },
    {
      accessorKey: "amount",
      header: () => <div className="tw:text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)

        return <div className="tw:text-right tw:font-medium">{formatted}</div>
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const payment = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Cta variant="ghost" className="tw:h-8 tw:w-8 tw:p-0">
                <span className="tw:sr-only">Open menu</span>
                <Icon icon="lucide:more-horizontal" className="tw:h-4 tw:w-4" />
              </Cta>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const data: Payment[] = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@mail.com",
    },
    {
      id: "9a49ab24",
      amount: 200,
      status: "success",
      email: "user@domain.org",
    },
    {
      id: "6b7ae3f1",
      amount: 75,
      status: "failed",
      email: "contact@company.net",
    },
  ]

  return <DataTable columns={columns} data={data} />
}

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
  return (
    <div>
      <div className="tw:flex tw:items-center tw:py-4">
        <div className="tw:flex-1 tw:text-sm tw:text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="tw:max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Cta variant="outline" className="tw:ml-auto">
              Columns
            </Cta>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="tw:capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="tw:rounded-md tw:border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id}>
                {hg.headers.map(($h) => (
                  <TableHead key={$h.id}>
                    {$h.isPlaceholder
                      ? null
                      : flexRender(
                        $h.column.columnDef.header,
                        $h.getContext()
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="tw:h-24 tw:text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="tw:flex tw:items-center tw:justify-end tw:space-x-2 tw:py-4">
        <Cta
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Cta>
        <Cta
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Cta>
      </div>
    </div>
  )
}