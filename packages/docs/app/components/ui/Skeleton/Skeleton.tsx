import { type ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const variants = tv({
  base: "tw:animate-pulse tw:rounded-md tw:bg-primary/10",
})

type SkeletonProps = ComponentProps<"div"> & VariantProps<typeof variants>
const Skeleton = ({ className, ...props }: SkeletonProps) => <div className={variants({ className })} {...props} />

Skeleton.displayName = 'Skeleton'

export {
  Skeleton,
  variants as skeletonVariants,
  type SkeletonProps
}
