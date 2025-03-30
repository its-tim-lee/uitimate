import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbFinal, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/Breadcrumb/Breadcrumb"
import { DrawerContent } from "../ui/Drawer/Drawer";
import { DrawerTrigger } from "../ui/Drawer/Drawer";
import { Drawer } from "../ui/Drawer/Drawer";
import { DropdownMenuItem } from "../ui/DropdownMenu/DropdownMenu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/DropdownMenu/DropdownMenu";
import { Icon } from "../ui/Icon/Icon";

export default () => {
  return (
    <Breadcrumb>

      <BreadcrumbItem>
        <BreadcrumbLink href="/">Firebase</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator><Icon icon="lucide:slash" /></BreadcrumbSeparator>

      {/* Desktop Style */}
      <BreadcrumbItem className='tw:hidden tw:sm:block'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <BreadcrumbEllipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              Documentation
            </DropdownMenuItem>
            <DropdownMenuItem>
              Performance Monitoring
            </DropdownMenuItem>
            <DropdownMenuItem>
              Get started
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BreadcrumbItem>

      {/* Mobile Style */}
      <BreadcrumbItem className='tw:block tw:sm:hidden'>
        <Drawer>
          <DrawerTrigger asChild><BreadcrumbEllipsis /></DrawerTrigger>
          <DrawerContent>
            Navigate to:

            <div className="tw:grid tw:gap-3 tw:px-4">
              {[
                { href: "/docs", text: "Documentation" },
                { href: "/docs/performance-monitoring", text: "Performance Monitoring" },
                { href: "/docs/get-started", text: "Get started" }
              ].map((item) => (
                <a href={item.href} className="tw:py-1 tw:text-sm" key={item.href}>
                  {item.text}
                </a>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </BreadcrumbItem>

      <BreadcrumbSeparator><Icon icon="lucide:slash" /></BreadcrumbSeparator>

      <BreadcrumbItem>
        <BreadcrumbFinal>Web</BreadcrumbFinal>
      </BreadcrumbItem>

    </Breadcrumb>
  )
}