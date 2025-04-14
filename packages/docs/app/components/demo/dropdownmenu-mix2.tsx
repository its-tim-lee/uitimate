import * as React from "react"

import { Cta } from "#/components/ui/Cta/Cta"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  type Type
} from "#/components/ui/DropdownMenu/DropdownMenu"
import { Icon } from "../ui/Icon/Icon"

type Checked = Type.DropdownMenuCheckboxItem["checked"]

export default () => {
  const [theme, setTheme] = React.useState("light")
  const [barPosition, setBarPosition] = React.useState<Checked>(true)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Cta variant="ghost" shapes={['icon']} size="lg">
          <Icon icon="lucide:settings" />
        </Cta>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <br />
        <DropdownMenuLabel>Sidebar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={barPosition === true}
          onCheckedChange={() => setBarPosition(true)}
        >
          On Right
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={barPosition === false}
          onCheckedChange={() => setBarPosition(false)}
        >
          On Left
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>

    </DropdownMenu>
  )
}
