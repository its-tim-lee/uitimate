import { type PlanData } from "../types";

export const pricingPlans: PlanData[] = [
  {
    id: "individual",
    title: "Individual",
    price: "$9/mo",
    description: "Sucker's plan: $9/mo",
  },
  {
    id: "pro",
    title: "Pro",
    price: "$10/mo",
    description: "The best plan you can get!",
    priceDetails: "Free for 1st month, then $10/mo for 1 yr",
    isRecommended: true,
  },
  {
    id: "enterprise",
    title: "Enterprise",
  },
];
