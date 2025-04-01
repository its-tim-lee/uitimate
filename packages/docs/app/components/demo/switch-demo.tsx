import { Switch } from "#/components/ui/Switch/Switch"
import { Label } from "#/components/ui/Label/Label";

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-4">
      <h3 className="tw:text-muted-foreground tw:font-medium">TOOLS</h3>
      <div className="tw:flex tw:gap-2">
        <Switch defaultChecked id="code-interpreter" />
        <Label htmlFor="code-interpreter">Code interpreter</Label>
      </div>
      <div className="tw:flex tw:gap-2">
        <Switch id="file-search" />
        <Label htmlFor="file-search">File Search</Label>
      </div>
    </div>
  )
}