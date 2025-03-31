
import { NavLink } from "react-router";
import data, { type DocTreeItem } from "../../data/site.ts";
import { Badge } from "@/components/ui/Badge/Badge.tsx";
import { List, ListItem } from "@/components/ui/List/List.tsx";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible/Collapsible.tsx";
import { Icon } from "@/components/ui/Icon/Icon.tsx";
import type { ReactNode, JSX } from "react";

const renderTreeItem = (item: DocTreeItem, depth: number = 0): JSX.Element | null => {
  if (item.type === 'link') {
    const isExternal = !item.href?.startsWith('\/')
    return (
      <ListItem
        key={item.href}
        className={`${depth > 0 && 'tw:text-xs'} tw:hover:bg-muted tw:hover:rounded-md tw:p-2 tw:px-3 `}
      >
        <NavLink
          className='tw:relative tw:flex tw:w-full tw:items-center tw:justify-between'
          to={item.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {item.title}
        </NavLink>
      </ListItem>
    )
  }
  if (item.type === 'collapsible') {
    return (
      <ListItem key={`${item.title}-${depth}`}>
        <Collapsible className='tw:w-full'>
          <span className={`tw:flex tw:items-center tw:justify-between tw:p-2 tw:px-3 tw:hover:bg-muted tw:rounded-md ${depth > 0 && 'tw:text-xs '}`}>
            <CollapsibleTrigger className='tw:group tw:flex tw:justify-between tw:w-full'>
              {item.title}{" "}
              <span>
                <Icon icon="lucide:chevron-down" className="tw:inline tw:group-data-[state=open]:hidden" />
                <Icon icon="lucide:chevron-up" className="tw:inline tw:group-data-[state=closed]:hidden" />
              </span>
            </CollapsibleTrigger>
          </span>
          <CollapsibleContent className="tw:pt-1">
            {item.items && item.items.length > 0 && (
              <List className={depth > 0 ? '' : ''} indentMargin={5} indentPadding={3}>
                {item.items?.map(subItem => renderTreeItem(subItem, depth + 1))}
              </List>
            )}
          </CollapsibleContent>
        </Collapsible>
      </ListItem>
    )
  }

  return null;
}

const renderSection = (section: DocTreeItem): JSX.Element => {
  return (
    <div key={section.title}>
      <List className="tw:mb-4">
        {/* Section header as first ListItem */}
        <ListItem className='tw:font-bold tw:p-2 tw:px-3 tw:pl-2'>{section.title}</ListItem>
        {/* Section items with recursive rendering */}
        {section.items?.map(i => renderTreeItem(i, 0))}
      </List>
    </div>
  );
}

export default function DocsSidebar() {
  return (
    <div className="tw:text-sm tw:flex tw:flex-col tw:gap-6">
      {data.docsTree.map(s => renderSection(s))}
    </div>
  );
}
