(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{547:function(e,t,o){var content=o(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("3e3e15c5",content,!0,{sourceMap:!1})},615:function(e,t,o){"use strict";o(547)},616:function(e,t,o){var r=o(49)(!1);r.push([e.i,".custom-textarea[data-v-406e3236]{padding:20px 25px;border:1px solid #cecdcc!important}.dotted[data-v-406e3236]{border:4px #cecdcc;border-style:none none dotted;color:#fff;background-color:#fff}.border-grey[data-v-406e3236]{border:2px solid #0a3764}.border-radio[data-v-406e3236]{padding:16px 10px 6px}.border-input[data-v-406e3236],.border-radio[data-v-406e3236]{border:1px solid #cecdcc!important}.border-input[data-v-406e3236]{border-radius:5px;cursor:pointer}.bg-fichier[data-v-406e3236]{background-color:#0a3764;color:#fff;border-radius:5px 0 0 5px}.imagePreviewWrapper[data-v-406e3236]{border:1px solid #eae9e9;padding:20px;cursor:pointer}.imagePreviewWrapper img[data-v-406e3236]{height:200px!important}.custom-input[data-v-406e3236],.custom-select[data-v-406e3236]{border:1px solid #cecdcc!important;height:50px!important}.custom-select[data-v-406e3236]{background-color:none!important;background:none!important}.form-group label[data-v-406e3236]{color:rgba(24,24,24,.76078)!important;margin-bottom:8px}.custom-bloc-padding[data-v-406e3236]{padding:30px}.embeded-courrier[data-v-406e3236]{width:100%;min-height:400px}",""]),e.exports=r},741:function(e,t,o){"use strict";o.r(t);o(59),o(42),o(15),o(43),o(34),o(57),o(38),o(58);var r,n=o(29),l=(o(24),o(25),o(37),o(35),o(127),o(80));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={components:{SectionTitle:function(){return o.e(2).then(o.bind(null,739))}},computed:Object(l.b)({detailutilisateur:"coordonnees/detailutilisateur",detailministere:"ministeres/detailministere",detailcontenu:"contenus/detailcontenu"}),data:function(){return{key:null,imageData:null,title_courrier:"",extFile:"",saisie:!1,attache_courrier:!0,modelContenu:[{id:1,libelle:"Plainte",text:"Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor"},{id:2,libelle:"Demande",text:"Message message"},{id:3,libelle:"Opinion",text:"Lorum ipsum dolor Lorum ipsum dolor"}],model:{type_contenu:"attache_courrier",encodedFile:"",piece_jointes:[],modelId:1,format:"",subject:"",message:"",doctype:102,status:"COU",destination:1}}},methods:(r={submitContenu:function(){this.load=!0,console.log("Données formulaire ++++++: ",d({},this.model)),this.$store.dispatch("active_step/getDetail",{id:"validation"})},changeModel:function(e){console.log("Données formulaire ++++++: ",e.target.value),this.model.modelId=parseInt(e.target.value)},changeType:function(e){console.log("Données formulaire ++++++: ",e.target.value),"saisie_libre"==e.target.value&&(this.saisie=!0,this.attache_courrier=!1,this.model.message=""),"attache_courrier"==e.target.value&&(this.saisie=!1,this.attache_courrier=!0)},selectImage:function(){this.$refs.fileInput.click()}},Object(n.a)(r,"selectImage",(function(){this.$refs.file.click()})),Object(n.a)(r,"handleFileUpload",(function(e){var t=this,o=this.$refs.file.files,r=o[0].name,title=r.substring(0,r.lastIndexOf("."))||r;this.title_courrier=title;var n=r.lastIndexOf(".")+1,l=r.substr(n,r.length).toLowerCase();this.model.format=l;var c=o[0].size/1024/1024;if(console.log("Size -------------- ",c),c<=5&&("jpg"==l||"jpeg"==l||"png"==l||"pdf"==l||"doc"==l||"xls"==l)){if(o&&o[0]){var m=new FileReader;m.onload=function(e){t.imageData=e.target.result,t.model.encodedFile=m.result.split(";base64,")[1],t.$store.dispatch("contenus/getDetail",d(d({},t.detailcontenu),{},{encodedFile:m.result.split(";base64,")[1],format:l})),console.log(m.result.split(";base64,")[1])},m.readAsDataURL(o[0]),this.$emit("input",o[0])}}else alert("Seul les images jpg/jpeg png et de taille inférieur à 5Mb sont acceptés!")})),r)},v=(o(615),o(18)),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-bloc-padding"},[t("h3",{staticClass:"title"}),e._v(" "),t("form",{staticClass:"row"},[t("div",{staticClass:"edu-sorting form-group col-12"},[t("div",{staticClass:"form-check form-check-inline border-radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.type_contenu,expression:"model.type_contenu"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions1",id:"inlineRadio22",value:"attache_courrier"},domProps:{checked:e._q(e.model.type_contenu,"attache_courrier")},on:{change:[function(t){return e.$set(e.model,"type_contenu","attache_courrier")},function(t){return e.changeType(t)}]}}),e._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio22"}},[e._v("Attacher le courrier")])]),e._v(" "),t("div",{staticClass:"form-check form-check-inline border-radio mr-5"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.type_contenu,expression:"model.type_contenu"}],staticClass:"form-check-input",attrs:{type:"radio",name:"inlineRadioOptions1",id:"inlineRadio11",value:"saisie_libre"},domProps:{checked:e._q(e.model.type_contenu,"saisie_libre")},on:{change:[function(t){return e.$set(e.model,"type_contenu","saisie_libre")},function(t){return e.changeType(t)}]}}),e._v(" "),t("label",{staticClass:"form-check-label",attrs:{for:"inlineRadio11"}},[e._v("Saisie le courrier")])])]),e._v(" "),e.saisie?t("div",{staticClass:"edu-sorting form-group col-12"},[t("label",{attrs:{for:"reg-name"}},[e._v("Choisir un model")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.key,expression:"key"}],staticClass:"custom-select",on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.key=t.target.multiple?o:o[0]},function(t){return e.changeModel(t)}]}},[t("option",[e._v("--")]),e._v(" "),e._l(e.modelContenu,(function(o){return t("option",{key:o.id,domProps:{value:o.id}},[e._v(e._s(o.libelle))])}))],2)]):e._e(),e._v(" "),t("div",{staticClass:"form-group col-12"},[t("label",{attrs:{for:"reg-name"}},[e._v("Objet*")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.model.subject,expression:"model.subject"}],staticClass:"custom-input",attrs:{type:"text",name:"reg-name",id:"reg-name",placeholder:"Sujet du courrier"},domProps:{value:e.model.subject},on:{input:function(t){t.target.composing||e.$set(e.model,"subject",t.target.value)}}})]),e._v(" "),e.saisie?t("div",{staticClass:"form-group col-12 mt-4"},[t("label",{attrs:{for:"reg-name"}},[e._v("Message*")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.model.message,expression:"model.message"}],staticClass:"custom-textarea",attrs:{cols:"30",rows:"4",name:"reg-name",placeholder:"Votre courrier*",required:""},domProps:{value:e.model.message},on:{input:function(t){t.target.composing||e.$set(e.model,"message",t.target.value)}}})]):e._e(),e._v(" "),e.attache_courrier?t("div",{staticClass:"col-12 form-group"},[t("label",{attrs:{for:"reg-name"}},[e._v("Joindre le courrier (Format PDF) :")]),e._v(" "),t("div",{staticClass:"d-flex justify-content-between border-input",on:{click:function(t){return e.$refs.file.click()}}},[t("p",{staticClass:"mb-0 bg-fichier p-3"},[e._v("Choisir un fichier")]),e._v(" "),t("div",{staticClass:"p-3"},[t("svg",{staticClass:"bi bi-upload",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"}}),e._v(" "),t("path",{attrs:{d:"M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"}})])])]),e._v(" "),t("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",id:"file",name:"avatar"},on:{change:e.handleFileUpload}})]):e._e(),e._v(" "),e.attache_courrier&&e.imageData?t("div",{staticClass:"col-12 form-group"},[t("div",{staticClass:"imagePreviewWrapper col-12 border-input mb-3",on:{click:e.selectImage}},["jpg"==e.model.format||"png"==e.model.format?t("img",{attrs:{src:e.imageData}}):e._e(),e._v(" "),"pdf"==e.model.format||"docx"==e.model.format||"doc"==e.model.format?t("embed",{staticClass:"embeded-courrier",attrs:{src:e.imageData+"#toolbar=0"}}):e._e()])]):e._e(),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"form-group col-6 mt-5"},[t("button",{staticClass:"edu-btn btn-medium",attrs:{type:"button"},on:{click:function(t){return e.$goToTab("ministeres")}}},[t("i",{staticClass:"icon-west"}),e._v(" Précédent")])]),e._v(" "),t("div",{staticClass:"form-group col-6 mt-5"},[t("button",{staticClass:"edu-btn btn-medium",attrs:{type:"button"},on:{click:e.submitContenu}},[e._v("Suivant "),t("i",{staticClass:"icon-east"})])])])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"form-group col-12 chekbox-area"},[t("div",{staticClass:"edu-form-check"},[t("input",{attrs:{type:"checkbox",id:"terms-condition"}}),e._v(" "),t("label",{attrs:{for:"terms-condition"}},[e._v("J'accepte les termes et conditions "),t("a",{attrs:{href:"terms-condition.html"}},[e._v("Terms & Condition.")])])])])}],!1,null,"406e3236",null);t.default=component.exports}}]);