import { Icon } from "@iconify/react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbFinal,
  BreadcrumbSeparator,
} from "./Breadcrumb.tsx"
import BreadcrumbDemo from "../../demo/breadcrumb-demo.tsx";
import BreadcrumbMix from "../../demo/breadcrumb-mix.tsx";
import BreadcrumbExpansibleCollapse from "../../demo/breadcrumb-expansible-collapse.tsx";

export default {
  title: 'Example/Breadcrumb',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// TBD: Using BreadcrumbFinal is optional, cuz there're sites that prefering not showing the final item on the breadcrumb as user is viewing that page (represented as the final item)
export const Variant1 = {
  name: 'Demo',
  render: () => <BreadcrumbDemo />
};


export const Variant2 = {
  name: 'API / Mix',
  render: () => <BreadcrumbMix />
};


export const Expansible = {
  name: 'Scenario / Expansible',
  render: () => {
    return <BreadcrumbExpansibleCollapse />
  }
}
