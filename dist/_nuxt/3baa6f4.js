(window.webpackJsonp=window.webpackJsonp||[]).push([[209,108,111,134,137],{480:function(t,e,o){"use strict";o.r(e);var n=o(481),r={props:["number","decimal","suffix","duration","startVal"],components:{countTo:o.n(n).a},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},l=o(18),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("span",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true}"}]},[t.isVisible?e("countTo",{attrs:{startVal:t.startVal?t.startVal:0,endVal:t.number,duration:t.duration?t.duration:3e3,autoplay:!0,decimals:t.decimal?t.decimal:null}}):t._e(),t._v(" "),t.suffix?e("span",{staticClass:"edu-vue-count-suffix"},[t._v(t._s(t.suffix))]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},481:function(t,e,o){t.exports=function(t){function e(o){if(i[o])return i[o].exports;var a=i[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var o=i(4)(i(1),i(5),null,null);t.exports=o.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,o){return i*(1-Math.pow(2,-10*t/o))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,o.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,o.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,o.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,o.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,o.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],o=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+o+this.suffix}},destroyed:function(){(0,o.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=0,a="webkit moz ms o".split(" "),n=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=n=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=n=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!n||!r);u++)s=a[u],e.requestAnimationFrame=n=n||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];n&&r||(e.requestAnimationFrame=n=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-o)),a=window.setTimeout((function(){t(e+i)}),i);return o=e+i,a},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=n,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,i,o){var a,n=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(a=t,n=t.default);var s="function"==typeof n?n.options:n;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),o){var u=Object.create(s.computed||null);Object.keys(o).forEach((function(t){var e=o[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:n,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},485:function(t,e,o){"use strict";o.r(e);o(15),o(24),o(25);var n={components:{SectionTitle:function(){return o.e(2).then(o.bind(null,659))},MouseMove:function(){return Promise.all([o.e(1),o.e(0)]).then(o.bind(null,667))}}},r=o(18),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-section-gap edu-about-area about-style-8"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-content"},[e("SectionTitle",{attrs:{preTitle:"About Us",title:'We Provide Best <span class="color-secondary">Education</span> Services For You.',subTitle:"Magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incididunt labore.",alignment:"section-left"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"about-image-gallery"},[t._m(1),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2",imgSrc:"/images/about/shape-33.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-25.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-2",imgSrc:"/images/about/shape-13.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-4",dataDepth:".8","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})],1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-mission"},[e("div",{staticClass:"single-item",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"icon color-extra02"},[e("i",{staticClass:"icon-51"})]),t._v(" "),e("div",{staticClass:"content"},[e("h4",{staticClass:"title"},[t._v("Our Mission")]),t._v(" "),e("p",[t._v("Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.")])])]),t._v(" "),e("div",{staticClass:"single-item",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[e("div",{staticClass:"icon color-extra06"},[e("i",{staticClass:"icon-52"})]),t._v(" "),e("div",{staticClass:"content"},[e("h4",{staticClass:"title"},[t._v("Our Vision")]),t._v(" "),e("p",[t._v("Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-6 masonry-item"},[e("div",{staticClass:"thumbnail thumbnail-1 mb--30",attrs:{"data-aos-delay":"50","data-aos":"fade-down","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-13.jpg",alt:"About Images"}})]),t._v(" "),e("div",{staticClass:"thumbnail thumbnail-4",attrs:{"data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-15.jpg",alt:"About Images"}})])]),t._v(" "),e("div",{staticClass:"col-6 masonry-item"},[e("div",{staticClass:"thumbnail thumbnail-2 mb--30",attrs:{alt:"About Images","data-aos-delay":"50","data-aos":"fade-down","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-14.jpg"}})]),t._v(" "),e("div",{staticClass:"thumbnail thumbnail-4",attrs:{alt:"About Images","data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"1000"}},[e("img",{attrs:{src:"/images/about/about-16.jpg",alt:"About Images"}})])])])}],!1,null,null,null);e.default=component.exports},509:function(t,e,o){var content=o(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("78c11156",content,!0,{sourceMap:!1})},527:function(t,e,o){"use strict";o(509)},528:function(t,e,o){var n=o(49)(!1);n.push([t.i,':root{--color-primary:#0a3764;--color-secondary:#ee4a62;--color-textSecondary:#ff5b5c;--color-tertiary:#f8b81f;--color-dark:#111212;--color-heading:#181818;--dark-color-heading:#fff;--color-border:#e5e5e5;--dark-color-border:#282f3a;--color-body:grey;--gradient-primary:linear-gradient(-90deg,#0a3764,#0e4985);--bg-color:#eaf0f2;--dark-bg-color:#020b17;--cta-color-bg:#f0f4f5;--color-bg-body:#fff;--dark-color-bg-body:#111822;--bg-color-2:#1c242f;--color-white:#fff;--color-black:#000;--footer-text:#181818;--dark-footer-text:grey;--edu-btn-color:#fff;--color-title:#bababa;--color-lighten01:#f0f4f5;--color-lighten02:#edf5f8;--color-lighten03:#f5f1eb;--color-lighten04:#f7f5f2;--color-extra01:#0ecd73;--color-extra02:#8e56ff;--color-extra03:#f92596;--color-extra04:#5866eb;--color-extra05:#f8941f;--color-extra06:#39c0fa;--color-extra07:#da04f8;--color-extra08:#4664e4;--color-extra09:#525151;--color-extra10:#404040;--color-extra11:#22272e;--color-success:#3eb75e;--color-danger:#ff0003;--color-warning:#ff8f3c;--color-info:#1ba2db;--color-placeholder:grey;--color-facebook:#1877f2;--color-twitter:#1da1f2;--color-youtube:#cd201f;--color-linkedin:#0a66c2;--color-pinterest:#e60022;--color-instagram:#c231a1;--color-vimeo:#00adef;--color-twitch:#6441a3;--color-discord:#7289da;--border-width:2px;--radius-small:4px;--radius:10px;--radius-big:16px;--p-light:300;--p-regular:400;--p-medium:500;--p-semi-bold:600;--p-bold:700;--p-extra-bold:800;--shadow-darker:0px 10px 50px 0px rgba(26,46,85,0.1);--shadow-darker2:0px 20px 50px 0px rgba(26,46,85,0.1);--shadow-dark:0px 10px 30px 0px rgba(20,36,66,0.15);--shadow-darkest:0px 10px 30px 0px rgba(0,0,0,0.05);--transition:0.3s;--transition-2:0.5s;--transition-transform:transform .65s cubic-bezier(.23,1,.32,1);--font-primary:"Poppins",sans-serif;--font-secondary:"Spartan",sans-serif;--font-icomoon:"icomoon";--font-size-b1:15px;--font-size-b2:13px;--line-height-b1:1.73;--line-height-b2:1.85;--h1:50px;--h2:36px;--h3:28px;--h4:20px;--h5:18px;--h6:16px;--h1-lineHeight:1.2;--h2-lineHeight:1.39;--h3-lineHeight:1.43;--h4-lineHeight:1.4;--h5-lineHeight:1.45;--h6-lineHeight:1.62}.testimonial-area-2 .swiper-pagination{text-align:center}',""]),t.exports=n},575:function(t,e,o){"use strict";o.r(e);o(15),o(24),o(25);var n={components:{SectionTitle:function(){return o.e(2).then(o.bind(null,659))},MouseMove:function(){return Promise.all([o.e(1),o.e(0)]).then(o.bind(null,667))}},data:function(){return{swiperOptions:{slidesPerView:1,spaceBetween:0,loop:!0,grabCursor:!0,speed:1e3,autoplay:{delay:3e3},breakpoints:{768:{slidesPerView:2},992:{slidesPerView:3}},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}}}},r=(o(527),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"testimonial-area-2 section-gap-large"},[e("div",{staticClass:"container edublink-animated-shape"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-6"},[e("SectionTitle",{attrs:{preTitle:"Testimonials",title:"What Our Students <br> Have To Say",subTitle:"Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incidid unt labore dolore magna aliquaenim minim.",alignment:"section-center"}})],1)]),t._v(" "),e("swiper",{staticClass:"testimonial-activation swiper",attrs:{options:t.swiperOptions}},[e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-slide"},[e("div",{staticClass:"content"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/images/testimonial/logo-01.png",alt:"Logo"}})]),t._v(" "),e("p",[t._v("Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})])]),t._v(" "),e("div",{staticClass:"author-info"},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:"/images/testimonial/testimonial-01.png",alt:"Testimonial"}})]),t._v(" "),e("div",{staticClass:"info"},[e("h5",{staticClass:"title"},[t._v("Ray Sanchez")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Student")])])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-slide"},[e("div",{staticClass:"content"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/images/testimonial/logo-02.png",alt:"Logo"}})]),t._v(" "),e("p",[t._v("Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})])]),t._v(" "),e("div",{staticClass:"author-info"},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:"/images/testimonial/testimonial-02.png",alt:"Testimonial"}})]),t._v(" "),e("div",{staticClass:"info"},[e("h5",{staticClass:"title"},[t._v("Thomas Lopez")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Designer")])])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-slide"},[e("div",{staticClass:"content"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/images/testimonial/logo-03.png",alt:"Logo"}})]),t._v(" "),e("p",[t._v("Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})])]),t._v(" "),e("div",{staticClass:"author-info"},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:"/images/testimonial/testimonial-03.png",alt:"Testimonial"}})]),t._v(" "),e("div",{staticClass:"info"},[e("h5",{staticClass:"title"},[t._v("Amber Page")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Developer")])])])])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"testimonial-slide"},[e("div",{staticClass:"content"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/images/testimonial/logo-02.png",alt:"Logo"}})]),t._v(" "),e("p",[t._v("Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.")]),t._v(" "),e("div",{staticClass:"rating-icon"},[e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"}),t._v(" "),e("i",{staticClass:"icon-23"})])]),t._v(" "),e("div",{staticClass:"author-info"},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:"/images/testimonial/testimonial-04.png",alt:"Testimonial"}})]),t._v(" "),e("div",{staticClass:"info"},[e("h5",{staticClass:"title"},[t._v("Robert Tapp")]),t._v(" "),e("span",{staticClass:"subtitle"},[t._v("Content Creator")])])])])])]),t._v(" "),e("div",{staticClass:"swiper-pagination"}),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"1.4",imgSrc:"/images/about/shape-30.png","data-aos-delay":"200","data-aos":"fade","data-aos-duration":"1000"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-1.4",imgSrc:"/images/about/shape-25.png","data-aos-delay":"200","data-aos":"fade","data-aos-duration":"1000"}})],1)],1),t._v(" "),t._m(0)])}),[function(){var t=this._self._c;return t("ul",{staticClass:"shape-group"},[t("li",{staticClass:"shape-3"},[t("img",{staticClass:"d-block-shape-light",attrs:{"data-depth":"2",src:"/images/others/map-shape-3.png",alt:"Shape"}}),this._v(" "),t("img",{staticClass:"d-none-shape-dark",attrs:{"data-depth":"2",src:"/images/others/dark-map-2-shape-3.png",alt:"Shape"}})])])}],!1,null,null,null);e.default=component.exports},592:function(t,e,o){"use strict";o.r(e);var n=o(18),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"edu-footer footer-dark bg-image footer-style-3"},[e("div",{staticClass:"footer-top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row g-5"},[e("div",{staticClass:"col-lg-3 col-md-6"},[e("div",{staticClass:"edu-footer-widget"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo-light",attrs:{src:"/images/logo/logo-light-2.png",alt:"Dark Logo"}})])],1),t._v(" "),e("p",{staticClass:"description"},[t._v("Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.")]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"edu-footer-widget explore-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Online Platform")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("n-link",{attrs:{to:"/about-us-one"}},[t._v("About")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/course/course-one"}},[t._v("Courses")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/pricing-table"}},[t._v("Pricing Plan")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/instructor/instructor-one"}},[t._v("Instructor")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/event/event-grid"}},[t._v("Events")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[t._v("Instructor Profile")])],1)])])])]),t._v(" "),e("div",{staticClass:"col-lg-2 col-sm-6"},[e("div",{staticClass:"edu-footer-widget quick-link-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Links")]),t._v(" "),e("div",{staticClass:"inner"},[e("ul",{staticClass:"footer-link link-hover"},[e("li",[e("n-link",{attrs:{to:"/faq"}},[t._v("FAQ's")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/gallery-grid"}},[t._v("Gallery")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog/blog-standard"}},[t._v("News & Articles")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/privacy-policy"}},[t._v("Privacy Policy")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/my-account"}},[t._v("Sign In")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact Us")])],1)])])])]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"copyright-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"inner text-center"},[e("p",[t._v("Copyright "+t._s((new Date).getFullYear())+" "),e("a",{attrs:{href:"#"}},[t._v("EduBlink")]),t._v(" Designed By "),e("a",{attrs:{href:"https://1.envato.market/YgGJbj",target:"_blank"}},[t._v("DevsBlink")]),t._v(". All Rights Reserved")])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"widget-information"},[e("ul",{staticClass:"information-list"},[e("li",[e("span",[t._v("Add:")]),t._v("70-80 Upper St Norwich NR2")]),t._v(" "),e("li",[e("span",[t._v("Call:")]),e("a",{attrs:{href:"tel:+011235641231"}},[t._v("+01 123 5641 231")])]),t._v(" "),e("li",[e("span",[t._v("Email:")]),e("a",{attrs:{href:"mailto:info@edublink.com",target:"_blank"}},[t._v("info@edublink.com")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-md-6"},[e("div",{staticClass:"edu-footer-widget"},[e("h4",{staticClass:"widget-title"},[t._v("Contacts")]),t._v(" "),e("div",{staticClass:"inner"},[e("p",{staticClass:"description"},[t._v("Enter your email address to register to our newsletter subscription")]),t._v(" "),e("div",{staticClass:"input-group footer-subscription-form"},[e("input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Your email"}}),t._v(" "),e("button",{staticClass:"edu-btn btn-secondary btn-medium",attrs:{type:"button"}},[t._v("Subscribe "),e("i",{staticClass:"icon-4"})])]),t._v(" "),e("ul",{staticClass:"social-share icon-transparent"},[e("li",[e("a",{staticClass:"color-fb",attrs:{href:"https://facebook.com/",target:"_blank"}},[e("i",{staticClass:"icon-facebook"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-linkd",attrs:{href:"https://linkedin.com/",target:"_blank"}},[e("i",{staticClass:"icon-linkedin2"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-ig",attrs:{href:"https://instagram.com/",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-twitter",attrs:{href:"https://twitter.com/",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})])]),t._v(" "),e("li",[e("a",{staticClass:"color-yt",attrs:{href:"https://youtube.com/",target:"_blank"}},[e("i",{staticClass:"icon-youtube"})])])])])])])}],!1,null,null,null);e.default=component.exports},690:function(t,e,o){"use strict";o.r(e);o(15),o(24),o(25);var n={components:{HeaderTwo:function(){return Promise.resolve().then(o.bind(null,574))},Banner:function(){return o.e(25).then(o.bind(null,789))},Features:function(){return o.e(28).then(o.bind(null,816))},About:function(){return o.e(24).then(o.bind(null,788))},FunFact:function(){return o.e(222).then(o.bind(null,664))},Course:function(){return o.e(95).then(o.bind(null,791))},Campus:function(){return o.e(26).then(o.bind(null,790))},TestimonialThree:function(){return Promise.resolve().then(o.bind(null,575))},VideoSection:function(){return o.e(29).then(o.bind(null,792))},ContactInfo:function(){return o.e(27).then(o.bind(null,815))},Event:function(){return o.e(9).then(o.bind(null,740))},Logo:function(){return o.e(31).then(o.bind(null,590))},CTA:function(){return o.e(4).then(o.bind(null,738))},FooterThree:function(){return Promise.resolve().then(o.bind(null,592))}},head:function(){return{title:"University"}}},r=o(18),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderTwo",{attrs:{showHeaderTop:"true"}}),t._v(" "),e("Banner"),t._v(" "),e("Features"),t._v(" "),e("About"),t._v(" "),e("FunFact"),t._v(" "),e("Course"),t._v(" "),e("Campus"),t._v(" "),e("TestimonialThree"),t._v(" "),e("VideoSection"),t._v(" "),e("ContactInfo"),t._v(" "),e("Event",{attrs:{extraClass:"event-area-1 gap-large-text"}}),t._v(" "),e("Logo"),t._v(" "),e("CTA",{attrs:{addClassName:"university-cta-wrapper",btnClass:"btn-secondary"}}),t._v(" "),e("FooterThree")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderTwo:o(574).default,About:o(485).default,FunFact:o(480).default,TestimonialThree:o(575).default,FooterThree:o(592).default})}}]);