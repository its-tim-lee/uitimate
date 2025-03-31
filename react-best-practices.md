# React

- Component design
  - Always use `ComponentProps` to retrieve the types if needed
    ```tsx
    // eg.,
    // Don't
    type Props = HTMLAttributes<HTMLDivElement>;
    // Do
    type Props = ComponentProps<'div'>;
    ```
  - Always destruct `className`, `children`, and `props` from the function parameters
    ```tsx
    // eg.,
    // note: passing `children` manually instead of embedding it in `props` is especially important when using `Slot` from Radix in Storybook environment, otherwise it can be broken.
    const Comp = ({ className, children, ...props }: Props) => {
      return <div className={className} {...props}>{children}</div>
    }
    ```


# Radix
When using any kind of Radix-related API/component, all below guidelines must be strictly followed, otherwise it may be broken in some situations.
