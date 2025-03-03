import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbFinal, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/Breadcrumb/Breadcrumb"

export default () => {
  return (
    <Breadcrumb>

      <BreadcrumbItem>
        <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator />

      <BreadcrumbItem>
        <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator />

      <BreadcrumbItem>
        <BreadcrumbFinal>Breadcrumb</BreadcrumbFinal>
      </BreadcrumbItem>

    </Breadcrumb>
  )
}