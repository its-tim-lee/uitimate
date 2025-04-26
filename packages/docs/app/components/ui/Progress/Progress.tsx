import "./index.css"
import { type ComponentProps } from "react"
import { Root, Indicator } from "@uitimate/lib-progress"
import { tv } from "tailwind-variants"
import { casing } from "#/helpers/utils.ts"

const progressVariants = tv({
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
  const { root, indicator } = progressVariants({ indeterminate })

  return (
    <Root
      data-tag={casing.kebabCase(Progress.displayName)}
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

namespace Type {
  export type Progress = ProgressProps
}

export * from "@uitimate/lib-progress"
export {
  Progress,
  progressVariants,
  type Type
}