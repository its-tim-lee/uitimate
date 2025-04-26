import { type ComponentProps } from "react"
import { Root, Track, Range, Thumb } from "@uitimate/lib-slider"
import { tv } from "tailwind-variants"
import { casing } from "#/helpers/utils.ts"

const sliderVariants = tv({
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
const { root, track, range, thumb } = sliderVariants()

type SliderTrackProps = ComponentProps<typeof Track>
const SliderTrack = ({
  className,
  children,
  ...props
}: SliderTrackProps) => {
  return (
    <Track
      className={track({ className })}
      data-tag={casing.kebabCase(SliderTrack.displayName)}
      {...props}
    >
      {children}
    </Track>
  )
}

type SliderRangeProps = ComponentProps<typeof Range>
const SliderRange = ({
  className,
  ...props
}: SliderRangeProps) => {
  return (
    <Range
      className={range({ className })}
      data-tag={casing.kebabCase(SliderRange.displayName)}
      {...props}
    />
  )
}

type SliderThumbProps = ComponentProps<typeof Thumb>
const SliderThumb = ({
  className,
  ...props
}: SliderThumbProps) => {
  return (
    <Thumb
      className={thumb({ className })}
      data-tag={casing.kebabCase(SliderThumb.displayName)}
      {...props}
    />
  )
}

type SliderProps = ComponentProps<typeof Root>
const Slider = ({
  className,
  ...props
}: SliderProps) => {
  return (
    <Root
      className={root({ className })}
      data-tag={casing.kebabCase(Slider.displayName)}
      {...props}
    >
      <SliderTrack><SliderRange /></SliderTrack>
      <SliderThumb />
    </Root>
  )
}

Slider.displayName = 'Slider'
SliderTrack.displayName = 'SliderTrack'
SliderRange.displayName = 'SliderRange'
SliderThumb.displayName = 'SliderThumb'

namespace Type {
  export type Slider = SliderProps;
  export type SliderTrack = SliderTrackProps;
  export type SliderRange = SliderRangeProps;
  export type SliderThumb = SliderThumbProps;
}

export * from "@uitimate/lib-slider"
export {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
  sliderVariants,
  type Type
}