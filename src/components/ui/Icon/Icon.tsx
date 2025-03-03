// doc: it's recommend to import SVG icon manually and pass it to Icon component to support SSR
import { Icon as _Icon, type IconProps } from "@iconify/react"
export type { IconProps }
export const Icon = (props: IconProps) => <_Icon data-icon {...props} />
Icon.displayName = "Icon";
