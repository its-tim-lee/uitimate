import { type ComponentProps } from "react"
import { Root, Item, Trigger, Content, Header } from "@radix-ui/react-accordion"
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils"

const AccordionItem = ({ className, children, ...props }: ComponentProps<typeof Item>) => (
  <Item
    className={cn("tw:border-b", props.disabled && "tw:text-muted-foreground", className)}
    {...props}
  >
    {children}
  </Item>
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({ className, children, ...props }: ComponentProps<typeof Trigger>) => (
  <Header className="tw:flex">
    <Trigger
      className={cn(
        "tw:flex tw:flex-1 tw:items-center tw:justify-between tw:py-4 tw:text-sm tw:font-medium tw:transition-all tw:hover:underline tw:text-left tw:[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <Icon icon='lucide:chevron-down' className="tw:h-4 tw:w-4 tw:shrink-0 tw:text-muted-foreground tw:transition-transform tw:duration-200" />
    </Trigger>
  </Header>
);
AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = ({ className, children, ...props }: ComponentProps<typeof Content>) => (
  <Content
    className="tw:overflow-hidden tw:text-sm tw:data-[state=closed]:animate-accordion-up tw:data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("tw:pb-4 tw:pt-0", className)}>{children}</div>
  </Content>
);
AccordionContent.displayName = Content.displayName;

export {
  /**
   * for some props of Accordion:
   * - orientation='horizontal' seems not working
   * - `defaultValue` can be replaced by `value`
   */
  Root as Accordion,
  AccordionItem, AccordionTrigger, AccordionContent
}
