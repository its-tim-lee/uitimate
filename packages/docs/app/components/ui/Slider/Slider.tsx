import { type ComponentProps } from "react"
import { Root, Track, Range, Thumb } from "@radix-ui/react-slider"
import { tv } from "tailwind-variants"

const variants = tv({
  slots: {
    root: [
      "tw:touch-none tw:select-none tw:items-center tw:relative tw:flex tw:w-full",
    ],
    track: [
      "tw:bg-primary/20 tw:overflow-hidden tw:rounded-full tw:relative tw:h-1.5 tw:w-full tw:grow",
    ],
    range: [
      "tw:absolute tw:h-full tw:bg-primary"
    ],
    thumb: [
      "tw:bg-background tw:shadow tw:transition-colors tw:rounded-full tw:border tw:border-primary/50 tw:block tw:h-4 tw:w-4 tw:rounded-full tw:border tw:border-primary/50 tw:bg-background tw:shadow tw:transition-colors",
      "tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring",
      "tw:disabled:pointer-events-none tw:disabled:opacity-50"
    ]
  }
})
const { root, track, range, thumb } = variants()

type SliderProps = ComponentProps<typeof Root>
const Slider = ({
  className,
  ...props
}: SliderProps) => {

  return (
    <Root
      className={root({ className })}
      {...props}
    >
      <Track className={track()}>
        <Range className={range()} />
      </Track>
      <Thumb className={thumb()} />
    </Root>
  )
}

Slider.displayName = 'Slider'

export {
  Slider,
  type SliderProps
}