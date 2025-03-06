import DialogModal from "../../demo/dialog-modal.tsx";
import DialogDemo from "../../demo/dialog-demo.tsx";
import DialogDropdownMenu from "../../demo/dialog-dropdown-menu.tsx";
import DialogLoading from "../../demo/dialog-loading.tsx";
import DialogScroll from "../../demo/dialog-scroll.tsx";

export default {
  title: 'Example/Dialog',
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
  render: () => DialogDemo()
};

export const MODAL = {
  name: 'API / Modal or AlertDialog',
  render: () => DialogModal()
}


export const LOADING = {
  name: 'Scenario / Loading',
  render: () => DialogLoading()
}

export const SCROLL = {
  name: 'Scenario / Scroll',
  render: () => DialogScroll()
}


export const DROPDOWN_MENU = {
  name: 'Scenario / DropdownMenu',
  render: () => DialogDropdownMenu()
}