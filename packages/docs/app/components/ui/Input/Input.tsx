import { type ComponentProps } from "react"
import { tv } from "tailwind-variants"
import { Input as Primitive } from '@uitimate/lib-headlessui'
import { casing } from "#/helpers/utils.ts"

const inputVariants = tv({
  base: [
    // File input specific styles
    "tw:file:text-foreground tw:file:inline-flex tw:file:pr-4 tw:file:h-7",
    "tw:file:border-0 tw:file:bg-transparent tw:file:text-sm tw:file:font-medium",

    // Base styles
    "tw:flex tw:h-10 tw:w-full tw:min-w-0 tw:rounded-md", // h = 10 align with default button size
    "tw:border tw:border-input tw:bg-transparent",
    "tw:px-3 tw:py-1 tw:text-base tw:md:text-sm tw:shadow-xs",
    "tw:transition-[color,box-shadow]",

    // Text selection and placeholder
    "tw:placeholder:text-muted-foreground",
    "tw:selection:bg-primary tw:selection:text-primary-foreground",

    // Ring and outline styles
    "tw:ring-ring/10 tw:dark:ring-ring/20",
    "tw:outline-ring/50 tw:dark:outline-ring/40",

    // Invalid state styles
    "tw:aria-invalid:outline-destructive/60 tw:dark:aria-invalid:outline-destructive",
    "tw:aria-invalid:border-destructive/60 tw:dark:aria-invalid:border-destructive",
    "tw:aria-invalid:ring-destructive/20 tw:dark:aria-invalid:ring-destructive/40",
    "tw:dark:aria-invalid:ring-destructive/50",

    // Focus styles
    "tw:focus-visible:ring-4 tw:focus-visible:outline-1",
    "tw:aria-invalid:focus-visible:ring-[3px] tw:aria-invalid:focus-visible:outline-none",
    "tw:dark:aria-invalid:focus-visible:ring-4",

    // Disabled state
    "tw:disabled:pointer-events-none tw:disabled:cursor-not-allowed tw:disabled:opacity-50"
  ]
})

type InputProps = ComponentProps<"input"> & ComponentProps<typeof Primitive>
const Input = ({
  className,
  ...props
}: InputProps) => (
  <Primitive
    data-tag={casing.kebabCase(Input.displayName)}
    data-slot="input"
    className={inputVariants({ className })}
    {...props}
  />
)

Input.displayName = "Input"

namespace Type {
  export type Input = InputProps
}

export * from "@uitimate/lib-headlessui";
export {
  type Type,
  inputVariants,
  Input
}