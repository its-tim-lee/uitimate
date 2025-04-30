import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/Avatar/Avatar";
import { Cta } from "#/components/ui/Cta/Cta";

export default () => <div className="tw:flex tw:flex-col tw:items-start not-prose">
  <Cta variant="secondary" shapes={['badge']} size='lg' className='tw:rounded-full tw:py-0 tw:pl-0'>
    <Avatar>
      <AvatarImage src='https://bitl.to/44ls' alt="@itistimlee" />
      <AvatarFallback>TL</AvatarFallback>
    </Avatar>
    Tim Lee
  </Cta>
  <br />
  <span>Used by {''} <Cta muted variant="secondary" shapes={['badge']} className='tw:rounded-full'>73.3k</Cta></span>

</div>
