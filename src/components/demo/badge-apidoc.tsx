import { Badge } from "@/components/ui/Badge/Badge.tsx";
export default () => {
  return (
    <section className="tw:flex tw:flex-col tw:gap-2 tw:w-3xl">
      <header className="tw:flex tw:gap-3">
        <span className="tw:text-lg tw:font-bold">model</span>
        <div className="tw:flex tw:gap-2">
          <Badge variant='secondary' size='sm'>string</Badge>
          <Badge variant='destructive' size='sm' >Required</Badge>
        </div>
      </header>
      <p className='tw:text-md tw:text-foreground/50'>
        ID of the model to use. Only <Badge variant='secondary' size='sm'>whisper-1</Badge> (which is powered by our open source Whisper V2 model) is currently available.
      </p>
    </section>
  )
}