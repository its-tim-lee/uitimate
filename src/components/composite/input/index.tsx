import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends App.ComponentProps, React.ComponentProps<"input"> {}

/**
 * #2025-01-10
 * HACK: on the surface, `children` is not getting used,
 * but declaring it helps React to extract that out of the `props`,
 * cuz if we don't do that, it may lead to the error:
 * `a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.`
 */
const Input =
  ({ className, children, ...props }: InputProps) => {
    return (
      <input
        className={cn(
          "tw-flex tw-h-9 tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-transparent tw-px-3 tw-py-1 tw-text-base tw-shadow-sm tw-transition-colors file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium file:tw-text-foreground placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-cursor-not-allowed disabled:tw-opacity-50 md:tw-text-sm",
          className
        )}
        {...props}
      />
    )
  }

Input.displayName = "Input"

export { Input }