import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbFinal, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/Breadcrumb/Breadcrumb"
import { Icon } from "../ui/Icon/Icon";

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
        <BreadcrumbFinal>Web</BreadcrumbFinal>
      </BreadcrumbItem>

    </Breadcrumb>
  )
}