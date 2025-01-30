import * as React from "react"

import { ScrollArea } from "./ScollArea.tsx"
import { Separator } from "@/components/ui/Separator/Separator.tsx"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

function ScrollAreaDemo() {
  return (
    <ScrollArea className="tw-h-72 tw-w-48 tw-rounded-md tw-border">
      <div className="tw-p-4">
        <h4 className="tw-mb-4 tw-text-sm tw-font-medium tw-leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="tw-text-sm">
              {tag}
            </div>
            <Separator className="tw-my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}

export default {
  title: 'Example/ScrollArea',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => <ScrollAreaDemo />
};