import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Skeleton } from "./Skeleton.tsx";

interface Figma extends BaseFigmaProps {
  Variant?: "Avatar" | "Two Lines" | "One Line" | "Block" | "Three Lines";
}

figmaMapping({
  componentKey: "961918beb42e0f0d51180954adccd25296cc948e",
  mapper($f: Figma) {
    switch ($f.Variant) {
      case "Avatar": return <Skeleton className="tw:h-12 tw:w-12 tw:rounded-full!" />;
      case "Block": return <Skeleton className="tw:h-[125px] tw:w-[250px] tw:rounded-xl" />;
      case "One Line": return <Skeleton className="tw:h-4 tw:w-[250px]" />;
      case "Two Lines":
        return <div className="tw:space-y-2">
          <Skeleton className="tw:h-4 tw:w-[250px]" />
          <Skeleton className="tw:h-4 tw:w-[200px]" />
        </div>
      case "Three Lines":
        return <div className="tw:space-y-2">
          <Skeleton className="tw:h-4 tw:w-[250px]" />
          <Skeleton className="tw:h-4 tw:w-[250px]" />
          <Skeleton className="tw:h-4 tw:w-[200px]" />
        </div>
    }
  },
});
