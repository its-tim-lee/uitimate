import { Cta } from "#/components/ui/Cta/Cta.tsx";
import { Icon } from "#/components/ui/Icon/Icon.tsx";

export default () => {
  return <div className="tw:flex tw:flex-col tw:gap-4">
    <div className="tw:flex tw:gap-2 tw:items-center">
      It can be a button: {''}
      <Cta>Download</Cta>
    </div>
    <div className="tw:flex tw:gap-2 tw:items-center">
      or be a badge: {''}
      <Cta muted variant="secondary" shapes={['badge']} className='tw:text-green-500'>Latest</Cta>
    </div>
    <div className="tw:flex tw:gap-2 tw:items-center">
      or a toggle: {''}
      <Cta shapes={['icon']} variant="outline" size="sm" defaultPressed>
        <Icon icon="lucide:heart" className='tw:fill-red-500!' />
      </Cta>
    </div>
  </div>
}