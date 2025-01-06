import { type ComponentProps } from "react"
import { Root, Image, Fallback } from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = ({ className, ...props }: ComponentProps<typeof Root>) => (
  <Root
    className={cn(
      "tw-relative tw-flex tw-h-10 tw-w-10 tw-shrink-0 tw-overflow-hidden tw-rounded-full",
      className
    )}
    {...props}
  />
);
Avatar.displayName = "Avatar";

const AvatarImage = ({ className, ...props }: ComponentProps<typeof Image>) => (
  <Image
    className={cn("tw-aspect-square tw-h-full tw-w-full", className)}
    {...props}
  />
);
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = ({ className, ...props }: ComponentProps<typeof Fallback>) => (
  <Fallback
    className={cn(
      "tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center tw-rounded-full tw-bg-muted",
      className
    )}
    {...props}
  />
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback }
