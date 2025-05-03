import ReactMarkdown from "react-markdown";
import DocPageLayout from "#/components/internal/layout/DocPageLayout";

const changelogFiles = import.meta.glob('../../CHANGELOG.md', { eager: true, as: 'raw' });
const changelog = Object.values(changelogFiles)[0];

export const meta = () => ([{
  title: "Site's Changelog",
}]);

export default () => {
  return (
    <DocPageLayout>
      <div className="tw:prose tw:dark:prose-invert tw:max-w-none">
        <ReactMarkdown>{changelog}</ReactMarkdown>
      </div>
    </DocPageLayout>
  )
}