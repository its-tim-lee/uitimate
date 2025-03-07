import { Children, createContext, useContext, useId, type ComponentProps } from "react"
import { Root, Indicator, type CheckedState } from "@radix-ui/react-checkbox"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { Label } from "~/src/components/ui/Label/Label.tsx"
import { cn } from "@/lib/utils"
import { tv } from "tailwind-variants"

const checkboxVariants = tv({
  slots: {
    root: [
      "tw:peer tw:h-4 tw:w-4 tw:shrink-0 tw:rounded-sm tw:border tw:border-primary tw:shadow",
      "tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring",
      "tw:disabled:cursor-not-allowed tw:disabled:opacity-50",
      "tw:data-[state=checked]:bg-primary tw:data-[state=checked]:text-primary-foreground"
    ],
    indicator: "tw:flex tw:items-center tw:justify-center tw:text-current",
    wrapper: "tw:flex tw:items-top tw:space-x-2",
    labelContainer: "tw:flex tw:flex-col tw:gap-1.5 tw:leading-none",
  },
  variants: {
    label: {
      left: {
        wrapper: "tw:flex-row-reverse tw:space-x-reverse",
      },
      right: {}
    }
  }
})

const CheckboxCtx = createContext<{ id: string }>({ id: "" })

type CheckboxNewProps = ComponentProps<typeof Root> & { label?: 'left' | 'right' }
const Checkbox = ({ className, children, label = 'right', ...props }: CheckboxNewProps) => {
  const { root, indicator, wrapper, labelContainer } = checkboxVariants({ label })
  const id = useId()
  const $checkbox = (
    <Root
      id={id}
      className={root({ className: Children.count(children) === 0 ? className : '' })}
      {...props}
    >
      <Indicator className={indicator()}>
        <Icon icon="lucide:check" className="tw:size-4" />
      </Indicator>
    </Root>
  )

  let content = $checkbox;
  if (Children.count(children) !== 0) {
    let meta = children;
    if (Children.count(children) === 1) { // try to do normalization if needed
      if (
        typeof children === 'string' || // when passing literall a string
        typeof (children as any)?.type === 'string' // a native element (eg., span)
      ) {
        meta = <CheckboxTitle>{children}</CheckboxTitle>
      }
      else if ((children as any)?.type?.displayName !== 'CheckboxTitle') {
        // Possible cases (should all be extreme rare):
        // - any element in another element
        // - <CheckboxSubtitle>
        throw new Error('You just use this component in a wrong way, check the source code.')
      }
    }
    else if (Children.count(children) > 2) {
      throw new Error('You just use this component in a wrong way, check the source code.')
    }
    content = (
      <div className={wrapper({ className })}>
        {$checkbox}
        <div className={labelContainer()}>{meta}</div>
      </div>
    )
  }
  return <CheckboxCtx.Provider value={{ id }}>{content}</CheckboxCtx.Provider>
}

type CheckboxTitleProps = ComponentProps<typeof Label>
const CheckboxTitle = ({ className, ...props }: CheckboxTitleProps) => {
  const { id } = useContext(CheckboxCtx)
  if (!id) throw new Error('<CheckboxTitle> must be used within a <Checkbox>')
  return (
    <Label
      htmlFor={id}
      className={cn(
        "tw:text-sm tw:font-medium tw:leading-none",
        "tw:peer-disabled:cursor-not-allowed tw:peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

/**
 * Using <div> instead of <Label> is by purpose: since <Checkbox> and <CheckboxTitle> already links to each other using `htmlFor`,
 * it's not necessary to do the same on <CheckboxSubtitle>, also, to maximize the extensibility, using <div> is better than the element like <p>
 */
type CheckboxSubtitleProps = ComponentProps<'div'>
const CheckboxSubtitle = ({ className, ...props }: CheckboxSubtitleProps) => {
  const { id } = useContext(CheckboxCtx)
  if (!id) throw new Error('<CheckboxSubtitle> must be used within a <Checkbox>')
  return (
    <div className={cn("tw:text-sm tw:text-muted-foreground", className)} {...props} />
  )
}

CheckboxSubtitle.displayName = "CheckboxSubtitle"
CheckboxTitle.displayName = "CheckboxTitle"
Checkbox.displayName = 'Checkbox'

export {
  CheckboxCtx,
  Checkbox, CheckboxSubtitle, CheckboxTitle,
  type CheckedState,
  type CheckboxNewProps,
  type CheckboxTitleProps,
  type CheckboxSubtitleProps
}

