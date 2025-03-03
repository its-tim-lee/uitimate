import { type HTMLAttributes, type ReactNode, type ComponentProps, Children, isValidElement } from "react"
import { tv, type VariantProps } from 'tailwind-variants';
import React, { createContext, useContext } from 'react';

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

const TextHeaderCtx = createContext<{ size: 'h1' | 'h2' | 'h3' | 'h4' }>({ size: 'h1' });

export const headingVariants = tv({
  base: ['tw:flex tw:flex-col tw:space-y-1 tw:text-left tw:mb-3'],
  variants: {
    size: {
      h1: "",
      h2: "",
      h3: "",
      h4: "",
    },
  },
});

export const headingTitleVariants = tv({
  base: ["tw:tracking-tight tw:scroll-m-20 tw:data-single-element:mb-3"],
  variants: {
    size: {
      h1: "tw:text-3xl tw:font-bold",
      h2: "tw:text-2xl tw:font-semibold",
      h3: "tw:text-xl tw:font-semibold",
      h4: "tw:text-lg tw:font-semibold",
    },
  },
});

export const headingSubtitleVariants = tv({
  base: ["tw:text-base tw:text-muted-foreground"],
  variants: {
    size: {
      h1: "",
      h2: "",
      h3: "",
      h4: "",
    },
  },
});

export type HeadingProps = ComponentProps<'div'> &
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
export const Heading = ({ className, size, title, subtitle, children, ...props }: HeadingProps) => {
  if (Children.count(children) === 1 && !(title || subtitle)) {
    const Comp = size
    return <Comp data-single-element {...props} className={headingTitleVariants({ size, className })}>{children}</Comp>
  }
  let content = children;
  if (title || subtitle) {
    if (Children.count(children) !== 0) throw new Error('Either using `title` and/or `subtitle` or doing that via composition, but not both.')
    content = (
      <>
        {title && <HeadingTitle>{title}</HeadingTitle>}
        {subtitle && <HeadingSubtitle>{subtitle}</HeadingSubtitle>}
      </>
    )
  }
  else if (Children.count(children) === 1) {
    const Comp = size
    return <Comp data-single-element {...props} className={headingTitleVariants({ size, className })}>{children}</Comp>
  }

  return (
    <TextHeaderCtx.Provider value={{ size }}>
      <div
        {...props}
        className={headingVariants({ size, className })}
      >
        {content}
      </div>
    </TextHeaderCtx.Provider>
  )
};

export type HeadingTitleProps = ComponentProps<'div'>
export const HeadingTitle = ({ children, className, ...props }: HeadingTitleProps) => {
  const { size: Size } = useContext(TextHeaderCtx);
  return <Size
    data-title
    className={headingTitleVariants({ size: Size, className })}
    {...props}>{children}</Size>;
};

export type HeadingSubtitleProps = ComponentProps<'div'>
export const HeadingSubtitle = ({ children, className, ...props }: HeadingSubtitleProps) => {
  return <div
    data-subtitle
    className={headingSubtitleVariants({ className })}
    {...props}>{children}</div>;
};

Heading.displayName = "Heading"
HeadingTitle.displayName = "HeadingTitle";
HeadingSubtitle.displayName = "HeadingSubtitle";