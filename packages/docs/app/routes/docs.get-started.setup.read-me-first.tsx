import DocPageLayout from "#/components/internal/layout/DocPageLayout";
import { Mdx } from '#/components/internal/Mdx'
import { allDocs } from '#/lib/contentlayer'

const doc = allDocs.find(d => {
  return d.title?.toLowerCase() === 'read-me-first';
});

export default () => {
  return (
    <DocPageLayout>
      <div className="tw:prose tw:dark:prose-invert tw:max-w-none">
        <Mdx code={doc?.body?.code || ''} />
      </div>
    </DocPageLayout>
  )
}