(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{495:function(t,e,n){"use strict";const o={_origin:"https://api.emailjs.com"},r=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(t){this.status=t.status,this.text=t.responseText}}const c=(t,data,e={})=>new Promise(((n,r)=>{const c=new XMLHttpRequest;c.addEventListener("load",(({target:t})=>{const e=new l(t);200===e.status||"OK"===e.text?n(e):r(e)})),c.addEventListener("error",(({target:t})=>{r(new l(t))})),c.open("POST",o._origin+t,!0),Object.keys(e).forEach((t=>{c.setRequestHeader(t,e[t])})),c.send(data)}));e.a={init:(t,e="https://api.emailjs.com")=>{o._userID=t,o._origin=e},send:(t,e,n,l)=>{const m=l||o._userID;r(m,t,e);const d={lib_version:"3.2.0",user_id:m,service_id:t,template_id:e,template_params:n};return c("/api/v1.0/email/send",JSON.stringify(d),{"Content-type":"application/json"})},sendForm:(t,e,form,n)=>{const l=n||o._userID,m=(form=>{let t;if(t="string"==typeof form?document.querySelector(form):form,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(form);r(l,t,e);const d=new FormData(m);return d.append("lib_version","3.2.0"),d.append("service_id",t),d.append("template_id",e),d.append("user_id",l),c("/api/v1.0/email/send-form",d)}}},694:function(t,e,n){"use strict";n.r(e);n(15),n(24),n(25),n(79);var o=n(495),r={components:{HeaderTwo:function(){return Promise.resolve().then(n.bind(null,516))},BreadCrumbTwo:function(){return n.e(3).then(n.bind(null,722))},FooterKitchen:function(){return Promise.resolve().then(n.bind(null,517))},MouseMove:function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,671))}},data:function(){return{resultText:"",showResult:!1}},methods:{sendEmail:function(t){var e=this;o.a.sendForm("service_bxh6md3","template_1g7v07n",this.$refs.form,"user_8Lx0gfI1ktOoeEN8DTV10").then((function(n){e.showResult=!0,e.resultText="Your message has been sent successfully. We will contact you soon.",setTimeout((function(){e.showResult=!1}),5e3),t.target.reset(),console.log("SUCCESS!",n.text)}),(function(t){e.showResult=!0,e.resultText=t.text,setTimeout((function(){e.showResult=!1}),5e3),console.log("FAILED...",t.text)}))}},head:function(){return{title:"Contact Me"}}},l=n(18),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[e("HeaderTwo"),t._v(" "),e("BreadCrumbTwo",{attrs:{title:"Faire une suggestion"}}),t._v(" "),e("section",{staticClass:"section-gap-equal contact-me-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-xl-9"},[e("div",{staticClass:"contact-me"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"thumbnail"},[t._m(0),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"1.4",imgSrc:"/images/about/shape-13.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"-1.4",imgSrc:"/images/counterup/shape-02.png"}}),t._v(" "),t._m(1)],1)]),t._v(" "),e("div",{staticClass:"contact-us-info"},[e("h3",{staticClass:"heading-title"},[t._v("Nos Coordonnées")]),t._v(" "),t._m(2),t._v(" "),e("ul",{staticClass:"social-share"},[e("li",[e("n-link",{attrs:{to:""}},[e("i",{staticClass:"icon-facebook"})])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:""}},[e("i",{staticClass:"icon-linkedin2"})])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:""}},[e("i",{staticClass:"icon-instagram"})])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:""}},[e("i",{staticClass:"icon-twitter"})])],1)])])])])])])])]),t._v(" "),e("section",{staticClass:"edu-section-gap contact-form-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8"},[e("div",{staticClass:"contact-form"},[t._m(3),t._v(" "),e("form",{ref:"form",staticClass:"rnt-contact-form rwt-dynamic-form",on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[e("div",{staticClass:"row row--10"},[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("div",{staticClass:"form-group col-12 text-center"},[t._m(8),t._v(" "),t.showResult?e("div",{staticClass:"col-12 success-msg"},[e("p",[t._v(t._s(t.resultText))])]):t._e()])])])])])])]),t._v(" "),e("ul",{staticClass:"shape-group"},[e("MouseMove",{attrs:{addClassName:"shape-1",dataDepth:"-2",imgSrc:"/images/about/shape-15.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-2",dataDepth:"2",imgSrc:"/images/cta/shape-04.png"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-3",dataDepth:"1"}}),t._v(" "),e("MouseMove",{attrs:{addClassName:"shape-4",dataDepth:"-2",imgSrc:"/images/about/shape-13.png"}})],1)]),t._v(" "),e("FooterKitchen")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"thumb"},[t("img",{attrs:{src:"/images/others/contact-me.jpg",alt:"Contact Me"}})])},function(){var t=this._self._c;return t("li",{staticClass:"shape-3"},[t("img",{attrs:{src:"/images/about/shape-07.png",alt:"Shape"}})])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"address-list"},[e("li",[e("h5",{staticClass:"title"},[t._v("Adresse")]),t._v(" "),e("p",[t._v("9F87+XJ3, RN 3, Cotonou, Bénin")])]),t._v(" "),e("li",[e("h5",{staticClass:"title"},[t._v("Email")]),t._v(" "),e("p",[e("a",{attrs:{href:"mailto:gec-citoyen@gouv.bj",target:"_blank"}},[t._v("gec-citoyen@gouv.bj")])])]),t._v(" "),e("li",[e("h5",{staticClass:"title"},[t._v("Téléphone")]),t._v(" "),e("p",[e("a",{attrs:{href:"tel:+22947135598"}},[t._v("(+229) 47 135 5 98")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"section-title section-center"},[t("h3",{staticClass:"title"},[this._v("Envoyez votre suggestion")])])},function(){var t=this._self._c;return t("div",{staticClass:"form-group col-lg-6"},[t("input",{attrs:{type:"text",name:"fullname",placeholder:"Nom"}})])},function(){var t=this._self._c;return t("div",{staticClass:"form-group col-lg-6"},[t("input",{attrs:{type:"email",name:"email",placeholder:"Email"}})])},function(){var t=this._self._c;return t("div",{staticClass:"form-group col-12"},[t("input",{attrs:{type:"tel",name:"phone",placeholder:"Téléphone"}})])},function(){var t=this._self._c;return t("div",{staticClass:"form-group col-12"},[t("textarea",{attrs:{name:"message",cols:"30",rows:"6",placeholder:"Votre message"}})])},function(){var t=this._self._c;return t("button",{staticClass:"rn-btn edu-btn submit-btn",attrs:{name:"submit",type:"submit"}},[this._v("Soumettre "),t("i",{staticClass:"icon-4"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderTwo:n(516).default,FooterKitchen:n(517).default})}}]);