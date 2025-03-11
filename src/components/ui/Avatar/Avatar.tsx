import { type ComponentProps } from "react"
import { Root, Image, Fallback } from "@radix-ui/react-avatar"
import { tv } from "tailwind-variants"

const avatarVariants = tv({
  slots: {
    root: ["tw:relative tw:h-10 tw:w-10 tw:shrink-0 tw:overflow-hidden tw:rounded-full"],
    image: ["tw:aspect-square tw:h-full tw:w-full"],
    fallback: ["tw:flex tw:h-full tw:w-full tw:items-center tw:justify-center tw:rounded-full tw:bg-muted"],
  }
})
const { root, image, fallback } = avatarVariants()

type AvatarProps = ComponentProps<typeof Root>
const Avatar = ({
  className,
  ...props
}: AvatarProps) => {
  return (
    <Root
      data-avatar
      className={root({ className })}
      {...props}
    />
  )
}

type AvatarImageProps = ComponentProps<typeof Image>
const AvatarImage = ({
  className,
  children,
  ...props
}: AvatarImageProps) => {
  return (
    <Image
      className={image({ className })}
      {...props}
    />
  )
}

type AvatarFallbackProps = ComponentProps<typeof Fallback>
const AvatarFallback = ({
  className,
  ...props
}: AvatarFallbackProps) => {
  return (
    <Fallback
      className={fallback({ className })}
      {...props}
    />
  )
}

Avatar.displayName = "Avatar"
AvatarImage.displayName = "AvatarImage"
AvatarFallback.displayName = "AvatarFallback"

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  avatarVariants,
  type AvatarProps,
  type AvatarImageProps,
  type AvatarFallbackProps
}
