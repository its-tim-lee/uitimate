import type { ComponentProps, ReactNode, ReactElement } from "react"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Cta } from "#/components/ui/Cta/Cta"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { Icon } from "#/components/ui/Icon/Icon"
import { useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/Collapsible/Collapsible'
import { cn } from "#/helpers/utils"

interface CodeBlockProps extends Omit<ComponentProps<typeof SyntaxHighlighter>, 'children'> {
  showPreviewToggle?: boolean;
  previewVisible?: boolean;
  onTogglePreview?: () => void;
  children: string;
  expandButtonTitle?: string;
}

export const CodeBlock = ({ showPreviewToggle, previewVisible, onTogglePreview, children, expandButtonTitle = 'View Code', ...props }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  const handleCopy = async () => {
    const codeToCopy = children as string;
    if (codeToCopy) {
      await navigator.clipboard.writeText(codeToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  }

  const content = children as string;
  const lineCount = (content.match(/\n/g)?.length ?? 0) + 1;
  const shouldExpand = lineCount > 10;

  if (!shouldExpand) {
    // Just show code and copy button
    return (
      <div className="tw:relative tw:overflow-hidden tw:rounded-md">
        <div className="tw:absolute tw:top-2 tw:right-2 tw:z-10 tw:flex tw:gap-2">
          <Cta
            size='sm'
            variant='ghost'
            shapes={['icon']}
            className='tw:shadow-none tw:bg-white tw:text-black '
            onClick={handleCopy}
          >
            <Icon icon={isCopied ? 'lucide:check' : 'lucide:copy'} />
          </Cta>
        </div>
        <SyntaxHighlighter
          language="tsx"
          style={nightOwl}
          {...props}
          customStyle={{ margin: 0, borderRadius: 0 }}
        >
          {content}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <Collapsible className="tw:relative tw:overflow-hidden tw:rounded-md" open={isOpened} onOpenChange={setIsOpened}>
      {/* Copy button always top right */}
      <div className="tw:absolute tw:top-2 tw:right-2 tw:z-10 tw:flex tw:gap-2">
        <Cta
          size='sm'
          variant='ghost'
          shapes={['icon']}
          className='tw:shadow-none tw:bg-white tw:text-black'
          onClick={handleCopy}
        >
          <Icon icon={isCopied ? 'lucide:check' : 'lucide:copy'} />
        </Cta>
        {/* Expand/Collapse button at top right when expanded */}
        {isOpened && (
          <CollapsibleTrigger asChild>
            <Cta variant='ghost' size="sm" className='tw:shadow-none tw:bg-white tw:text-black '>
              Collapse
            </Cta>
          </CollapsibleTrigger>
        )}
      </div>
      {/* Code block content */}
      <CollapsibleContent forceMount className={isOpened ? '' : 'tw:max-h-32 tw:overflow-hidden'}>
        <div className={isOpened ? '' : 'tw:[&_pre]:overflow-hidden'}>
          <SyntaxHighlighter
            language="tsx"
            style={nightOwl}
            {...props}
            customStyle={{ margin: 0, borderRadius: 0 }}
          >
            {content}
          </SyntaxHighlighter>
        </div>
      </CollapsibleContent>
      {/* Gradient overlay and expand button at bottom center when collapsed */}
      {!isOpened && (
        <div className="tw:pointer-events-none tw:absolute tw:inset-x-0 tw:bottom-0 tw:h-16 tw:bg-gradient-to-b tw:from-transparent tw:to-zinc-950/90 tw:rounded-b-md tw:flex tw:items-end tw:justify-center">
          <div className="tw:pb-2 tw:pointer-events-auto">
            <CollapsibleTrigger asChild>
              <Cta variant='ghost' size="sm" className='tw:shadow-none tw:bg-white tw:text-black '>
                {expandButtonTitle}
              </Cta>
            </CollapsibleTrigger>
          </div>
        </div>
      )}
    </Collapsible>
  )
}