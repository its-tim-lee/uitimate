import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { Cta } from "#/components/ui/Cta/Cta.tsx";

export default () => (
  <Cta variant="outline" shapes={['icon']} size='sm' className="tw:rounded-full">
    <Icon icon='lucide:plus' />
  </Cta>
)