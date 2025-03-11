import { Icon } from "../ui/Icon/Icon";
import { Cta } from "../ui/Cta/Cta";
export default () => (
  <Cta variant='outline' disabled>
    <Icon icon="lucide:loader-circle" className="tw:animate-spin" />
    Please wait
  </Cta>


)