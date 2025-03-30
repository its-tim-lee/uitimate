import { Skeleton } from "@/components/ui/Skeleton/Skeleton";
export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:space-y-3 tw:w-[250px]">
      <Skeleton className="tw:h-[125px] tw:w-[250px] tw:rounded-xl" />
      <div className="tw:flex tw:items-center tw:space-x-4">
        <Skeleton className="tw:h-12 tw:w-12 tw:rounded-full!" />
        <Skeleton className="tw:h-4 tw:flex-1" />
      </div>
      <div className="tw:space-y-2">
        <Skeleton className="tw:h-4 tw:w-[250px]" />
        <Skeleton className="tw:h-4 tw:w-[150px]" />
        <Skeleton className="tw:h-4 tw:w-[200px]" />
      </div>
    </div>
  )
}