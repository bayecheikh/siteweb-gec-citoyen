(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{650:function(t,o,e){"use strict";e.r(o);var n,c=e(3),l=(e(16),e(41),e(12),e(281),e(58),{modules:["@nuxtjs/axios"],axios:{baseURL:"https://api-gec-citoyen.fly.dev"},mounted:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var o,e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get("/faqs");case 3:o=t.sent,e=o.data.data.data.filter((function(t){return"6452491c5c298902251329bc"===t.categorie.id})),n=e.sort((function(a,b){return new Date(b.createdAt)-new Date(a.createdAt)})),this.faqs=n.slice(0,4),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return");case 13:console.log("FAQS",this.faqs);case 14:case"end":return t.stop()}}),t,this,[[0,9]])}))),function(){return n.apply(this,arguments)}),data:function(){return{faqs:[]}}}),r=l,d=e(18),component=Object(d.a)(r,(function(){var t,o,e,n,c,l,r,d,v,f,_,h,C=this,w=C._self._c;return w("div",{staticClass:"faq-accordion",attrs:{id:"faq-accordion"}},[w("div",{staticClass:"accordion"},[(null===(t=C.faqs)||void 0===t?void 0:t.length)>0&&null!==(o=C.faqs[0])&&void 0!==o&&o.question&&null!==(e=C.faqs[0])&&void 0!==e&&e.response?w("div",{staticClass:"accordion-item"},[w("h5",{staticClass:"accordion-header"},[w("button",{staticClass:"accordion-button",attrs:{type:"button",color:"rgb(0, 128, 100)","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true"}},[C._v("\n                    "+C._s(C.faqs[0].question)+"\n                ")])]),C._v(" "),w("div",{staticClass:"accordion-collapse collapse show",attrs:{id:"collapseOne","data-bs-parent":"#faq-accordion"}},[w("div",{staticClass:"accordion-body"},[w("p",[C._v(" "+C._s(C.faqs[0].response))])])])]):C._e(),C._v(" "),(null===(n=C.faqs)||void 0===n?void 0:n.length)>0&&null!==(c=C.faqs[1])&&void 0!==c&&c.question&&null!==(l=C.faqs[1])&&void 0!==l&&l.response?w("div",{staticClass:"accordion-item"},[w("h5",{staticClass:"accordion-header"},[w("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false"}},[C._v("\n                    "+C._s(C.faqs[1].question)+"\n                ")])]),C._v(" "),w("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseTwo","data-bs-parent":"#faq-accordion"}},[w("div",{staticClass:"accordion-body"},[w("p",[C._v("  "+C._s(C.faqs[1].response))])])])]):C._e(),C._v(" "),(null===(r=C.faqs)||void 0===r?void 0:r.length)>0&&null!==(d=C.faqs[2])&&void 0!==d&&d.question&&null!==(v=C.faqs[2])&&void 0!==v&&v.response?w("div",{staticClass:"accordion-item"},[w("h5",{staticClass:"accordion-header"},[w("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false"}},[C._v("\n                    "+C._s(C.faqs[2].question)+"\n                ")])]),C._v(" "),w("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseThree","data-bs-parent":"#faq-accordion"}},[w("div",{staticClass:"accordion-body"},[w("p",[C._v("  "+C._s(C.faqs[2].response))])])])]):C._e(),C._v(" "),(null===(f=C.faqs)||void 0===f?void 0:f.length)>0&&null!==(_=C.faqs[3])&&void 0!==_&&_.question&&null!==(h=C.faqs[3])&&void 0!==h&&h.response?w("div",{staticClass:"accordion-item"},[w("h5",{staticClass:"accordion-header"},[w("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseFour","aria-expanded":"false"}},[C._v("\n                    "+C._s(C.faqs[3].question)+"\n                ")])]),C._v(" "),w("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseFour","data-bs-parent":"#faq-accordion"}},[w("div",{staticClass:"accordion-body"},[w("p",[C._v("  "+C._s(C.faqs[3].response))])])])]):C._e()])])}),[],!1,null,null,null);o.default=component.exports}}]);