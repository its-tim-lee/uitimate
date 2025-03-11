import { type ComponentProps } from "react"
import { Toggle } from "@radix-ui/react-toggle"
import { Slot } from "@radix-ui/react-slot";
import { Primitive } from '@radix-ui/react-primitive';
import {
  tv,
  type VariantProps,
} from 'tailwind-variants';

const variantSetting = {
  size: {
    sm: "tw:text-sm tw:h-9 tw:px-3",
    md: "tw:text-md tw:h-10 tw:px-4",
    lg: "tw:text-lg tw:h-11 tw:px-8",
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
    mode: {
      icon: ['tw:p-0!'],
      pill: [] // TBD:
    },
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
  }
})

export const badgeVariants = tv({
  base: [
    "tw:inline-flex tw:items-center tw:justify-center tw:gap-2 tw:rounded-md tw:outline tw:transition-colors",
    "tw:focus:outline-hidden tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2",
  ],
  variants: {
    variant: {
      primary:
        "tw:outline-transparent tw:bg-primary tw:text-primary-foreground tw:hover:bg-primary/80",
      secondary:
        "tw:outline-transparent tw:bg-secondary tw:text-secondary-foreground tw:hover:bg-secondary/50",
      destructive:
        "tw:outline-transparent tw:bg-destructive tw:text-destructive-foreground tw:hover:bg-destructive/80",
      outline: [
        "tw:text-foreground tw:bg-background",
        "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
      ],
      ghost: [
        "tw:bg-background tw:text-foreground tw:outline-transparent",
        "tw:hover:bg-secondary tw:hover:text-secondary-foreground",
      ]
    },
    mode: {
      icon: ["tw:p-0!"],
      pill: ["tw:rounded-full tw:has-data-avatar:pl-0! tw:justify-between tw:py-0!",]
    },
    size: {
      sm: 'tw:text-xs tw:px-2.5 tw:py-0.5  tw:[&_[data-avatar]]:size-5 ',
      md: 'tw:text-sm tw:px-3 tw:py-0.5 tw:[&_[data-avatar]]:size-6 ',
      lg: 'tw:text-md tw:px-3.5 tw:py-0.5  tw:[&_[data-avatar]]:size-7 '
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
    {
      mode: 'pill',
      size: 'sm',
      class: 'tw:h-5', // h 20
    },
    {
      mode: 'pill',
      size: 'md',
      class: 'tw:h-6', // h 24
    },
    {
      mode: 'pill',
      size: 'lg',
      class: 'tw:h-7', // h 28
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
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
    mode: {
      icon: ['tw:p-0!'],
      pill: []
    },
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

type MajorToggleProps = {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

export type BadgeProps = (
  {
    asChild?: boolean,
    mode?: 'pill' | 'icon',
  } &
  VariantProps<typeof badgeVariants> &
  ComponentProps<typeof Primitive.button> &
  MajorToggleProps
)

export type ButtonProps =
  ComponentProps<typeof Primitive.button> &
  VariantProps<typeof buttonVariants> &
  MajorToggleProps

type ToggleProps = ComponentProps<typeof Toggle> & VariantProps<typeof toggleVariants>;
type Props = ButtonProps | (Omit<ButtonProps, 'variant'> & ToggleProps) | BadgeProps

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

