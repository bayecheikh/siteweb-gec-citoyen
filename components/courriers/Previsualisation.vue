<template>
    <div class="container-pdf">
       <div>
          <client-only>
             <vue-html2pdf
             :show-layout="false"
             :enable-download="false"
             :preview-modal="true"
             :paginateElementsByHeight="1200"
             :manual-pagination="true"
             :html-to-pdf-options="htmlToPdfOptions"
             @progress="onProgress($event)"
             @hasStartedGeneration="hasStartedGeneration()"
             @hasGenerated="hasGenerated($event)"
             ref="html2Pdf"
             >
             <section slot="pdf-content">
                <section class="pdf-item">
                   <div class="preview-pdf">
                      <form >
                         <div class="row border-grey">
                            <div class="form-group col-8">
                              <p><span>Prénom : </span>{{this.detailutilisateur && this.detailutilisateur.nom}}</p>
                              <p><span>Nom : </span>{{this.detailutilisateur && this.detailutilisateur.prenom}}</p>
                              <p><span>Email : </span>{{this.detailutilisateur && this.detailutilisateur.email}}</p>
                              <p><span>Téléphone : </span>{{this.detailutilisateur && this.detailutilisateur.telephone}}</p>
                              <p><span>Adresse : </span>{{this.detailutilisateur && this.detailutilisateur.adresse}}</p>
                            </div>
                            <div class="form-group col-4">
                               <h5 for="reg-name">Ministère</h5>
                               <p>{{this.detailministere && this.detailministere.title}}</p>
                            </div>
                         </div>
                         <div class="row border-grey">
                            <div class="form-group col-12">
                               <h5 for="reg-name">Objet*</h5>
                               <p>{{this.detailcontenu && this.detailcontenu.objet}}</p>
                            </div>
                            <div class="form-group col-12">
                               <h5 for="reg-name">Message*</h5>
                               <p>{{this.detailcontenu && this.detailcontenu.message}}</p>
                            </div>
                         </div>
                      </form>
                   </div>
                </section>
             </section>
             </vue-html2pdf>
          </client-only>

          <div class="form-group col-4">
            <button @click="generatePdf()" type="button" class="edu-btn btn-medium float-end">Générer le PDF</button>
          </div>
       </div>
    </div>
 </template>
 <script>
    import { mapMutations, mapGetters } from 'vuex'
     export default {
       components: {
       },
       computed: mapGetters({
               detailutilisateur: 'coordonnees/detailutilisateur',
               detailministere: 'ministeres/detailministere',
               detailcontenu: 'contenus/detailcontenu'
           }),
       data() {
         return {
           htmlToPdfOptions: {
             margin: [0, 0, 0.3, 0],
         
             filename: `preview.pdf`,
         
             image: {
                 type: 'jpeg', 
                 quality: 0.98
             },
         
             html2canvas: {
                 scale: 1,
                 useCORS: true
             },
         
             jsPDF: {
                 unit: 'in',
                 format: 'a4'
             }
           }
         }
       },
       methods: {
         generatePdf () {
           this.$refs.html2Pdf.generatePdf()
         },
         onProgress (x) {
           console.log(x)
         },
         hasGenerated (x) {
           console.log(x)
         }
       }
     }
     
 </script>
 <style>
    .preview-pdf {
    padding: 40px !important;
    }
 </style>
 