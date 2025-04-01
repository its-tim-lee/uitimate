import { Textarea } from "#/components/ui/Textarea/Textarea"

export default () => (
  <Textarea
    className='tw:w-[400px] tw:max-h-[250px] tw:rounded-2xl tw:p-4 tw:resize-none'
    placeholder="Ask anything..."
    autoFocus
  />
)