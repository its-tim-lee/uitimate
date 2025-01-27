import * as React from "react";
import { Button } from "@mui/material";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/Accordion.tsx";
import { PlanAccordion } from "./components/PlanAccordion";
import { pricingPlans } from "./data/plans";

export function PricingSection() {
  return (
    <div
      className="flex flex-col p-2 rounded-lg border border-solid border-slate-500 max-w-[378px]"
      role="region"
      aria-label="Pricing plans"
    >
      <div className="flex gap-2 items-center p-6 w-full rounded-lg shadow-sm bg-zinc-900">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 text-neutral-50">
          <h2 className="text-lg font-semibold leading-7">
            You're using free plan
          </h2>
          <p className="mt-1 text-sm leading-5 opacity-80">
            You can add components to your app by upgrading to the next plan.
          </p>
        </div>
        <Button
          size="medium"
          color="warning"
          variant="contained"
          className="self-stretch my-auto"
          aria-label="View available pricing plans"
        >
          View plans
        </Button>
      </div>
      <Accordion
        type="single"
        orientation="vertical"
        className="self-center mt-2 w-full"
        collapsible
      >
        {pricingPlans.map((plan) => (
          <PlanAccordion key={plan.id} plan={plan} />
        ))}
      </Accordion>
    </div>
  );
}
