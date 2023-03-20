// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            // link: [
            //     // <link rel="stylesheet" href="https://myawesome-lib.css">
            //     { rel: 'stylesheet', href: 'https://code.iconify.design/3/3.1.0/iconify.min.js' }
            // ],
            script: [
                { src: 'https://code.iconify.design/3/3.1.0/iconify.min.js' }
            ],
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
        ,'@nuxt/devtools'
        ]
})