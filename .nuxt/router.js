import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f117ed5 = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _3338404d = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _47792fbb = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _3f0e774e = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _a56b427a = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _8893266e = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _88c8c370 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _1a591d28 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _2a3821bf = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _5a5ed048 = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _cc2461b8 = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _1d366143 = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _c04eee92 = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _d717b82c = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _658a9450 = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _520e6419 = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _db863116 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _ddb8c1e4 = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _61ffd2a4 = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _42508fe7 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _2ff96e6c = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _59521da8 = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _2cf40b17 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _6badc3ce = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _761544cc = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _8f888990 = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _ffd456ee = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _67407124 = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _67244222 = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _366335fb = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _72caf26f = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _9864e3a6 = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _792dd9a5 = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _679581da = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _65b07193 = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _11822076 = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _347ea91d = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _fd8de69e = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _1a93fcf4 = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _cc9871ae = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _ccbe84d2 = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _088e10f4 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _21b5621a = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _af39d980 = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _8e3119ce = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _cc2e7338 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2f117ed5,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _3338404d,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _47792fbb,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _3f0e774e,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _a56b427a,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _8893266e,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _88c8c370,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _1a591d28,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _2a3821bf,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _5a5ed048,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _cc2461b8,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _1d366143,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _c04eee92,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _d717b82c,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _658a9450,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _520e6419,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _db863116,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _ddb8c1e4,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _61ffd2a4,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _42508fe7,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _2ff96e6c,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _59521da8,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _2cf40b17,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _6badc3ce,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _761544cc,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _8f888990,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _ffd456ee,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _67407124,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _67244222,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _366335fb,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _72caf26f,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _9864e3a6,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _792dd9a5,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _679581da,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _65b07193,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _11822076,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _347ea91d,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _fd8de69e,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _1a93fcf4,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _cc9871ae,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _ccbe84d2,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _088e10f4,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _21b5621a,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _af39d980,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _8e3119ce,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _cc2e7338,
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
