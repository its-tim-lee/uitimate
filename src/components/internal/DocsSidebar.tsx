import data, { type DocTreeItem } from "../../data/site.ts";
import { Badge } from "@/components/ui/Badge/Badge.tsx";

const groupItemsLabel = ($e: DocTreeItem) => {
  return (
    <section className="tw:flex">
      <h4 className="tw:rounded-md tw:py-1 tw:text-sm tw:font-semibold">
        {$e.title}
      </h4>
      {$e.labels.length ? $e.labels.map((t) => <Badge className='tw:text-[#000000] tw:bg-[#adfa1d]'>{t}</Badge>) : ""}
    </section>
  )
}

const groupItem = ($e: DocTreeItem) => {
  const isExternal = !$e.href?.startsWith('\/')
  return (
    <a
      className='tw:relative tw:flex tw:h-8 tw:w-full tw:items-center tw:rounded-lg tw:px-2 tw:after:absolute tw:after:inset-x-0 tw:after:inset-y-[-2px] tw:after:rounded-lg tw:hover:bg-accent tw:hover:text-accent-foreground'
      href={$e.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}>
      {$e.title}
      {$e.labels.length ? $e.labels.map((t) => <Badge className='tw:text-[#000000] tw:bg-[#adfa1d]'>{t}</Badge>) : ""}
    </a>
  )
}
export default function DocsSidebar() {
  return (
    <div className="tw:flex tw:flex-col tw:gap-6">
      {data.docsTree.map(
        lv1Item => (
          <>
            {groupItemsLabel(lv1Item)}
            <nav className="tw:flex tw:flex-col tw:gap-2">
              {lv1Item.items?.map(groupItem)}
            </nav>
          </>
        ))}
    </div>
  );
}
