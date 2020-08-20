
export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script:[
      {src: '/js/custom.js',  type: "text/javascript", body:true},
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
        /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
    const nodeExternals = require('webpack-node-externals')
    if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            allowlist: [/^vue-slick/]
          })
        ]
      }
    }

  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      });
      routes.push({
        path: '/teste/:id',
        components: {
          default: resolve(__dirname, 'pages/teste.vue'), // or routes[index].component
        }
      });
      routes.push({
        path: '/abc/:teste',
        components: {
          default: resolve(__dirname, 'pages/teste.vue'), // or routes[index].component
        }
      });
      routes.push({
        path: '/produto/:produto',
        components: {
          default: resolve(__dirname, 'pages/teste.vue'), // or routes[index].component
        }
      });
      routes.push({
        path: '/produto/:categoria/:id',
        components: {
          default: resolve(__dirname, 'pages/teste.vue'), // or routes[index].component
        }
      })  
    }
  }
}
