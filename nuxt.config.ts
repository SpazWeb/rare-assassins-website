// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [ "@nuxtjs/sanity" ],
  sanity: {
    projectId: process.env.NUXT_ENV_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_ENV_SANITY_DATASET,
    useCdn: true,
    apiVersion: "2021-03-25"
  },
  css: [
    '/node_modules/normalize.css/normalize.css', 
    '~/assets/fonts/fonts.css',
    '~/assets/css/main.css'
  ]
})
