import { type ComponentProps } from "react"
import { tv } from "tailwind-variants"
import { Textarea as TextareaPrimitive } from '@headlessui/react'
import { kebabCase } from 'lodash-es'

const textareaVariants = tv({
  base: [
    "tw:flex tw:field-sizing-content tw:min-h-16 tw:w-full",
    "tw:px-3 tw:py-2 tw:text-base tw:md:text-sm tw:rounded-md tw:border tw:bg-transparent",
    "tw:border-input tw:shadow-xs tw:transition-[color,box-shadow]",

    "tw:placeholder:text-muted-foreground",
    "tw:outline-ring/50 tw:dark:outline-ring/40 tw:ring-ring/10 tw:dark:ring-ring/20",

    "tw:focus-visible:ring-4 tw:focus-visible:outline-1 tw:hover:shadow",
    "tw:disabled:cursor-not-allowed tw:disabled:opacity-50",

    "tw:aria-invalid:border-destructive/60 tw:dark:aria-invalid:border-destructive",
    "tw:aria-invalid:ring-destructive/20 tw:dark:aria-invalid:ring-destructive/50",
    "tw:aria-invalid:outline-destructive/60 tw:dark:aria-invalid:outline-destructive",
    "tw:aria-invalid:focus-visible:ring-[3px] tw:dark:aria-invalid:focus-visible:ring-4",
    "tw:aria-invalid:focus-visible:outline-none"
  ]
})

type TextareaProps = ComponentProps<typeof TextareaPrimitive> & ComponentProps<'textarea'>
const Textarea = ({
  className,
  ...props
}: TextareaProps) => {
  return (
    <TextareaPrimitive
      data-tag={kebabCase(Textarea.displayName)}
      className={textareaVariants({ className })}
      {...props}
    />
  )
}

Textarea.displayName = 'Textarea'

namespace Type {
  export type Textarea = TextareaProps;
}

export {
  type Type,
  Textarea,
  textareaVariants
}
