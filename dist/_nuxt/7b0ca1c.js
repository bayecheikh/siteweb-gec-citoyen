(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{551:function(t,e,o){var content=o(627);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("3cd874db",content,!0,{sourceMap:!1})},626:function(t,e,o){"use strict";o(551)},627:function(t,e,o){var r=o(49)(!1);r.push([t.i,".border-grey[data-v-76eb2abb]{border:2px solid #e8ecee;padding:25px;margin-bottom:10px}.border-grey-no-padding[data-v-76eb2abb]{border:2px solid #e8ecee;padding:0;margin:1px}.bg-border-bottom-grey[data-v-76eb2abb]{border-bottom:2px solid #e8ecee;background:rgba(10,55,100,.01961);padding:10px 20px}.custom-textarea[data-v-76eb2abb]{padding:20px 25px}.border-radio[data-v-76eb2abb],.custom-textarea[data-v-76eb2abb]{border:1px solid #cecdcc!important}.border-radio[data-v-76eb2abb]{padding:10px}.border-adresse[data-v-76eb2abb],.border-input[data-v-76eb2abb]{border:1px solid #cecdcc!important;border-radius:5px}.border-adresse[data-v-76eb2abb]{margin-left:1px}.bg-fichier[data-v-76eb2abb]{background-color:#0a3764;color:#fff;border-radius:5px 0 0 5px}.imagePreviewWrapper img[data-v-76eb2abb]{height:100%!important}.custom-input[data-v-76eb2abb],.custom-select[data-v-76eb2abb]{border:1px solid #cecdcc!important;height:50px!important}.custom-select[data-v-76eb2abb]{background-color:none!important}.form-group label[data-v-76eb2abb]{color:rgba(24,24,24,.76078)!important;margin-bottom:8px}.custom-lable-title[data-v-76eb2abb]{color:#0a3764!important;font-size:14px;font-weight:500}.custom-bloc-padding[data-v-76eb2abb]{padding:30px}.title_green[data-v-76eb2abb]{color:#008064;font-size:14px;font-weight:500}.imagePreviewWrapper[data-v-76eb2abb]{border:1px solid #eae9e9;padding:20px;cursor:pointer}.imagePreviewWrapper img[data-v-76eb2abb]{height:200px!important}.embeded-courrier[data-v-76eb2abb]{width:100%;min-height:300px}",""]),t.exports=r},737:function(t,e,o){"use strict";o.r(e);var r=o(7),n=o(29),c=(o(23),o(15),o(24),o(25),o(43),o(34),o(42),o(57),o(38),o(58),o(80));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{SectionTitle:function(){return o.e(2).then(o.bind(null,659))},Previsualisation:function(){return Promise.all([o.e(15),o.e(50)]).then(o.bind(null,805))}},computed:Object(c.b)({detailutilisateur:"coordonnees/detailutilisateur",detailministere:"ministeres/detailministere",detailcontenu:"contenus/detailcontenu"}),data:function(){return{}},methods:{submitValidation:function(){var t=this;this.load=!0,console.log("Données formulaire ++++++: ",d(d(d(d({},this.detailutilisateur),this.detailministere),this.detailcontenu),{},{piece_jointes:[]})),this.$gecApi.$post("/courriers",d(d(d(d({},this.detailutilisateur),this.detailministere),this.detailcontenu),{},{piece_jointes:[]})).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$toast.success("Courrier en cours de traitement. Votre code de suivi vous a été envoyé par mail").goAway(8e3),t.$router.push("/");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){var e,o;console.log("Code error ++++++: ",null==t||null===(e=t.response)||void 0===e||null===(o=e.data)||void 0===o?void 0:o.message)})).finally((function(){console.log("Requette envoyé ")}))}}},f=v,m=(o(626),o(18)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row bg-border-bottom-grey"},[e("div",{staticClass:"col-6 custom-lable-title pt-3"},[t._v("VERIFIER LES INFORMATIONS AVANT DE VALIDER")]),t._v(" "),e("div",{staticClass:"col-6"},[e("Previsualisation")],1)]),t._v(" "),e("div",{staticClass:"custom-bloc-padding"},[e("div",{staticClass:"row border-grey-no-padding d-flex align-items-center mb-5"},[e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-4"},[e("div",{staticClass:"title_green",attrs:{for:"reg-name"}},[t._v("CONTENU")]),t._v(" "),e("div",{staticClass:"form-group col-3 justify-content-end"},[e("button",{staticClass:"btn btn-outline-primary btn-medium float-end",attrs:{type:"button"},on:{click:function(e){return t.$goToTab("contenu")}}},[t._v("Modifier "),e("i",{staticClass:"icon-east"})])])]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-0"},[e("div",{staticClass:"col-6",attrs:{for:"reg-name"}},[t._v("Objet")]),t._v(" "),e("p",{staticClass:"col-6"},[t._v(t._s(this.detailcontenu&&this.detailcontenu.subject))])])]),t._v(" "),e("div",{staticClass:"row border-grey-no-padding d-flex align-items-center mb-5"},[e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-4"},[e("div",{staticClass:"title_green",attrs:{for:"reg-name"}},[t._v("COORDONNEES")]),t._v(" "),e("div",{staticClass:"form-group col-3 justify-content-end"},[e("button",{staticClass:"btn btn-outline-primary btn-medium float-end",attrs:{type:"button"},on:{click:function(e){return t.$goToTab("coordonnees")}}},[t._v("Modifier "),e("i",{staticClass:"icon-east"})])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex p-4 pb-0 pt-0"},[e("div",{staticClass:"col-6",attrs:{for:"reg-name"}},[t._v("Nom*")]),t._v(" "),e("p",{staticClass:"col-6"},[t._v(t._s(this.detailutilisateur&&this.detailutilisateur.nom))])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between p-4 pb-0 pt-0"},[e("div",{staticClass:"col-6",attrs:{for:"reg-name"}},[t._v("Prénom*")]),t._v(" "),e("p",{staticClass:"col-6"},[t._v(t._s(this.detailutilisateur&&this.detailutilisateur.prenom))])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between p-4 pb-0 pt-0"},[e("div",{staticClass:"col-6",attrs:{for:"log-email"}},[t._v("Email*")]),t._v(" "),e("p",{staticClass:"col-6"},[t._v(t._s(this.detailutilisateur&&this.detailutilisateur.email))])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-0"},[e("div",{staticClass:"col-6",attrs:{for:"reg-name"}},[t._v("Adresse*")]),t._v(" "),e("p",{staticClass:"col-6"},[t._v(t._s(this.detailutilisateur&&this.detailutilisateur.adresse))])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between p-4 pb-0 pt-0"},[e("div",{staticClass:"col-6",attrs:{for:"reg-name"}},[t._v("Téléphone*")]),t._v(" "),e("p",{staticClass:"col-6"},[t._v(t._s(this.detailutilisateur&&this.detailutilisateur.telephone))])])]),t._v(" "),e("div",{staticClass:"row border-grey-no-padding d-flex align-items-center mb-5"},[e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-4"},[e("div",{staticClass:"title_green",attrs:{for:"reg-name"}},[t._v("ORGANISME DESTINATAIRE")]),t._v(" "),e("div",{staticClass:"form-group col-3 justify-content-end"},[e("button",{staticClass:"btn btn-outline-primary btn-medium float-end",attrs:{type:"button"},on:{click:function(e){return t.$goToTab("ministeres")}}},[t._v("Modifier "),e("i",{staticClass:"icon-east"})])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-0"},[e("div",{staticClass:"col-6",attrs:{for:"reg-name"}},[t._v("Nom")]),t._v(" "),e("p",{staticClass:"col-6"},[t._v(t._s(this.detailministere&&this.detailministere.title_organisme))])])]),t._v(" "),this.detailcontenu.encodedFile?e("div",{staticClass:"row border-grey-no-padding d-flex align-items-center mb-5"},[e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-4"},[e("div",{staticClass:"title_green",attrs:{for:"reg-name"}},[t._v("COURRIER")]),t._v(" "),e("div",{staticClass:"form-group col-3 justify-content-end"},[e("button",{staticClass:"btn btn-outline-primary btn-medium float-end",attrs:{type:"button"},on:{click:function(e){return t.$goToTab("contenu")}}},[t._v("Modifier "),e("i",{staticClass:"icon-east"})])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-0"},[e("div",{staticClass:"col-12",attrs:{for:"reg-name"}},[e("div",{staticClass:"imagePreviewWrapper col-12 border-input mb-3"},["pdf"==this.detailcontenu.format||"docx"==this.detailcontenu.format||"doc"==this.detailcontenu.format?e("embed",{staticClass:"embeded-courrier",attrs:{src:"data:application/pdf;base64,"+this.detailcontenu.encodedFile+"#toolbar=0"}}):t._e()])])])]):t._e(),t._v(" "),e("div",{staticClass:"row d-flex justify-content-between"},[e("div",{staticClass:"col-6"},[e("button",{staticClass:"edu-btn btn-medium",attrs:{type:"button"},on:{click:function(e){return t.$goToTab("coordonnees")}}},[e("i",{staticClass:"icon-west"}),t._v(" Précédent")])]),t._v(" "),e("div",{staticClass:"col-6"},[e("button",{staticClass:"edu-btn btn-medium",attrs:{type:"button"},on:{click:t.submitValidation}},[t._v("Soumettre "),e("i",{staticClass:"icon-4"})])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-between p-4 pb-4 pt-0"},[e("div",{staticClass:"col-6",attrs:{for:"reg-name"}},[t._v("Nature")]),t._v(" "),e("p",{staticClass:"col-6"},[t._v("Courrier")])])}],!1,null,"76eb2abb",null);e.default=component.exports}}]);