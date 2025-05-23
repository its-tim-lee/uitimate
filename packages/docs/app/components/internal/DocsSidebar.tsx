import { Sidebar } from "#/components/ui/Sidebar/Sidebar.tsx";
import { NavLink, useLocation } from "react-router";
import data, { type DocTreeItem } from "../../data/site.ts";
import { List, ListItem } from "#/components/ui/List/List.tsx";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible.tsx";
import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { DocTreeItemTags } from "#/components/internal/DocTree/DocTreeItemTags.tsx";
import type { ReactNode, JSX } from "react";
import { cn } from "#/helpers/utils.ts";

const isPathActiveOrHasActiveChild = (item: DocTreeItem, currentPath: string): boolean => {
  if (item.href && item.href === currentPath) {
    return true;
  }
  if (item.items && item.items.length > 0) {
    return item.items.some(subItem => isPathActiveOrHasActiveChild(subItem, currentPath));
  }
  return false;
};

const renderTreeItem = (item: DocTreeItem, pathname: string, depth: number = 0): JSX.Element | null => {
  if (item.type === 'link') {
    const isExternal = !item.href?.startsWith('/')
    return (
      <ListItem
        key={item.href}
        className={`${depth > 0 && 'tw:text-xs'} tw:hover:underline tw:rounded-md tw:p-2 tw:px-3 tw:has-[.active]:bg-muted`}
      >
        <NavLink
          className='tw:relative tw:flex tw:w-full tw:items-center'
          to={item.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {item.title} {" "}
          <DocTreeItemTags tags={item.tags} />
        </NavLink>
      </ListItem>
    )
  }
  if (item.type === 'collapsible') {
    const isInitiallyOpen = isPathActiveOrHasActiveChild(item, pathname);
    return (
      <ListItem key={`${item.title}-${depth}`}>
        <Collapsible className='tw:w-full' defaultOpen={isInitiallyOpen}>
          <span className={`tw:flex tw:items-center tw:justify-between tw:p-2 tw:px-3 tw:hover:bg-muted tw:rounded-md ${depth > 0 && 'tw:text-xs '}`}>
            <CollapsibleTrigger className='tw:group tw:flex tw:justify-between tw:w-full'>
              <span className='tw:flex tw:items-center tw:gap-2'>
                {item.title} {" "}
                <DocTreeItemTags tags={item.tags} />
              </span>
              <span className='tw:cursor-pointer'>
                <Icon icon="lucide:chevron-down" className="tw:inline tw:group-data-[state=open]:hidden" />
                <Icon icon="lucide:chevron-up" className="tw:inline tw:group-data-[state=closed]:hidden" />
              </span>
            </CollapsibleTrigger>
          </span>
          <CollapsibleContent className="tw:pt-1">
            {item.items && item.items.length > 0 && (
              <List className={depth > 0 ? '' : ''} indentMargin={5} indentPadding={3}>
                {item.items?.map(subItem => renderTreeItem(subItem, pathname, depth + 1))}
              </List>
            )}
          </CollapsibleContent>
        </Collapsible>
      </ListItem>
    )
  }

  return null;
}

const renderSection = (section: DocTreeItem, pathname: string): JSX.Element => {
  return (
    <div key={section.title}>
      <List className="tw:mb-4">
        {/* Section header as first ListItem */}
        <ListItem className='tw:font-bold tw:p-2 tw:px-3 tw:pl-2'>{section.title}</ListItem>
        {/* Section items with recursive rendering */}
        {section.items?.map(i => renderTreeItem(i, pathname, 0))}
      </List>
    </div>
  );
}

export default function DocsSidebar() {
  const { pathname } = useLocation();
  return (
    <>
      <Sidebar.Mobile>
        <div className="tw:w-full tw:text-sm tw:flex tw:flex-col tw:gap-6 tw:pt-4 tw:px-10 tw:h-svh tw:overflow-y-scroll">
          {data.docsTree.map(s => renderSection(s, pathname))}
        </div>
      </Sidebar.Mobile>
      <Sidebar.Desktop>
        <div className="tw:w-fit tw:text-sm tw:flex tw:flex-col tw:gap-6 tw:pt-4 tw:px-2">
          {data.docsTree.map(s => renderSection(s, pathname))}
        </div>
      </Sidebar.Desktop>
    </>
  );
}
