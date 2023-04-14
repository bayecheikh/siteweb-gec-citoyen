import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ade83d4 = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _0be4b34e = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _02f86efc = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _3410c9e5 = () => interopDefault(import('..\\pages\\accueil.vue' /* webpackChunkName: "pages/accueil" */))
const _cac6b602 = () => interopDefault(import('..\\pages\\addcourrier.vue' /* webpackChunkName: "pages/addcourrier" */))
const _626418f8 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _4e627a44 = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _5cce884a = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _1af75509 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _4852fe72 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _34913e00 = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _0fb284fb = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _556d0e65 = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _5cc1ebbc = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _5b57c7f8 = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _358c3f6b = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _3e370751 = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _06770cf8 = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _6ae95a76 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _69d0120f = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _50eb6b4d = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _7f327d06 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _5ddcec26 = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _1038de4b = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _243d1598 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _070b0b38 = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _87832fca = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _abd7fe52 = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _3ee3b68a = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _0f3d2d2f = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _0f4b44b0 = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _283b7b9a = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _64a3380e = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _a9d2cea4 = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _7b437034 = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _79036cd8 = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _a23e4058 = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _f94bddb8 = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _7ecc6b08 = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _fb57f39c = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _8ab76416 = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _8013372c = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _ca8891d0 = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _acb3a716 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _0b3c55ca = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _f57f25c2 = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _dcd833cc = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
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
    path: "/about-us-one",
    component: _320e0bcc,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _69456b84,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _4a75bcb2,
    name: "about-us-two"
  }, {
    path: "/accueil",
    component: _3410c9e5,
    name: "accueil"
  }, {
    path: "/addcourrier",
    component: _0003c889,
    name: "addcourrier"
  }, {
    path: "/coming-soon",
    component: _706986fc,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _4123bd7a,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _4f8fcb80,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _b9ea5082,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _4212635e,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _2d34aeb6,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _5e68d385,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _c62b47ca,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _79cb732c,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _ba55d4a4,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _284d82a1,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _c8d080f2,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _a2b913fc,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _6f6bdaa8,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _719e6b76,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _935ae252,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _642e68e0,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _785a65ba,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _5eef2cd5,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _150a7a64,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _55c159c2,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _e507d55e,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _008bfa61,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _9b084e80,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _0554cc36,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _05389d34,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _7eb37524,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _89c99cd0,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _7c5445e4,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _3ae57f9c,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _d688126c,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _2768178a,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _049235a4,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _3af69e86,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _4c041d68,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _7369da2b,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _4404f3c0,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _646bce4e,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _c73120aa,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _57c28d51,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _1da02c29,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _2216c360,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _a4425d66,
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
