import ReactMarkdown from "react-markdown";
import DocPageLayout from "#/components/internal/layout/DocPageLayout";

const introductionFiles = import.meta.glob('../docs/introduction.md', { eager: true, as: 'raw' });
const introduction = Object.values(introductionFiles)[0];

export default () => {
  return (
    <DocPageLayout>
      <div className="tw:prose tw:dark:prose-invert tw:max-w-none">
        <ReactMarkdown>{introduction}</ReactMarkdown>
      </div>
    </DocPageLayout>
  )
}