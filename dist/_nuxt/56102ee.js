(window.webpackJsonp=window.webpackJsonp||[]).push([[200,156],{497:function(t){t.exports=JSON.parse('[{"id":1,"title":"Natural Science Project","price":"70.00","imgSrc":"product-01.jpg","rating":4.8},{"id":2,"title":"The King of Drugs","price":"45.00","imgSrc":"product-02.jpg","rating":4.9},{"id":3,"title":"The Silver Chair","price":"95.00","imgSrc":"product-03.jpg","rating":5},{"id":4,"title":"Ray Brandbury","price":"35.00","imgSrc":"product-04.jpg","rating":4.7},{"id":5,"title":"Educated A Memoir","price":"80.00","imgSrc":"product-05.jpg","rating":4.9},{"id":6,"title":"Sing To It","price":"55.00","imgSrc":"product-06.jpg","rating":5},{"id":7,"title":"Harry Potter","price":"35.00","imgSrc":"product-07.jpg","rating":4.6},{"id":8,"title":"Code Breaker","price":"90.00","imgSrc":"product-08.jpg","rating":5},{"id":9,"title":"Vanguard","price":"45.00","imgSrc":"product-09.jpg","rating":5},{"id":10,"title":"Arctic Sea","price":"60.00","imgSrc":"product-10.jpg","rating":5},{"id":11,"title":"Secret Sky","price":"75.00","imgSrc":"product-11.jpg","rating":4.9},{"id":12,"title":"Women Who Launch","price":"80.00","imgSrc":"product-12.jpg","rating":5}]')},558:function(t,r,e){"use strict";e.r(r);var n={props:["extraClass","product"]},c=e(18),component=Object(c.a)(n,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"edu-product",class:t.product.colorClass},[r("div",{staticClass:"inner"},[r("div",{staticClass:"thumbnail"},[r("n-link",{attrs:{to:"/shop/product-details"}},[r("img",{attrs:{src:"/images/shop/"+t.product.imgSrc,alt:t.product.title+" Thumbnail"}})]),t._v(" "),r("div",{staticClass:"product-hover-info"},[r("ul",[r("li",[r("n-link",{attrs:{to:"/shop/product-details",role:"button"}},[r("i",{staticClass:"icon-2"})])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/shop/wishlist"}},[r("i",{staticClass:"icon-22"})])],1),t._v(" "),r("li",[r("n-link",{attrs:{to:"/shop/cart"}},[r("i",{staticClass:"icon-3"})])],1)])])],1),t._v(" "),r("div",{staticClass:"content"},[r("h6",{staticClass:"title"},[r("n-link",{attrs:{to:"/shop/product-details"}},[t._v(t._s(t.product.title))])],1),t._v(" "),r("div",{staticClass:"product-rating"},[t._m(0),t._v(" "),r("span",{staticClass:"rating-count"},[t._v("("+t._s(t.product.rating)+")")])]),t._v(" "),r("div",{staticClass:"price"},[t._v("$"+t._s(t.product.price))])])])])}),[function(){var t=this,r=t._self._c;return r("div",{staticClass:"rating"},[r("i",{staticClass:"icon-23"}),t._v(" "),r("i",{staticClass:"icon-23"}),t._v(" "),r("i",{staticClass:"icon-23"}),t._v(" "),r("i",{staticClass:"icon-23"}),t._v(" "),r("i",{staticClass:"icon-23"})])}],!1,null,null,null);r.default=component.exports},661:function(t,r,e){"use strict";e.r(r);e(15),e(23),e(24);var n=e(497),c={components:{HeaderOne:function(){return Promise.resolve().then(e.bind(null,251))},BreadCrumbTwo:function(){return e.e(3).then(e.bind(null,689))},ProductOne:function(){return Promise.resolve().then(e.bind(null,558))},PaginationOne:function(){return e.e(13).then(e.bind(null,782))},FooterOne:function(){return Promise.resolve().then(e.bind(null,252))}},data:function(){return{productsData:n}},head:function(){return{title:"Shop Page"}}},o=e(18),component=Object(o.a)(c,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[r("HeaderOne"),t._v(" "),r("BreadCrumbTwo",{attrs:{pageTitle:"Shop Page",title:"Shop"}}),t._v(" "),r("section",{staticClass:"shop-page-area section-gap-equal"},[r("div",{staticClass:"container"},[r("div",{staticClass:"edu-sorting-area"},[r("div",{staticClass:"sorting-left"},[r("h6",{staticClass:"showing-text"},[t._v("We found "),r("span",[t._v(t._s(t.productsData.length))]),t._v(" books available for you")])]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"row g-5"},t._l(t.productsData,(function(t){return r("div",{key:t.id,staticClass:"col-lg-3 col-md-4 col-sm-6"},[r("ProductOne",{attrs:{product:t}})],1)})),0),t._v(" "),r("PaginationOne")],1)]),t._v(" "),r("FooterOne")],1)}),[function(){var t=this,r=t._self._c;return r("div",{staticClass:"sorting-right"},[r("div",{staticClass:"edu-sorting"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"icon-55"})]),t._v(" "),r("select",{staticClass:"edu-select"},[r("option",[t._v("Filters")]),t._v(" "),r("option",[t._v("Low To High")]),t._v(" "),r("option",[t._v("High Low To")]),t._v(" "),r("option",[t._v("Last Viewed")])])])])}],!1,null,null,null);r.default=component.exports;installComponents(component,{HeaderOne:e(251).default,ProductOne:e(558).default,FooterOne:e(252).default})}}]);