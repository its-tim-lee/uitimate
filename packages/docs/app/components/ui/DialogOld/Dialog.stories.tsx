import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "#/components/ui/DropdownMenu/DropdownMenu";
import { Button } from "#/components/ui/Button/Button.tsx"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "./Dialog.tsx"
import { useState } from "react";
import { Heading } from "../Heading/Heading.tsx";
import DialogDemo from "../../demo/dialog-demo.tsx";
import DialogModal from "../../demo/dialog-modal.tsx";
import { Badge } from "../Badge/Badge.tsx";
import { Icon } from "../Icon/Icon.tsx";
import { Separator } from '#/components/ui/Separator/Separator.tsx';
import { Input } from "../Input/Input.tsx";
import DialogDropdownMenu from "../../demo/dialog-dropdown-menu.tsx";

/**
 * AI relevant usage note:
 *
 * While the code of dialog content can be generated from Builder,
 * we need to manually transfer the code to use the syntax of our dialog APIs,
 * cuz currently, there's no better (ie., reliable and fast) way than manual work.
 */
export default {
  title: 'Example/DialogOld',
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
  render: () => <DialogDemo />
};


export const API_MODAL = {
  name: 'API / MODAL',
  render: () => <DialogModal />
};

// TBD: big issue: once the dialog is opened then closed, now, the trigger will not work anymore
// TBD: doc: don't fall into the trap of all the way down of composition to build a component,
// sometimes it'd only make the code more complex and harder to maintain (ie., you don't need <DialogTrigger> sometimes)
// TBD: it seems to me that Radix's Dialog has many issues.
export const SCENARIO_DROPDOWN_MENU = {
  name: 'SCENARIO / DROPDOWN MENU',
  render: () => <DialogDropdownMenu />
};


export const SCENARIO_DROPDOWN_MENU_FAIL = {
  name: 'SCENARIO / DROPDOWN MENU FAILED',
  render: () => {
    return (
      <>
        <Badge variant='secondary' size='md' className='tw:outline-[#d1d9e0] tw:outline-1 tw:py-1.5 tw:rounded-r-none'>
          <Icon icon='lucide:star' className='tw:text-lg'></Icon>
          {' '} Star {' '}
          <Badge variant='secondary' size='sm' className='tw:rounded-full tw:bg-[#818b981f]'>82.2k</Badge>
        </Badge>
        <Badge mode='icon' variant='outline' size='lg' className='tw:bg-red-500'>
          <Icon icon='icon-park-solid:down-one' className='tw:text-lg'></Icon>
        </Badge>
        {/*
        <div className='tw:flex tw:rounded-md tw:outline-[#d1d9e0] tw:outline-1'>

          123
        </div> */}
      </>
    )
  }
};

// TODO: build anotehr variant with Context Menu and Dropdown, see: https://ui.shadcn.com/docs/components/dialog