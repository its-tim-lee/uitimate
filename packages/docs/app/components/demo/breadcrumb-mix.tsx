import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbFinal, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/Breadcrumb/Breadcrumb.tsx";
import { Icon } from "@/components/ui/Icon/Icon.tsx";

export default () => {
  return (
    <Breadcrumb>

      <BreadcrumbItem>
        <BreadcrumbLink href="/">Firebase</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator><Icon icon="lucide:slash" /></BreadcrumbSeparator>

      <BreadcrumbItem>
        <BreadcrumbLink asChild><a href='/docs'>Documentation</a></BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator><Icon icon="lucide:slash" /></BreadcrumbSeparator>

      {/* Too more items, show ellipsis to express "collapse" */}
      <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>

      <BreadcrumbSeparator><Icon icon="lucide:slash" /></BreadcrumbSeparator>

      <BreadcrumbItem>
        <BreadcrumbFinal>Crashlytics</BreadcrumbFinal>
      </BreadcrumbItem>

    </Breadcrumb>
  )
}