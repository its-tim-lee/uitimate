import * as ResizablePrimitive from "react-resizable-panels"
import { tv, type VariantProps } from "tailwind-variants"
import React from "react"
import { Icon } from "#/components/ui/Icon/Icon"

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
    handleButton: "tw:z-10 tw:flex tw:h-4 tw:w-3 tw:items-center tw:justify-center tw:rounded-sm tw:border tw:bg-border"
  }
})

const { panelGroup, handle, handleButton } = resizableVariants()

type ResizablePanelGroupProps = React.ComponentProps<typeof ResizablePrimitive.PanelGroup>;
const ResizablePanelGroup = ({
  className,
  ...props
}: ResizablePanelGroupProps) => (
  <ResizablePrimitive.PanelGroup
    className={panelGroup({ className })}
    {...props}
  />
)

type ResizablePanelProps = React.ComponentProps<typeof ResizablePrimitive.Panel>;
const ResizablePanel = ResizablePrimitive.Panel

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

export {
  resizableVariants,
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  type ResizablePanelGroupProps,
  type ResizablePanelProps,
  type ResizableHandleProps
}
