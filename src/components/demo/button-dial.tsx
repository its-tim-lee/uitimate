import { Icon } from "../ui/Icon/Icon";
import { Cta } from "../ui/Cta/Cta";

export default () => (
  <Cta variant="outline" shapes={['icon']} size='sm' className="tw:rounded-full">
    <Icon icon='lucide:plus' />
  </Cta>
)