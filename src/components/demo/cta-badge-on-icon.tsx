import { Cta } from "@/components/ui/Cta/Cta"
import { Icon } from "@/components/ui/Icon/Icon"

export default () => {
  return (
    <>
      <div className='tw:flex tw:flex-col tw:gap-2'>
        {/*
          Some UI lib will even expose one or several props to let you do such "dot" style,
          but it doesn't make sense at all
        */}
        <Cta className='tw:relative ' shapes={["icon"]} variant="ghost" size="lg">
          <Icon icon='lucide:bell' />
          <div className='tw:bg-destructive tw:size-3 tw:absolute tw:right-0 tw:top-0 tw:rounded-full' />
        </Cta>
        <br />

        {/* TBD: this should be included in the Component Introduction page"
          - To implement such badge, which shapes you need? it's small, and it's an icon, so it gonna be `shapes={["icon", "badge"]}`
          - Badge is usually uninteractive, so it should be `muted`
      */}


        <Cta shapes={["icon"]} variant="ghost" size="lg" className='tw:relative'>
          <Icon icon='lucide:bell' />
          <Cta muted shapes={["icon", "badge"]} variant="destructive" className='tw:rounded-full tw:absolute tw:-right-[4px] tw:-top-[4px]'>
            1
          </Cta>
        </Cta>
      </div>
    </>
  )
}