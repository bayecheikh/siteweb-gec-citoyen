<template>
    <div class="login-form-box registration-form">
        
        
        
            <div class="row border-grey">
            <Previsualisation />
            </div>
            
            <div class="row border-grey">
                <div class="form-group col-6">
                <h5 for="reg-name">Nom*</h5>
                <p>{{this.detailutilisateur && this.detailutilisateur.nom}}</p>
                </div>
                <div class="form-group col-6">
                    <h5 for="reg-name">Prénom*</h5>
                    <p>{{this.detailutilisateur && this.detailutilisateur.prenom}}</p>
                </div>
                <div class="form-group col-6">
                    <h5 for="log-email">Email*</h5>
                    <p>{{this.detailutilisateur && this.detailutilisateur.email}}</p>
                </div>
                <div class="form-group col-6">
                    <h5 for="reg-name">Adresse*</h5>
                    <p>{{this.detailutilisateur && this.detailutilisateur.adresse}}</p>
                </div>
                <div class="form-group col-6">
                    <h5 for="reg-name">Téléphone*</h5>
                    <p>{{this.detailutilisateur && this.detailutilisateur.telephone}}</p>
                </div>
                <div class="form-group col-3 justify-content-end">
                    <button @click="$goToTab('coordonnees')" type="button" class="btn btn-outline-primary btn-medium float-end">Modifier <i class="icon-east"></i></button>
                </div>
            </div>
            <div class="row border-grey">
                <div class="form-group col-6">
                    <h5 for="reg-name">Ministère</h5>
                    <p>{{this.detailministere && this.detailministere.title}}</p>
                </div>
                <div class="form-group col-3 justify-content-end">
                    <button @click="$goToTab('ministeres')" type="button" class="btn btn-outline-primary btn-medium float-end">Modifier <i class="icon-east"></i></button>
                </div>
            </div>
            <div class="row border-grey">
                <div class="form-group col-6">
                    <h5 for="reg-name">Objet*</h5>
                    <p>{{this.detailcontenu && this.detailcontenu.objet}}</p>
                </div>
                <div class="form-group col-3 justify-content-end">
                    <button @click="$goToTab('contenu')" type="button" class="btn btn-outline-primary btn-medium float-end">Modifier <i class="icon-east"></i></button>
                </div>
                <div class="form-group col-12">
                    <h5 for="reg-name">Message*</h5>
                    <p>{{this.detailcontenu && this.detailcontenu.message}}</p>
                </div>
                
            </div>
            <div class="row border-grey">
                <div class="form-group col-6">
                <button @click="$goToTab('coordonnees')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précédent</button>
                </div>
                <div class="form-group col-6">
                    <button @click="submitValidation" type="button" class="edu-btn btn-medium">Soumettre <i class="icon-4"></i></button>
                </div>
            </div>
        
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            Previsualisation: () => import('@/components/courriers/Previsualisation')
        },
        
        computed: mapGetters({
            detailutilisateur: 'coordonnees/detailutilisateur',
            detailministere: 'ministeres/detailministere',
            detailcontenu: 'contenus/detailcontenu'
        }),
        data() {
            return {
                
            }
        },
        methods: {
            submitValidation(){
                this.load=true
                console.log('Données formulaire ++++++: ', {...this.detailutilisateur,...this.detailministere,...this.detailcontenu})
                this.$store.dispatch('toast/getMessage',{type:'success',text:'Votre courrier est en cours de traitement. Merci!'})
                this.$router.push('/');
                /* this.$axios.$post('/demandes')
                .then(async (response) => {
                    //this.$toast.success(response.message).goAway(2000)
                    this.$store.dispatch('toast/getMessage',{type:'success',text:'Votre courrier est en cours de traitement !'})
                    console.log('Données demande Reçu ++++++: ', response)
                    this.$router.push('/');

                }).catch((error) => {
                    console.log('Code error ++++++: ', error?.response?.data?.message)
                }).finally(() => {
                    console.log('Requette envoyé ')
                }); */
                

            },
        },
    }
</script>
<style>
.border-grey {
  border: solid 2px #e8ecee;
  padding: 25px;
  margin-bottom: 10px;
}
</style>