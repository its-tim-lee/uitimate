import { Progress } from '#/components/ui/Progress/Progress';

// TODO: make this fancy: connect to the real world use case
export default () => {
  return (
    <div className="tw:bg-background tw:shadow-sm tw:border tw:border-solid tw:border-zinc-200 tw:rounded-[8px] tw:p-6 tw:w-full tw:h-[50px] tw:relative">
      Toolbar
      <Progress value={60} className="tw:absolute tw:bottom-0 tw:left-0" />
    </div>
  )
}