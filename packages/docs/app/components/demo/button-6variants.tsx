import { Cta } from "@/components/ui/Cta/Cta.tsx";

export default () => (
  <div className='tw:flex tw:gap-6'>
    <div className="tw:flex tw:flex-col tw:gap-2">
      <h1 className="tw:text-center">Button</h1>
      <Cta variant='primary'>Primary</Cta>
      <Cta variant='secondary'>Secondary</Cta>
      <Cta variant='destructive'>Destructive</Cta>
      <Cta variant='outline'>Outline</Cta>
      <Cta variant='ghost'>Ghost</Cta>
      <Cta variant='link'>Link</Cta>
    </div>
    <div className="tw:flex tw:flex-col tw:gap-2">
      <h1 className="tw:text-center">Badge</h1>
      <Cta variant='primary' shapes={['badge']}>Primary</Cta>
      <Cta variant='secondary' shapes={['badge']}>Secondary</Cta>
      <Cta variant='destructive' shapes={['badge']}>Destructive</Cta>
      <Cta variant='outline' shapes={['badge']}>Outline</Cta>
      <Cta variant='ghost' shapes={['badge']}>Ghost</Cta>
      <Cta variant='link' shapes={['badge']}>Link</Cta>
    </div>
  </div>
)