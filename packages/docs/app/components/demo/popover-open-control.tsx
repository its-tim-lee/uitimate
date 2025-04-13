import { Popover, PopoverContent, PopoverTrigger } from "#/components/ui/Popover/Popover"
import { Cta } from "#/components/ui/Cta/Cta"

export default () => {
  return (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Cta variant="outline">Open popover</Cta>
      </PopoverTrigger>
      <PopoverContent onInteractOutside={e => console.log('clicked outside!')}><h1>Press ESC to close me</h1></PopoverContent>
    </Popover>
  )
}