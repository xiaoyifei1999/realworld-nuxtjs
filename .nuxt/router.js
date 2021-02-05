import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63c1d7dc = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _7b2b5611 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _2b109712 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _04834337 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _e5587044 = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _57f2fe1f = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _2964f2f8 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _63c1d7dc,
    children: [{
      path: "",
      component: _7b2b5611,
      name: "home"
    }, {
      path: "/login",
      component: _2b109712,
      name: "login"
    }, {
      path: "/register",
      component: _2b109712,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _04834337,
      name: "profile"
    }, {
      path: "/setting",
      component: _e5587044,
      name: "setting"
    }, {
      path: "/editor",
      component: _57f2fe1f,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _2964f2f8,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
