(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{568:function(t,n,e){"use strict";e.r(n);e(15),e(24),e(25);var o={components:{Navigation:function(){return e.e(9).then(e.bind(null,816))},SearchPopUp:function(){return e.e(10).then(e.bind(null,723))},ColorMode:function(){return e.e(5).then(e.bind(null,724))},OffCanvasMobileMenuOne:function(){return e.e(13).then(e.bind(null,725))}},data:function(){return{isSticky:!1}},props:["showHeaderTop"],mounted:function(){var t=this;window.addEventListener("scroll",(function(){var n=window.scrollY;t.isSticky=n>=200}))},methods:{mobileMenuOpen:function(t,n){var e=document.querySelector("#offcanvas-menu");"addClass"===t?e.classList.add(n):e.classList.remove(n)},searchPopUpOpen:function(t,n){var e=document.querySelector("#edu-search-popup");"addClass"===t?e.classList.add(n):e.classList.remove(n)}}},l=e(18),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("header",{staticClass:"edu-header header-style-4 header-fullwidth no-topbar"},[n("div",{staticClass:"header-mainmenu",class:{"edu-sticky":t.isSticky}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"header-navbar"},[n("div",{staticClass:"header-brand"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},["light"===t.$colorMode.value?n("img",{staticClass:"logo-light",attrs:{src:"/images/logo/logo-dark.png",alt:"Dark Logo"}}):t._e(),t._v(" "),"dark"===t.$colorMode.value?n("img",{staticClass:"logo-dark",attrs:{src:"/images/logo/logo-white.png",alt:"Light Logo"}}):t._e()])],1)]),t._v(" "),n("div",{staticClass:"header-mainnav"},[n("nav",{staticClass:"mainmenu-nav"},[n("Navigation")],1)]),t._v(" "),n("div",{staticClass:"header-right"},[n("ul",{staticClass:"header-action"},[t._m(0),t._v(" "),n("li",{staticClass:"icon search-icon"},[n("button",{staticClass:"search-trigger",on:{click:function(n){return t.searchPopUpOpen("addClass","open")}}},[n("i",{staticClass:"icon-2"})])]),t._v(" "),n("li",{staticClass:"icon light-dark-icon"},[n("ColorMode")],1),t._v(" "),n("li",{staticClass:"header-btn"},[n("n-link",{staticClass:"edu-btn btn-medium btn-curved",attrs:{to:"/contact-us"}},[t._v("Try for free "),n("i",{staticClass:"icon-4"})])],1),t._v(" "),n("li",{staticClass:"mobile-menu-bar d-block d-xl-none"},[n("button",{staticClass:"hamberger-button",on:{click:function(n){return t.mobileMenuOpen("addClass","active")}}},[n("i",{staticClass:"icon-54"})])])])])])])]),t._v(" "),n("SearchPopUp"),t._v(" "),n("OffCanvasMobileMenuOne")],1)}),[function(){var t=this._self._c;return t("li",{staticClass:"search-bar"},[t("div",{staticClass:"input-group"},[t("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"search-btn",attrs:{type:"button"}},[t("i",{staticClass:"icon-2"})])])])}],!1,null,null,null);n.default=component.exports}}]);