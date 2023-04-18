import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _320e0bcc = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _69456b84 = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _4a75bcb2 = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _28497b22 = () => interopDefault(import('..\\pages\\accueil.vue' /* webpackChunkName: "pages/accueil" */))
const _0003c889 = () => interopDefault(import('..\\pages\\addcourrier.vue' /* webpackChunkName: "pages/addcourrier" */))
const _706986fc = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _4123bd7a = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _4f8fcb80 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _b9ea5082 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _4212635e = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _2d34aeb6 = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _5e68d385 = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _c62b47ca = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _79cb732c = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _ba55d4a4 = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _284d82a1 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _c8d080f2 = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _a2b913fc = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _6f6bdaa8 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _719e6b76 = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _935ae252 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _33d7b919 = () => interopDefault(import('..\\pages\\signaler-probleme.vue' /* webpackChunkName: "pages/signaler-probleme" */))
const _a035fcce = () => interopDefault(import('..\\pages\\suggestion.vue' /* webpackChunkName: "pages/suggestion" */))
const _642e68e0 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _785a65ba = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _5eef2cd5 = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _150a7a64 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _55c159c2 = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _e507d55e = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _008bfa61 = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _9b084e80 = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _0554cc36 = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _05389d34 = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _7eb37524 = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _89c99cd0 = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _7c5445e4 = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _3ae57f9c = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _d688126c = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _2768178a = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _049235a4 = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _3af69e86 = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _4c041d68 = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _7369da2b = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _4404f3c0 = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _646bce4e = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _c73120aa = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _57c28d51 = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _1da02c29 = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _2216c360 = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
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
    path: "/coming-soon",
    component: _626418f8,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _4e627a44,
    name: "contact-me"
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
    path: "/shop",
    component: _50eb6b4d,
    name: "shop"
  }, {
    path: "/signaler-probleme",
    component: _33d7b919,
    name: "signaler-probleme"
  }, {
    path: "/suggestion",
    component: _a035fcce,
    name: "suggestion"
  }, {
    path: "/terms-condition",
    component: _7f327d06,
    name: "terms-condition"
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
