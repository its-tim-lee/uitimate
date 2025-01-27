import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "./Menubar";

interface FigmaMenubarProps extends BaseFigmaProps {
  Trigger4?: string;
  Trigger1?: string;
  Trigger2?: string;
  Trigger3?: string;
}

figmaMapping({
  componentKey: "f13034cd9e5a587ec1907ead3722e5d85728af6b",
  mapper(figma: FigmaMenubarProps) {
    return (
      <Menubar>
        {figma.Trigger1 && <MenubarMenu>
          <MenubarTrigger>{figma.Trigger1}</MenubarTrigger>
          <MenubarContent>
          </MenubarContent>
        </MenubarMenu>}
        {figma.Trigger2 && <MenubarMenu>
          <MenubarTrigger>{figma.Trigger2}</MenubarTrigger>
          <MenubarContent>
          </MenubarContent>
        </MenubarMenu>}
        {figma.Trigger3 && <MenubarMenu>
          <MenubarTrigger>{figma.Trigger3}</MenubarTrigger>
          <MenubarContent>
          </MenubarContent>
        </MenubarMenu>}
        {figma.Trigger4 && <MenubarMenu>
          <MenubarTrigger>{figma.Trigger4}</MenubarTrigger>
          <MenubarContent>
          </MenubarContent>
        </MenubarMenu>}
      </Menubar>
    );
  },
});
