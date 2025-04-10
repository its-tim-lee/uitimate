import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/Avatar/Avatar.tsx";
import { Button } from "#/components/ui/Button/Button.tsx";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "#/components/ui/HoverCard/HoverCard.tsx";

export default () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@itistimlee</Button>
      </HoverCardTrigger>
      <HoverCardContent className="tw:w-[360px]">
        <div className="tw:flex tw:flex-col tw:gap-4">
          <header className="tw:flex tw:items-center tw:gap-4">
            <Avatar>
              <AvatarImage src="https://bitl.to/44ls" alt="@itistimlee" />
              <AvatarFallback>TL</AvatarFallback>
            </Avatar>
            <span className="tw:text-md tw:font-black">
              Tim Lee
            </span>
          </header>
          <p className="tw:text-justify">
            Founder & CEO of @theKeyPointer. The creator of keypointer/ui.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}