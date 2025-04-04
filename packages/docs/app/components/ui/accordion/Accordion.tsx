import { type ComponentProps } from "react"
import { Root, Item, Trigger, Content, Header } from "@radix-ui/react-accordion"
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import './index.css'

const accordionVariants = tv({
  slots: {
    item: [
      "tw:border-b",
      "tw:data-[disabled]:text-muted-foreground"
    ],
    trigger: [
      "tw:flex tw:flex-1 tw:items-center tw:justify-between tw:py-4 tw:text-sm tw:font-medium tw:transition-all tw:text-left",
      "tw:hover:underline",
      "tw:[&[data-state=open]_[data-icon]]:rotate-180"
    ],
    content: [
      "tw:overflow-hidden tw:text-sm",
      "tw:data-[state=closed]:[animation:var(--animate-accordion-up)] tw:data-[state=open]:[animation:var(--animate-accordion-down)]",
    ],
    contentInner: [
      "tw:pb-4 tw:pt-0"
    ]
  }
})
const { item, trigger, content, contentInner } = accordionVariants()

type AccordionItemProps = ComponentProps<typeof Item>
const AccordionItem = ({
  className,
  disabled,
  children,
  ...props
}: AccordionItemProps) => {
  return (
    <Item
      className={item({ className })}
      data-disabled={disabled}
      {...props}
    >
      {children}
    </Item>
  )
}

type AccordionTriggerProps = ComponentProps<typeof Trigger>
const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionTriggerProps) => {
  return (
    <Header className="tw:flex">
      <Trigger
        className={trigger({ className })}
        {...props}
      >
        {children}
        <Icon
          icon="lucide:chevron-down"
          className="tw:h-4 tw:w-4 tw:shrink-0 tw:text-muted-foreground tw:transition-transform tw:duration-200"
        />
      </Trigger>
    </Header>
  )
}

type AccordionContentProps = ComponentProps<typeof Content>
const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionContentProps) => {
  return (
    <Content
      className={content()}
      {...props}
    >
      <div className={contentInner({ className })}>
        {children}
      </div>
    </Content>
  )
}

AccordionItem.displayName = "AccordionItem"
AccordionTrigger.displayName = "AccordionTrigger"
AccordionContent.displayName = "AccordionContent"


export {
  /**
   * for some props of Accordion:
   * - orientation='horizontal' seems not working
   * - `defaultValue` can be replaced by `value`
   */
  Root as Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionVariants,
  type AccordionItemProps,
  type AccordionTriggerProps,
  type AccordionContentProps,
}
