import { Cta } from "../ui/Cta/Cta";
import { Icon } from "../ui/Icon/Icon";

export default () => (
  <div className='tw:flex tw:gap-6'>
    <div className="tw:flex tw:flex-col">
      <h1 className="tw:text-center">Button</h1>
      <br />
      <Cta variant='outline' size='sm'>
        Small
      </Cta>
      <br />
      <Cta variant='outline' size='md'>
        Medium
      </Cta>
      <br />
      <Cta variant='outline' size='lg'>
        Large
      </Cta>
    </div>
    <div className="tw:flex tw:flex-col">
      <h1 className="tw:text-center">Badge</h1>
      <br />

      <Cta variant='outline' size='sm' shapes={['badge']}>
        Small
      </Cta>
      <br />
      <Cta variant='outline' size='md' shapes={['badge']}>
        Medium
      </Cta>
      <br />
      <Cta variant='outline' size='lg' shapes={['badge']}>
        Large
      </Cta>
    </div>
  </div>
)