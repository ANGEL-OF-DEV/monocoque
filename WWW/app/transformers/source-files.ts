import {defineTransformer} from '@nuxt/content'

export default defineTransformer({
  name: 'title-suffix',
  extensions: ['.props', '.targets', '.cs', '.cmd', ".sh", '.ps1'],
  parse: async (file, options = {}) => ({
    body: file.body,
    id: file.id,
  }),
  transform(file) {
    let actualPath = file.id.toLowerCase();

    // Remove content collection prefixes from paths.
    if (actualPath.startsWith("content/")) {
      actualPath = actualPath.substring("content".length);
    } else if (actualPath.startsWith("sources/")) {
      actualPath = actualPath.substring("sources".length);
    }

    return {
      ...file,
      path: actualPath,
      description: "lol",
      __metadata: {},
    }
  }
})
