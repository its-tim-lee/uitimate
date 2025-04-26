import type { CollapsibleProps, CollapsibleTriggerProps, CollapsibleContentProps } from "@uitimate/lib-collapsible"
import * as Primitive from "@uitimate/lib-collapsible"
import { casing } from "#/helpers/utils.ts"

const Collapsible =
  ({ ...props }: CollapsibleProps) => (
    <Primitive.Root
      data-tag={casing.kebabCase(Collapsible.displayName)}
      {...props}
    />
  );

const CollapsibleTrigger =
  ({ ...props }: CollapsibleTriggerProps) => (
    <Primitive.CollapsibleTrigger
      data-tag={casing.kebabCase(CollapsibleTrigger.displayName)}
      {...props}
    />
  );

const CollapsibleContent =
  ({ ...props }: CollapsibleContentProps) => (
    <Primitive.CollapsibleContent
      data-tag={casing.kebabCase(CollapsibleContent.displayName)}
      {...props}
    />
  );

Collapsible.displayName = 'Collapsible'
CollapsibleTrigger.displayName = 'CollapsibleTrigger'
CollapsibleContent.displayName = 'CollapsibleContent'

namespace Type {
  export type Collapsible = CollapsibleProps
  export type CollapsibleTrigger = CollapsibleTriggerProps
  export type CollapsibleContent = CollapsibleContentProps
}

export * from "@uitimate/lib-collapsible";
export { Collapsible, CollapsibleTrigger, CollapsibleContent, type Type }
