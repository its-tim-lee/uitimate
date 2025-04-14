import type { CollapsibleProps, CollapsibleTriggerProps, CollapsibleContentProps } from "@radix-ui/react-collapsible"
import * as Primitive from "@radix-ui/react-collapsible"
import { kebabCase } from "lodash-es";

const Collapsible =
  ({ ...props }: CollapsibleProps) => (
    <Primitive.Root
      data-tag={kebabCase(Collapsible.displayName)}
      {...props}
    />
  );

const CollapsibleTrigger =
  ({ ...props }: CollapsibleTriggerProps) => (
    <Primitive.CollapsibleTrigger
      data-tag={kebabCase(CollapsibleTrigger.displayName)}
      {...props}
    />
  );

const CollapsibleContent =
  ({ ...props }: CollapsibleContentProps) => (
    <Primitive.CollapsibleContent
      data-tag={kebabCase(CollapsibleContent.displayName)}
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

export { Collapsible, CollapsibleTrigger, CollapsibleContent, type Type }
