(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{668:function(t,e,n){"use strict";n.r(e);n(15),n(38);var l=function(){document.querySelectorAll(".submenu-toggle").forEach((function(t){t.addEventListener("click",(function(){this.classList.contains("active")?(this.closest("li").classList.remove("active"),this.closest("li").querySelectorAll("li, .submenu-toggle, .submenu-wrapper").forEach((function(t){t.classList.remove("active")}))):(this.classList.add("active"),this.nextElementSibling.classList.add("active"),this.closest("li").classList.add("active"),function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}(this.closest("li")).forEach((function(t){t.classList.remove("active"),t.querySelectorAll("li, .submenu-toggle, .submenu-wrapper").forEach((function(t){t.classList.remove("active")}))})))}))}))},r={data:function(){return{menus:[{url:"/accueil",title:"Accueil"},{url:"",title:"Faire une suggestion"},{url:"",title:"Signaler un problème"},{url:"",title:"Nous contacter"},{url:"",title:"Se connecter"}]}},mounted:function(){l()}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"edublink-mobile-menu mainmenu"},t._l(t.menus,(function(link,i){return e("li",{key:i},[e("n-link",{attrs:{to:link.url}},[t._v("\n            "+t._s(link.title)+"\n        ")]),t._v(" "),link.submenu?e("span",{staticClass:"submenu-toggle"},[e("i",{staticClass:"ri-arrow-down-s-line"})]):t._e(),t._v(" "),link.submenu?e("ul",{staticClass:"submenu-wrapper"},t._l(link.submenu,(function(link,i){return e("li",{key:i,staticClass:"title"},[e("n-link",{attrs:{to:link.url}},[t._v(" "+t._s(link.title)+" ")]),t._v(" "),link.submenu?e("span",{staticClass:"submenu-toggle"},[e("i",{staticClass:"ri-arrow-down-s-line"})]):t._e(),t._v(" "),link.submenu?e("ul",{staticClass:"submenu-wrapper"},t._l(link.submenu,(function(link,i){return e("li",{key:i},[e("n-link",{attrs:{to:link.url}},[t._v(" "+t._s(link.title)+" ")])],1)})),0):t._e()],1)})),0):t._e()],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);