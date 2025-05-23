import { useState, type ComponentProps } from "react"
import { Toggle } from "@uitimate/lib-toggle"
import { Slot } from "#/components/ui/Slot/Slot.tsx";
import { Primitive } from '@uitimate/lib-primitive';
import {
  tv,
  type VariantProps,
} from 'tailwind-variants';
import { casing } from "#/helpers/utils.ts"

const baseStyle = [
  "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-md tw:transition-colors tw:data-hover:cursor-pointer",
  "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50",
  "tw:[&_[data-icon]]:size-4 tw:[&_[data-icon]]:shrink-0",
  'tw:data-[state=on]:ring-2 tw:data-[state=on]:ring-primary/50' // "Toggle" style
]
const primaryBaseStyle = [
  "tw:bg-primary tw:text-primary-foreground",
  "tw:data-hover:bg-primary/80"
]
const secondaryBaseStyle = [
  "tw:bg-secondary tw:text-secondary-foreground",
  "tw:data-hover:bg-secondary/50"
]
const destructiveBaseStyle = [
  "tw:bg-destructive tw:text-destructive-foreground",
  "tw:data-hover:bg-destructive/80"
]
const outlineBaseStyle = [
  "tw:bg-background tw:text-foreground",
  "tw:data-hover:bg-secondary"
]
const ghostBaseStyle = [
  "tw:bg-background tw:text-foreground",
  "tw:data-hover:bg-secondary",
  "tw:data-[state=on]:ring-0! tw:data-[state=on]:bg-muted" // "Toggle" style
]
const linkBaseStyle = [
  "tw:underline-offset-4",
  "tw:text-primary",
  "tw:data-hover:underline"
]

const buttonVariants = tv({
  base: baseStyle,
  variants: {
    variant: {
      primary: ["tw:shadow", ...primaryBaseStyle],
      secondary: ["tw:shadow-sm", ...secondaryBaseStyle],
      destructive: ["tw:shadow-sm", ...destructiveBaseStyle],
      outline:
        [
          "tw:shadow-sm",
          "tw:border tw:border-secondary", // TODO: why not use outline?
          ...outlineBaseStyle
        ],
      ghost: ghostBaseStyle,
      link: linkBaseStyle
    },
    mode: {
      icon: ["tw:p-0! tw:aspect-square"],
    },
    size: {
      sm: "tw:text-sm tw:h-9 tw:px-3 tw:[&_[data-icon]]:size-[0.865rem]",
      md: "tw:text-base tw:h-10 tw:px-4 tw:[&_[data-icon]]:size-[1rem]",
      lg: "tw:text-lg tw:h-11 tw:px-8 tw:[&_[data-icon]]:size-[1.125rem]",
    }
  },
  compoundVariants: [
    {
      mode: 'icon',
      size: 'sm',
      class: 'tw:w-9',
    },
    {
      mode: 'icon',
      size: 'md',
      class: 'tw:w-10',
    },
    {
      mode: 'icon',
      size: 'lg',
      class: 'tw:w-11',
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

const badgeVariants = tv({
  base: baseStyle,
  variants: {
    variant: {
      primary: primaryBaseStyle,
      secondary: secondaryBaseStyle,
      destructive: destructiveBaseStyle,
      outline: ["tw:outline", ...outlineBaseStyle],
      ghost: ghostBaseStyle,
      link: linkBaseStyle
    },
    mode: {
      icon: ["tw:p-0! tw:aspect-square"],
    },
    size: {
      sm: 'tw:text-xs tw:px-2.5 tw:py-0.5  tw:[&_[data-avatar]]:size-5 tw:[&_[data-icon]]:size-[0.75rem]',
      md: 'tw:text-sm tw:px-3 tw:py-0.5 tw:[&_[data-avatar]]:size-6 tw:[&_[data-icon]]:size-[0.865rem]',
      lg: 'tw:text-base tw:px-3.5 tw:py-0.5  tw:[&_[data-avatar]]:size-7 tw:[&_[data-icon]]:size-[1rem]'
    }
  },
  compoundVariants: [
    {
      mode: 'icon',
      size: 'sm',
      class: 'tw:size-5',
    },
    {
      mode: 'icon',
      size: 'md',
      class: 'tw:size-6',
    },
    {
      mode: 'icon',
      size: 'lg',
      class: 'tw:size-7',
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

type CtaProps = (
  ComponentProps<typeof Primitive.button> &
  Omit<VariantProps<typeof buttonVariants>, 'mode'> &
  {
    muted?: boolean;
    unpressedOnBlur?: boolean;
    wontUnpressedOnClick?: boolean;
    shapes?: ('badge' | 'icon')[];
    asChild?: boolean;
    // Below are major props of Radix's Toggle
    pressed?: boolean;
    defaultPressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
  }
)

const Cta =
  ({
    variant, size, shapes = [], muted = false,
    // It's no harm to always use type = button even it's not really actally a button
    // but it's important to set this to `submit` to work with form properly
    type = 'button',
    unpressedOnBlur = false,
    onBlur,
    onPressedChange,
    wontUnpressedOnClick = false,
    className, children, asChild = false, ...props
  }: CtaProps) => {
    const [toggled, setToggled] = useState(props.defaultPressed)
    if (shapes.length > 2) {
      throw new Error('`shapes` currently only can have up to 2 elements')
    }
    const shouldTreatAsToggle = props.pressed !== undefined || props.defaultPressed !== undefined || onPressedChange !== undefined
    const Comp = muted ? 'span' : (shouldTreatAsToggle ? Toggle : (asChild ? Slot : Primitive.button))
    const isBadgeStyle = shapes.includes('badge')
    const mode = shapes.find((s: any) => s !== 'badge') as 'icon' | undefined
    return <Comp
      type={type}
      data-tag={casing.kebabCase(Cta.displayName)}
      data-disabled={props.disabled ? '' : undefined}
      onMouseEnter={(e) => !muted && (e.currentTarget.dataset.hover = '')}
      onMouseLeave={(e) => delete e.currentTarget.dataset.hover}
      className={isBadgeStyle ?
        badgeVariants({ variant, size, mode, className }) :
        buttonVariants({ variant, size, mode, className })
      }
      /**
       * It should be no such use case: passing both `pressed` and `unpressedOnBlur` at the same time.
       */
      pressed={toggled}
      onPressedChange={e => {
        /**
         * Currently, this use case only be found when using `wontUnpressedOnClick` and `unpressedOnBlur` at the same time.
         */
        if (!e && wontUnpressedOnClick) return onPressedChange?.(e)
        setToggled(e)
        onPressedChange?.(e)
      }}
      onBlur={e => (unpressedOnBlur && setToggled(false), onBlur?.(e))}
      {...props}
    >
      {children}
    </Comp>
  }

Cta.displayName = "Cta"

namespace Type {
  export type Cta = CtaProps;
  export type Toggle = ComponentProps<typeof Toggle>;
}

// Igore to export '@uitimate/lib-primitive', cuz it should be super rare to be useful,
// plus, exporting that will conflict with the the export of "@uitimate/lib-toggle"
export * from "@uitimate/lib-toggle";
export {
  Cta,
  buttonVariants,
  badgeVariants,
  type Type
}