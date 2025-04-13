import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { Cta } from "#/components/ui/Cta/Cta.tsx";

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-3 tw:items-center">
      <section className='tw:flex tw:gap-3 tw:items-center'>
        <code className='tw:code'>{`shapes={[]}`}</code>
        <Cta>
          <Icon icon='lucide:plus' />
        </Cta>
      </section>

      <section className='tw:flex tw:gap-3 tw:items-center'>
        <code className='tw:code'>{`shapes={['badge']}`}</code>
        <Cta shapes={['badge']}>
          <Icon icon='lucide:plus' />
        </Cta>
      </section>

      <section className='tw:flex tw:gap-3 tw:items-center'>
        <code className='tw:code'>{`shapes={['icon']}`}</code>
        <Cta shapes={['icon']}>
          <Icon icon='lucide:plus' />
        </Cta>
      </section>

      <section className='tw:flex tw:gap-3 tw:items-center'>
        <code className='tw:code'>{`shapes={['icon', 'badge']}`}</code>
        <Cta shapes={['icon', 'badge']}>
          <Icon icon='lucide:plus' />
        </Cta>
      </section>

    </div>
  )
}