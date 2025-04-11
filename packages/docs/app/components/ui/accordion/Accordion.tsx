import { type ComponentProps } from "react"
import { Root, Item, Trigger, Content, Header } from "@radix-ui/react-accordion"
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import './index.css'
import { kebabCase } from 'lodash-es'

const accordionVariants = tv({
  slots: {
    item: [
      "tw:border-b",
      "tw:data-[disabled]:text-muted-foreground"
    ],
    trigger: [
      "tw:flex tw:flex-1 tw:items-center tw:justify-between tw:py-4 tw:text-sm tw:font-medium tw:transition-all tw:text-left",
      "tw:hover:cursor-pointer",
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
  ...props
}: AccordionItemProps) => {
  return (
    <Item
      className={item({ className })}
      data-tag={kebabCase(AccordionItem.displayName)}
      {...props}
    />
  )
}

/**
 * Usage Note:
 *  - in 99% of time, this is NOT recommended to be used directly, cuz we already encapsulate it in AccordionTrigger
 */
type AccordionHeaderProps = ComponentProps<typeof Header>
const AccordionHeader = Header;

type AccordionTriggerProps = ComponentProps<typeof Trigger>
const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionTriggerProps) => {
  return (
    <AccordionHeader className="tw:flex">
      <Trigger
        className={trigger({ className })}
        data-tag={kebabCase(AccordionTrigger.displayName)}
        {...props}
      >
        {children}
        <Icon
          icon="lucide:chevron-down"
          className="tw:h-4 tw:w-4 tw:shrink-0 tw:text-muted-foreground tw:transition-transform tw:duration-200"
        />
      </Trigger>
    </AccordionHeader>
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
      data-tag={kebabCase(AccordionContent.displayName)}
      {...props}
    >
      <div className={contentInner({ className })}>
        {children}
      </div>
    </Content>
  )
}

/**
 * Usage Note:
 *  for some props of Accordion,
 *  - orientation='horizontal' seems not working
 *  - `defaultValue` can be replaced by `value`
 */
type AccordionProps = ComponentProps<typeof Root>
const Accordion = Root;

Accordion.displayName = "Accordion"
AccordionItem.displayName = "AccordionItem"
AccordionTrigger.displayName = "AccordionTrigger"
AccordionContent.displayName = "AccordionContent"
AccordionHeader.displayName = "AccordionHeader"

namespace Type {
  export type AccordionItem = AccordionItemProps;
  export type AccordionTrigger = AccordionTriggerProps;
  export type AccordionContent = AccordionContentProps;
  export type AccordionHeader = AccordionHeaderProps;
  export type Accordion = AccordionProps;
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionHeader,
  accordionVariants,
  type Type
}