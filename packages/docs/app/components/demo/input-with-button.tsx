import { Input } from '#/components/ui/Input/Input.tsx';
import { Cta } from '#/components/ui/Cta/Cta.tsx';
export default () => {
  return (
    <div className="tw:flex tw:gap-2 tw:items-center">
      <Input
        type="email"
        placeholder="Email"
      />
      <Cta>Subscribe</Cta>
    </div>
  )
}