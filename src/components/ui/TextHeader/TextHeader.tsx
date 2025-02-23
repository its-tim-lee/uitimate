import * as React from "react"
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils"

interface TextHeaderProps extends App.ComponentProps {
  title: React.ReactNode
  subtitle: React.ReactNode
}

const TextHeader =
  ({ className, title, subtitle, ...props }: TextHeaderProps) => {
    return (
      <div
        {...props}
        className={cn("tw:flex tw:flex-col tw:space-y-2", className)}
      >
        <Slot className={cn("tw:font-semibold tw:leading-none tw:tracking-tight tw:dark:text-black", className)}>
          {typeof title === 'string' ? <span>{title}</span> : title}
        </Slot>
        <Slot className={cn("tw:text-sm tw:text-muted-foreground", className)}>
          {typeof subtitle === 'string' ? <span>{subtitle}</span> : subtitle}
        </Slot>
      </div>
    )
  }

TextHeader.displayName = "TextHeader"

export { TextHeader }
