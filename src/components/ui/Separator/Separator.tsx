import { type ComponentProps } from "react"
import { Root } from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: ComponentProps<typeof Root>) => {
  return(
    <Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "tw:shrink-0 tw:bg-border",
        orientation === "horizontal" ? "tw:h-[1px] tw:w-full" : "tw:h-full tw:w-[1px]",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
