(window.webpackJsonp=window.webpackJsonp||[]).push([[191,103,124,131],{477:function(t,e,n){"use strict";n.r(e);n(15),n(23),n(24);var o={components:{SectionTitle:function(){return n.e(2).then(n.bind(null,709))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,644))}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-gap-large edu-about-area about-style-7"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5 align-items-center"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"about-content"},[e("SectionTitle",{attrs:{preTitle:"About Us",title:'We Providing The <span class="color-secondary">Best Quality</span> Online Courses.',subTitle:"Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.",alignment:"section-left"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"about-image-gallery"},[e("img",{staticClass:"main-img-1",attrs:{src:"/images/about/about-11.jpg",alt:"About Image"}}),t._v(" "),e("img",{staticClass:"main-img-2",attrs:{src:"/images/about/about-12.jpg","data-aos-delay":"150","data-aos":"fade-down","data-aos-duration":"800",alt:"About Image"}}),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2",imgSrc:"/images/about/shape-38.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-37.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-1.8",imgSrc:"/images/about/shape-04.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),t._m(1)],1)])])])]),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"features-list",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("li",[t._v("Flexible Classes")]),t._v(" "),e("li",[t._v("Offline Classe Mode")]),t._v(" "),e("li",[t._v("Educator Support")])])},function(){var t=this._self._c;return t("li",{staticClass:"shape-4 scene",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}},[t("img",{attrs:{src:"/images/counterup/shape-02.png",alt:"Shape"}})])},function(){var t=this._self._c;return t("ul",{staticClass:"shape-group"},[t("li",{staticClass:"shape-1",attrs:{"data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})])}],!1,null,null,null);e.default=component.exports},552:function(t,e,n){"use strict";n.r(e);n(15),n(23),n(24);var o={components:{Navigation:function(){return n.e(7).then(n.bind(null,693))},SearchPopUp:function(){return n.e(8).then(n.bind(null,694))},ColorMode:function(){return n.e(4).then(n.bind(null,695))},OffCanvasMobileMenuOne:function(){return n.e(10).then(n.bind(null,696))}},data:function(){return{isSticky:!1}},props:["showHeaderTop"],mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobileMenuOpen:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},searchPopUpOpen:function(t,e){var n=document.querySelector("#edu-search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"edu-header header-style-4 header-fullwidth no-topbar"},[e("div",{staticClass:"header-mainmenu",class:{"edu-sticky":t.isSticky}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"header-navbar"},[e("div",{staticClass:"header-brand"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},["light"===t.$colorMode.value?e("img",{staticClass:"logo-light",attrs:{src:"/images/logo/logo-dark.png",alt:"Dark Logo"}}):t._e(),t._v(" "),"dark"===t.$colorMode.value?e("img",{staticClass:"logo-dark",attrs:{src:"/images/logo/logo-white.png",alt:"Light Logo"}}):t._e()])],1)]),t._v(" "),e("div",{staticClass:"header-mainnav"},[e("nav",{staticClass:"mainmenu-nav"},[e("Navigation")],1)]),t._v(" "),e("div",{staticClass:"header-right"},[e("ul",{staticClass:"header-action"},[t._m(0),t._v(" "),e("li",{staticClass:"icon search-icon"},[e("button",{staticClass:"search-trigger",on:{click:function(e){return t.searchPopUpOpen("addClass","open")}}},[e("i",{staticClass:"icon-2"})])]),t._v(" "),e("li",{staticClass:"icon light-dark-icon"},[e("ColorMode")],1),t._v(" "),e("li",{staticClass:"header-btn"},[e("n-link",{staticClass:"edu-btn btn-medium btn-curved",attrs:{to:"/contact-us"}},[t._v("Try for free "),e("i",{staticClass:"icon-4"})])],1),t._v(" "),e("li",{staticClass:"mobile-menu-bar d-block d-xl-none"},[e("button",{staticClass:"hamberger-button",on:{click:function(e){return t.mobileMenuOpen("addClass","active")}}},[e("i",{staticClass:"icon-54"})])])])])])])]),t._v(" "),e("SearchPopUp"),t._v(" "),e("OffCanvasMobileMenuOne")],1)}),[function(){var t=this._self._c;return t("li",{staticClass:"search-bar"},[t("div",{staticClass:"input-group"},[t("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search"}}),this._v(" "),t("button",{staticClass:"search-btn",attrs:{type:"button"}},[t("i",{staticClass:"icon-2"})])])])}],!1,null,null,null);e.default=component.exports},576:function(t,e,n){"use strict";n.r(e);var o=n(18),component=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"edu-footer footer-kindergarten footer-style-6"},[e("div",{staticClass:"footer-top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-lg-3 col-md-6 col-sm-12 col-12"},[e("div",{staticClass:"edu-footer-widget"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo-dark",attrs:{src:"/images/logo/logo-white.png",alt:"Light Logo"}})])],1),t._v(" "),e("p",{staticClass:"description"},[t._v("Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore magna aliqua enim.")])])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"edu-footer-widget explore-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Online Platform")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("n-link",{attrs:{to:"/about-us-one"}},[t._v("About")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/course/course-one"}},[t._v("Courses")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/pricing-table"}},[t._v("Pricing Plan")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/instructor/instructor-one"}},[t._v("Instructor")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/event/event-grid"}},[t._v("Events")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[t._v("Instructor Profile")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"edu-footer-widget quick-link-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Links")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("n-link",{attrs:{to:"/faq"}},[t._v("FAQ's")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/gallery-grid"}},[t._v("Gallery")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-standard"}},[t._v("News & Articles")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/my-account"}},[t._v("Sign In")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])]),t._v(" "),t._m(0)])])]),t._v(" "),t._m(1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-md-6 col-sm-6 col-12"},[e("div",{staticClass:"edu-footer-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Contacts")]),t._v(" "),e("div",{staticClass:"inner"},[e("p",{staticClass:"description"},[t._v("Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor dolore.")]),t._v(" "),e("div",{staticClass:"widget-information"},[e("ul",{staticClass:"information-list"},[e("li",[e("span",[t._v("Add:")]),t._v("70-80 Upper St Norwich NR2")]),t._v(" "),e("li",[e("span",[t._v("Call:")]),e("a",{attrs:{href:"tel:+011235641231"}},[t._v("+01 123 5641 231")])]),t._v(" "),e("li",[e("span",[t._v("Email:")]),e("a",{attrs:{href:"mailto:info@edublink.com",target:"_blank"}},[t._v("info@edublink.com")])])])]),t._v(" "),e("ul",{staticClass:"social-share icon-transparent"},[e("li",[e("a",{staticClass:"color-fb",attrs:{href:"https://facebook.com/",target:"_blank"}},[e("i",{staticClass:"icon-facebook"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-linkd",attrs:{href:"https://linkedin.com/",target:"_blank"}},[e("i",{staticClass:"icon-linkedin2"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-ig",attrs:{href:"https://instagram.com/",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-twitter",attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-yt",attrs:{href:"https://youtube.com/",target:"_blank"}},[e("i",{staticClass:"icon-youtube"})])])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright-area bg-image"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"inner text-center"},[e("p",[t._v("Copyright 2022 "),e("a",{attrs:{href:"#",target:"_blank"}},[t._v("EduBlink")]),t._v(" Designed By "),e("a",{attrs:{href:"https://1.envato.market/YgGJbj",target:"_blank"}},[t._v("DevsBlink")]),t._v(". All Rights Reserved")])])])])])])}],!1,null,null,null);e.default=component.exports},656:function(t,e,n){"use strict";n.r(e);n(15),n(23),n(24);var o={components:{HeaderFour:function(){return Promise.resolve().then(n.bind(null,552))},Banner:function(){return n.e(60).then(n.bind(null,732))},About:function(){return n.e(58).then(n.bind(null,730))},Course:function(){return n.e(62).then(n.bind(null,734))},Activities:function(){return n.e(59).then(n.bind(null,731))},FAQ:function(){return n.e(64).then(n.bind(null,736))},Event:function(){return n.e(63).then(n.bind(null,735))},Blog:function(){return n.e(61).then(n.bind(null,733))},SubscriptionForm:function(){return n.e(65).then(n.bind(null,737))},FooterKindergarten:function(){return Promise.resolve().then(n.bind(null,576))}},head:function(){return{title:"Kindergarten"}}},l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderFour",{attrs:{showHeaderTop:"true"}}),t._v(" "),e("Banner"),t._v(" "),e("About"),t._v(" "),e("Course"),t._v(" "),e("Activities"),t._v(" "),e("FAQ"),t._v(" "),e("Event"),t._v(" "),e("Blog"),t._v(" "),e("SubscriptionForm"),t._v(" "),e("FooterKindergarten")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderFour:n(552).default,About:n(477).default,FooterKindergarten:n(576).default})}}]);