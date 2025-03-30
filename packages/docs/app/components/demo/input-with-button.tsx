import { Label } from '../ui/Label/Label.tsx';
import { Input } from '../ui/Input/Input.tsx';
import { Button } from '../ui/Button/Button.tsx';

export default () => {
  return (
    <div className="tw:flex tw:gap-2 tw:items-center">
      <Input
        type="email"
        placeholder="Email"
      />
      <Button>Subscribe</Button>
    </div>
  )
}