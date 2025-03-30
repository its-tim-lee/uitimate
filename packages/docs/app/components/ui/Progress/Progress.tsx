import "./index.css"
import { type ComponentProps } from "react"
import { Root, Indicator } from "@radix-ui/react-progress"
import { tv } from "tailwind-variants"

const variants = tv({
  slots: {
    root: [
      "tw:relative tw:h-2 tw:w-full tw:overflow-hidden tw:rounded-full tw:bg-primary/20"
    ],
    indicator: [
      "tw:h-full tw:bg-primary tw:transition-all"
    ]
  },
  variants: {
    indeterminate: {
      true: {
        indicator: "tw:absolute tw:w-[40%] tw:left-0 tw:animate-[progress-indeterminate_1.4s_ease_infinite]"
      },
    }
  }
})

type ProgressProps = ComponentProps<typeof Root> & {
  indeterminate?: boolean
}

const Progress = ({
  className,
  value,
  indeterminate,
  ...props
}: ProgressProps) => {
  const { root, indicator } = variants({ indeterminate })
  return (
    <Root
      className={root({ className })}
      {...props}
    >
      <Indicator
        className={indicator()}
        style={!indeterminate ? {
          transform: `translateX(-${100 - (value || 0)}%)`
        } : undefined}
      />
    </Root>
  )
}

Progress.displayName = 'Progress'

export {
  Progress,
  type ProgressProps
}