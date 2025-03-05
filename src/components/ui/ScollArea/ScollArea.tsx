import { Root, Viewport, Corner, Scrollbar, Thumb } from "@radix-ui/react-scroll-area"
import { type ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type ScrollAreaProps = ComponentProps<typeof Root>
export const ScrollArea = ({ className, children, ...props }: ScrollAreaProps) => (
  <Root
    className={cn("tw:relative tw:overflow-hidden", className)}
    {...props}
  >
    <Viewport className="tw:h-full tw:w-full tw:rounded-[inherit]">
      {children}
    </Viewport>
    <ScrollBar />
    <Corner />
  </Root>
)

export type ScrollBarProps = ComponentProps<typeof Scrollbar>
export const ScrollBar = ({ className, orientation = "vertical", ...props }: ScrollBarProps) => (
  <Scrollbar
    orientation={orientation}
    className={cn(
      "tw:flex tw:touch-none tw:select-none tw:transition-colors",
      orientation === "vertical" &&
      "tw:h-full tw:w-2.5 tw:border-l tw:border-l-transparent tw:p-[1px]",
      orientation === "horizontal" &&
      "tw:h-2.5 tw:flex-col tw:border-t tw:border-t-transparent tw:p-[1px]",
      className
    )}
    {...props}
  >
    {/*
      "Thumb" is literally a small draggable widget that
      being used to drag-to-scroll on the scroll bar area
    */}
    <Thumb className="tw:relative tw:flex-1 tw:rounded-full tw:bg-border" />
  </Scrollbar>
)

ScrollArea.displayName = `ScrollArea`
ScrollBar.displayName = `ScrollBar`

