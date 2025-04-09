import DialogModal from "../../demo/dialog-modal.tsx";
import DialogDemo from "../../demo/dialog-demo.tsx";
import DialogDropdownMenu from "../../demo/dialog-dropdown-menu.tsx";
import DialogLoading from "../../demo/dialog-loading.tsx";
import DialogScroll from "../../demo/dialog-scroll.tsx";
import DialogRemoveAppFromProject from "../../demo/form-remove-app-from-project.tsx";
export default {
  title: 'Example/Dialog',
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

export const REMOVE_APP_FROM_PROJECT = {
  name: 'Showcase / DialogRemoveAppFromProject',
  render: () => DialogRemoveAppFromProject()
}