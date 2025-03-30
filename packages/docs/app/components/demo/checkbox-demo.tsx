import { Checkbox, type CheckedState } from "@/components/ui/Checkbox/Checkbox.tsx"
import { useState } from "react"
import { Label } from "@/components/ui/Label/Label.tsx"

export default () => {
  const capabilities = [
    { name: "Web search", id: "web-search" },
    { name: "Canvas", id: "canvas" },
    { name: "DALL·E Image Generation", id: "dalle-image-generation" },
    { name: "Code Interpreter & Data Analysis", id: "code-interpreter-data-analysis" }
  ]
  return (
    <>
      <div className="tw:flex tw:flex-col tw:gap-2">

        <h4 className="tw:text-muted-foreground">Capabilities</h4>

        {capabilities.map(($c) =>
        (
          <div key={$c.id} className="tw:flex tw:gap-2">
            <Checkbox
              defaultChecked
              id={$c.id}
            />
            <Label htmlFor={$c.id}>{$c.name}</Label>
          </div>
        ))}
      </div>
    </>
  )
}