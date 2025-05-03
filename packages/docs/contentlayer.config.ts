import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import { casing } from '#/helpers/utils.ts';
import rehypeSlug from 'rehype-slug';
import remarkGfm from "remark-gfm"

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: "string",
      default: '',
      required: false,
    },
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
      default: '',
      required: false,
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
  contentDirPath: './app',
  contentDirInclude: ['components/ui', 'docs'], // This means that only these folders will be processed by Contentlayer
  documentTypes: [Doc],
  mdx: {
    /**
     * WARN: don't use remark-code-import, it'd not be compatible with rehype-mdx-code-props
     */
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeSlug, // auto add ids to headings
      rehypeMdxCodeProps
    ]
  }
})