(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{640:function(t,e,n){"use strict";n.r(e);var r=function(){var t=document.querySelector(".rn-progress-parent path"),e=t.getTotalLength();t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray=e+" "+e,t.style.strokeDashoffset=e,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear";var n=function(){var n=window.pageYOffset,r=document.documentElement.scrollHeight-window.innerHeight,progress=e-n*e/r;t.style.strokeDashoffset=progress};n(),window.addEventListener("scroll",n);var r=document.querySelector(".rn-progress-parent");window.addEventListener("scroll",(function(){window.pageYOffset>150?r.classList.add("rn-backto-top-active"):document.querySelector(".rn-progress-parent").classList.remove("rn-backto-top-active")})),r.addEventListener("click",(function(t){return t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},o={mounted:function(){r()}},c=n(18),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"rn-progress-parent"},[t("svg",{staticClass:"rn-back-circle svg-inner",attrs:{width:"100%",height:"100%",viewBox:"-1 -1 102 102"}},[t("path",{attrs:{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"}})])])}),[],!1,null,null,null);e.default=component.exports}}]);