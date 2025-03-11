import { type ComponentProps } from "react"
import { Root, Viewport, Corner, Scrollbar, Thumb } from "@radix-ui/react-scroll-area"
import { tv } from "tailwind-variants"

const scrollAreaVariants = tv({
  slots: {
    root: "tw:relative tw:overflow-hidden",
    viewport: "tw:h-full tw:w-full tw:rounded-[inherit]",
  }
})
const { root, viewport } = scrollAreaVariants()

type ScrollAreaProps = ComponentProps<typeof Root>
const ScrollArea = ({
  className,
  children,
  ...props
}: ScrollAreaProps) => (
  <Root
    className={root({ className })}
    {...props}
  >
    <Viewport className={viewport()}>
      {children}
    </Viewport>
    <ScrollBar />
    <Corner />
  </Root>
)

const scrollBarVariants = tv({
  slots: {
    scrollbar: "tw:flex tw:touch-none tw:select-none tw:transition-colors",
    thumb: "tw:relative tw:flex-1 tw:rounded-full tw:bg-border"
  },
  variants: {
    orientation: {
      vertical: {
        scrollbar: "tw:h-full tw:w-2.5 tw:border-l tw:border-l-transparent tw:p-[1px]",
      },
      horizontal: {
        scrollbar: "tw:h-2.5 tw:flex-col tw:border-t tw:border-t-transparent tw:p-[1px]",
      }
    }
  }
})
type ScrollBarProps = ComponentProps<typeof Scrollbar>
const ScrollBar = ({
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) => {
  const { scrollbar, thumb } = scrollBarVariants({ orientation })
  return (
    <Scrollbar
      orientation={orientation}
      className={scrollbar({ className })}
      {...props}
    >
      {/*
      "Thumb" is literally a small draggable widget that
      being used to drag-to-scroll on the scroll bar area
    */}
      <Thumb className={thumb()} />
    </Scrollbar>
  )
}

ScrollArea.displayName = "ScrollArea"
ScrollBar.displayName = "ScrollBar"

export {
  scrollAreaVariants,
  ScrollArea,
  ScrollBar,
  type ScrollAreaProps,
  type ScrollBarProps
}

