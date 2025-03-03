import { Button } from "../ui/Button/Button";
import { Badge } from "../ui/Badge/Badge";

export default () => (
  <Button variant="outline" size='sm' className="tw:shadow-none">
    MCP Server
    {''}
    <Badge variant="outline" size="sm" className='tw:rounded-full'>Beta</Badge>
  </Button>
)