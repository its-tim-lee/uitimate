import * as ResizablePrimitive from "@uitimate/lib-resizable"
import { tv, type VariantProps } from "tailwind-variants"
import React from "react"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import { casing } from "#/helpers/utils.ts"

const resizableVariants = tv({
  slots: {
    panelGroup: "tw:flex tw:h-full tw:w-full tw:data-[panel-group-direction=vertical]:flex-col",
    handle: [
      "tw:relative tw:flex tw:w-px tw:items-center tw:justify-center tw:bg-border",
      "tw:after:absolute tw:after:inset-y-0 tw:after:left-1/2 tw:after:w-1 tw:after:-translate-x-1/2",
      "tw:focus-visible:outline-hidden tw:focus-visible:ring-1 tw:focus-visible:ring-ring tw:focus-visible:ring-offset-1",
      "tw:data-[panel-group-direction=vertical]:h-px",
      "tw:data-[panel-group-direction=vertical]:w-full",
      "tw:data-[panel-group-direction=vertical]:after:left-0",
      "tw:data-[panel-group-direction=vertical]:after:h-1",
      "tw:data-[panel-group-direction=vertical]:after:w-full",
      "tw:data-[panel-group-direction=vertical]:after:-translate-y-1/2",
      "tw:data-[panel-group-direction=vertical]:after:translate-x-0",
      "tw:[&[data-panel-group-direction=vertical]>div]:rotate-90"
    ],
    handleButton: "tw:z-10 tw:flex tw:h-4 tw:w-3 tw:items-center tw:justify-center tw:rounded-sm tw:border tw:bg-border",
    panel: ""
  }
})

const { panelGroup, handle, handleButton, panel } = resizableVariants()

type ResizablePanelGroupProps = React.ComponentProps<typeof ResizablePrimitive.PanelGroup>;
const ResizablePanelGroup = ({
  className,
  ...props
}: ResizablePanelGroupProps) => (
  <ResizablePrimitive.PanelGroup
    className={panelGroup({ className })}
    data-tag={casing.kebabCase(ResizablePanelGroup.displayName)}
    {...props}
  />
)

type ResizablePanelProps = React.ComponentProps<typeof ResizablePrimitive.Panel>;
const ResizablePanel = ({
  className,
  ...props
}: ResizablePanelProps) => (
  <ResizablePrimitive.Panel
    className={panel({ className })}
    data-tag={casing.kebabCase(ResizablePanel.displayName)}
    {...props}
  />
)

type ResizableHandleProps = React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
};
const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) => (
  <ResizablePrimitive.PanelResizeHandle
    className={handle({ className })}
    data-tag={casing.kebabCase(ResizableHandle.displayName)}
    {...props}
  >
    {withHandle && (
      <div className={handleButton()}>
        <Icon icon='lucide:grip-vertical' className="tw:h-2.5 tw:w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

ResizablePanelGroup.displayName = "ResizablePanelGroup"
ResizablePanel.displayName = "ResizablePanel"
ResizableHandle.displayName = "ResizableHandle"

namespace Type {
  export type ResizablePanelGroup = typeof ResizablePanelGroup;
  export type ResizablePanel = typeof ResizablePanel;
  export type ResizableHandle = typeof ResizableHandle;
}

export * from "@uitimate/lib-resizable"
export {
  resizableVariants,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  type Type
}
