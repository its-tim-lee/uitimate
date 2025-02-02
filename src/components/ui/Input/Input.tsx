import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "~/src/components/ui/Label/Label.tsx"

export interface InputProps extends App.ComponentProps, React.ComponentProps<"input"> {}

/**
 * #2025-01-10
 * HACK: on the surface, `children` is not getting used,
 * but declaring it helps React to extract that out of the `props`,
 * cuz if we don't do that, it may lead to the error:
 * `a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.`
 */
const Input =
  ({ className, children, label, description, ...props }: InputProps & { label?: string }) => {
    const $input = (
      <input
        className={cn(
          "tw:flex tw:h-9 tw:w-full tw:rounded-md tw:border tw:border-input tw:bg-transparent tw:px-3 tw:py-1 tw:text-base tw:shadow-sm tw:transition-colors tw:file:border-0 tw:file:bg-transparent tw:file:text-sm tw:file:font-medium tw:file:text-foreground tw:placeholder:text-muted-foreground tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:disabled:cursor-not-allowed tw:disabled:opacity-50 tw:md:text-sm",
          className
        )}
        {...props}
      />
    )

    return (label || description) ? (
      <div className="tw:flex tw:flex-col tw:space-y-2">
        {label && <Label className="tw:text-sm tw:font-medium tw:leading-none">{label}</Label>}
        {$input}
        {description && <div className="tw:text-sm tw:text-muted-foreground">{description}</div>}
      </div>
    ) : $input
  }

Input.displayName = "Input"

export { Input }