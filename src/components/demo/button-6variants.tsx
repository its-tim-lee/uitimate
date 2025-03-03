import { Button } from "../ui/Button/Button";

export default () => (
  <div className="tw:flex tw:flex-col tw:gap-2">
    <Button variant='primary'>Primary</Button>
    <Button variant='secondary'>Secondary</Button>
    <Button variant='destructive'>Destructive</Button>
    <Button variant='outline'>Outline</Button>
    <Button variant='ghost'>Ghost</Button>
    <Button variant='link'>Link</Button>
  </div>
)