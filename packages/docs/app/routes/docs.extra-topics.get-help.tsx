import ReactMarkdown from "react-markdown";
import DocPageLayout from "#/components/internal/layout/DocPageLayout";

const getHelpFiles = import.meta.glob('../docs/get-help.md', { eager: true, as: 'raw' });
const getHelp = Object.values(getHelpFiles)[0];

export default () => {
  return (
    <DocPageLayout>
      <div className="tw:prose tw:dark:prose-invert tw:max-w-none">
        <ReactMarkdown>{getHelp}</ReactMarkdown>
      </div>
    </DocPageLayout>
  )
}