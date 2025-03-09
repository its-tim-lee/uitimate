import { type ComponentProps } from "react"
import { Toggle } from "@radix-ui/react-toggle"
import { Primitive } from '@radix-ui/react-primitive';
import {
  tv,
  type VariantProps,
} from 'tailwind-variants';

const compoundVariants = [
  {
    mode: 'icon',
    size: 'sm',
    className: 'tw:w-9',
  },
  {
    mode: 'icon',
    size: 'md',
    className: 'tw:w-10',
  },
  {
    mode: 'icon',
    size: 'lg',
    className: 'tw:w-11',
  },
]
const variantSetting = {
  size: {
    sm: "tw:text-sm tw:h-9 tw:rounded-md tw:px-3",
    md: "tw:text-md tw:h-10 tw:px-4 tw:py-2 ",
    lg: "tw:text-lg tw:h-11 tw:rounded-md tw:px-8",
  },
}
const baseStyle = [
  "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:whitespace-nowrap tw:rounded-md tw:font-medium tw:transition-colors tw:cursor-pointer",
  "tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring",
  "tw:disabled:pointer-events-none tw:disabled:opacity-50",
  "tw:[&_svg]:pointer-events-none tw:[&_svg]:size-4 tw:[&_svg]:shrink-0",
]
const toggleVariants = tv({
  base: [
    ...baseStyle,
    "tw:bg-background tw:text-foreground",
    "tw:[&_*]:bg-background tw:[&_*]:text-foreground",
    "tw:data-[state=on]:bg-secondary tw:data-[state=on]:text-secondary-foreground",
    "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
    "tw:hover:[&_*]:bg-secondary tw:hover:[&_*]:text-secondary-foreground",
  ],
  variants: {
    variant: {
      primary: [],
      outline: ["tw:border tw:border-secondary tw:shadow-sm"],
    },
    mode: { icon: ['tw:p-0!'] },
    size: variantSetting.size,
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  }
})

export const buttonVariants = tv({
  base: baseStyle,
  variants: {
    variant: {
      primary:
        [
          "tw:bg-primary tw:text-primary-foreground tw:shadow",
          "tw:[&_*]:bg-primary tw:[&_*]:text-primary-foreground",
          "tw:hover:bg-primary/80 tw:hover:[&_*]:bg-primary/80"
        ],
      secondary:
        [
          "tw:bg-secondary tw:text-secondary-foreground tw:shadow-sm",
          "tw:[&_*]:bg-secondary tw:[&_*]:text-secondary-foreground",
          "tw:hover:bg-secondary/50 tw:hover:[&_*]:bg-secondary/50"
        ],
      destructive:
        [
          "tw:bg-destructive tw:text-destructive-foreground tw:shadow-sm",
          "tw:[&_*]:bg-destructive tw:[&_*]:text-destructive-foreground",
          "tw:hover:bg-destructive/80 tw:hover:[&_*]:bg-destructive/80"
        ],
      outline:
        [
          "tw:border tw:border-secondary tw:bg-background tw:text-foreground tw:shadow-sm",
          "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
          "tw:hover:[&_*]:bg-secondary tw:hover:[&_*]:text-secondary-foreground",
        ],
      ghost:
        [
          "tw:bg-background tw:text-foreground",
          "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
          "tw:hover:[&_*]:bg-secondary tw:hover:[&_*]:text-secondary-foreground",
        ],
      link:
        [
          "tw:text-primary tw:underline-offset-4",
          "tw:[&_*]:text-primary",
          "tw:hover:underline"
        ],
    },
    mode: { icon: ['tw:p-0!'] },
    // TBD: different size should have different sized icon: src/components/demo/dropdownmenu-mix2.tsx
    size: variantSetting.size,
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

export type ButtonProps =
  ComponentProps<typeof Primitive.button> &
  VariantProps<typeof buttonVariants> &
  {
    pressed?: boolean;
    defaultPressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
  }

type ToggleProps = ComponentProps<typeof Toggle> & VariantProps<typeof toggleVariants>;
type Props = ButtonProps | (Omit<ButtonProps, 'variant'> & ToggleProps)

/**
 * Implementation notes:
 * - #1: simply having a prop called "icon" turns out to be the best solution; surprisingly,
 *       such simple design decision actually reduces lots of unforeseeable issues.
 *
 * HACK: A caveat when using `asChild` in Astro
 * Somehow, on Astro, `Slot` will not apply classes onto the "asChild" element,
 * and that's all because doing the component composition in .astro file,
 * so the solution is just doing that in a dedicated tsx file, and then import it to the .astro file.
 */
// TBD: feeling that we should make Button be able to be a badge (or should use another name to disconnect the concept of Badge into Button from causing confusion),
// so that it should have many benefits:
// - Badge will be more dedicated such that it'd never be a button anymore, so from now on, Badge is entire different from Button: they have no overlap
// - People will not try to have badge-style button by using Badge instead of Button
// - It'd not have UI inconsistent when in some cases, gathering Button and Badge together and try to make them the same style, but finding out that their size is different
export const Button =
  ({
    variant, size,
    mode,
    className, children,
    ...props
  }: Props) => {
    const shouldTreatAsToggle = props.pressed !== undefined || props.defaultPressed !== undefined || props.onPressedChange !== undefined
    const Comp = shouldTreatAsToggle ? Toggle : Primitive.button

    let toggleVariant: 'primary' | 'outline' = 'primary';
    if (variant === 'primary' || variant === 'outline') {
      toggleVariant = variant;
    }
    return <Comp
      {...props}
      type="button"
      data-disabled={props.disabled ? '' : undefined}
      className={shouldTreatAsToggle
        ? toggleVariants({ variant: toggleVariant, size, mode, className })
        : buttonVariants({ variant, size, mode, className })
      }
    >
      {children}
    </Comp>
  }

Button.displayName = "Button"

