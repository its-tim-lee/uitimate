import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbFinal, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/Breadcrumb/Breadcrumb"
import IconV2 from "../ui/Icon/IconV2";

export default () => {
  return (
    <Breadcrumb>

      <BreadcrumbItem>
        <BreadcrumbLink href="/">Firebase</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator><IconV2 icon="lucide:slash" /></BreadcrumbSeparator>

      <BreadcrumbItem>
        <BreadcrumbLink asChild><a href='/docs'>Documentation</a></BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator><IconV2 icon="lucide:slash" /></BreadcrumbSeparator>

      {/* Too more items, show ellipsis to express "collapse" */}
      <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>

      <BreadcrumbSeparator><IconV2 icon="lucide:slash" /></BreadcrumbSeparator>

      <BreadcrumbItem>
        <BreadcrumbFinal>Web</BreadcrumbFinal>
      </BreadcrumbItem>

    </Breadcrumb>
  )
}