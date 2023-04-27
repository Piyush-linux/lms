// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                { rel: 'stylesheet', href: 'https://code.iconify.design/3/3.1.0/iconify.min.js' }
            ],
            script: [
                { src: 'https://code.iconify.design/3/3.1.0/iconify.min.js' }
            ],
        }
    },
    css: [
    '~/assets/font/kano.css'
  ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxtjs/strapi',
        '@nuxt/devtools'
        ],
      strapi: {
  url: process.env.STRAPI_URL || 'http://localhost:1337',
  prefix: '/api',
  version: 'v4',
  cookie: {},
  cookieName: 'lms'
}
,
     runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: ''
    }
  }
})