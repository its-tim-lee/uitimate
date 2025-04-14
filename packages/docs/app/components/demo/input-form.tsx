import { Label } from '../ui/Label/Label.tsx';
import { Input } from '../ui/Input/Input.tsx';
import { Button } from '../improper/Button/Button.tsx';

// TBD: doc: show the intergration with form and leave the msg:
// since it's just a native input, for the APIs, consult the native input doc for more details

// This demo is still important, cuz it can text many types of Input to see whether our style has any issues
export default () => {
  return (
    <Input
      type="file"
      placeholder="File"
    />
  )
}