import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion/Accordion.tsx";
import { type PlanData } from "../types";

interface PlanAccordionProps {
  plan: PlanData;
}

export function PlanAccordion({ plan }: PlanAccordionProps) {
  return (
    <AccordionItem value={plan.id} className="w-full">
      <AccordionTrigger>{plan.title}</AccordionTrigger>
      <AccordionContent>
        {plan.isRecommended ? (
          <div className="flex flex-col self-stretch p-2 w-full">
            <div className="flex flex-col mt-2 w-full tracking-normal text-black">
              <div className="text-xl font-bold">{plan.price}</div>
              <div className="mt-1 text-sm">{plan.priceDetails}</div>
            </div>
          </div>
        ) : (
          <div className="self-stretch w-full text-sm leading-5 text-zinc-900">
            {plan.description}
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
