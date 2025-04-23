import type { ComponentMeta } from "#/types/index.ts";
const meta: ComponentMeta = {
  description: "A one-time password input",
  anatomy: `
<InputOTP>

  <InputOTPGroup>
    <InputOTPSlot />
    {/* More <InputOTPSlot>... */}
  </InputOTPGroup>

  <InputOTPSeparator />

  {/* More <InputOTPGroup>... */}

</InputOTP>`
}

export default meta