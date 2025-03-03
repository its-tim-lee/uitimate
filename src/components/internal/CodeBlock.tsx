import type { ComponentProps } from "react"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Button } from "../ui/Button/Button"
import { Icon } from "@/components/ui/Icon/Icon"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

export const CodeBlock = (props: ComponentProps<typeof SyntaxHighlighter>) => {
  return (
    <div className='tw:relative'>
      <SyntaxHighlighter language="tsx" style={vscDarkPlus} {...props}>
        {props.children}
      </SyntaxHighlighter>
      <Button size='sm' variant='ghost' className='tw:absolute tw:top-2 tw:right-2 tw:shadow-none tw:bg-transparent tw:text-white tw:dark:text-black'>
        <Icon icon='lucide:copy' />
      </Button>
    </div>
  )
}