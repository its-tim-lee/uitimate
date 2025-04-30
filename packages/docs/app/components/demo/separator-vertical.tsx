import { Separator } from "#/components/ui/Separator/Separator"
import { Icon } from "#/components/ui/Icon/Icon"
import { Image } from "#/components/ui/Image/Image"

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-4 not-prose">
      <span className="tw:flex tw:items-center tw:gap-3 tw:px-6">
        <Image
          className='tw:h-[28px]'
          src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png"></Image>
        <Image
          className='tw:h-[18px]'
          src="https://www.gstatic.com/mobilesdk/240926_mobilesdk/workmark_light_grey.svg"></Image>
      </span>
      <Separator />
      <div className="tw:flex tw:items-center tw:gap-6 tw:h-[20px] tw:px-6">
        <span className="tw:flex tw:items-center tw:gap-4">
          <Icon icon='lucide:house'></Icon>
          Project Overview
        </span>
        <Separator orientation="vertical" className='tw:h-ful' />
        <Icon icon='lucide:settings'></Icon>
      </div>
      <Separator />
    </div>
  )
}