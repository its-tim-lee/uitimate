import { Button } from "../ui/Button/Button";

export default () => (
  <div className="tw:flex tw:flex-col">
    <Button variant='outline' size='sm'>
      SM
    </Button>
    <br />
    <Button variant='outline' size='md'>
      MD
    </Button>
    <br />
    <Button variant='outline' size='lg'>
      LG
    </Button>
  </div>

)