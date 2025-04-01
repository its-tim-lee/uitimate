import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { Badge } from "#/components/ui/Badge/Badge.tsx";
import { Button } from "#/components/ui/Button/Button";

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-3 tw:items-center">
      <Badge variant="secondary" size="lg" className="tw:p-4 tw:font-mono tw:w-[450px] tw:justify-between">
        <span className="tw:px-2">npm install @google/generative-ai</span>
        <Button mode="icon" variant="ghost" size="sm" className="tw:cursor-pointer tw:shadow-none ">
          <Icon icon='lucide:copy' />
        </Button>
      </Badge>
      <Badge variant="primary" size='lg' className="tw:cursor-pointer tw:grow-0">
        <Icon icon='lucide:github' /> View on Github
      </Badge>
      <Button variant="outline" className="tw:shadow-none">
        MCP Server
        {''}
        <Badge variant="outline" size="sm" className='tw:rounded-full'>Beta</Badge>
      </Button>
    </div>
  )
}