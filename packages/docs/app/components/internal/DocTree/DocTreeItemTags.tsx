import { Cta } from '#/components/ui/Cta/Cta.tsx'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '#/components/ui/Tooltip/Tooltip.tsx'

type DocTreeItemTagsProps = {
  tags?: {
    root?: string[];
    tutorial?: string[];
  }
}

export function DocTreeItemTags({ tags }: DocTreeItemTagsProps) {
  if (!tags) return null

  const allTags = [...(tags.root || []), ...(tags.tutorial || [])]
  if (allTags.length === 0) return null

  return (
    <div className="tw:flex tw:gap-1 tw:ml-2">
      {allTags.map((tag) => {
        if (tag === 'WIP') {
          return (
            <TooltipProvider key={tag}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Cta
                    shapes={['badge']}
                    size="sm"
                    variant="secondary"
                    className="tw:cursor-help tw:bg-yellow-400 tw:dark:text-black tw:leading-none tw:h-5"
                    asChild
                  >
                    <span>{tag}</span>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="tw:text-lg tw:w-[280px]">We&apos;re working on this doc to make it more friendly to read!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        }
        if (tag === 'ALPHA') {
          return (
            <TooltipProvider key={tag}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Cta
                    shapes={['badge']}
                    size="sm"
                    variant="destructive"
                    className="tw:cursor-help tw:leading-none tw:h-5"
                    asChild
                  >
                    <span>{tag}</span>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="tw:text-lg tw:w-[280px]">It&apos;s still in development and is only meant to be used for early adopters.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        }
        if (tag === 'SEALED') {
          return (
            <TooltipProvider key={tag}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Cta
                    shapes={['badge']}
                    size="sm"
                    className="tw:cursor-help tw:leading-none tw:h-5"
                    asChild
                  >
                    <span>{tag}</span>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="tw:text-lg tw:w-[280px]">
                    This is, in most of time, not meant to be installed manually and directly, but some our components do use this under the hood,
                    so when you install those components, this component will be setup automatically for you.

                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        }
        return (
          <Cta
            key={tag}
            shapes={['badge']}
            size="sm"
            variant="secondary"
            className="tw:h-5 tw:leading-none tw:flex tw:items-center"
          >
            {tag}
          </Cta>
        )
      })}
    </div>
  )
}