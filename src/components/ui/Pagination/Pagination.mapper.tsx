import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Pagination } from "./Pagination.tsx";

interface FigmaPaginationProps extends BaseFigmaProps { }

figmaMapping({
  componentKey: "129899a41bcd2fd61f21ae553d605904572c0dfd",
  mapper($f: FigmaPaginationProps) {
    return <Pagination>{$f.$children}</Pagination>;
  },
});
