import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbFinal, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "#/components/ui/Breadcrumb/Breadcrumb.tsx";

export default () => {
  return (
    <Breadcrumb>

      <BreadcrumbItem>
        <BreadcrumbLink href="/docs">Core</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator />

      <BreadcrumbItem>
        <BreadcrumbLink href="/docs/components">Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator />

      <BreadcrumbItem>
        <BreadcrumbFinal>Api</BreadcrumbFinal>
      </BreadcrumbItem>

    </Breadcrumb>
  )
}