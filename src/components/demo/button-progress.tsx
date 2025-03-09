import { Icon } from "../ui/Icon/Icon";
import { Button } from "../ui/Button/Button";

export default () => (
  <Button variant='outline' disabled>
    <Icon icon="lucide:loader-circle" className="tw:animate-spin" />
    Please wait
  </Button>
)