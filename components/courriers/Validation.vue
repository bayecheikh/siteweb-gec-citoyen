<template>
   <div>
      <div class="row">
         <div class="col-12">
            <div class="row bg-border-bottom-grey">
               <div class="col-6 custom-lable-title pt-3">VÉRIFIER LES INFORMATIONS AVANT DE VALIDER</div>
               <div class="col-6">
                  <!-- <Previsualisation /> -->
               </div>
            </div>
            <div class="custom-bloc-padding">
               <div class="row border-grey-no-padding d-flex align-items-center mb-5">
                  <div class="d-flex justify-content-between p-4 pb-4 pt-4">
                     <div for="reg-name" class="title_green">CONTENU</div>
                     <div class="form-group col-3 justify-content-end">
                        <button @click="$goToTab('contenu')" type="button"
                           class="btn btn-outline-primary btn-medium float-end">Modifier <i class="icon-east"></i></button>
                     </div>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                     <div class="col-6" for="reg-name">Entrée :</div>
                     <p class="col-6">{{ this.detailcontenu && this.detailcontenu.entreename }}</p>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                     <div class="col-6" for="reg-name">Objet :</div>
                     <p class="col-6">{{ this.detailcontenu && this.detailcontenu.subject }}</p>
                  </div>


               </div>
               <div class="row border-grey-no-padding d-flex align-items-center mb-5">
                  <div class="d-flex justify-content-between p-4 pb-4 pt-4">
                     <div for="reg-name" class="title_green">COORDONNÉES</div>
                     <div class="form-group col-3 justify-content-end">
                        <button @click="$goToTab('coordonnees')" type="button"
                           class="btn btn-outline-primary btn-medium float-end">Modifier <i class="icon-east"></i></button>
                     </div>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-0 pt-0">
                     <div class="col-6" for="reg-name">Prénom et nom :</div>
                     <p class="col-6">{{ this.detailutilisateur.requerant && this.detailutilisateur.requerant.prenometnom
                     }}
                     </p>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-0 pt-0">
                     <div class="col-6" for="reg-npi">NPI :</div>
                     <p class="col-6">{{ this.detailutilisateur.requerant && this.detailutilisateur.requerant.npi
                     }}
                     </p>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-0 pt-0">
                     <div class="col-6" for="reg-tel">Téléphone :</div>
                     <p class="col-6">{{ this.detailutilisateur.requerant && this.detailutilisateur.requerant.telephone }}
                     </p>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                     <div class="col-6" for="reg-sexe">Sexe :</div>
                     <p class="col-6">{{ this.detailutilisateur.requerant && this.detailutilisateur.requerant.sexe }}</p>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                     <div class="col-6" for="log-email">Email :</div>
                     <p class="col-6">{{ this.detailutilisateur.requerant && this.detailutilisateur.requerant.email }}</p>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                     <div class="col-6" for="reg-adresse">Adresse :</div>
                     <p class="col-6">{{ this.detailutilisateur.requerant && this.detailutilisateur.requerant.adresse }}
                     </p>
                  </div>



               </div>
               <div class="row border-grey-no-padding d-flex align-items-center mb-5">
                  <div class="d-flex justify-content-between p-4 pb-4 pt-4">
                     <div for="reg-name" class="title_green">ORGANISME DESTINATAIRE</div>
                     <div class="form-group col-3 justify-content-end">
                        <button @click="$goToTab('ministeres')" type="button"
                           class="btn btn-outline-primary btn-medium float-end">Modifier <i class="icon-east"></i></button>
                     </div>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                     <div class="col-6" for="reg-name">Nom :</div>
                     <p class="col-6">{{ this.detailministere && this.detailministere.title_organisme }}</p>
                  </div>

               </div>

               <div class="row border-grey-no-padding d-flex align-items-center mb-5">
                  <div class="d-flex justify-content-between p-4 pb-4 pt-4">
                     <div for="reg-name" class="title_green">COURRIER</div>
                     <div class="form-group col-3 justify-content-end">
                        <button @click="$goToTab('contenu')" type="button"
                           class="btn btn-outline-primary btn-medium float-end">Modifier <i class="icon-east"></i></button>
                     </div>
                  </div>
                  <hr>
                  <div class="row justify-content-between p-4 pb-4 pt-0">
                     <div class="col-12" for="reg-name">
                        <div class="imagePreviewWrapper border-input mb-3 row"
                           v-if="this.detailcontenu.type_contenu == 'saisie_libre'">
                           <Previsualisation class="col-12 mb-4" />
                           <embed :src="'data:application/pdf;base64,' + this.detailcontenu.encodedFile + '#toolbar=0'"
                              class="embeded-courrier col-12"
                              v-if="this.detailcontenu.format == 'pdf' || this.detailcontenu.format == 'docx' || this.detailcontenu.format == 'doc'">
                        </div>
                        <div class="imagePreviewWrapper border-input mb-3 row"
                           v-if="this.detailcontenu.type_contenu == 'attache_courrier'">
                           <embed :src="'data:application/pdf;base64,' + this.detailcontenu.encodedFile + '#toolbar=0'"
                              class="embeded-courrier col-12"
                              v-if="this.detailcontenu.format == 'pdf' || this.detailcontenu.format == 'docx' || this.detailcontenu.format == 'doc'">
                        </div>

                     </div>
                  </div>
               </div>
               <div class="row border-grey-no-padding d-flex align-items-center mb-5">
                  <div class="d-flex justify-content-between p-4 pb-4 pt-4">
                     <div for="reg-name" class="title_green">PIÈCES-JOINTES</div>
                     <div class="form-group col-3 justify-content-end">
                        <button @click="$goToTab('contenu')" type="button"
                           class="btn btn-outline-primary btn-medium float-end">Modifier <i class="icon-east"></i></button>
                     </div>
                  </div>
                  <hr>
                  <div class="row justify-content-between p-4 pb-4 pt-0">
                     <div class="col-12 my-5">
                        <div class="card">
                           <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex justify-content-between"
                                 v-for="(file, index) in this.detailcontenu.pieces_jointes" :key="index">
                                 <span><img src="@/static/images/icons/file.png" width="50">
                                    {{ file.title }}</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="row d-flex justify-content-between">
                  <div class="form-group col-md-3 col-sm-6">
                     <button @click="$goToTab('contenu')" type="button" class="edu-btn btn-medium"><i
                           class="icon-west"></i> Précédent</button>
                  </div>
                  <div class="form-group col-md-3 col-sm-6">
                     <button @click="submitValidation" type="button" class="edu-btn btn-medium">Soumettre <i
                           class="icon-4"></i></button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <CourrierEnvoye v-if="ispopupload" />
   </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {

   components: {
      Previsualisation: () => import('@/components/courriers/Previsualisation'),
      CourrierEnvoye: () => import("@/components/courriers/CourrierEnvoye.vue"),
   },

   computed: mapGetters({
      detailutilisateur: 'coordonnees/detailutilisateur',
      detailministere: 'ministeres/detailministere',
      detailcontenu: 'contenus/detailcontenu',
      ispopupload: "courrierenvoye/ispopupload",
   }),
   methods: {
      async submitValidation() {
         console.log("POST COURRIERS++++++++++", { ...this.detailutilisateur, ...this.detailministere, ...this.detailcontenu })
        
         this.$gecApi.$post('/courriers', { ...this.detailutilisateur, ...this.detailministere, ...this.detailcontenu })
        
            .then(async (response) => {
               await this.$store.dispatch("courrierenvoye/getDetail", response.data.data.id_suivi);

            }).catch((error) => {
               // console.log('Code error ++++++: ', error?.response?.data?.message)
            }).finally(() => {
               // console.log('Requête envoyée')
            });
      },
   },
}
</script>
<style scoped>
.border-grey-no-padding {
   border: solid 2px #e8ecee;
   padding: 0px;
   margin-bottom: 10px;
   margin: 1px;
}

.bg-border-bottom-grey {
   border-bottom: solid 2px #e8ecee;
   padding: 20px;
   background: #0a376405;
   padding-top: 10px;
   padding-bottom: 10px;
}

.custom-bloc-padding {
   padding: 30px;
}

.border-input {
   border: solid 1px #cecdcc !important;
   border-radius: 5px;
}


.imagePreviewWrapper {
   border: solid 1px #eae9e9;

   padding: 20px;
}

.imagePreviewWrapper img {
   height: 100% !important;
}

.form-group label {
   color: #181818c2 !important;
   margin-bottom: 8px;
}

.custom-lable-title {
   color: #0a3764 !important;
   font-size: 14px;
   font-weight: 500;
}

@media (max-width: 768px) {
   .custom-lable-title {
      text-align: center;
      width: 100% !important;
   }
}

.custom-bloc-padding {
   padding: 30px;
}

.title_green {
   color: #008064;
   font-size: 14px;
   font-weight: 500;
}

.imagePreviewWrapper {
   border: solid 1px #eae9e9;
   padding: 20px;
   cursor: pointer;
}

.imagePreviewWrapper img {
   height: 200px !important;
}

.embeded-courrier {
   width: 100%;
   min-height: 300px;
}
</style>