import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "#/components/ui/Resizable/Resizable.tsx"

export default () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="tw:min-h-[200px] tw:max-w-md tw:rounded-lg tw:border tw:md:min-w-[450px]">
      <ResizablePanel defaultSize={25}>
        <div className="tw:font-semibold tw:flex tw:h-full tw:items-center tw:justify-center tw:p-6">Sidebar</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="tw:flex tw:h-full tw:items-center tw:justify-center tw:p-6 tw:font-semibold">Content</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}