import { Cta } from "#/components/ui/Cta/Cta"
import { Icon } from "#/components/ui/Icon/Icon"

export default () => {
  return (
      <div className='tw:flex tw:gap-2'>
        {/*
          Some UI lib will even expose one or several props to let you do such "dot" style,
          but it doesn't make sense: one is such UI requirement is not that common, and will not be used a lots in a design,
          second, based on the first point, the "dot" can be simply implemented using Tailwind.
        */}
        <Cta className='tw:relative ' shapes={["icon"]} variant="ghost" size="lg">
          <Icon icon='lucide:bell' />
          <div className='tw:bg-destructive tw:size-3 tw:absolute tw:right-0 tw:top-0 tw:rounded-full' />
        </Cta>
        <br />
        <Cta shapes={["icon"]} variant="ghost" size="lg" className='tw:relative'>
          <Icon icon='lucide:bell' />
          <Cta muted shapes={["icon", "badge"]} variant="destructive" className='tw:rounded-full tw:absolute tw:-right-[4px] tw:-top-[4px]'>
            1
          </Cta>
        </Cta>
      </div>
  )
}