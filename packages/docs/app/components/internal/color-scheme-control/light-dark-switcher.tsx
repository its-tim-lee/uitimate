import Switcher from "#/components/demo/button-switch";

/**
 * This file is only meant to be used with @fout-preventer.ts
 */
export default () => {
  const setColorScheme = () => {
    document.documentElement.classList.toggle('dark');
    const finalScheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("colorScheme", finalScheme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", finalScheme === "dark" ? "#09090b" : "#fff");
  }
  return (
    <Switcher onClick={setColorScheme} className="tw:shadow-none tw:border-none" size="sm" />
  )
}
