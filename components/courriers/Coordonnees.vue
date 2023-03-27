<template>
    <div class="login-form-box registration-form">
        <h3 class="title"></h3>
        <form>
            <div class="form-group">
                <label for="reg-name">Nom*</label>
                <input type="text" name="reg-name" id="reg-name" placeholder="Votre nom" v-model="model.nom">
            </div>
            <div class="form-group">
                <label for="reg-name">Prénom*</label>
                <input type="text" name="reg-name" id="reg-name" placeholder="Votre prénom" v-model="model.prenom">
            </div>
            <div class="form-group">
                <label for="log-email">Email*</label>
                <input type="email" name="log-email" id="log-email" placeholder="Votre Email" v-model="model.email">
            </div>
            <div class="form-group">
                <label for="reg-name">Adresse*</label>
                <input type="text" name="reg-name" id="reg-name" placeholder="Votre adresse" v-model="model.adresse">
            </div>
            <div class="form-group">
                <label for="reg-name">Téléphone*</label>
                <input type="text" name="reg-name" id="reg-name" placeholder="Votre numéro de téléphone" v-model="model.telephone">
            </div>
            <div class="form-group chekbox-area">
                <div class="edu-form-check">
                <input type="checkbox" id="terms-condition">
                <label for="terms-condition">J'accepte les termes et conditions <a href="terms-condition.html">Terms & Condition.</a> </label>
                </div>
            </div>
            <div class="form-group">
                <button @click="submitCoordonnee" type="button" class="edu-btn btn-medium">Suivant <i class="icon-4"></i></button>
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
                model :{
                    type_utilisateur:"Citoyen",
                    prenom:"Cheikh",
                    nom:"Gueye",
                    email:"cheikh.gueye@ip3-conseil.com",
                    telephone:"778688784",
                    adresse:"Thiès",
                }
            }
        },
        methods: {
            submitCoordonnee(){
                this.load=true
                console.log('Données formulaire ++++++: ', {...this.model})
                this.$store.dispatch('coordonnees/getDetail',{...this.model})
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
        },
    }
</script>