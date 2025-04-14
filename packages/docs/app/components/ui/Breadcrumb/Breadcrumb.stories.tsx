import BreadcrumbDemo from "../../demo/breadcrumb-demo.tsx";
import BreadcrumbMix from "../../demo/breadcrumb-mix.tsx";
import BreadcrumbExpansibleCollapse from "../../demo/breadcrumb-expansible-collapse.tsx";

export default {
  title: 'Example/Breadcrumb',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const DEMO = {
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
