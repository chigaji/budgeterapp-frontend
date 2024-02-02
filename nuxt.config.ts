// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },

  // app: {
  //   pageTransition: {
  //     name: 'fade',
  //     mode: 'out-in' // default
  //   },
  //   layoutTransition: { name: 'layout', mode: 'out-in' }
  // },

  modules: ["@pinia/nuxt",
    '@nuxtjs/google-fonts',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-security',
  ],
  security: {
    corsHandler: {
      // options
      origin: 'http://localhost:1323/',
      methods: '*',
      allowHeaders: '*'

    },
  },
  
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})