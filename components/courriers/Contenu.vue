<template>
    <div class="login-form-box registration-form">
        <h3 class="title"></h3>
        <form class="row">
            <div class="edu-sorting form-group col-12">
                <div class="form-check form-check-inline border-radio mr-5">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" value="option1">
                    <label class="form-check-label" for="inlineRadio11">Saisie libre</label>
                    </div>
                <div class="form-check form-check-inline border-radio">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio22" value="option2">
                    <label class="form-check-label" for="inlineRadio22">Choisir un modél</label>
                </div>
            </div>
            <div class="edu-sorting form-group col-12">
                <label for="reg-name">Type de courrier</label>
                <select class="" @change="changeModel($event)" v-model="key">
                    <option>--</option>
                    <option v-for="item in modelContenu" :key="item.id" :value="item">{{item.libelle}}</option>
                </select>
                <!-- <v-autocomplete
            v-model="model.roles"
            :items="modelContenu"
            :rules="rules.rolesRules"
            outlined
            dense
            multiple
            small-chips
            label="Model"
            item-text="libelle"
            item-value="id"
            clearable
            return-object
            @change="changeModel"
          >
        </v-autocomplete> -->
            </div>
            <div class="form-group col-12">
                <label for="reg-name">Objet*</label>
                <input type="text" v-model="model.objet" name="reg-name" id="reg-name" placeholder="Objet du message">
            </div>
            <div class="form-group col-12 mt-4">
                <label for="reg-name">Message*</label>
                <textarea class="custom-textarea" cols="30" rows="4" name="reg-name" placeholder="Votre Message*" v-model="model.message" required></textarea>
                
            </div>
            <div class="col-12 form-group">
                <label for="reg-name">Pièces jointes :</label>
                <div class="d-flex justify-content-between border-input" @click="$refs.file.click()">
                    <p class="mb-0 bg-fichier p-3">Choisir un fichier</p>
                    <div class="p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                        </svg>
                    </div>
                    
                </div>
                <input type="file" id="file" name="avatar" ref="file" v-on:change="handleFileUpload" style="display: none"/>
            </div>
            <div class="col-12 form-group">
                <div
                class="imagePreviewWrapper col-12 border-input"
                @click="selectImage">
                    <img :src="imageData"/>
                </div>
            </div>
            <div class="form-group col-12 chekbox-area">
                <div class="edu-form-check">
                <input type="checkbox" id="terms-condition">
                <label for="terms-condition">J'accepte les termes et conditions <a href="terms-condition.html">Terms & Condition.</a> </label>
                </div>
            </div>
            <div class="form-group col-6 mt-5">
            <button @click="$goToTab('ministeres')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précédent</button>
            </div>
            <div class="form-group col-6 mt-5">
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
                imageData:null,
                modelContenu:[
                    {id:1,libelle:'Plainte',text:'Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor'},
                    {id:2,libelle:'Demande',text:'Message message'},
                    {id:3,libelle:'Opinion',text:'Lorum ipsum dolor Lorum ipsum dolor'},
                ],
                model :{
                    avatar:'',
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
            selectImage () {
                this.$refs.fileInput.click()
            },
            selectImage () {
                this.$refs.file.click()
            },
            handleFileUpload(e){         
                //Recupère le fichier
                const input = this.$refs.file
                const files = input.files

                //Recupère l'extension
                let idxDot = files[0].name.lastIndexOf(".") + 1;
                let extFile = files[0].name.substr(idxDot, files[0].name.length).toLowerCase(); 
                let size = files[0].size/1024/1024 //La taille en Mbit
                console.log('Size-------------- ',size)

                if (size <= 2 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png")){
                //Affecté le fichier image au model avatar
                this.model.avatar = e.target.files[0];

                //Prévisualise l'image
                if (files && files[0]) {
                    const reader = new FileReader
                    reader.onload = e => {
                    this.imageData = e.target.result
                    }
                    reader.readAsDataURL(files[0])
                    this.$emit('input', files[0])
                }
                }else{
                alert("Seul les images jpg/jpeg png et de taille inférieur à 2Mb sont acceptés!");
                }  
            },
        },
    }
</script>
<style scoped>
.custom-textarea {
  padding: 20px 25px;
  border: solid 1px #eae9e9;
}
.border-grey{
  border: solid 2px #0a3764;
}
.border-radio {
  border: solid 1px #eae9e9;
  padding: 10px;
}
.border-input{
    border: solid 1px #eae9e9;
    border-radius: 5px;
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
</style>