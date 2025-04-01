import LightDarkSwitcher from "#/components/internal/color-scheme-control/light-dark-switcher";
import Searchbar from "./Searchbar";
import GithubButton from "./GithubButton";


export default () => {
  return (
    <header
      className="border-grid tw:sticky tw:top-0 tw:z-50 tw:w-full tw:border-b tw:bg-background/95 tw:backdrop-blur tw:supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container-wrapper">
        <div className="container tw:flex tw:h-14 tw:w-full">
          <div
            className="tw:flex tw:flex-1 tw:items-center tw:justify-between tw:gap-2 tw:md:justify-end"
          >
            <a href="/" className="tw:mr-4 tw:flex tw:items-center tw:gap-2 tw:lg:mr-6">
              {/* <Logo className="tw:h-6 tw:w-6" /> */}
              <span className="tw:font-bold tw:inline-block"> Uitimate </span>
            </a>

            <nav className="tw:flex tw:items-center tw:gap-4 tw:text-sm tw:xl:gap-6">
              <a
                href="/docs/getting-started/introduction"
                className="tw:transition-colors tw:hover:text-foreground/80"
              >
                Docs
              </a>
            </nav>

            <div
              className="tw:flex tw:flex-1 tw:items-center tw:justify-between tw:gap-2 tw:md:justify-end"
            >
              <Searchbar className="tw:flex-none" />

              <nav className="tw:flex tw:items-center tw:gap-0.5">
                <GithubButton />
                <LightDarkSwitcher />
              </nav>
            </div>
            {
              /* <!-- TBD: Use astro-icon to add my brand icon from src/icons/keypointer-ui.svg --> */
            }
          </div>
        </div>
      </div>
    </header>
  )
}
