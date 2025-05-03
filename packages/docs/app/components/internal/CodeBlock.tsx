import type { ComponentProps, ReactNode, ReactElement } from "react"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Cta } from "#/components/ui/Cta/Cta"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { Icon } from "#/components/ui/Icon/Icon"
import { useState, useEffect } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/Collapsible/Collapsible'
import { track } from "#/helpers/analytics/ga/index.ts"
/**
 * HACK: this is a workaround to fix incompetent of dynamic import capability of Vite in this file.
 * Without this in the first place, Vite can't sure about the dynamic import like:
 * ```
 * import(`./../../${file}?raw`)
 * ```
 * and it'll fail to load the css file for some reason.
 * So having this import at here is just allowing Vite to process and cache,
 * and that will make the dynamic import work for that css file.
 */
import '../../style/core.css?raw';


interface CodeBlockProps extends Omit<ComponentProps<typeof SyntaxHighlighter>, 'children'> {
  showPreviewToggle?: boolean;
  previewVisible?: boolean;
  onTogglePreview?: () => void;
  children: string;
  expandButtonTitle?: string;
  file?: string;
}

export const CodeBlock = ({ id, showPreviewToggle, previewVisible, onTogglePreview, children, expandButtonTitle = 'View Code', file, ...props }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const [codeString, setCodeString] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (file) {
      import(/* @vite-ignore */ `./../../${file}?raw`)
        .then(mod => {
          if (isMounted) setCodeString(mod.default || mod);
        })
        .catch(() => {
          if (isMounted) setCodeString('// Failed to load file');
        });
    } else {
      setCodeString(children as string);
    }
    return () => { isMounted = false; };
  }, [file, children]);

  const handleCopy = async () => {
    if (codeString) {
      track('copy_code', { id });
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const lineCount = (codeString?.match(/\n/g)?.length ?? 0) + 1;
  const shouldExpand = lineCount > 10;

  if (!shouldExpand) {
    // Just show code and copy button
    return (
      <div className="tw:relative tw:overflow-hidden tw:rounded-md">
        <div className="tw:absolute tw:top-2 tw:right-2 tw:z-10 tw:flex tw:gap-2">
          {id && <Cta
            size='sm'
            variant='ghost'
            shapes={['icon']}
            className='tw:shadow-none tw:bg-white tw:text-black '
            onClick={handleCopy}
          >
            <Icon icon={isCopied ? 'lucide:check' : 'lucide:copy'} />
          </Cta>}
        </div>
        <SyntaxHighlighter
          language="tsx"
          style={nightOwl}
          {...props}
          customStyle={{ margin: 0, borderRadius: 0 }}
        >
          {codeString ?? ''}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <Collapsible className="tw:relative tw:overflow-hidden tw:rounded-md" open={isOpened} onOpenChange={setIsOpened}>
      {/* Copy button always top right */}
      <div className="tw:absolute tw:top-2 tw:right-2 tw:z-10 tw:flex tw:gap-2">
        {id && <Cta
          size='sm'
          variant='ghost'
          shapes={['icon']}
          className='tw:shadow-none tw:bg-white tw:text-black'
          onClick={handleCopy}
        >
          <Icon icon={isCopied ? 'lucide:check' : 'lucide:copy'} />
        </Cta>}
        {/* Expand/Collapse button at top right when expanded */}
        {isOpened && (
          <CollapsibleTrigger asChild>
            <Cta variant='ghost' size="sm" className='tw:shadow-none tw:bg-white tw:text-black' onClick={() => id && track('collapse_code', { id })}>
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
            {codeString ?? ''}
          </SyntaxHighlighter>
        </div>
      </CollapsibleContent>
      {/* Gradient overlay and expand button at bottom center when collapsed */}
      {!isOpened && (
        <div className="tw:pointer-events-none tw:absolute tw:inset-x-0 tw:bottom-0 tw:h-16 tw:bg-gradient-to-b tw:from-transparent tw:to-zinc-950/90 tw:rounded-b-md tw:flex tw:items-end tw:justify-center">
          <div className="tw:pb-2 tw:pointer-events-auto">
            <CollapsibleTrigger asChild>
              <Cta variant='ghost' size="sm" className='tw:shadow-none tw:bg-white tw:text-black ' onClick={() => id && track('expand_code', { id })}>
                {expandButtonTitle}
              </Cta>
            </CollapsibleTrigger>
          </div>
        </div>
      )}
    </Collapsible>
  )
}