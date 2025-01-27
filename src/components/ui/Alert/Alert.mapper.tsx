import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Alert, AlertTitle, AlertDescription } from "./Alert.tsx";
import { Icon } from '@iconify/react';

interface FigmaAlertProps extends BaseFigmaProps {
  Variant?: "Default" | "Destructive";
  Title?: string;
  Content?: string;
  Icon?: ChildrenNode;
}

figmaMapping({
  componentKey: "4e0a58d0f7ce43e931759369b67d7219244a0c2e",
  mapper(figma: FigmaAlertProps) {
    return <Alert variant={figma.Variant?.toLowerCase() as 'default' | 'destructive'}>
      <Icon icon={figma.$findOneByName('Icon')?.$children[0].$componentName as string} className="tw-h-4 tw-w-4" />
      <AlertTitle>{figma.Title}</AlertTitle>
      <AlertDescription>
        {figma.Content}
      </AlertDescription>
    </Alert>
  },
});
