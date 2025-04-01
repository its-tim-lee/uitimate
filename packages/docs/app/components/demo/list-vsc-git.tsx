import { Collapsible, CollapsibleContent } from "#/components/ui/Collapsible/Collapsible.tsx";
import { CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible.tsx";
import { Cta } from "#/components/ui/Cta/Cta.tsx";
import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { List, ListItem } from "#/components/ui/List/List.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from '#/components/ui/Tooltip/Tooltip.tsx';
import React from 'react';

// Define the file system node type
type FileSystemNode = {
  name: string;
  type: 'file' | 'folder' | 'section';
  children?: FileSystemNode[];
  modified?: boolean;
  deleted?: boolean;
  icon: string; // Custom icon override (now required)
};

// File structure based on the provided image
const fileStructure: FileSystemNode[] = [
  {
    name: 'Staged Changes',
    type: 'section',
    icon: '',
    children: [
      {
        name: 'src',
        type: 'folder',
        icon: 'vscode-icons:folder-type-src-opened',
        children: [
          {
            name: 'components',
            type: 'folder',
            icon: 'flat-color-icons:folder',
            children: [
              {
                name: 'builder/pricing',
                type: 'folder',
                icon: 'flat-color-icons:folder',
                children: [
                  {
                    name: 'components',
                    type: 'folder',
                    icon: 'flat-color-icons:folder',
                    children: [
                      {
                        name: 'PlanAccordion.tsx',
                        type: 'file',
                        icon: 'mdi:react',
                        deleted: true
                      }
                    ]
                  },
                  {
                    name: 'data',
                    type: 'folder',
                    icon: 'flat-color-icons:folder',
                    children: [
                      {
                        name: 'plans.ts',
                        type: 'file',
                        icon: 'fluent:code-ts-16-filled',
                        deleted: true
                      },
                      {
                        name: 'types.ts',
                        type: 'file',
                        icon: 'fluent:code-ts-16-filled',
                        deleted: true
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Changes',
    type: 'section',
    icon: ''
  }
];

// Recursive file/folder component
const FileSystemItem: React.FC<{
  node: FileSystemNode;
  indentMargin?: number;
  indentPadding?: number;
}> = ({ node, indentMargin = 5, indentPadding = 3 }) => {
  // For section headers, render a simple header
  if (node.type === 'section') {
    return (
      <ListItem className='tw:text-sm tw:text-muted-foreground tw:p-2'>
        {node.name}
        {node.children && node.children.length > 0 && (
          <List indentMargin={indentMargin} indentPadding={indentPadding}>
            {node.children.map((child, index) => (
              <FileSystemItem
                key={index}
                node={child}
                indentMargin={indentMargin}
                indentPadding={indentPadding}
              />
            ))}
          </List>
        )}
      </ListItem>
    );
  }
  return (
    <ListItem className='tw:rounded-md'>
      {node.type === 'folder' ? (
        <Collapsible className='tw:w-full'>
          <Cta
            shapes={['badge']}
            defaultPressed={false}
            variant='ghost'
            unpressedOnBlur
            wontUnpressedOnClick
            className='tw:w-full tw:group/cta tw:outline-primary/50 tw:-outline-offset-2 tw:data-[state=on]:outline-2 tw:relative tw:justify-between tw:bg-transparent tw:hover:bg-muted tw:py-0 tw:px-1'
          >
            <CollapsibleTrigger className='tw:peer' asChild>
              <span>
                <span className='tw:absolute tw:w-full tw:right-0 tw:top-0 tw:h-full' />
                <span className='tw:flex tw:items-center tw:gap-2'>
                  <Icon icon='lucide:chevron-right' data-trigger className='tw:group-data-[state=on]/cta:rotate-90'></Icon>
                  <Icon icon={node.icon}></Icon>
                  <span>{node.name}</span>
                </span>
              </span>
            </CollapsibleTrigger>
            <span className='tw:flex tw:items-center tw:peer-hover:[&_[data-toolkit]]:block'>
              <Tooltip delayDuration={700}>
                <TooltipTrigger asChild>
                  <Cta asChild data-toolkit shapes={['icon', 'badge']} size='lg' variant="ghost" className='tw:bg-transparent tw:hidden tw:group-data-[state=on]/cta:block'>
                    <Icon icon='lucide:minus' className='tw:size-6!'></Icon>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>Unstaged changes</TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={700}>
                <TooltipTrigger asChild>
                  <Cta asChild shapes={['icon', 'badge']} size='lg' variant="ghost" className='tw:bg-transparent'>
                    <Icon icon='lucide:dot' className='tw:size-10! tw:text-cyan-200'></Icon>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  Add a page inside
                </TooltipContent>
              </Tooltip>
            </span>
          </Cta>
          {node.children && node.children.length > 0 && (
            <CollapsibleContent>
              <List indentMargin={indentMargin} indentPadding={indentPadding}>
                {node.children.map((child, index) => (
                  <FileSystemItem
                    key={index}
                    node={child}
                    indentMargin={indentMargin}
                    indentPadding={indentPadding}
                  />
                ))}
              </List>
            </CollapsibleContent>
          )}
        </Collapsible>
      ) : (
        // Render a file
        <div className='tw:flex tw:items-center tw:justify-between tw:px-1 tw:py-2 tw:hover:bg-muted tw:rounded-md'>
          <span className='tw:flex tw:items-center tw:gap-2 tw:justify-start'>
            <Icon icon={node.deleted ? 'lucide:trash-2' : node.icon} className={node.deleted ? 'tw:text-red-500' : ''} />
            <span className={node.deleted ? 'tw:text-red-500 tw:line-through' : ''}>{node.name}</span>
          </span>
          {node.modified && (
            <span className='tw:text-sm tw:text-muted-foreground'>Modified</span>
          )}
        </div>
      )}
    </ListItem>
  );
};

export default () => {
  const indentMargin = 5;
  const indentPadding = 3;
  return (
    <div className="tw:w-[500px]">
      {fileStructure.map((section, index) => (
        <List
          key={index}
          className={index === 0 ? 'tw:bg-muted/50' : ''}
          indentMargin={indentMargin}
          indentPadding={indentPadding}
        >
          <FileSystemItem
            node={section}
            indentMargin={indentMargin}
            indentPadding={indentPadding}
          />
        </List>
      ))}
    </div>
  );
};