import DialogModalA from "#/components/demo/dialog-modal-a.tsx";
import DialogModal from "#/components/demo/dialog-alert.tsx";
import DialogDemo from "#/components/demo/dialog-demo.tsx";
import DialogLoading from "#/components/demo/dialog-loading.tsx";
import DialogScroll from "#/components/demo/dialog-scroll.tsx";
import DialogRemoveAppFromProject from "#/components/demo/form-remove-app-from-project.tsx";
import DialogOptionalOverlay from "#/components/demo/dialog-optional-overlay.tsx";
import type { Meta } from "@storybook/react";
export default {
  title: 'Example/Dialog',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => DialogDemo()
};

export const OPTIONAL_OVERLAY = {
  name: 'Scenario / Optional Overlay',
  render: () => DialogOptionalOverlay()
}

export const MODAL = {
  name: 'AlertDialog',
  render: () => DialogModal()
}

export const MODAL_A = {
  name: 'Modal',
  render: () => DialogModalA()
}

export const LOADING = {
  name: 'Scenario / Loading',
  render: () => DialogLoading()
}

export const SCROLL = {
  name: 'Scenario / Scroll',
  render: () => DialogScroll()
}

export const REMOVE_APP_FROM_PROJECT = {
  name: 'Showcase / DialogRemoveAppFromProject',
  render: () => DialogRemoveAppFromProject()
}