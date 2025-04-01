import { Flat } from "../preset/flat"
import { Progress } from '#/components/ui/Progress/Progress';

// TODO: make this fancy: connect to the real world use case
export default () => {
  return (
    <Flat className="tw:w-full tw:h-[50px] tw:relative">
      Toolbar
      <Progress value={60} className="tw:absolute tw:bottom-0 tw:left-0" />
    </Flat>
  )
}