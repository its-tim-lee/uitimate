import React from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible/Collapsible"
import { Button } from "@/components/ui/Button/Button"
import { Icon } from "@/components/ui/Icon/Icon"

export default () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="tw:w-[350px] tw:space-y-2"
    >
      <div className="tw:flex tw:items-center tw:justify-between tw:space-x-4 tw:px-4">
        <h4 className="tw:text-sm tw:font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <Icon icon="lucide:chevrons-up-down" className="tw:h-4 tw:w-4" />
            <span className="tw:sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="tw:rounded-md tw:border tw:px-4 tw:py-2 tw:font-mono tw:text-sm tw:shadow-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="tw:space-y-2">
        <div className="tw:rounded-md tw:border tw:px-4 tw:py-2 tw:font-mono tw:text-sm tw:shadow-sm">
          @radix-ui/colors
        </div>
        <div className="tw:rounded-md tw:border tw:px-4 tw:py-2 tw:font-mono tw:text-sm tw:shadow-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}