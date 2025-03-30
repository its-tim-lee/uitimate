import { Icon } from "@/components/ui/Icon/Icon.tsx";
import { Cta } from "@/components/ui/Cta/Cta.tsx";

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-3 tw:items-center">
      <Cta muted shapes={['badge']} variant="secondary" size="lg" className="tw:cursor-default tw:p-4 tw:font-mono tw:w-[450px] tw:justify-between">
        <span className="tw:px-2">npm install @google/generative-ai</span>
        <Cta shapes={['icon']} variant="ghost" size="sm" className="tw:shadow-none tw:pointer-events-auto">
          <Icon icon='lucide:copy' />
        </Cta>
      </Cta>
    </div>
  )
}