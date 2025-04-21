import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import { casing } from '#/helpers/utils.ts';
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
  documentTypes: [Doc]
})