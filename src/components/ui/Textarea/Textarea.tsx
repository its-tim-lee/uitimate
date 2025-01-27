import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "~/src/components/ui/Label/Label.tsx"

const Textarea = ({ className, description, label, ...props }: React.ComponentProps<"textarea"> & { label?: string, description?: string }) => {
  const $textarea = (
    <textarea
      className={cn(
        "tw-flex tw-min-h-[60px] tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-transparent tw-px-3 tw-py-2 tw-text-base tw-shadow-sm placeholder:tw-text-muted-foreground focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-cursor-not-allowed disabled:tw-opacity-50 md:tw-text-sm",
        className
      )}
      {...props}
    />
  )
  return (label || description) ? (
    <div className="tw-flex tw-flex-col tw-space-y-2">
      {label && <Label className="tw-text-sm tw-font-medium tw-leading-none">{label}</Label>}
      {$textarea}
      {description && <div className="tw-text-sm tw-text-muted-foreground">{description}</div>}
    </div>
  ) : $textarea
}
Textarea.displayName = "Textarea"

export { Textarea }
