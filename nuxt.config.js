import messages from './locales'
import routes from './utils/routes'
import translations from './locales/translations'

export default async () => {
  // const messages = await translations()
  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    generate: {
      fallback: true,
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head() {
      return {
        title: 'Система нагревания табака glo',
        htmlAttrs: {
          lang: 'ru',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      }
    },

    server: {
      port: 8899,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/styles/common.scss'],

    styleResources: {
      scss: '~/assets/styles/variables.scss',
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '~/plugins/mask.js',
      { src: '~/plugins/scrollanimate.js', ssr: false },
      // '~/plugins/directus.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/style-resources'],

    router: {
      middleware: 'router',
      trailingSlash: true,
    },

    sitemap: {
      hostname: process.env.HOST_NAME,
      
      routes: [
        '/faq/',
        '/uz/',
        '/winter-lep/',
        '/uz/faq/',
        '/uz/winter-lep/',
        '/',
      ]
      // sitemaps: [
      //   {
      //     path: '/faq/',
      //     // ...
      //   }, {
      //     path: '/uz/',
      //     // ...
      //   }
      // ]
      // routes() {
      //   return routes()
      // },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxt/content',
      'cookie-universal-nuxt',
      'nuxt-i18n',
      'nuxt-google-sheets-parser',
      '@nuxtjs/sitemap',
      '@nuxtjs/axios',
      'nuxt-validate',
      [
        'nuxt-lazy-load',
        {
          // native: true,
          polyfill: false,
          directiveOnly: true,
        },
      ],
    ],

    i18n: {
      locales: ['uz', 'ru'],
      defaultLocale: 'ru',
      vueI18n: {
        fallbackLocale: 'ru',
        messages,
      },
    },

    axios: {
      baseURL:
        process.env.NODE_ENV != 'development'
          ? process.env.APP_URL
          : 'http://localhost:8055',
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      extractCSS: true,
    },
  }
}
