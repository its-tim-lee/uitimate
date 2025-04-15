import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbFinal,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from "#/components/ui/Breadcrumb/Breadcrumb";
import {
  Drawer,
  DrawerHeading,
} from "#/components/ui/Drawer/Drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "#/components/ui/DropdownMenu/DropdownMenu";
import { Icon } from "#/components/ui/Icon/Icon";
import { useState } from "react";
import { useIsMobile } from "~/app/helpers/hooks/use-mobile";

const BREADCRUMB_ITEMS = [
  { href: "/docs", text: "Documentation" },
  { href: "/docs/performance-monitoring", text: "Performance Monitoring" },
  { href: "/docs/get-started", text: "Get started" }
];

const EnpanededBreadcrumbEllipsis = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen} className="tw:p-3">
        <DrawerHeading size="h5">
          Navigate to:
        </DrawerHeading>
        <div className="tw:grid tw:gap-3">
          {BREADCRUMB_ITEMS.map((item) => (
            <a
              href={item.href}
              className="tw:py-1 tw:text-sm"
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.text}
            </a>
          ))}
        </div>
      </Drawer>
    );
  }
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <span />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {BREADCRUMB_ITEMS.map((item) => (
          <DropdownMenuItem
            key={item.href}
            onClick={() => setIsOpen(false)}
          >
            {item.text}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
};

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Breadcrumb>

      <BreadcrumbItem>
        <BreadcrumbLink href="/">Firebase</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator>
        <Icon icon="lucide:slash" />
      </BreadcrumbSeparator>

      <BreadcrumbItem>
        <BreadcrumbLink asChild><a href='/docs'>Documentation</a></BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator><Icon icon="lucide:slash" /></BreadcrumbSeparator>

      {/* Too more items, show ellipsis to express "collapse" */}
      <BreadcrumbItem>
        <BreadcrumbEllipsis onClick={() => setIsOpen(!isOpen)} className="tw:cursor-pointer" />
        <EnpanededBreadcrumbEllipsis isOpen={isOpen} setIsOpen={setIsOpen} />
      </BreadcrumbItem>

      <BreadcrumbSeparator><Icon icon="lucide:slash" /></BreadcrumbSeparator>

      <BreadcrumbItem>
        <BreadcrumbFinal>Crashlytics</BreadcrumbFinal>
      </BreadcrumbItem>

    </Breadcrumb>
  );
}