import { Label } from '../ui/Label/Label.tsx';
import { Input } from '../ui/Input/Input.tsx';

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-2">
      <Label htmlFor="private-key" className='tw:text-muted-foreground'>Private Key</Label>
      <Input id="private-key" value='R_hhX8Lds25d7fWnIjOPUOkm3XN_8cpxLMR31jQdRHY' />
    </div>
  )
}