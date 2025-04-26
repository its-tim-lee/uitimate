import { Icon as Root, type IconProps as _IconProps } from "@uitimate/lib-icon";
import { AccessibleIcon } from "#/components/ui/AccessibleIcon/AccessibleIcon.tsx";
import { casing } from "#/helpers/utils.ts";
/**
 * Design note:
 *  span-wrapper:
 *    Wrapping svg (the rendered result of `Root`) into span is considered a best practice, cuz there're many issues of using
 *    a svg directly. Eg., inside a flex container, the svg dimension will be a problem.
 *
 *  sizing:
 *    without creating the prop like `size`, it can be annoying in terms of consistency,
 *    cuz in practice, people know it make sense to use `size` on many our components,
 *    but when it comes to Icon, they can simply forget they need to use Tailwind's `size-*`.
 *    Basically, we sometimes want to manaully size the Icon when it's not used in the dependency component such as Cta.
 *    But provide `size` prop must align with the relevant theme concept, which is still in the progress.
 */
type IconProps = _IconProps & { label?: string }
const Icon = ({ label, ...props }: IconProps) => (
  <AccessibleIcon label={label || ''}>
    <span>
      <Root data-icon data-tag={casing.kebabCase(Icon.displayName)} {...props} />
    </span>
  </AccessibleIcon>
)

Icon.displayName = "Icon";

namespace Type {
  export type Icon = IconProps;
}

export * from "@uitimate/lib-icon";
export {
  Icon,
  AccessibleIcon,
  type Type,
}