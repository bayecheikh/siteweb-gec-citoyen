<template>
    <div class="custom-bloc-padding">
        <h3 class="title"></h3>
        <form class="row d-flex">
            <div class="form-group col-12">
                <div class="custom-lable-title">VOUS ETES ?</div>
            </div>
            <div class="form-group col-12 mb-3">
                <div class="form-check form-check-inline border-radio mr-5 pb-1">
                    <input @change="changeTypeUser($event)" class="form-check-input" type="radio" v-model="model.type_utilisateur" name="inlineRadioOptions" id="inlineRadio111" value="Particulier">
                    <label class="form-check-label" for="inlineRadio111">Particulier</label>
                    </div>
                <div class="form-check form-check-inline border-radio pb-1">
                    <input @change="changeTypeUser($event)" class="form-check-input" type="radio" v-model="model.type_utilisateur" name="inlineRadioOptions" id="inlineRadio222" value="Entreprise">
                    <label class="form-check-label" for="inlineRadio222">Entreprise</label>
                </div>
            </div>
            <!-- ENTREPRISE -->
            <div class="row d-flex" v-if="entreprise">
                <hr class='dotted mt-5' />
                <div class="form-group col-12 my-0 mb-4 mt-3">
                    <div class="custom-lable-title">INFORMATIONS CONCERNANT L'ENTREPRISE</div>
                </div>
                <hr class='dotted mt-2 mb-5' />
                <div class="form-group col-12">
                    <label for="reg-name">Nom de la société*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Nom de la société" v-model="model.nom_societe">
                </div>
                <div class="form-group col-6">
                    <label for="reg-name">Numéro RCA*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Numéro RCA" v-model="model.numero_rca">
                </div>

                <div class="form-group col-6 mb-5 ">
                    <label for="reg-name">Numéro NINEA*</label>
                    <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Numéro NINEA" v-model="model.numero_ninea">
                </div>
                <div class="form-group col-12">
                    <label for="reg-name">Siége social de l'entreprise*</label>
                    <div class="border-adresse row d-flex p-5">
                        <div class="form-group col-6">
                            <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Rue" v-model="model.rue_entreprise">
                        </div>
                        <div class="form-group col-6">
                            <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Complement d'adresse" v-model="model.complement_adresse_entreprise">
                        </div>
                        <div class="form-group col-6">
                            <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Code postal" v-model="model.code_postal_entreprise">
                        </div>
                        <div class="form-group col-6">
                            <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Ville" v-model="model.ville_entreprise">
                        </div>
                    </div>
                    
                </div>
            </div>
            <!-- FIN ENTREPRISE -->
            <hr class='dotted mt-5'  />
            <div class="form-group col-12 my-0 mb-4 mt-3">
                <div class="custom-lable-title">INFORMATIONS GENERALES</div>
            </div>
            <hr class='dotted mt-2 mb-5' />
            <div class="form-group col-6">
                <label for="reg-name">Prénom*</label>
                <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Votre prénom" v-model="model.prenom">
            </div>
            <div class="form-group col-6">
                <label for="reg-name">Nom*</label>
                <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Votre nom" v-model="model.nom">
            </div>
            <div class="form-group col-6 mb-4 mt-2">
                <div class="form-group col-12 mb-0">
                    <label for="reg-name">Sexe*</label>
                </div>
                <div class="form-group col-12 border-input pt-3 pb-1">
                    <div class="form-check form-check-inline mr-5">
                        <input class="form-check-input" type="radio" v-model="model.sexe" name="inlineRadioOptions" id="inlineRadio1111" value="Homme">
                        <label class="form-check-label" for="inlineRadio1111">Homme</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="model.sexe" name="inlineRadioOptions" id="inlineRadio2222" value="Femme">
                        <label class="form-check-label" for="inlineRadio2222">Femme</label>
                    </div>
                </div>
                
            </div>
            <div class="form-group col-6 mb-5 mt-2">
                <label for="reg-name">Téléphone*</label>
                <input type="text" class="border-radio" name="reg-name" id="reg-name" placeholder="Votre numéro de téléphone" v-model="model.telephone">
            </div>
            <div class="form-group col-6">
                <label for="log-email">Email*</label>
                <input type="email" class="border-radio" name="log-email" id="log-email" placeholder="Votre Email" v-model="model.email">
            </div>
            <div class="form-group col-12">
                <label for="reg-name">Adresse*</label>
                <div class="border-adresse row d-flex p-5">
                    <div class="form-group col-6">
                        <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Rue" v-model="model.rue">
                    </div>
                    <div class="form-group col-6">
                        <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Complement d'adresse" v-model="model.complement_adresse">
                    </div>
                    <div class="form-group col-6">
                        <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Code postal" v-model="model.code_postal">
                    </div>
                    <div class="form-group col-6">
                        <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Ville" v-model="model.ville">
                    </div>
                </div>
                
            </div>
            
            <div class="form-group col-6">
                <button @click="$goToTab('contenu')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précédent</button>
            </div>
            <div class="form-group col-6">
                <button @click="submitCoordonnee" type="button" class="edu-btn btn-medium">Suivant <i class="icon-east"></i></button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        mounted: function() {         
        },
        computed: mapGetters({
            detailutilisateur: 'coordonnees/detailutilisateur',
        }),
        data() {
            return {
                particuler:true,
                entreprise:false,
                model :{
                    type_utilisateur:"Particulier",
                    prenom:"",
                    nom:"",
                    email:"",
                    telephone:"",
                    sexe:"",
                    adresse:"",
                    rue:"",
                    complement_adresse:"",
                    code_postal:"",
                    ville:"",
                    nom_entreprise:"",
                    numero_rca:"",
                    numero_ninea:"",
                    adresse_entreprise:"",
                    rue_entreprise:"",
                    complement_adresse_entreprise:"",
                    code_postal_entreprise:"",
                    ville_entreprise:"",
                    sender:"643539aa77e6ba38d4c98181"
                }
            }
        },
        methods: {
            submitCoordonnee(){
                this.load=true
                console.log('Données formulaire ++++++: ', {...this.model})
                this.$store.dispatch('coordonnees/getDetail',{...this.model})
                this.$store.dispatch('active_step/getDetail',{id:'contenu'})
                /* this.$axios.$post('/demandes')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    console.log('Données demande Reçu ++++++: ', response)

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                }); */
            },
            changeTypeUser($event){
                console.log('Données formulaire ++++++: ', $event.target.value)
                /* this.model.message = $event.target.value.text
                this.model.subject = $event.target.value.libelle */
                if($event.target.value=='Particulier'){
                    this.particuler = true
                    this.entreprise=false
                }
                if($event.target.value=='Entreprise'){
                    this.particuler = false
                    this.entreprise=true
                }
                
            },
        },
    }
</script>
<style scoped>
.custom-textarea {
  padding: 20px 25px;
  border: solid 1px #cecdcc  !important;
}
.dotted {
    border: 4px dotted #cecdcc ; 
    border-style: none none dotted; 
    color: #fff; 
    background-color: #fff; 
}
.border-grey{
  border: solid 2px #0a3764;
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
    height: 200px;
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
</style>