import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";

// ❖ Frame 1
interface FigmaFrameProps extends BaseFigmaProps {
  "Show Input Item2"?: boolean;
  "Show Input Item1"?: boolean;
  "Input Item1"?: ChildrenNode; // when "Show Input Item1" is true
  "Input Item2"?: ChildrenNode; // when "Show Input Item2" is true
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "7e206415447d34515b8c99c318fd6ac3526bf429",
  mapper(figma: FigmaFrameProps) {
    console.log(figma) // @ts-ignore
    console.log(figma?.$childById('Input Item1#15454:4')) // try to check instance swap by using Figma Id
    return (
      <h1>Hello</h1>
    );
  },
});
