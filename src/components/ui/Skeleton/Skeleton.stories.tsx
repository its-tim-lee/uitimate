import {
  Skeleton
} from "./Skeleton.tsx"

export default {
  title: 'Example/Skeleton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'List',
  render: () => {
    return (
      <div className="tw-flex tw-items-center tw-space-x-4">
        <Skeleton className="tw-h-12 tw-w-12 !tw-rounded-full" />
        <div className="tw-space-y-2">
          <Skeleton className="tw-h-4 tw-w-[250px]" />
          <Skeleton className="tw-h-4 tw-w-[250px]" />
          <Skeleton className="tw-h-4 tw-w-[200px]" />
        </div>
      </div>
    )
  },
};

export const Variant2 = {
  name: 'Card',
  render: () => {
    return (
      <div className="tw-flex tw-flex-col tw-space-y-3">
        <Skeleton className="tw-h-[125px] tw-w-[250px] tw-rounded-xl" />
        <div className="tw-space-y-2">
          <Skeleton className="tw-h-4 tw-w-[250px]" />
          <Skeleton className="tw-h-4 tw-w-[200px]" />
        </div>
      </div>
    )
  },
};