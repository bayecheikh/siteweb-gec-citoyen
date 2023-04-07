<template>
    <div class="login-form-box registration-form border-grey">
        <h3 class="title"></h3>
        <form class="row">
            <div class="edu-sorting form-group col-12">
                <label for="reg-name">Model de courrier</label>
                <div class="icon"><i class="icon-55"></i></div>
                <select class="edu-select" @change="changeModel($event)" v-model="key">
                    <option>--</option>
                    <option v-for="item in modelContenu" :key="item.id" :value="item">{{item.libelle}}</option>
                </select>
            </div>
            <div class="form-group col-12">
                <label for="reg-name">Objet*</label>
                <input type="text" v-model="model.objet" name="reg-name" id="reg-name" placeholder="Objet du message">
            </div>
            <div class="form-group col-12 mt-4">
                <label for="reg-name">Message*</label>
                <textarea class="custom-textarea" cols="30" rows="4" name="reg-name" placeholder="Votre Message*" v-model="model.message" required></textarea>
                
            </div>
            <div class="col-12">
                <label for="reg-name">Joindre un fichier</label>
                <input type="file" name="reg-name" id="reg-name" placeholder="Joindre">
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
                modelContenu:[
                    {id:1,libelle:'Plainte',text:'Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor'},
                    {id:2,libelle:'Demande',text:'Message message'},
                    {id:3,libelle:'Opinion',text:'Lorum ipsum dolor Lorum ipsum dolor'},
                ],
                model :{
                    idModel:null,
                    objet:"",
                    message:"Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor",
                } 
            }
        },
        methods: {
            submitContenu(){
                this.load=true
                console.log('Données formulaire ++++++: ', {...this.model})
                this.$store.dispatch('contenus/getDetail',{...this.model})
                this.$store.dispatch('active_step/getDetail',{id:'coordonnees'})

            },
            changeModel($event){
                console.log('Données formulaire ++++++: ', $event.target.value)
                this.model.message = $event.target.value.text
                this.model.objet = $event.target.value.libelle
                this.model.idModel = $event.target.value.id
            },
        },
    }
</script>
<style scoped>
.custom-textarea {
  padding: 20px 25px;
  border: solid 1px #eae9e9;
  margin-bottom: 38px;
}
.border-grey{
  border: solid 2px #0a3764;
}
</style>