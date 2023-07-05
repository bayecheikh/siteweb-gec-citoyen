import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cac6b602 = () => interopDefault(import('..\\pages\\addcourrier.vue' /* webpackChunkName: "pages/addcourrier" */))
const _19f8dd76 = () => interopDefault(import('..\\pages\\contactez-nous.vue' /* webpackChunkName: "pages/contactez-nous" */))
const _c87c0888 = () => interopDefault(import('..\\pages\\termes-conditions.vue' /* webpackChunkName: "pages/termes-conditions" */))
const _1cc8837a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addcourrier",
    component: _cac6b602,
    name: "addcourrier"
  }, {
    path: "/contactez-nous",
    component: _19f8dd76,
    name: "contactez-nous"
  }, {
    path: "/termes-conditions",
    component: _c87c0888,
    name: "termes-conditions"
  }, {
    path: "/",
    component: _1cc8837a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
