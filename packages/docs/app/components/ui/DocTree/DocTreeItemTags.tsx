import { Cta } from '../Cta/Cta'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../Tooltip/Tooltip'

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
              <Tooltip>
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
                  <p>We&apos;re working on this doc to make it more friendly to read!</p>
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