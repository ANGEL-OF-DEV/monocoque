// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', "nuxt-studio"],
  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'angel-of-dev',
      repo: 'monocoque',
      branch: 'dev',
      rootDir: 'Docs'
    }
  }
})
