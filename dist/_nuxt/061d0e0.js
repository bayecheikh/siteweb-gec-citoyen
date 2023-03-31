(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{503:function(e,t,o){"use strict";o(15),o(38);var n=o(504),r=o.n(n);t.a=function(){var e=document.querySelectorAll(".rellax");e&&e.forEach((function(e,t){new r.a(e)}))}},504:function(e,t,o){(function(o){var n,r,l;"undefined"!=typeof window&&window,r=[],void 0===(l="function"==typeof(n=function(){var e=function(t,o){"use strict";var n=Object.create(e.prototype),r=0,l=0,d=0,c=0,m=[],v=!0,f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},w=null,x=!1;try{var h=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("testPassive",null,h),window.removeEventListener("testPassive",null,h)}catch(e){}var y=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,A=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var o in t)if(void 0!==e.style[t[o]+"Transform"])return t[o]+"Transform"}return"transform"}();function C(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach((function(i){"number"!=typeof i&&(o=!1),null!==e&&i<e&&(t=!1),e=i})),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach((function(e){n.options[e]=o[e]})),o&&o.breakpoints&&C(),t||(t=".rellax");var _="string"==typeof t?document.querySelectorAll(t):[t];if(_.length>0){if(n.elems=_,n.options.wrapper&&!n.options.wrapper.nodeType){var z=document.querySelector(n.options.wrapper);if(!z)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=z}var T,S=function(e){var t=n.options.breakpoints;return e<t[0]?"xs":e>=t[0]&&e<t[1]?"sm":e>=t[1]&&e<t[2]?"md":"lg"},E=function(){for(var i=0;i<n.elems.length;i++){var e=k(n.elems[i]);m.push(e)}},L=function(){for(var i=0;i<m.length;i++)n.elems[i].style.cssText=m[i].style;m=[],l=window.innerHeight,c=window.innerWidth,T=S(c),O(),E(),animate(),v&&(window.addEventListener("resize",L),v=!1,X())},k=function(e){var t,o=e.getAttribute("data-rellax-percentage"),r=e.getAttribute("data-rellax-speed"),d=e.getAttribute("data-rellax-xs-speed"),m=e.getAttribute("data-rellax-mobile-speed"),v=e.getAttribute("data-rellax-tablet-speed"),f=e.getAttribute("data-rellax-desktop-speed"),w=e.getAttribute("data-rellax-vertical-speed"),x=e.getAttribute("data-rellax-horizontal-speed"),h=e.getAttribute("data-rellax-vertical-scroll-axis"),y=e.getAttribute("data-rellax-horizontal-scroll-axis"),A=e.getAttribute("data-rellax-zindex")||0,C=e.getAttribute("data-rellax-min"),_=e.getAttribute("data-rellax-max"),z=e.getAttribute("data-rellax-min-x"),S=e.getAttribute("data-rellax-max-x"),E=e.getAttribute("data-rellax-min-y"),L=e.getAttribute("data-rellax-max-y"),k=!0;d||m||v||f?t={xs:d,sm:m,md:v,lg:f}:k=!1;var O=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;n.options.relativeToWrapper&&(O=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var Y=n.options.vertical&&(o||n.options.center)?O:0,X=n.options.horizontal&&(o||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,R=Y+e.getBoundingClientRect().top,N=e.clientHeight||e.offsetHeight||e.scrollHeight,W=X+e.getBoundingClientRect().left,D=e.clientWidth||e.offsetWidth||e.scrollWidth,F=o||(Y-R+l)/(N+l),j=o||(X-W+c)/(D+c);n.options.center&&(j=.5,F=.5);var P=k&&null!==t[T]?Number(t[T]):r||n.options.speed,H=w||n.options.verticalSpeed,B=x||n.options.horizontalSpeed,I=h||n.options.verticalScrollAxis,J=y||n.options.horizontalScrollAxis,K=M(j,F,P,H,B),style=e.style.cssText,U="",G=/transform\s*:/i.exec(style);if(G){var Q=G.index,V=style.slice(Q),Z=V.indexOf(";");U=Z?" "+V.slice(11,Z).replace(/\s/g,""):" "+V.slice(11).replace(/\s/g,"")}return{baseX:K.x,baseY:K.y,top:R,left:W,height:N,width:D,speed:P,verticalSpeed:H,horizontalSpeed:B,verticalScrollAxis:I,horizontalScrollAxis:J,style:style,transform:U,zindex:A,min:C,max:_,minX:z,maxX:S,minY:E,maxY:L}},O=function(){var e=r,t=d;if(r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,d=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper){var o=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=o-n.options.wrapper.offsetTop}return!(e==r||!n.options.vertical)||!(t==d||!n.options.horizontal)},M=function(e,t,o,r,l){var d={},c=(l||o)*(100*(1-e)),m=(r||o)*(100*(1-t));return d.x=n.options.round?Math.round(c):Math.round(100*c)/100,d.y=n.options.round?Math.round(m):Math.round(100*m)/100,d},Y=function(){window.removeEventListener("resize",Y),window.removeEventListener("orientationchange",Y),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",Y),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",Y),w=f(X)},X=function(){O()&&!1===v?(animate(),w=f(X)):(w=null,window.addEventListener("resize",Y),window.addEventListener("orientationchange",Y),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",Y,!!x&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",Y,!!x&&{passive:!0}))},animate=function(){for(var e,i=0;i<n.elems.length;i++){var t=m[i].verticalScrollAxis.toLowerCase(),o=m[i].horizontalScrollAxis.toLowerCase(),v=-1!=t.indexOf("x")?r:0,f=-1!=t.indexOf("y")?r:0,w=-1!=o.indexOf("x")?d:0,x=(f+(-1!=o.indexOf("y")?d:0)-m[i].top+l)/(m[i].height+l),h=(v+w-m[i].left+c)/(m[i].width+c),y=(e=M(h,x,m[i].speed,m[i].verticalSpeed,m[i].horizontalSpeed)).y-m[i].baseY,C=e.x-m[i].baseX;null!==m[i].min&&(n.options.vertical&&!n.options.horizontal&&(y=y<=m[i].min?m[i].min:y),n.options.horizontal&&!n.options.vertical&&(C=C<=m[i].min?m[i].min:C)),null!=m[i].minY&&(y=y<=m[i].minY?m[i].minY:y),null!=m[i].minX&&(C=C<=m[i].minX?m[i].minX:C),null!==m[i].max&&(n.options.vertical&&!n.options.horizontal&&(y=y>=m[i].max?m[i].max:y),n.options.horizontal&&!n.options.vertical&&(C=C>=m[i].max?m[i].max:C)),null!=m[i].maxY&&(y=y>=m[i].maxY?m[i].maxY:y),null!=m[i].maxX&&(C=C>=m[i].maxX?m[i].maxX:C);var _=m[i].zindex,z="translate3d("+(n.options.horizontal?C:"0")+"px,"+(n.options.vertical?y:"0")+"px,"+_+"px) "+m[i].transform;n.elems[i].style[A]=z}n.options.callback(e)};return n.destroy=function(){for(var i=0;i<n.elems.length;i++)n.elems[i].style.cssText=m[i].style;v||(window.removeEventListener("resize",L),v=!0),y(w),w=null},L(),n.refresh=L,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e})?n.apply(t,r):n)||(e.exports=l)}).call(this,o(25))},718:function(e,t,o){"use strict";o.r(t);o(15),o(23),o(24);var n=o(503),r={components:{SectionTitle:function(){return o.e(2).then(o.bind(null,706))},MouseMove:function(){return Promise.all([o.e(1),o.e(0)]).then(o.bind(null,641))}},mounted:function(){Object(n.a)()}},l=o(18),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"gap-bottom-equal edu-about-area about-style-2"},[t("div",{staticClass:"container edublink-animated-shape"},[t("div",{staticClass:"row g-5 align-items-center"},[t("div",{staticClass:"col-lg-7"},[t("div",{staticClass:"about-image-gallery"},[t("img",{staticClass:"main-img-1",attrs:{src:"/images/about/about-03.jpg",alt:"About Image"}}),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),t("ul",{staticClass:"shape-group"},[t("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"2",imgSrc:"/images/about/shape-38.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),e._v(" "),t("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-2",imgSrc:"/images/about/shape-37.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}}),e._v(" "),t("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"1.8",imgSrc:"/images/about/shape-04.png","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})],1)])]),e._v(" "),t("div",{staticClass:"col-lg-5"},[t("div",{staticClass:"about-content"},[t("SectionTitle",{attrs:{preTitle:"About Us",title:'Over 10 Years in <span class="color-secondary">Distant learning</span> for Skill Development',alignment:"section-left",subTitle:"Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim."}}),e._v(" "),e._m(2)],1)])]),e._v(" "),t("ul",{staticClass:"shape-group"},[t("MouseMove",{attrs:{addClassName:"shape-1 circle",dataDepth:"-2.3","data-aos-delay":"500","data-aos":"fade","data-aos-duration":"200"}})],1)])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"author-box rellax",attrs:{"data-rellax-speed":"0.8","data-rellax-xs-speed":"0.8","data-rellax-mobile-speed":"0.5","data-rellax-tablet-speed":"0.5"}},[t("div",{staticClass:"inner"},[t("div",{staticClass:"thumb"},[t("img",{attrs:{src:"/images/about/shape-03.png",alt:"Shape Image"}})]),e._v(" "),t("div",{staticClass:"content"},[t("h4",{staticClass:"title"},[e._v("Ray Sanchez")]),e._v(" "),t("p",[e._v("Minim veniam nostrud exer citation.")])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"award-status bounce-slide"},[t("div",{staticClass:"inner"},[t("div",{staticClass:"icon"},[t("i",{staticClass:"icon-30"})]),e._v(" "),t("div",{staticClass:"content"},[t("h6",{staticClass:"title"},[e._v("20K+")]),e._v(" "),t("span",{staticClass:"subtitle"},[e._v("Enrolled Learners")])])])])},function(){var e=this,t=e._self._c;return t("ul",{staticClass:"features-list",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[t("li",[e._v("Expert Trainers")]),e._v(" "),t("li",[e._v("Online Remote Learning")]),e._v(" "),t("li",[e._v("Lifetime Access")])])}],!1,null,null,null);t.default=component.exports}}]);