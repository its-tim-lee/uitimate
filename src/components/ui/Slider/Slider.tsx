import * as React from "react"
import { Root, Track, Range, Thumb } from "@radix-ui/react-slider"
import { tv } from "tailwind-variants"

const sliderVariants = tv({
  slots: {
    root: "tw:relative tw:flex tw:w-full tw:touch-none tw:select-none tw:items-center",
    track: "tw:relative tw:h-1.5 tw:w-full tw:grow tw:overflow-hidden tw:rounded-full tw:bg-primary/20",
    range: "tw:absolute tw:h-full tw:bg-primary",
    thumb: "tw:block tw:h-4 tw:w-4 tw:rounded-full tw:border tw:border-primary/50 tw:bg-background tw:shadow tw:transition-colors tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:disabled:pointer-events-none tw:disabled:opacity-50"
  }
})
export type SliderProps = React.ComponentProps<typeof Root>;

export const Slider = ({ className, ...props }: SliderProps) => {
  const { root, track, range, thumb } = sliderVariants()
  return (
    <Root className={root({ className })} {...props}>
      <Track className={track()}><Range className={range()} /></Track>
      <Thumb className={thumb()} />
    </Root>
  )
}

Slider.displayName = Root.displayName