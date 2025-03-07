import { type HTMLAttributes, type ReactNode, type ComponentProps, Children, isValidElement } from "react"
import { tv, type VariantProps } from 'tailwind-variants';
import React, { createContext, useContext } from 'react';
import { Slot } from "@radix-ui/react-slot";
import type * as Radix from '@radix-ui/react-slot';

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

export const TextHeaderCtx = createContext<{ size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }>({ size: 'h1' });

export const headingVariants = tv({
  base: ['tw:flex tw:flex-col tw:gap-1.5 tw:text-left tw:mb-3 tw:relative'],
  variants: {
    size: {
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "tw:mb-0",
    },
  },
});

export const headingTitleVariants = tv({
  base: ["tw:leading-none tw:tracking-tight tw:scroll-m-20 tw:data-single-element:mb-3"],
  variants: {
    size: {
      h1: "tw:text-3xl tw:font-bold",
      h2: "tw:text-2xl tw:font-semibold",
      h3: "tw:text-xl tw:font-semibold",
      h4: "tw:text-lg tw:font-semibold",
      h5: "tw:text-base tw:font-semibold",
      h6: "tw:text-sm tw:font-medium", // use case: checkbox label
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
      h5: "",
      h6: "tw:text-sm",
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
// FIXME: providing `title` and `subtitle` is really an anti-pattern, and really make the code far more complex
// but having the pattern like <Title>just a title</Title> still makes sense
export const Heading = ({ className, size, title, subtitle, children, ...props }: HeadingProps) => {
  // case-a: a pure text
  // case-b; <Title> XXXXX
  // case-c: <Title> and <Subtitle>
  // case-d: a single element
  // case-e: <Title> in another element XXXXX
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
// TBD: throw error if not used within Heading

export type HeadingTitleProps = {
  className?: string;
  asChild?: boolean;
  children: React.ReactNode;
}

export const HeadingTitle = ({
  children,
  className,
  asChild,
  ...props
}: HeadingTitleProps) => {
  const { size: Size } = useContext(TextHeaderCtx);
  const Comp = asChild ? Slot : Size;
  return (
    <Comp
      data-title
      className={headingTitleVariants({ size: Size, className })}
      {...props}
    >
      {children}
    </Comp>
  );
};

export type HeadingSubtitleProps = ComponentProps<'div'> & { asChild?: boolean }
export const HeadingSubtitle = ({ children, className, asChild, ...props }: HeadingSubtitleProps) => {
  const { size: Size } = useContext(TextHeaderCtx);
  const Comp = asChild ? Slot : 'div';
  return <Comp
    data-subtitle
    className={headingSubtitleVariants({ size: Size, className })}
    {...props}>{children}</Comp>;
};

Heading.displayName = "Heading"
HeadingTitle.displayName = "HeadingTitle";
HeadingSubtitle.displayName = "HeadingSubtitle";