import ReactMarkdown from "react-markdown";
import DocPageLayout from "#/components/internal/layout/DocPageLayout";
import { Mdx } from '#/components/internal/Mdx'
import { allDocs } from '#/lib/contentlayer'

const readMeFirstFiles = import.meta.glob('../docs/read-me-first.md', { eager: true, as: 'raw' });
const readMeFirst = Object.values(readMeFirstFiles)[0];
const doc = allDocs.find(d => {
  return d.title?.toLowerCase() === 'read-me-first';
});

export default () => {
  return (
    <DocPageLayout>
      <div className="tw:prose tw:dark:prose-invert tw:max-w-none">
        <ReactMarkdown>{readMeFirst}</ReactMarkdown>
        <Mdx code={doc?.body?.code || ''} />
      </div>
    </DocPageLayout>
  )
}