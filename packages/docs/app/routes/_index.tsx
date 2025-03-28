import type { MetaFunction } from "react-router";
import { useTranslation } from "react-i18next";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { t } = useTranslation();
  return (
    // <div className="text-red-500">
    <div className="tw:text-red-500">
      <h1>{t("hi")}</h1>
    </div>
  );
}
