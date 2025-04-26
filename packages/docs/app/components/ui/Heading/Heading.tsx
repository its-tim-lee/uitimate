import { createContext, useContext, type ReactNode, type ComponentProps, Children, isValidElement, type ReactElement } from "react"
import { Slot } from "#/components/ui/Slot/Slot.tsx"
import { tv, type VariantProps } from 'tailwind-variants'
import { casing } from "#/helpers/utils.ts"

const HeadingContext = createContext<{ size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }>({ size: 'h1' })
// FIXME: intergate with https://github.com/tailwindlabs/tailwindcss-typography
const headingVariants = tv({
  slots: {
    root: "tw:flex tw:flex-col tw:gap-1.5 tw:text-left tw:mb-3 tw:relative",
    title: "tw:leading-none tw:text-foreground tw:tracking-tight tw:scroll-m-20 tw:relative",
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
        title: "tw:text-sm tw:font-medium", // FIXME: (do we really need to support this very case this way?) use case: checkbox label
        subtitle: "tw:text-sm", // FIXME: is this really a good idea?
        root: "tw:mb-0", // FIXME: is this really a good idea? cuz applying `tw:mb-0` on the root element from user is fucking easy
      }
    }
  }
})
const { root, title, subtitle } = headingVariants()

/**
 * Design note:
 * - The "shortcut API style":
 *   inventing such style using render props (eg., <Heading title='...'/>) is an anti-pattern,
 *   because it'll make the implementation far more complex which only delivers a little convenience in terms of DX.
 *
 *   Side note:
 *    One might argue that but it can have other benefits, such as a better support on other non-React-dedicated frameworks like Astro.
 *    (see: https://github.com/withastro/astro/issues/4926),
 *    but again, it still makes the component unncessary complex,
 *    not to mention it already violates one of our design guidelines: Only use this library in React-dedicated frameworks.
 */
type HeadingProps = ComponentProps<'div'> & VariantProps<typeof headingVariants>
const Heading = ({ className, size = 'h1', children, ...props }: HeadingProps) => {
  let content = children;
  /**
   * Below design basically allows using `Heading` in the fashion of
   * `<Heading>any element but not <Title> or <Subtitle></Heading>`,
   * this is because it'd be very tedious if only title is used in the heading, but in the form of:
   * ```
   * <Heading>
   *   <HeadingTitle>XXXXX</HeadingTitle>
   * </Heading>
   * ```
   *
   * Instead, the more ergonomic way is:
   * ```
   * <Heading>XXXXX</Heading>
   * ```
   *
   * The possible cases of children that this component can have:
   * - CASE-A: a pure text (see #202504091)
   * - CASE-B: <Title> XXXXX </Title>
   * - CASE-C: <Title> and <Subtitle> (see #202504092)
   * - CASE-D: a single element
   * - CASE-E: <Title> in another element XXXXX
   */
  if (Children.count(children) === 1 &&
    (typeof children === 'string' || // when literally passing a string
      (
        typeof (children as any)?.type === 'string' &&  // when passing a native element (eg., span)
        !hasHeadingTitleDescendant(children)
      ) ||
      (
        typeof (children as any)?.type === 'function' && // when passing a function component
        isNotHeadingTitle(children) &&
        !hasHeadingTitleDescendant(children)
      )
    )) {
    content = <HeadingTitle>{children}</HeadingTitle>
  }
  return (
    <HeadingContext.Provider value={{ size }}>
      <div
        data-tag={casing.kebabCase(Heading.displayName)}
        className={root({ size, className })}
        {...props}
      >
        {content}
      </div>
    </HeadingContext.Provider>
  )
};

const isNotHeadingTitle = (e: ReactNode) => {
  const tag = (e as any).props['data-tag']
  return (tag === 'heading-title') ? false : true;
}

const hasHeadingTitleDescendant = (e: ReactNode): boolean => {
  if (!isValidElement(e)) return false;

  // Check current element's data-tag
  const props = (e as ReactElement<{ 'data-tag'?: string, children?: ReactNode }>).props;
  if (props['data-tag'] === 'heading-title') return true;

  // For function components, check their displayName or name
  const elementType = (e as ReactElement).type;
  if (typeof elementType === 'function' && elementType.name === 'HeadingTitle') return true;

  // Check children recursively
  const children = props.children;
  if (!children) return false;
  return Array.isArray(children) ? children.some(child => hasHeadingTitleDescendant(child)) : hasHeadingTitleDescendant(children);
}

type HeadingTitleProps = ComponentProps<'div'> & { asChild?: boolean };
const HeadingTitle = ({
  className,
  asChild,
  ...props
}: HeadingTitleProps) => {
  const { size: Size } = useContext(HeadingContext)
  const Comp = asChild ? Slot : Size
  return (
    <Comp
      data-tag={casing.kebabCase(HeadingTitle.displayName)}
      className={title({ size: Size, className })}
      {...props}
    />
  )
}

type HeadingSubtitleProps = ComponentProps<'div'> & { asChild?: boolean }
const HeadingSubtitle = ({
  className,
  asChild,
  ...props
}: HeadingSubtitleProps) => {
  const { size } = useContext(HeadingContext)
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-tag={casing.kebabCase(HeadingSubtitle.displayName)}
      className={subtitle({ size, className })}
      {...props}
    />
  )
}

Heading.displayName = "Heading"
HeadingTitle.displayName = "HeadingTitle"
HeadingSubtitle.displayName = "HeadingSubtitle"

namespace Type {
  export type Heading = HeadingProps;
  export type HeadingTitle = HeadingTitleProps;
  export type HeadingSubtitle = HeadingSubtitleProps;
}

export {
  Heading,
  HeadingTitle,
  HeadingSubtitle,
  HeadingContext,
  headingVariants,
  type Type
}