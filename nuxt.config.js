export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'example-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'サイト名' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://example.com' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Generate Dynamic Routing
  generate: {
    fallback: true,
    routes: ['/items/koduki/1', '/items/misuzu/2']
  },
  // Set Runtime Configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config
  publicRuntimeConfig: {
    baseURLAPI1: process.env.BASE_URL_API1,
    firebase: {
      apiKey: process.env.FIREBAE_AUTH_API_KEY,
      authDomain: process.env.FIREBAE_AUTH_DOMAIN
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // // Fireabase Auth module configuration: https://firebase.nuxtjs.org/service-options/auth/
  // firebase: {
  //   config: {
  //     apiKey: '<apiKey>',
  //     authDomain: '<authDomain>',
  //     databaseURL: '<databaseURL>',
  //     projectId: '<projectId>',
  //     storageBucket: '<storageBucket>',
  //     messagingSenderId: '<messagingSenderId>',
  //     appId: '<appId>',
  //     measurementId: '<measurementId>'
  //   },
  //   services: {
  //     auth: {
  //       // it is recommended to configure either a mutation or action but you can set both
  //       initialize: {
  //         onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
  //         // onAuthStateChangedAction: 'onAuthStateChangedAction'
  //       }
  //     }
  //   }
  // }

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
