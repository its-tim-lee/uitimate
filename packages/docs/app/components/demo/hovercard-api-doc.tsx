import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/Avatar/Avatar.tsx";
import { Button } from "#/components/ui/Button/Button.tsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "#/components/ui/HoverCard/HoverCard.tsx";
import { useRef, useState } from "react";
import { Badge } from "../ui/Badge/Badge";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h5 className="tw:font-bold">Events:  'select-bluetooth-device'</h5>
      <br />
      <p className="tw:text-muted-foreground">
        Returns:
      </p>
      <br />
      <ul className="tw:list-disc tw:list-inside tw:space-y-2">
        <li><Badge variant="secondary">event</Badge> Event</li>
        <li>
          <Badge variant="secondary">devices</Badge> {''}
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
                    <li><Badge variant="secondary">deviceName</Badge> string</li>
                    <li><Badge variant="secondary">deviceId</Badge> string</li>
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