import { Cta } from "#/components/ui/Cta/Cta.tsx";

export default () => {
  return (
    <section className="tw:flex tw:flex-col tw:gap-2 tw:w-3xl">
      <header className="tw:flex tw:gap-3">
        <span className="tw:text-lg tw:font-bold">model</span>
        <div className="tw:flex tw:gap-2">
          <Cta muted variant='secondary' size='sm' shapes={['badge']}>string</Cta>
          <Cta muted variant='destructive' size='sm' shapes={['badge']}>Required</Cta>
        </div>
      </header>
      <p className='tw:text-md tw:text-foreground/50'>
        ID of the model to use. Only <Cta muted variant='secondary' size='sm' shapes={['badge']}>whisper-1</Cta> (which is powered by our open source Whisper V2 model) is currently available.
      </p>
    </section>
  )
}