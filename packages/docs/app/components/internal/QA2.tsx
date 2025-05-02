import type { ComponentProps, ReactNode } from "react";
import { useId, Children } from "react";
import { Accordion, AccordionItem as AccordionItemPrimitive, AccordionTrigger as AccordionTriggerPrimitive, AccordionContent as AccordionContentPrimitive } from "#/components/ui/Accordion/Accordion";
import { cn } from "#/helpers/utils";
import { track } from "#/helpers/analytics/ga/index.ts";

type QA2Props = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  dir?: "ltr" | "rtl";
  children?: ReactNode;
  className?: string;
  // Include other relevant props from HTMLDivElement if needed
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>; // Omit potential conflicts

const QA2 = ({ className, ...props }: QA2Props) => (
  <Accordion type="single" collapsible className={cn("tw:w-[80%] tw:mx-auto tw:my-10", className)} {...props} />
);

const QA2Item = ({ className, value, ...props }: ComponentProps<typeof AccordionItemPrimitive>) => {
  const id = useId();
  return (
    <AccordionItemPrimitive key={id} value={value ?? id} className={className} {...props} />
  )
}

const QA2Trigger = ({ id, children, onClick, ...props }: ComponentProps<typeof AccordionTriggerPrimitive>) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTimeout(() => {
      const state = (e.target as HTMLButtonElement).getAttribute('data-state');
      if (state === 'open') track('check_qa', { id });
    }, 0);
    if (onClick) onClick(e);
  };
  return (
    <AccordionTriggerPrimitive onClick={handleClick} {...props}>
      <span className='tw:leading-loose'>
        {children}
      </span>
    </AccordionTriggerPrimitive>
  );
};

const QA2Content = ({ className, ...props }: ComponentProps<typeof AccordionContentPrimitive>) => (
  <AccordionContentPrimitive className={cn("tw:text-muted-foreground", className)} {...props} />
);

export { QA2, QA2Item, QA2Trigger, QA2Content };