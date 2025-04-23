import type { ComponentProps, ReactNode } from "react"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Cta } from "#/components/ui/Cta/Cta"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { Icon } from "#/components/ui/Icon/Icon"
import { useState } from "react"

interface CodeBlockProps extends Omit<ComponentProps<typeof SyntaxHighlighter>, 'children'> {
  showPreviewToggle?: boolean;
  previewVisible?: boolean;
  onTogglePreview?: () => void;
  children: ReactNode;
}

export const CodeBlock = ({ showPreviewToggle, previewVisible, onTogglePreview, children, ...props }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    if (typeof props.children === 'string') {
      await navigator.clipboard.writeText(props.children)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  // Ensure children is a string for SyntaxHighlighter
  const content = typeof children === 'string' ? children : String(children || '')

  return (
    <div className='tw:relative'>
      <SyntaxHighlighter language="tsx" style={vscDarkPlus} {...props}>
        {content}
      </SyntaxHighlighter>
      <div className="tw:absolute tw:top-2 tw:right-2 tw:flex tw:gap-2">
        {showPreviewToggle && (
          <Cta
            size='sm'
            variant='ghost'
            shapes={['icon']}
            className='tw:shadow-none tw:bg-transparent tw:text-white tw:dark:text-black'
            onClick={onTogglePreview}
          >
            <Icon icon="lucide:eye" />
          </Cta>
        )}
        <Cta
          size='sm'
          variant='ghost'
          shapes={['icon']}
          className='tw:shadow-none tw:bg-transparent tw:text-white tw:dark:text-black'
          onClick={handleCopy}
        >
          <Icon icon={isCopied ? 'lucide:check' : 'lucide:copy'} />
        </Cta>
      </div>
    </div>
  )
}