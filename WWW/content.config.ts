import {defineCollection, defineContentConfig} from '@nuxt/content'

const excludedSources = ['Artifacts', 'node_modules', 'WWW'];

export default defineContentConfig({
  collections: {
    archive: defineCollection({
      type: 'page',
      source: {
        cwd: '../Documents',
        include: '**/*.md'
      }
    }),
    content: defineCollection({
      type: 'page',
      source: {
        include: '**'
      }
    }),
    sources: defineCollection({
      type: 'page',
      source: [
        {cwd: '..', include: '**/*.props', exclude: excludedSources},
        {cwd: '..', include: '**/*.targets', exclude: excludedSources},
        {cwd: '..', include: '**/*.cs', exclude: excludedSources},
        {cwd: '..', include: '**/*.cmd', exclude: excludedSources},
        {cwd: '..', include: '**/*.sh', exclude: excludedSources},
        {cwd: '..', include: '**/*.ps1', exclude: excludedSources}
      ]
    })
  }
})
