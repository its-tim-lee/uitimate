import { Cta } from "../ui/Cta/Cta";

export default () => (
  <Cta variant="outline" size='sm' className="tw:shadow-none">
    MCP Server
    {''}
    <Cta asChild muted shapes={['badge']} variant="outline" size="sm" className='tw:rounded-full'><span>Beta</span></Cta>
  </Cta>
)