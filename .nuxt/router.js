import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0003c889 = () => interopDefault(import('..\\pages\\addcourrier.vue' /* webpackChunkName: "pages/addcourrier" */))
const _4f8fcb80 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _642e68e0 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _a4425d66 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us-one",
    component: _2ade83d4,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _0be4b34e,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _02f86efc,
    name: "about-us-two"
  }, {
    path: "/accueil",
    component: _3410c9e5,
    name: "accueil"
  }, {
    path: "/addcourrier",
    component: _cac6b602,
    name: "addcourrier"
  }, {
    path: "/contact-us",
    component: _5cce884a,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _1af75509,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _4852fe72,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _34913e00,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _0fb284fb,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _556d0e65,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _5cc1ebbc,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _5b57c7f8,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _358c3f6b,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _3e370751,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _06770cf8,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _6ae95a76,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _69d0120f,
    name: "purchase-guide"
  }, {
    path: "/remerciement",
    component: _0e9be0d6,
    name: "remerciement"
  }, {
    path: "/se-connecter",
    component: _d599500a,
    name: "se-connecter"
  }, {
    path: "/shop",
    component: _50eb6b4d,
    name: "shop"
  }, {
    path: "/signaler-probleme",
    component: _8d0a35e2,
    name: "signaler-probleme"
  }, {
    path: "/suggestion",
    component: _85b8833a,
    name: "suggestion"
  }, {
    path: "/terms-condition",
    component: _7f327d06,
    name: "terms-condition"
  }, {
    path: "/testministeres",
    component: _09335584,
    name: "testministeres"
  }, {
    path: "/university",
    component: _5ddcec26,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _1038de4b,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _243d1598,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _070b0b38,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _87832fca,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _abd7fe52,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _3ee3b68a,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _0f3d2d2f,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _0f4b44b0,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _283b7b9a,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _64a3380e,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _a9d2cea4,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _7b437034,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _79036cd8,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _a23e4058,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _f94bddb8,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _7ecc6b08,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _fb57f39c,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _8ab76416,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _8013372c,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _ca8891d0,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _acb3a716,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _0b3c55ca,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _f57f25c2,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _dcd833cc,
    name: "shop-wishlist"
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
