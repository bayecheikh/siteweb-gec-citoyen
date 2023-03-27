<template>
    <div class="login-form-box registration-form">
        <h3 class="title"></h3>
        <form>
            <div class="form-group">
                <label for="reg-name">Objet*</label>
                <input type="text" v-model="model.objet" name="reg-name" id="reg-name" placeholder="Votre nom">
            </div>
            <div class="form-group">
                <label for="reg-name">Message*</label>
                <input type="text" v-model="model.message" name="reg-name" id="reg-name" placeholder="Votre message">
            </div>

            <div class="form-group">
                <button @click="submitContenu" type="button" class="edu-btn btn-medium">Suivant <i class="icon-4"></i></button>
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
                this.$store.dispatch('active_step/getDetail',{id:'contenu'})

            },
        },
    }
</script>