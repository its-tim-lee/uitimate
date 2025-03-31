import siteData from "@/data/site";

const SiteFooter = () => {
  return (
    <footer className="border-grid tw:border-t tw:py-6 tw:md:py-0">
      <div className="container-wrapper">
        <div className="container tw:py-4">
          <div className="tw:text-balance tw:text-center tw:text-sm tw:leading-loose tw:text-muted-foreground tw:md:text-left">
            Made with ❤️ by{" "}
            <a
              href={siteData.twitter}
              target="_blank"
              rel="noreferrer"
              className="tw:font-medium tw:underline tw:underline-offset-4"
            >
              Tim Lee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
