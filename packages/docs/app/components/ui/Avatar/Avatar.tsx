import { type ComponentProps } from "react"
import { Root, Image, Fallback } from "@uitimate/lib-avatar"
import { tv } from "tailwind-variants"
import { casing } from "#/helpers/utils.ts"

const avatarVariants = tv({
  slots: {
    root: ["tw:relative tw:h-10 tw:w-10 tw:shrink-0 tw:overflow-hidden tw:rounded-full"],
    image: ["tw:aspect-square tw:h-full tw:w-full"],
    fallback: ["tw:flex tw:h-full tw:w-full tw:items-center tw:justify-center tw:rounded-full tw:bg-muted"],
  }
})
const { root, image, fallback } = avatarVariants()

type AvatarProps = Type.Avatar
const Avatar = ({
  className,
  ...props
}: AvatarProps) => {
  return (
    <Root
      data-avatar
      data-tag={casing.kebabCase(Avatar.displayName)}
      className={root({ className })}
      {...props}
    />
  )
}

type AvatarImageProps = Type.AvatarImage
const AvatarImage = ({
  className,
  children,
  ...props
}: AvatarImageProps) => {
  return (
    <Image
      data-tag={casing.kebabCase(AvatarImage.displayName)}
      className={image({ className })}
      {...props}
    />
  )
}

type AvatarFallbackProps = Type.AvatarFallback
const AvatarFallback = ({
  className,
  ...props
}: AvatarFallbackProps) => {
  return (
    <Fallback
      data-tag={casing.kebabCase(AvatarFallback.displayName)}
      className={fallback({ className })}
      {...props}
    />
  )
}

Avatar.displayName = "Avatar"
AvatarImage.displayName = "AvatarImage"
AvatarFallback.displayName = "AvatarFallback"

namespace Type {
  export type Avatar = ComponentProps<typeof Root>
  export type AvatarImage = ComponentProps<typeof Image>
  export type AvatarFallback = ComponentProps<typeof Fallback>
}

export * from "@uitimate/lib-avatar";

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  avatarVariants,
  type Type
}
