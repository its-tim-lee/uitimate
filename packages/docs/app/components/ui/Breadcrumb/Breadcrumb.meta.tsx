import type { ComponentMeta } from "#/types/index.ts";

export default {
  description: 'A navigation aid to indicate the current location within a website\'s hierarchy and navigate between levels.',
  anatomy: `
<Breadcrumb>
  <BreadcrumbItem/>
  <BreadcrumbSeparator/>
  {/* more <BreadcrumbItem> and <BreadcrumbSeparator> */}
</Breadcrumb>
  `,
} as ComponentMeta;