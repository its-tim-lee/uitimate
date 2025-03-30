import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbFinal, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/Breadcrumb/Breadcrumb.tsx";
import { DrawerContent } from "@/components/ui/Drawer/Drawer.tsx";
import { DrawerTrigger } from "@/components/ui/Drawer/Drawer.tsx";
import { Drawer } from "@/components/ui/Drawer/Drawer.tsx";
import { DropdownMenuItem } from "@/components/ui/DropdownMenu/DropdownMenu.tsx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/DropdownMenu/DropdownMenu.tsx";
import { Icon } from "@/components/ui/Icon/Icon.tsx";

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