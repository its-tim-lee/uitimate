import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import { casing } from '#/helpers/utils.ts';
import codeImport from 'remark-code-import';
import rehypeSlug from 'rehype-slug';
import remarkGfm from "remark-gfm"

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  fields: {
    // title: {
    //   type: "string",
    //   required: false,
    // },
    // description: {
    //   type: "string",
    //   required: false,
    // },
    published: {
      type: "boolean",
      default: true,
    },
    component: {
      type: "string",
      required: true,
    },
    // date: { type: 'date', required: true },
  },
  // FIXME:??????
  computedFields: {
    url: { type: 'string', resolve: data => `/${casing.lowerCase(data._raw.flattenedPath)}` },
  },
  contentType: "mdx",
}))



export default makeSource({
  contentDirPath: './app/components/ui',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug // auto add ids to headings
    ]
  }
})