(window.webpackJsonp=window.webpackJsonp||[]).push([[179,27],{474:function(t){t.exports=JSON.parse('{"instructors":[{"imgSrc":"team-01.jpg","name":"Jane Seymour","designation":"UI Designer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-02.jpg","name":"Edward Norton","designation":"Web Developer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-03.jpg","name":"Penelope Cruz","designation":"Digital Marketer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-04.jpg","name":"John Travolta","designation":"WordPress Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-05.jpg","name":"Hilary Swank","designation":"Laravel Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-06.jpg","name":"Steve Martin","designation":"App Developer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-07.jpg","name":"Louis Vargas","designation":"WordPress Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-08.jpg","name":"Tamara Wilson","designation":"Affiliate Markeer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]}],"yogaInstructors":[{"imgSrc":"team-01.jpg","name":"Jane Seymour","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-02.jpg","name":"Edward Norton","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-03.jpg","name":"Penelope Cruz","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]}]}')},489:function(t,e,n){"use strict";n.r(e);n(37);var o={props:["instructor"]},c=n(18),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"edu-team-grid team-style-1"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail-wrap"},[e("div",{staticClass:"thumbnail"},[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[e("img",{attrs:{src:"/images/team/team-01/"+t.instructor.imgSrc,alt:t.instructor.name+" Thumbnail"}})])],1),t._v(" "),e("ul",{staticClass:"team-share-info"},[t._m(0),t._v(" "),t._l(t.instructor.socialLinks,(function(t,n){return e("li",{key:n},[e("a",{attrs:{"aria-label":t.name,href:t.url}},[e("i",{class:t.iconName})])])}))],2)]),t._v(" "),e("div",{staticClass:"content"},[e("h5",{staticClass:"title"},[e("n-link",{attrs:{to:"/instructor/instructor-profile"}},[t._v(t._s(t.instructor.name))])],1),t._v(" "),e("span",{staticClass:"designation"},[t._v(t._s(t.instructor.designation))])])])])}),[function(){var t=this._self._c;return t("li",[t("a",{attrs:{href:"#"}},[t("i",{staticClass:"icon-share-alt"})])])}],!1,null,null,null);e.default=component.exports},677:function(t,e,n){"use strict";n.r(e);n(51),n(15),n(23),n(24),n(79);var o=n(474),c={components:{HeaderOne:function(){return Promise.resolve().then(n.bind(null,251))},InstructorOne:function(){return Promise.resolve().then(n.bind(null,489))},FooterOne:function(){return Promise.resolve().then(n.bind(null,252))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,641))}},data:function(){return{instructorData:o}},mounted:function(){var t=6e4,e=60*t,n=24*e,o=new Date("Dec 31, 2022 00:00:00").getTime();setInterval((function(){var c=(new Date).getTime(),r=o-c,l=Math.floor(r/n),d=Math.floor(r%n/e),m=Math.floor(r%e/t),w=Math.floor(r%t/1e3);document.getElementById("days").innerText=l>9?l:"0".concat(l),document.getElementById("hours").innerText=d>9?d:"0".concat(d),document.getElementById("minutes").innerText=m>9?m:"0".concat(m),document.getElementById("seconds").innerText=w>9?w:"0".concat(w)}),1e3)},head:function(){return{title:"Event Details"}}},r=n(18),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderOne"),t._v(" "),e("div",{staticClass:"edu-breadcrumb-area breadcrumb-style-4"},[t._m(0),t._v(" "),e("ul",{staticClass:"shape-group"},[t._m(1),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"2",imgSrc:"/images/about/shape-13.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"-2",imgSrc:"/images/about/shape-15.png"}}),t._v(" "),t._m(2),t._v(" "),t._m(3)],1)]),t._v(" "),e("section",{staticClass:"event-details-area edu-section-gap"},[e("div",{staticClass:"container"},[t._m(4),t._v(" "),e("div",{staticClass:"event-speaker"},[e("h3",{staticClass:"heading-title"},[t._v("Event Speakers")]),t._v(" "),e("div",{staticClass:"row g-5"},t._l(t.instructorData.instructors.slice(0,4),(function(t,n){return e("div",{key:n,staticClass:"col-lg-3 col-sm-6 col-12",attrs:{"data-aos-delay":"50","data-aos":"fade-up","data-aos-duration":"800"}},[e("InstructorOne",{attrs:{instructor:t}})],1)})),0)])])]),t._v(" "),e("FooterOne")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"breadcrumb-inner"},[e("div",{staticClass:"page-title"},[e("span",{staticClass:"pre-title"},[t._v("UPCOMING EVENT")]),t._v(" "),e("h1",{staticClass:"title"},[t._v("Global Education Fall Meeting for Everyone")])]),t._v(" "),e("ul",{staticClass:"course-meta"},[e("li",[e("i",{staticClass:"icon-27"}),t._v("Oct 10, 2022")]),t._v(" "),e("li",[e("i",{staticClass:"icon-33"}),t._v("08:00AM-10:00PM")]),t._v(" "),e("li",[e("i",{staticClass:"icon-40"}),t._v("Newyork City, USA")])])])])},function(){var t=this._self._c;return t("li",{staticClass:"shape-1"},[t("span")])},function(){var t=this._self._c;return t("li",{staticClass:"shape-4"},[t("span")])},function(){var t=this._self._c;return t("li",{staticClass:"shape-5"},[t("img",{attrs:{src:"/images/about/shape-07.png",alt:"shape"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"event-details"},[e("div",{staticClass:"main-thumbnail"},[e("img",{attrs:{src:"/images/event/event-details/event-details-main.jpg",alt:"Event"}})]),t._v(" "),e("div",{staticClass:"row row--30"},[e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"details-content"},[e("h3",[t._v("About The Event")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.")]),t._v(" "),e("p",[t._v("Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.")]),t._v(" "),e("ul",[e("li",[t._v("Aute irure dolor in reprehenderit")]),t._v(" "),e("li",[t._v("Occaecat cupidatat non proident sunt in culpa")]),t._v(" "),e("li",[t._v("Pariatur enim ipsam.")])]),t._v(" "),e("h3",[t._v("Event Location")]),t._v(" "),e("p",[t._v("Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam. ")]),t._v(" "),e("ul",{staticClass:"event-meta"},[e("li",[e("i",{staticClass:"icon-40"}),t._v("Newyork City, USA")]),t._v(" "),e("li",[e("i",{staticClass:"icon-71"}),e("a",{attrs:{href:"tel:012(345)6789"}},[t._v("+012 (345) 6789")])])]),t._v(" "),e("div",{staticClass:"gmap_canvas"},[e("iframe",{attrs:{id:"gmap_canvas",src:"https://maps.google.com/maps?q=melbourne,%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}})])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"course-sidebar-3"},[e("div",{staticClass:"edu-course-widget widget-course-summery"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"content"},[e("h4",{staticClass:"widget-title"},[t._v("Event Info")]),t._v(" "),e("ul",{staticClass:"course-item"},[e("li",[e("span",{staticClass:"label"},[e("i",{staticClass:"icon-60"}),t._v("Cost:")]),t._v(" "),e("span",{staticClass:"value price"},[t._v("$70.00")])]),t._v(" "),e("li",[e("span",{staticClass:"label"},[e("i",{staticClass:"icon-70"}),t._v("Total Slot:")]),t._v(" "),e("span",{staticClass:"value"},[t._v("30")])]),t._v(" "),e("li",[e("span",{staticClass:"label"},[e("i",{staticClass:"icon-68"}),t._v("Booked Slot:")]),t._v(" "),e("span",{staticClass:"value"},[t._v("2")])])]),t._v(" "),e("div",{staticClass:"read-more-btn"},[e("a",{staticClass:"edu-btn",attrs:{href:"#"}},[t._v("Book Now "),e("i",{staticClass:"icon-4"})])]),t._v(" "),e("div",{staticClass:"countdown"},[e("div",{staticClass:"countdown-section"},[e("div",[e("div",{staticClass:"countdown-number day",attrs:{id:"days"}}),t._v(" "),e("div",{staticClass:"countdown-unit"},[t._v("Days")])])]),t._v(" "),e("div",{staticClass:"countdown-section"},[e("div",[e("div",{staticClass:"countdown-number hour",attrs:{id:"hours"}}),t._v(" "),e("div",{staticClass:"countdown-unit"},[t._v("Hrss")])])]),t._v(" "),e("div",{staticClass:"countdown-section"},[e("div",[e("div",{staticClass:"countdown-number minute",attrs:{id:"minutes"}}),t._v(" "),e("div",{staticClass:"countdown-unit"},[t._v("Mints")])])]),t._v(" "),e("div",{staticClass:"countdown-section"},[e("div",[e("div",{staticClass:"countdown-number second",attrs:{id:"seconds"}}),t._v(" "),e("div",{staticClass:"countdown-unit"},[t._v("Sec")])])])])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderOne:n(251).default,InstructorOne:n(489).default,FooterOne:n(252).default})}}]);