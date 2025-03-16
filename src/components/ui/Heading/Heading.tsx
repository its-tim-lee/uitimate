import { type HTMLAttributes, type ReactNode, type ComponentProps, Children, isValidElement } from "react"
import { createContext, useContext } from 'react'
import { Slot } from "@radix-ui/react-slot"
import { tv, type VariantProps } from 'tailwind-variants'

/**
 * TBD:
 * May need to rename this component to more generic: "Heading",
 * cuz it can imply Heading, and also, whenever use this component without HeadingSubtitle,
 * it goes into a awkward situation that whether we should use native heading or not.
 * But modify native heading styles sounds not a good idea, so a better way is:
 * - Always use Heading
 * - When there's no subtitle, just put a text into it, and it'll render title only, and in that case, it doesn't need to use <Title>
 * - You can't just use this component with subtitle only, cuz subtitle is not just like mdx's heading followed by a paragraph, that's to say, subtitle has a special style with title
 * - Should provide a shortcut API style using composition is kind of tedious comparing the relevant sytnax used in mdx (ie., `# title`)
 */

const HeadingContext = createContext<{ size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }>({ size: 'h1' })

const headingVariants = tv({
  slots: {
    root: "tw:flex tw:flex-col tw:gap-1.5 tw:text-left tw:mb-3 tw:relative",
    title: "tw:leading-none tw:tracking-tight tw:scroll-m-20 tw:data-single-element:mb-3 tw:relative",
    subtitle: "tw:text-base tw:text-muted-foreground",
  },
  variants: {
    size: {
      h1: {
        title: "tw:text-3xl tw:font-bold",
      },
      h2: {
        title: "tw:text-2xl tw:font-semibold",
      },
      h3: {
        title: "tw:text-xl tw:font-semibold",
      },
      h4: {
        title: "tw:text-lg tw:font-semibold",
      },
      h5: {
        title: "tw:text-base tw:font-semibold",
      },
      h6: {
        title: "tw:text-sm tw:font-medium", // use case: checkbox label
        subtitle: "tw:text-sm",
        root: "tw:mb-0",
      }
    }
  }
})
const { root, title, subtitle } = headingVariants()

type HeadingProps = ComponentProps<'div'> &
  Omit<VariantProps<typeof headingVariants>, "size"> &
  Required<Pick<VariantProps<typeof headingVariants>, "size">> & {
    title?: string
    subtitle?: string
  }

/**
 * Design note:
 * Providing `title` and `subtitle` is merely for better framework compatibility,
 * although it can be also treated as a shortcut in terms of the API style.
 * eg.,
 * - https://github.com/withastro/astro/issues/4926
 */
// FIXME: providing `title` and `subtitle` is really an anti-pattern, and really make the code far more complex
// but having the pattern like <Title>just a title</Title> still makes sense
const Heading = ({ className, size, title, subtitle, children, ...props }: HeadingProps) => {
  // case-a: a pure text
  // case-b; <Title> XXXXX
  // case-c: <Title> and <Subtitle>
  // case-d: a single element
  // case-e: <Title> in another element XXXXX
  let content = children;
  if (Children.count(children) === 1 && !(title || subtitle)) {
    // const Comp = size
    // return <Comp data-single-element {...props} className={headingTitleVariants({ size, className })}>{children}</Comp>
    if (
      typeof children === 'string' || // when passing literall a string
      typeof (children as any)?.type === 'string' // a native element (eg., span)
    ) {
      content = <HeadingTitle>{children}</HeadingTitle>
    }
    else if ((children as any)?.type?.displayName !== 'HeadingTitle') {
      // Possible cases (should all be extreme rare):
      // - any element in another element
      // - <HeadingSubtitle>
      throw new Error('You just use this component in a wrong way, check the source code.')
    }
  }
  if (title || subtitle) {
    if (Children.count(children) !== 0) {
      throw new Error('Either using `title` and/or `subtitle` or doing that via composition, but not both.')
    }
    content = (
      <>
        {title && <HeadingTitle>{title}</HeadingTitle>}
        {subtitle && <HeadingSubtitle>{subtitle}</HeadingSubtitle>}
      </>
    )
  }

  return (
    <HeadingContext.Provider value={{ size }}>
      <div
        {...props}
        className={root({ size, className })}
      >
        {content}
      </div>
    </HeadingContext.Provider>
  )
};
// TBD: throw error if not used within Heading

type HeadingTitleProps = {
  className?: string
  asChild?: boolean
  children: ReactNode
}
const HeadingTitle = ({
  children,
  className,
  asChild,
  ...props
}: HeadingTitleProps) => {
  const { size: Size } = useContext(HeadingContext)
  const Comp = asChild ? Slot : Size
  return (
    <Comp
      data-title
      className={title({ size: Size, className })}
      {...props}
    >
      {children}
    </Comp>
  )
}

type HeadingSubtitleProps = ComponentProps<'div'> & { asChild?: boolean }
const HeadingSubtitle = ({
  children,
  className,
  asChild,
  ...props
}: HeadingSubtitleProps) => {
  const { size: Size } = useContext(HeadingContext)
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-subtitle
      className={subtitle({ size: Size, className })}
      {...props}
    >
      {children}
    </Comp>
  )
}

Heading.displayName = "Heading"
HeadingTitle.displayName = "HeadingTitle"
HeadingSubtitle.displayName = "HeadingSubtitle"

export {
  Heading,
  HeadingTitle,
  HeadingSubtitle,
  HeadingContext,
  headingVariants,
  type HeadingProps,
  type HeadingTitleProps,
  type HeadingSubtitleProps
}