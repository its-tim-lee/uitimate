import { ScrollArea } from "#/components/ui/ScrollArea/ScrollArea";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export default () => (
  <ScrollArea type='hover' className="tw:h-72 tw:w-48 tw:rounded-md tw:border">
    <div className="tw:p-4">
      <h4 className="tw:mb-4 tw:text-sm tw:font-medium tw:leading-none">Tags</h4>
      {tags.map((t) => <div key={t} className="tw:my-2 tw:text-sm">{t}</div>)}
    </div>
  </ScrollArea>
)