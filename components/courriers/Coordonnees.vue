<template>
    <div class="custom-bloc-padding">
        <h3 class="title"></h3>
        <form class="row d-flex">
            <div class="form-group col-12">
                <div class="custom-lable-title">VOUS ETES ?</div>
            </div>
            <div class="form-group col-12 mb-3">
                <div class="form-check form-check-inline border-radio mr-5 pb-1">
                    <input @change="changeTypeUser($event)" class="form-check-input" type="radio" v-model="model.type_utilisateur" name="inlineRadioOptions" id="inlineRadio111" value="Personne">
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
                    <label for="log-email">Siége social de l'entreprise*</label>
                    <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Adresse de l'entreprise" v-model="model.adresse_entreprise">
                </div>
                <!-- <div class="form-group col-12">
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
                    
                </div> -->
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
                        <input class="form-check-input" type="radio" v-model="model.sexe" name="inlineRadioOptions2" id="inlineRadio1111" value="Homme">
                        <label class="form-check-label" for="inlineRadio1111">Homme</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" v-model="model.sexe" name="inlineRadioOptions2" id="inlineRadio2222" value="Femme">
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
            <div class="form-group col-6">
                <label for="log-email">Adresse*</label>
                <input type="text" class="border-input" name="reg-name" id="reg-name" placeholder="Adresse" v-model="model.adresse">
            </div>
            <!-- <div class="form-group col-12">
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
                
            </div> -->
            <div class="row d-flex justify-content-between">
                <div class="form-group col-3">
                <button @click="$goToTab('ministeres')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précédent</button>
                </div>
                <div class="form-group col-3">
                    <button @click="submitCoordonnee" type="button" class="edu-btn btn-medium">Suivant <i class="icon-east"></i></button>
                </div>
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
            this.token = localStorage.getItem('gecToken')
            if(localStorage.getItem('gecToken')){
                const user = JSON.parse(localStorage.getItem('gecLoggedInUser'));

                this.model.prenom = user?.firstname
                this.type_utilisateur = user?.type_utilisateur
                this.model.prenom = user?.firstname
                this.model.nom = user?.lastname
                this.model.email = user?.email
                this.model.telephone = user?.telephone
                this.model.sexe = user?.sexe
                this.model.adresse = user?.adresse
                this.model.rue = user?.rue
                this.model.complement_adresse = user?.complement_adresse
                this.model.code_postal = user?.code_postal
                this.model.ville = user?.ville
                this.model.nom_entreprise = user?.nom_entreprise
                this.model.numero_rca = user?.numero_rca
                this.model.numero_ninea = user?.numero_ninea
                this.model.adresse_entreprise = user?.adresse_entreprise
                this.model.rue_entreprise = user?.rue_entreprise
                this.model.complement_adresse_entreprise = user?.complement_adresse_entreprise
                this.model.code_postal_entreprise = user?.code_postal_entreprise
                this.model.ville_entreprise = user?.ville_entreprise
                this.model.sender = user?._id
            }       
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
                    sender:"643d3a9f99e88a5fc4e09d1a"
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
                if($event.target.value=='Personne'){
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