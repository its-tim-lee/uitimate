import { Icon } from "../Icon/Icon.tsx";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ContextMenu.tsx"

export default {
  title: 'Example/ContextMenu',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const DEMO = {
  name: 'DEMO',
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger className="tw:flex tw:h-[150px] tw:w-[300px] tw:items-center tw:justify-center tw:rounded-md tw:border tw:border-dashed tw:text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="tw:w-64">
          <ContextMenuGroup>
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="tw:w-48">
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuLabel inset>Theme</ContextMenuLabel>
          <ContextMenuCheckboxItem checked>Dark</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Light</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="tl">
            <ContextMenuLabel inset>Profile</ContextMenuLabel>
            <ContextMenuRadioItem value="tl">Tim Lee</ContextMenuRadioItem>
            <ContextMenuRadioItem value="pl">Pieter Levels</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
};
