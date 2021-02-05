module.exports = {
  router: {
    linkActiveClass: 'active',
    // 自定义路由
    extendRoutes (routes, resolve) {
      // 清除默认生成的路由表规则
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '', // 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login', // 默认子路由
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/register', // 默认子路由
              name: 'register',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/profile/:username', // 默认子路由
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/setting', // 默认子路由
              name: 'setting',
              component: resolve(__dirname, 'pages/setting/')
            },
            {
              path: '/editor', // 默认子路由
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug', // 默认子路由
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            }
          ]
        },
      ])
      // routes.push({
      //   name: 'custom',
      //   path: '*',
      //   component: resolve(__dirname, 'pages/404.vue')
      // })
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}