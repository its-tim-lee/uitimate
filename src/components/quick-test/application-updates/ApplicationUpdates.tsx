import * as React from "react";
import { type UpdateOption } from "./types.ts";
import { UPDATE_OPTIONS } from "./constants.ts";
import { ToggleGroupItem, ToggleGroup } from "@/components/primitive/ToggleGroup/ToggleGroup";
import { Icon } from "@iconify/react";

export function ApplicationUpdates() {
  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-max-w-[263px]">
      <div
        className="tw-text-sm tw-font-semibold tw-leading-5 tw-text-zinc-900"
        role="heading"
        aria-level={2}
      >
        Application updates
      </div>
      <ToggleGroup type="single" className="tw-mt-3">
        {UPDATE_OPTIONS.map((option: UpdateOption) => (
          <ToggleGroupItem
            key={option.id}
            value={option.id}
            variant="outline"
            size="default"
          >
            {option.icon && <Icon icon={option.icon} />}
            <div>{option.label}</div>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
