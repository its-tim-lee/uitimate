import { tv, type VariantProps } from "tailwind-variants"
import type { ComponentProps } from "react"

export const variant = tv({
  base: "tw:animate-pulse tw:rounded-md tw:bg-primary/10",
})
export type SkeletonProps = ComponentProps<"div"> & VariantProps<typeof variant>

export const Skeleton = ({ className, ...props }: SkeletonProps) => <div className={variant({ className })} {...props} />
