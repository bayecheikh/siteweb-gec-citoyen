<template>
    <div class="login-form-box registration-form">
        <h3 class="title"></h3>
        <form class="row">
            <div class="form-group col-12">
                <label for="reg-name">Objet*</label>
                <input type="text" v-model="model.objet" name="reg-name" id="reg-name" placeholder="Votre nom">
            </div>
            <div class="form-group col-12">
                <label for="reg-name">Message*</label>
                <textarea cols="30" rows="4" name="reg-name" placeholder="Votre Message*" v-model="model.message" required></textarea>
                
            </div>
            <div class="form-group col-6">
            <button @click="$goToTab('ministeres')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précédent</button>
            </div>
            <div class="form-group col-6">
                <button @click="submitContenu" type="button" class="edu-btn btn-medium">Suivant <i class="icon-east"></i></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        data() {
            return {
                model :{
                    objet:"Objet du courrier",
                    message:"Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor",
                } 
            }
        },
        methods: {
            submitContenu(){
                this.load=true
                console.log('Données formulaire ++++++: ', {...this.model})
                this.$store.dispatch('contenus/getDetail',{...this.model})
                this.$store.dispatch('active_step/getDetail',{id:'validation'})

            },
        },
    }
</script>