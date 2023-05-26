<template>
    <div >
       <div  class="row">
          <div class="col-12">
             <div class="row bg-border-bottom-grey">
                <div class="col-6 custom-lable-title pt-3">DÉTAILS DU COURRIER</div>
                <!-- <div class="col-6">
                   {{this.detailcourrier}}
                </div> -->
             </div>
             <div class="custom-bloc-padding">
               <div class="row border-grey-no-padding d-flex align-items-center mb-5">
                  <div class="d-flex justify-content-between p-4 pb-4 pt-4">
                      <div for="reg-name" class="title_green">STATUT DU COURRIER</div>
                      <div class="form-group col-6 justify-content-end">
                        <p class="col-6">{{this.detailcourrier && this.detailcourrier.traitementStatus}}</p>
                      </div>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                      <div class="col-6 title_green" for="reg-name">Date d'envoi</div>
                      <p class="col-6">{{this.detailcourrier && this.detailcourrier.createdAt}}</p>
                   </div>
                   <hr>
                   <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                      <div class="col-6 title_green" for="reg-name">Objet</div>
                      <p class="col-6">{{this.detailcourrier && this.detailcourrier.subject}}</p>
                   </div>
                   <div class="d-flex justify-content-between p-4 pb-4 pt-0">
                      <div class="col-6 title_green" for="reg-name">ORGANISME DESTINATAIRE</div>
                      <p class="col-6" >{{this.detailcourrier && this.detailcourrier.structure}}</p>
                   </div>
                </div>
                
                <div class="row border-grey-no-padding d-flex align-items-center mb-5">
                    <div class="d-flex justify-content-between p-4 pb-4 pt-4">
                      <div for="reg-name" class="title_green">COURRIER PRINCIPAL</div>
                   </div>
                   <hr>
                   <div class="row justify-content-between p-4 pb-4 pt-0">
                      <div class="col-12" for="reg-name">
                        <div class="imagePreviewWrapper border-input mb-3 row" >
                            <embed :src="'data:application/pdf;base64,'+this.detailcourrier.encodedFile+'#toolbar=0'" class="embeded-courrier col-12" v-if="this.detailcontenu.format=='pdf' || this.detailcontenu.format=='docx' || this.detailcontenu.format=='doc'">                           
                        </div>
                        
                      </div>
                   </div>
                </div>
                <div class="row border-grey-no-padding d-flex align-items-center mb-5">
                    <div class="d-flex justify-content-between p-4 pb-4 pt-4">
                      <div for="reg-name" class="title_green">PIECES-JOINTES</div>
                   </div>
                   <hr>
                   <div class="row justify-content-between p-4 pb-4 pt-0">
                     <div class="col-12 my-5">
                        <div class="card">
                           <ul class="list-group list-group-flush">
                                 <li class="list-group-item d-flex justify-content-between"
                                    v-for="(file, index) in this.detailcontenu.pieces_jointes"
                                    :key="index"
                                    >
                                    <span><img src="@/static/images/icons/file.png" width="50">
                                    {{ file.title }}</span>
                                 </li>
                           </ul>
                        </div>
                     </div>
                   </div>
                </div>
                <CourrierEnvoye v-if="ispopupload" />
             </div>
          </div>
       </div>
    </div>
 </template>
 <script>
    import { mapMutations, mapGetters } from 'vuex'
        export default {
            components: {
                SectionTitle: () => import('@/components/common/SectionTitle'),
                Previsualisation: () => import('@/components/courriers/Previsualisation'),
                CourrierEnvoye: () => import("@/components/home-distant-learning/CourrierEnvoye.vue"),
            },
            
            computed: mapGetters({
                detailutilisateur: 'coordonnees/detailutilisateur',
                detailministere: 'ministeres/detailministere', 
                detailcourrier: 'courriers/detailcourrier', 
                detailcontenu: 'contenus/detailcontenu',
                ispopupload: "courrierenvoye/ispopupload",
            }),
            data() {
                return {
                    
                }
            },
            methods: {
                async submitValidation(){
                  
                    this.load=true
                    console.log('Données formulaire ++++++: ', {...this.detailutilisateur,...this.detailministere,...this.detailcontenu})
                    this.$gecApi.$post('/courriers',{...this.detailutilisateur,...this.detailministere,...this.detailcontenu})
                    .then(async (response) => {
                     await this.$store.dispatch("courrierenvoye/getDetail", true);
                     //this.$router.push('/');
                        
    
                    }).catch((error) => {
                        console.log('Code error ++++++: ', error?.response?.data?.message)
                    }).finally(() => {
                        console.log('Requette envoyé ')
                    });
                    
    
                },
            },
        }
 </script>
 <style scoped>
    .border-grey {
    border: solid 2px #e8ecee;
    padding: 25px;
    margin-bottom: 10px;
    }
    .border-grey-no-padding {
    border: solid 2px #e8ecee;
    padding: 0px;
    margin-bottom: 10px;
     margin: 1px;
    }
    .bg-border-bottom-grey{
    border-bottom: solid 2px #e8ecee;
    padding: 20px;  
    background: #0a376405;
    padding-top: 10px;
    padding-bottom: 10px;
    }
    .custom-bloc-padding {
    padding: 30px;
    }
    .custom-textarea {
    padding: 20px 25px;
    border: solid 1px #cecdcc  !important;
    }
    .border-radio {
    border: solid 1px #cecdcc  !important;
    padding: 10px;
    }
    .border-input{
    border: solid 1px #cecdcc  !important;
    border-radius: 5px;
    }
    .border-adresse{
    border: solid 1px #cecdcc  !important;
    border-radius: 5px;
    margin-left: 1px;
    }
    .bg-fichier{
    background-color: #0a3764;
    color: #fff;
    border-radius: 5px 0px 0px 5px;
    }
    .imagePreviewWrapper{
    border: solid 1px #eae9e9;

    padding: 20px;
    }
    .imagePreviewWrapper img{
    height: 100% !important;
    }
    .custom-input{
    border: 1px solid #cecdcc  !important;
    height: 50px !important;
    }
    .custom-select {
    height: 50px !important;
    border: solid 1px #cecdcc !important;
    background-color: none !important;
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
    .custom-bloc-padding {
    padding: 30px;
    }
    .title_green{
    color: #008064;
    font-size: 14px;
    font-weight: 500;
    }

    .imagePreviewWrapper{
    border: solid 1px #eae9e9;
    padding: 20px;
    cursor: pointer;
}
.imagePreviewWrapper img{
    height: 200px !important;
}
.embeded-courrier{
    width: 100%;
    min-height: 300px;
}
 </style>