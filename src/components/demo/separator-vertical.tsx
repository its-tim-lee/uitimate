import { Separator } from "@/components/ui/Separator/Separator"
import IconV2 from "../ui/Icon/IconV2"
import { Image } from "@/components/ui/Image/Image"

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-4">
      <span className="tw:flex tw:items-center tw:gap-3">
        <Image
          className='tw:h-[28px]'
          src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png"></Image>
        <Image
          className='tw:h-[18px]'
          src="https://www.gstatic.com/mobilesdk/240926_mobilesdk/workmark_light_grey.svg"></Image>
      </span>
      <Separator />
      <div className="tw:flex tw:items-center tw:gap-6 tw:h-[20px]">
        <span className="tw:flex tw:items-center tw:gap-4">
          <IconV2 icon='lucide:house'></IconV2>
          Project Overview
        </span>
        <Separator orientation="vertical" className='tw:h-ful' />
        <IconV2 icon='lucide:settings'></IconV2>
      </div>
    </div>
  )
}