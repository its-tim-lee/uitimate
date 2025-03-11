import { Cta } from "../ui/Cta/Cta";
import { Icon } from "../ui/Icon/Icon";

export default () => {
  return <div className="tw:flex tw:flex-col tw:gap-4">
    <div className="tw:flex tw:gap-2 tw:items-center">
      It can be a button: {''}
      <Cta variant="secondary">Download</Cta>
    </div>
    <div className="tw:flex tw:gap-2 tw:items-center">
      or be a badge: {''}
      <Cta muted variant="outline" shapes={['badge']} className='tw:text-green-500'>Latest</Cta>
    </div>
    <div className="tw:flex tw:gap-2 tw:items-center">
      or a toggle: {''}
      <Cta shapes={['icon']} size="sm" defaultPressed>
        <Icon icon="lucide:heart" className='tw:fill-red-500!' />
      </Cta>
    </div>
  </div>
}