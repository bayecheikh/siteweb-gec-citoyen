(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{539:function(t,e,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("066aae5c",content,!0,{sourceMap:!1})},606:function(t,e,n){"use strict";n(539)},607:function(t,e,n){var o=n(49)(!1);o.push([t.i,".preview-pdf{padding:40px!important}",""]),t.exports=o},717:function(t,e,n){"use strict";n.r(e);var o=n(59),r={components:{},computed:Object(o.b)({detailutilisateur:"coordonnees/detailutilisateur",detailministere:"ministeres/detailministere",detailcontenu:"contenus/detailcontenu"}),data:function(){return{htmlToPdfOptions:{margin:[0,0,.3,0],filename:"preview.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:1,useCORS:!0},jsPDF:{unit:"in",format:"a4"}}}},methods:{generatePdf:function(){this.$refs.html2Pdf.generatePdf()},onProgress:function(t){console.log(t)},hasGenerated:function(t){console.log(t)}}},l=(n(606),n(18)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-pdf"},[e("div",[e("client-only",[e("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"enable-download":!1,"preview-modal":!0,paginateElementsByHeight:1200,"manual-pagination":!0,"html-to-pdf-options":t.htmlToPdfOptions},on:{progress:function(e){return t.onProgress(e)},hasStartedGeneration:function(e){return t.hasStartedGeneration()},hasGenerated:function(e){return t.hasGenerated(e)}}},[e("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[e("section",{staticClass:"pdf-item"},[e("div",{staticClass:"preview-pdf"},[e("form",[e("div",{staticClass:"row border-grey"},[e("div",{staticClass:"form-group col-8"},[e("p",[e("span",[t._v("Prénom : ")]),t._v(t._s(this.detailutilisateur&&this.detailutilisateur.nom))]),t._v(" "),e("p",[e("span",[t._v("Nom : ")]),t._v(t._s(this.detailutilisateur&&this.detailutilisateur.prenom))]),t._v(" "),e("p",[e("span",[t._v("Email : ")]),t._v(t._s(this.detailutilisateur&&this.detailutilisateur.email))]),t._v(" "),e("p",[e("span",[t._v("Téléphone : ")]),t._v(t._s(this.detailutilisateur&&this.detailutilisateur.telephone))]),t._v(" "),e("p",[e("span",[t._v("Adresse : ")]),t._v(t._s(this.detailutilisateur&&this.detailutilisateur.adresse))])]),t._v(" "),e("div",{staticClass:"form-group col-4"},[e("h5",{attrs:{for:"reg-name"}},[t._v("Ministère")]),t._v(" "),e("p",[t._v(t._s(this.detailministere&&this.detailministere.title))])])]),t._v(" "),e("div",{staticClass:"row border-grey"},[e("div",{staticClass:"form-group col-12"},[e("h5",{attrs:{for:"reg-name"}},[t._v("Objet*")]),t._v(" "),e("p",[t._v(t._s(this.detailcontenu&&this.detailcontenu.objet))])]),t._v(" "),e("div",{staticClass:"form-group col-12"},[e("h5",{attrs:{for:"reg-name"}},[t._v("Message*")]),t._v(" "),e("p",[t._v(t._s(this.detailcontenu&&this.detailcontenu.message))])])])])])])])])],1),t._v(" "),e("div",{staticClass:"form-group col-4"},[e("button",{staticClass:"edu-btn btn-medium float-end",attrs:{type:"button"},on:{click:function(e){return t.generatePdf()}}},[t._v("Générer le PDF")])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);