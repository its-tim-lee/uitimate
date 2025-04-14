import { type ComponentProps } from "react"
import { Root, Viewport, Corner, Scrollbar, Thumb } from "@radix-ui/react-scroll-area"
import { tv } from "tailwind-variants"
import { kebabCase } from "lodash-es"

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
    data-tag={kebabCase(ScrollArea.displayName)}
    className={root({ className })}
    {...props}
  >
    <Viewport className={viewport()}>{children}</Viewport>
    <ScrollAreaScrollBar />
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
type ScrollAreaScrollBarProps = ComponentProps<typeof Scrollbar>
const ScrollAreaScrollBar = ({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaScrollBarProps) => {
  const { scrollbar, thumb } = scrollBarVariants({ orientation })
  return (
    <Scrollbar
      data-tag={kebabCase(ScrollAreaScrollBar.displayName)}
      orientation={orientation}
      className={scrollbar({ className })}
      {...props}
    >
      {/*
      Design Note:
        "Thumb" is literally a small draggable widget that
        being used to drag-to-scroll on the scroll bar area
      */}
      <Thumb className={thumb()} />
    </Scrollbar>
  )
}

type ScrollAreaViewportProps = ComponentProps<typeof Viewport>
const ScrollAreaViewport = ({
  className,
  ...props
}: ScrollAreaViewportProps) => (
  <Viewport
    data-tag={kebabCase(ScrollAreaViewport.displayName)}
    className={viewport({ className })}
    {...props}
  />
)

type ScrollAreaCornerProps = ComponentProps<typeof Corner>
const ScrollAreaCorner = ({
  className,
  ...props
}: ScrollAreaCornerProps) => (
  <Corner
    data-tag={kebabCase(ScrollAreaCorner.displayName)}
    className={className}
    {...props}
  />
)

ScrollArea.displayName = "ScrollArea"
ScrollAreaScrollBar.displayName = "ScrollAreaScrollBar"
ScrollAreaViewport.displayName = "ScrollAreaViewport"
ScrollAreaCorner.displayName = "ScrollAreaCorner"

namespace Type {
  export type ScrollArea = ScrollAreaProps;
  export type ScrollAreaScrollBar = ScrollAreaScrollBarProps;
  export type ScrollAreaViewport = ScrollAreaViewportProps;
  export type ScrollAreaCorner = ScrollAreaCornerProps;
}

export {
  type Type,
  scrollAreaVariants,
  scrollBarVariants,
  ScrollArea,
  ScrollAreaScrollBar,
  /**
   * These should be rare to be used, but exported anyway in case there're some edge cases.
   */
  ScrollAreaViewport,
  ScrollAreaCorner
}

