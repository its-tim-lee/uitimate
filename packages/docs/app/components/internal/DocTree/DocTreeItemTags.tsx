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

  // Mapping for special tags
  const tagConfig: Record<string, {
    variant?: string
    className?: string
    tooltip?: string
  }> = {
    WIP: {
      variant: 'secondary',
      className: 'tw:cursor-help tw:bg-yellow-400 tw:dark:text-black tw:leading-none tw:h-5',
      tooltip: `This doc is still in construction to be more friendly to read.`,
    },
    ALPHA: {
      variant: 'destructive',
      className: 'tw:cursor-help tw:leading-none tw:h-5',
      tooltip: `It's still in development and is only meant to be used for early adopters.`,
    },
    SEALED: {
      className: 'tw:cursor-help tw:leading-none tw:h-5',
      tooltip: `This is, in most of time, not meant to be installed manually and directly, but some our components do use this under the hood, so when you install those components, this component will be setup automatically for you.`,
    },
  }

  return (
    <div className="tw:flex tw:gap-1 tw:ml-2">
      {allTags.map((tag) => {
        const config = tagConfig[tag]
        if (config) {
          return (
            <TooltipProvider key={tag}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Cta
                    shapes={['badge']}
                    size="sm"
                    variant={config.variant as any}
                    className={config.className}
                    asChild
                  >
                    <span>{tag}</span>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="tw:text-lg tw:w-[280px]">{config.tooltip}</p>
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