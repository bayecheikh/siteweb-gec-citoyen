(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{531:function(t,e,o){var content=o(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("be14236a",content,!0,{sourceMap:!1})},590:function(t,e,o){"use strict";o(531)},591:function(t,e,o){var r=o(49)(!1);r.push([t.i,".custom-template[data-v-71acb05f]{position:fixed!important;top:50%;left:34.8%;transform:translate(-50%,-50%);position:fixed;z-index:9999!important;box-shadow:0 0 20px 10px rgba(0,0,0,.2)!important;-webkit-backdrop-filter:blur(5px)!important;backdrop-filter:blur(5px)!important}.custom-close-btn[data-v-71acb05f]{position:absolute;top:0;right:0;background-color:transparent;border:none;color:grey;padding-right:15px;font-size:20px}.custom-nps-sign-in-btn[data-v-71acb05f]{cursor:pointer;background-color:#008064!important}.password-toggle[data-v-71acb05f]{position:absolute;top:56%;right:10px;cursor:pointer}.password-toggle.show-password i[data-v-71acb05f]{color:#838383}.password-toggle.hide-password i[data-v-71acb05f]:before{color:#4fa794}.custom-error-msg[data-v-71acb05f]{margin-top:25px!important;color:#ff5733!important}",""]),t.exports=r},698:function(t,e,o){"use strict";o.r(e);var r=o(22),n=(o(15),o(24),o(25),o(66),o(40),o(30),o(39),o(52),o(35),o(53),o(59));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={components:{SectionTitle:function(){return o.e(2).then(o.bind(null,697))}},mounted:function(){},computed:Object(n.b)({detailactive_step:"active_step/detailactive_step"}),data:function(){return{isLoading:!1,isPopUpConnexionVisible:!0,validCredentials:!0,model:{numero_npi:"",password:""}}},methods:{togglePasswordVisibility:function(){var t=document.getElementById("current-log-password"),e=document.querySelector(".password-toggle");"password"===t.type?(t.type="text",e.classList.remove("hide-password"),e.classList.add("show-password")):(t.type="password",e.classList.remove("show-password"),e.classList.add("hide-password"))},onClickClose:function(){this.isPopUpConnexionVisible=!1},submitConnexion:function(){var t=this;if(1!=this.$refs.form.querySelector('input[name="current-log-email"]').value)return this.validCredentials=!1,!1;this.validCredentials=!0,this.isLoading=!0,setTimeout((function(){t.onClickClose(),setTimeout((function(){location.reload()}),1e3)}),2e3),console.log("Données formulaire ++++++: ",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.model));this.$store.dispatch("coordonnees/getDetail",{dataUser:{numero_npi:"",type_utilisateur:"Citoyen",prenom:"Cheikh",nom:"Gueye",email:"cheikh.gueye@ip3-conseil.com",telephone:"778688784",adresse:"Dakar, Sacré Coeur 3"}}),this.$store.dispatch("active_step/getDetail",{id:"coordonnees"})}}},d=c,m=(o(590),o(18)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return t.isPopUpConnexionVisible?e("div",{staticClass:"login-form-box border-grey custom-template offset-xl-2 col-lg-6"},[e("div",{staticClass:"contact-form"},[e("button",{staticClass:"custom-close-btn",on:{click:function(e){return t.onClickClose()}}},[t._v("x")]),t._v(" "),e("h3",{staticClass:"title"}),t._v(" "),e("form",{ref:"form"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"current-log-email"}},[t._v("Numéro Personnel d'Identification (NPI) *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.numero_npi,expression:"model.numero_npi"}],attrs:{type:"email",autocomplete:"off",name:"current-log-email",id:"current-log-email",placeholder:"Numéro NPI"},domProps:{value:t.model.numero_npi},on:{input:function(e){e.target.composing||t.$set(t.model,"numero_npi",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"current-log-password"}},[t._v("Mot de passe *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],attrs:{type:"password",autocomplete:"off",name:"current-log-password",id:"current-log-password",placeholder:"Mot de passe"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}}),t._v(" "),e("span",{staticClass:"password-toggle",on:{click:t.togglePasswordVisibility}},[e("i",{staticClass:"icon-76"})])]),t._v(" "),t.validCredentials?t._e():e("div",[e("p",{staticClass:"custom-error-msg"},[t._v("NPI ou mot de passe incorrect.")])]),t._v(" "),e("div",{staticClass:"form-group"},[e("button",{staticClass:"edu-btn custom-nps-sign-in-btn btn-medium",attrs:{type:"button"},on:{click:t.submitConnexion}},[t.isLoading?t._e():e("span",[t._v("Se connecter")]),t.isLoading?e("span",[e("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),t._v(" "),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])]):t._e()])])])])]):t._e()}),[],!1,null,"71acb05f",null);e.default=component.exports}}]);