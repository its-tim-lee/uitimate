import DocPageLayout from "@/components/internal/layout/DocPageLayout";
import { Outlet } from "react-router";

export default () => {
  return <DocPageLayout>
    <Outlet />
  </DocPageLayout>
}