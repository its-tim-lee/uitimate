import DocsSidebar from "#/components/internal/DocsSidebar";

export default function DocPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-wrapper">
      <div
        className="container tw:flex-1 tw:items-start tw:md:grid tw:md:grid-cols-[220px_minmax(0,1fr)] tw:md:gap-6 tw:lg:grid-cols-[240px_minmax(0,1fr)] tw:lg:gap-10"
      >
        <aside
          className="border-grid tw:fixed tw:top-14 tw:z-30 tw:hidden tw:h-[calc(100vh-3.5rem)] tw:w-full tw:shrink-0 tw:border-r tw:md:sticky tw:md:block"
        >
          <div
            className="no-scrollbar tw:h-full tw:overflow-auto tw:py-6 tw:pr-4 tw:lg:py-8"
          >
            <DocsSidebar />
          </div>
        </aside>

        <div className="tw:flex tw:flex-col tw:py-10">{children}</div>
      </div>
    </div>
  )
}
