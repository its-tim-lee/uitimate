import { Suspense, type HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { Button } from "#/components/ui/Button/Button"
import { Icon } from "#/components/ui/Icon/Icon"
type PreviewBlockProps = HTMLAttributes<HTMLDivElement> & {
  toggleCodeBlock?: () => void
}
export default ({ children, className, toggleCodeBlock, ...props }: PreviewBlockProps) => {
  return (
    <div className={twMerge('tw:relative tw:flex tw:justify-center tw:items-center tw:w-full tw:p-15 tw:rounded-[8px] tw:border tw:border-solid tw:border-zinc-200', className)} {...props}>
      {/* FIXME: For aspect-ratio, it'd overlap the container */}
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
      <Button variant="ghost" size="sm" onClick={toggleCodeBlock} className='tw:shadow-none tw:absolute tw:top-2 tw:right-2'>
        <Icon icon="lucide:code-xml" />
      </Button>
    </div>
  )
}