import { Icon } from "@iconify/react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./Breadcrumb.tsx"

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
/**
 * TODO: integrate with Dropdown component
 * TODO: it seems `<BreadcrumbList>` doesn't make sense
 * TODO: it seems `<BreadcrumbPage>` doesn't make sense, having `<BreadcrumbLink>` should be enough
 */
export const Variant1 = {
  name: 'Mix',
  render: () => {
    return (
      <Breadcrumb>
        <BreadcrumbList>

          <BreadcrumbItem>
            <BreadcrumbLink href="/">This is a link</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator><Icon icon="lucide:slash" /></BreadcrumbSeparator>

          {/* Too more items, show ellipsis to express "collapse" */}
          <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator/>

          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
    )
  },
};

