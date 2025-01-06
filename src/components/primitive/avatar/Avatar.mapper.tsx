import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Avatar, AvatarImage, AvatarFallback } from "./index.tsx";

interface FigmaAvatarProps extends BaseFigmaProps {}

figmaMapping({
  componentKey: "82070d13dc1d92f6261d614f0a9bf07cf6525c51",
  mapper(figma: FigmaAvatarProps) {
    return <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  },
});
