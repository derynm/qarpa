export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'project-qapra',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }]
  },

  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'https://qarpa-be.qatros.com/api/v1/'
    baseURL: 'https://qarpa-dev-backend.fly.dev/api/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          required: true,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: { url: 'users/auth/signin', method: 'post' },
          user: { url: 'users/current', method: 'get' },
          logout: false,
          refresh: { url: 'users/auth/refresh_token', method: 'post' }
        }
      }
    },
    redirect: {
      login: '/user/login',
      logout: '/user/login',
      callback: '/login',
      home: '/dashboard'
    }
  }
}
