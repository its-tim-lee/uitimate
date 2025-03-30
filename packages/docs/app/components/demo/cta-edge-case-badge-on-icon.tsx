import { Cta } from "@/components/ui/Cta/Cta"
import { Icon } from "@/components/ui/Icon/Icon"

export default () => {
  return (
    <>
      <div className='tw:flex tw:flex-col tw:gap-2'>
        {/*
          We use to force style any children in Cta to align with the same style as the parent Cta,
          but that approach will have styling issue when implementing the following UI case;
          and that's why we choose to make the "number-badge" as a sibling of the parent Cta to workaround,
          but such workaround will have another styling issue when the entire Cta is in a flex-col layout.
          So overall speaking, force-style-children-to-match-parent-style is bad.
        */}
        <span className='tw:relative'>
          <Cta shapes={["icon"]} variant="ghost" size="lg">
            <Icon icon='lucide:bell'></Icon>
          </Cta>
          <Cta muted shapes={["icon", "badge"]} variant="destructive" className='tw:rounded-full tw:absolute tw:right-0 tw:top-0'>
            1
          </Cta>
        </span>
        {/*
          Ideally, this is the right, initutive approach and will have less problem if we dont implement force-style-children-to-match-parent-style in Cta source code
        */}
        <Cta shapes={["icon"]} variant="ghost" size="lg" className='tw:relative'>
          <Icon icon='lucide:bell'></Icon>
          <Cta muted shapes={["icon", "badge"]} variant="destructive" className='tw:rounded-full tw:absolute tw:-right-[4px] tw:-top-[4px]'>
            1
          </Cta>
        </Cta>
      </div>
    </>
  )
}