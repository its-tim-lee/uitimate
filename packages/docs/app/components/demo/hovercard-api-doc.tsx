import { HoverCard, HoverCardContent, HoverCardTrigger } from "#/components/ui/HoverCard/HoverCard.tsx";
import { useRef, useState } from "react";
import { Cta } from "#/components/ui/Cta/Cta";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="not-prose">
      <h5 className="tw:font-bold">Events:  'select-bluetooth-device'</h5>
      <br />
      <p className="tw:text-muted-foreground">
        Returns:
      </p>
      <br />
      <ul className="tw:list-disc tw:list-inside tw:space-y-2">
        <li><Cta shapes={['badge']} variant="secondary">event</Cta> Event</li>
        <li>
          <Cta shapes={['badge']} variant="secondary">devices</Cta> {''}
          <span
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <a className='tw:hover:underline tw:cursor-pointer tw:underline-offset-3 tw:decoration-dashed tw:text-blue-500'>
              BluetoothDevice[]
            </a>
            <HoverCard open={isOpen}>
              <HoverCardTrigger asChild><span /></HoverCardTrigger>
              <HoverCardContent sideOffset={-1} align="end">
                <div className="tw:flex tw:flex-col tw:gap-4">
                  <h3 className="tw:font-extrabold">BluetoothDevice Object</h3>
                  <ul className="tw:list-disc tw:list-inside tw:space-y-2 tw:pl-4">
                    <li><Cta shapes={['badge']} variant="secondary">deviceName</Cta> string</li>
                    <li><Cta shapes={['badge']} variant="secondary">deviceId</Cta> string</li>
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          </span>
        </li>
      </ul>
    </div>
  )
}