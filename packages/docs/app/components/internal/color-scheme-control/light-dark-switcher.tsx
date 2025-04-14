import { Cta } from "#/components/ui/Cta/Cta"
import { Icon } from "#/components/ui/Icon/Icon";

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
    <Cta variant="ghost" className='tw:shadow-none' shapes={['icon']} onClick={setColorScheme}>
      <Icon icon="lucide:sun" className="tw:hidden tw:dark:block tw:h-[1.2rem] tw:w-[1.2rem] tw:rotate-0 tw:transition-all tw:dark:rotate-90" />
      <Icon icon="lucide:moon" className="tw:block tw:dark:hidden tw:h-[1.2rem] tw:w-[1.2rem] tw:transition-all" />
      <span className="tw:sr-only">Switch between dark and light mode</span>
    </Cta>
  )
}
