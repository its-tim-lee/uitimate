import { useState, type ComponentProps } from "react"
import type React from "react";
import { Toggle } from "@radix-ui/react-toggle"
import { Slot } from "@radix-ui/react-slot";
import { Primitive } from '@radix-ui/react-primitive';
import {
  tv,
  type VariantProps,
} from 'tailwind-variants';

/**
 * WARN: Before change any CSS, check the design considerations:
 * - cta-base-case-badge-on-icon.tsx
 */

const baseStyle = [
  "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-md tw:transition-colors tw:data-hover:cursor-pointer",
  "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50",
  "tw:[&_[data-icon]]:pointer-events-none tw:[&_[data-icon]]:size-4 tw:[&_[data-icon]]:shrink-0",
  'tw:data-[state=on]:ring-2 tw:data-[state=on]:ring-primary/50' // "Toggle" style
]
const primaryBaseStyle = [
  "tw:bg-primary tw:text-primary-foreground",
  // "tw:[&_*]:bg-primary tw:[&_*]:text-primary-foreground",
  // "tw:data-hover:bg-primary/80 tw:data-hover:[&_*]:bg-primary/80"
  "tw:data-hover:bg-primary/80"
]
const secondaryBaseStyle = [
  "tw:bg-secondary tw:text-secondary-foreground",
  // "tw:[&_*]:bg-secondary tw:[&_*]:text-secondary-foreground",
  // "tw:data-hover:bg-secondary/50 tw:data-hover:[&_*]:bg-secondary/50",
  "tw:data-hover:bg-secondary/50"
]
const destructiveBaseStyle = [
  "tw:bg-destructive tw:text-destructive-foreground",
  // "tw:[&_*]:bg-destructive tw:[&_*]:text-destructive-foreground",
  // "tw:data-hover:bg-destructive/80 tw:data-hover:[&_*]:bg-destructive/80",
  "tw:data-hover:bg-destructive/80"
]
const outlineBaseStyle = [
  "tw:bg-background tw:text-foreground",
  // "tw:[&_*]:bg-background tw:[&_*]:text-foreground",
  // "tw:data-hover:bg-secondary tw:data-hover:[&_*]:bg-secondary",
  "tw:data-hover:bg-secondary"
]
const ghostBaseStyle = [
  "tw:bg-background tw:text-foreground",
  // "tw:[&_*]:bg-background tw:[&_*]:text-foreground",
  // "tw:data-hover:bg-secondary tw:data-hover:[&_*]:bg-secondary",
  "tw:data-hover:bg-secondary",
  "tw:data-[state=on]:ring-0! tw:data-[state=on]:bg-muted " // "Toggle" style
]
const linkBaseStyle = [
  "tw:underline-offset-4",
  "tw:text-primary",
  // "tw:[&_*]:text-primary", // TBD: do we really need this?
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
          "tw:border tw:border-secondary", // TBD: why not use outline?
          ...outlineBaseStyle
        ],
      ghost: ghostBaseStyle,
      link: linkBaseStyle
    },
    mode: {
      icon: ["tw:p-0! tw:aspect-square"],
    },
    // TBD: different size should have different sized icon: src/components/demo/dropdownmenu-mix2.tsx
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

export const badgeVariants = tv({
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
    }, // TBD: fixed-size seems not flexible when implementing Github start button
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

export type CtaProps = (
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
    style?: React.CSSProperties & {
      [key: `--${string}`]: string | number | boolean;
    };
  }
)

// TBD: doc:
//  - The benefits of using Cta:
//    - One component to rule them all: button, badge, toggle, button group
//    -
//  - the facts of button vs. badge:
//    - badge is usually smaller/compact, and sometimes it's uninteractive
//    - badge has a special style: pill
/**
 * Design Considerations:
 * - muted (why having such prop?)
 *   If we don't do this, there're some designs that would be very hard to use our component to implement
 *   (ie., Command Instruction)
 * - icon (why not create stuff like Icon Button as other libraries do?)
 */
const Cta =
  ({
    variant, size, shapes = [], muted = false,
    // TBD: comment more details: It's no harm to always use type = button even it's not really actally a button
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
      data-tag='cta'
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

export {
  Cta,
  Toggle,
  buttonVariants
}

//

// Q&A
// - Why not separate Badge, Toggle, Button, and even Icon-Button?
// -