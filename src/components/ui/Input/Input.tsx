import * as React from "react"
import { cn } from "@/lib/utils"


type InputProps = React.ComponentProps<"input">
const Input = ({ className, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "tw:file:text-foreground tw:file:inline-flex tw:file:pr-4 tw:file:h-7 tw:file:border-0 tw:file:bg-transparent tw:file:text-sm tw:file:font-medium",
        // h = 10 align with default button size
        "tw:flex tw:h-10 tw:w-full tw:min-w-0 tw:md:text-sm tw:border-input tw:rounded-md tw:border tw:bg-transparent tw:px-3 tw:py-1 tw:text-base tw:shadow-xs tw:transition-[color,box-shadow]",
        "tw:placeholder:text-muted-foreground tw:selection:bg-primary tw:selection:text-primary-foreground",
        "tw:ring-ring/10 tw:dark:ring-ring/20 tw:outline-ring/50 tw:dark:outline-ring/40 tw:aria-invalid:outline-destructive/60 tw:dark:aria-invalid:outline-destructive",
        "tw:aria-invalid:border-destructive/60 tw:dark:aria-invalid:border-destructive",
        "tw:aria-invalid:ring-destructive/20 tw:dark:aria-invalid:ring-destructive/40",
        "tw:dark:aria-invalid:ring-destructive/50",
        "tw:disabled:pointer-events-none tw:disabled:cursor-not-allowed tw:disabled:opacity-50",
        "tw:focus-visible:ring-4 tw:focus-visible:outline-1 tw:aria-invalid:focus-visible:ring-[3px] tw:aria-invalid:focus-visible:outline-none tw:dark:aria-invalid:focus-visible:ring-4",
        className
      )}
      {...props}
    />
  )
}

Input.displayName = "Input"
export { Input, type InputProps }