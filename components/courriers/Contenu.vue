<template>
    <div class="custom-bloc-padding">
        <h3 class="title"></h3>
        <form class="row">
            <div class="edu-sorting form-group col-12">
                <label for="reg-name">Choisir une entrée*</label>
                <select class="custom-select" @change="changeModelEntree($event)">
                    <option v-for="item in detailentree" :key="item.serialId" :value="item.serialId"
                        :selected="item.serialId === detailministere.defaultEntree">{{ item.entity_label }}
                    </option>
                </select>
            </div>
            <div class="edu-sorting form-group col-12" v-if="saisie">
                <label for="reg-name">Choisir un modèle</label>
                <select class="custom-select" @change="changeModel($event)">
                    <option>--</option>
                    <option v-for="item in modelContenu" :key="item._id" :value="item._id">{{ item.name }}</option>
                </select>
            </div>
            <div class="form-group col-12">
                <label for="reg-name">Objet*</label>
                <input ref="subject" class="custom-input" type="text" v-model="model.subject" name="reg-name" id="reg-name"
                    placeholder="Objet du courrier">
                <div v-if="$v.model.subject.$error">
                    <p class="custom-validation-error-msg">L'objet du courrier doit contenir au moins 5 caractères.</p>
                </div>
            </div>
            <div class="form-group col-12 mt-4" v-if="saisie">
                <label for="reg-name">Message*</label>
                <textarea ref="message" class="custom-textarea" cols="30" rows="4" name="reg-name"
                    placeholder="Votre courrier*" :v-model="model.message" required></textarea>

            </div>
            <div class="col-12 form-group" v-if="attache_courrier">
                <label for="reg-name">Joindre le courrier (Format PDF)* :</label>
                <div class="d-flex justify-content-between border-input" @click="$refs.file.click()">
                    <p class="mb-0 bg-fichier p-3">Choisir un fichier</p>
                    <div class="p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-upload" viewBox="0 0 16 16">
                            <path
                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                        </svg>
                    </div>

                </div>
                <input type="file" id="file" name="avatar" ref="file" v-on:change="handleFileUpload"
                    class="custom-contenu-input">
                <div v-if="$v.model.uploadedFile.$error">
                    <p class="custom-validation-error-msg">Veuillez joindre le courrier.</p>
                </div>
            </div>
            <div class="col-12 form-group" v-if="attache_courrier && imageData">
                <div class="imagePreviewWrapper col-12 border-input mb-3" @click="selectImage">
                    <img :src="imageData" v-if="model.format == 'jpg' || model.format == 'png'" />
                    <!-- <iframe :src="imageData+'#toolbar=0'" width="100%" height="300"></iframe> -->
                    <embed :src="imageData + '#toolbar=0'" class="embeded-courrier"
                        v-if="model.format == 'pdf' || model.format == 'docx' || model.format == 'doc'">
                </div>

            </div>
            <div class="col-12 my-5">
                <div class="card">
                    <div class="card-header ">Ajouter des pièces jointes (Format PDF)</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between"
                            v-for="(file, index) in model.pieces_jointes" :key="index">
                            <span><img src="@/static/images/icons/file.png" width="50">
                                {{ file.title }}</span>
                            <span>{{ file.size }}</span>

                            <span @click="deleteFindFichier(i)"><img class="remove" src="@/static/images/icons/remove.png"
                                    width="50"></span>
                        </li>
                        <li class="list-group-item">
                            <div class="d-flex justify-content-center border-input bg-grey" @click="$refs.file2.click()">
                                <div class="p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-upload" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                    </svg>
                                </div>

                            </div>
                            <input type="file" id="file2" name="avatar" ref="file2" v-on:change="handleFileUpload2"
                                class="custom-contenu-input">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="form-group col-12 chekbox-area">
                <div class="edu-form-check">
                    <input type="checkbox" id="termes-conditions" v-model="model.acceptedTerms" :required="true">
                    <label for="termes-conditions">J'accepte les termes et conditions <a href="#">Termes & Conditions.</a>
                    </label>
                </div>
            </div>
            <div v-if="$v.model.acceptedTerms.$error">
                <p class="custom-validation-error-msg  mt-2">Vous devez accepter les termes et conditions.</p>
            </div>
            <div class="row d-flex justify-content-between">
                <div class="form-group col-md-3 col-sm-6">
                    <button @click="$goToTab('coordonnees')" type="button" class="edu-btn btn-medium"><i
                            class="icon-west"></i> Précédent</button>
                </div>
                <div class="form-group col-md-3 col-sm-6">
                    <button @click="submitContenu" type="button" class="edu-btn btn-medium">Suivant <i
                            class="icon-east"></i></button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
export default {
    mixins: [validationMixin],
    computed: mapGetters({
        detailministere: 'ministeres/detailministere',
        detailentree: 'entrees/detailentree',
        detailcontenu: 'contenus/detailcontenu'
    }),


    mounted: async function () {

        try {
            const response = await this.$axios.get("/model-courriers");
            this.modelContenu = response.data.data.data
        }
        catch (error) {
            console.error(error);
            return;
        }

    },

    data() {
        return {

            selectedEntree: '',
            key: null,
            imageData: null,
            title_courrier: '',
            extFile: '',
            saisie: false,
            attache_courrier: true,
            modelContenu: [
                { id: 1, libelle: 'Plainte', text: 'Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor Lorum ipsum dolor' },
                { id: 2, libelle: 'Demande', text: 'Message message' },
                { id: 3, libelle: 'Opinion', text: 'Lorum ipsum dolor Lorum ipsum dolor' },
            ],
            modelEntree: [],
            model: {
                uploadedFile: null,
                acceptedTerms: null,
                type_contenu: "attache_courrier",
                encodedFile: '',
                pieces_jointes: [],
                modelId: 1,
                format: "",
                subject: "",
                message: "",
                doctype: 102,
                status: "COU",
                destination: ''
            }
        }
    },
    validations: {
        model: {
            subject: {
                required,
                minLength: minLength(5)
            },
            acceptedTerms: {
                required
            },
            uploadedFile: {
                required
            }
        }
    },
    methods: {
        submitContenu() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                if (!this.model.destination) {
                    this.model.destination = this.detailministere.defaultEntree
                    this.selectedEntree = this.detailministere.defaultEntree
                    this.selectedEntreeName = this.detailministere.defaultEntreeName
                }
                this.$store.dispatch('contenus/getDetail', { ...this.model, entree: this.selectedEntree, entreename: this.selectedEntreeName, subject: this.model.subject,pieces_jointes:[...this.model.pieces_jointes] })
                this.$store.dispatch('active_step/getDetail', { id: 'validation' })
            }

        },
        changeModel($event) {
            let model = this.modelContenu?.filter(item => (item._id == $event.target.value))[0];
            this.$refs.message.value = model?.message || ""
            this.model.message = model?.message || ""
            this.$refs.subject.value = model?.objet || ""
            this.model.subject = model?.objet || ""
            this.model.modelId = parseInt($event.target.value)
        },
        async changeModelEntree($event) {
            this.model.destination = $event.target.value
            const selectedOption = await $event.target.selectedOptions[0];
            const entityLabel = await selectedOption.textContent;
            if (entityLabel) {
                this.selectedEntreeName = entityLabel;
            }
        },
        changeType($event) {
           
            if ($event.target.value == 'saisie_libre') {
                this.saisie = true
                this.attache_courrier = false
                this.model.message = ''
            }
            if ($event.target.value == 'attache_courrier') {
                this.saisie = false
                this.attache_courrier = true
            }

        },
        selectImage() {
            this.$refs.fileInput.click()
        },
        selectImage() {
            this.$refs.file.click()
        },
        handleFileUpload(e) {
            const file = e.target.files[0];
            this.model.uploadedFile = file;
            //Recupère le fichier
            const input = this.$refs.file
            const files = input.files
            //Recupère l'extension
            let filename = files[0].name;
            let title = filename.substring(0, filename.lastIndexOf('.')) || filename;
            this.title_courrier = title
            let idxDot = filename.lastIndexOf(".") + 1;
            let extFile = filename.substr(idxDot, filename.length).toLowerCase();
            this.model.format = extFile
            let size = files[0].size / 1024 / 1024 //La taille en Mbit

            //if (size <= 5 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png"|| extFile=="pdf" || extFile=="doc" || extFile=="xls")){
            if (size <= 5 && (extFile == "pdf")) {
                //Affecté le fichier image au model avatar
                //this.model.avatar = e.target.files[0];

                //Prévisualise l'image
                if (files && files[0]) {
                    const reader = new FileReader
                    reader.onload = e => {
                        this.imageData = e.target.result
                        this.model.encodedFile = reader.result.split(';base64,')[1];
                        this.$store.dispatch('contenus/getDetail', { ...this.detailcontenu, encodedFile: reader.result.split(';base64,')[1], format: extFile })
                        //this.model.piece_jointes.push({title:title,format:extFile,encodedFile:reader.result.split(';base64,')[1]})
                        //this.model.piece_jointes.push({title:title,format:extFile,encodedFile:reader.result.split(';base64,')[1]})
                        
                    }
                    reader.readAsDataURL(files[0])
                    this.$emit('input', files[0])
                }
            } else {
                alert("Seules les fichiers pdf et de taille inférieure à 5Mb sont acceptées!");
            }
        },
        handleFileUpload2(e) {
         
            if (this.model.pieces_jointes.length <= 2) {
                //Recupère le fichier
                const input = this.$refs.file2
                const files = input.files

                //Recupère l'extension
                let filename = files[0].name;
                let title = filename.substring(0, filename.lastIndexOf('.')) || filename;
                // this.title_courrier=title
                let idxDot = filename.lastIndexOf(".") + 1;
                let extFile = filename.substr(idxDot, filename.length).toLowerCase();
                // this.model.format = extFile
                let size = files[0].size / 1024 / 1024 //La taille en Mbit
             

                //if (size <= 5 && (extFile=="jpg" || extFile=="jpeg" || extFile=="png"|| extFile=="pdf" || extFile=="doc" || extFile=="xls")){
                if (size <= 5 && (extFile == "pdf")) {
                    //Affecté le fichier image au model avatar
                    //this.model.avatar = e.target.files[0];

                    //Prévisualise l'image
                    if (files && files[0]) {
                        const reader = new FileReader
                        reader.onload = e => {
                            //this.imageData = e.target.result
                            //this.model.encodedFile = reader.result.split(';base64,')[1];
                            //this.$store.dispatch('contenus/getDetail',{...this.detailcontenu,encodedFile:reader.result.split(';base64,')[1],format:extFile})
                            this.model.pieces_jointes.push({ title: title, format: extFile, encodedFile: reader.result.split(';base64,')[1], taille: size })
                            //this.model.piece_jointes.push({title:title,format:extFile,encodedFile:reader.result.split(';base64,')[1]})
                         
                        }
                        reader.readAsDataURL(files[0])
                        this.$emit('input', files[0])
                    }
                } else {
                    alert("Seules les fichiers pdf et de taille inférieure à 5Mb sont acceptées!");
                }
            }
            else {
                alert("Le nombre maximum de pièces-jointes est atteint.")
            }

        },
        deleteFindFichier: function (index) {
            this.model.pieces_jointes.splice(index, 1);

        },
    },
}
</script>
<style scoped>
.custom-contenu-input {
    display: none;
}

.custom-validation-error-msg {
    color: #fe0022
}

.custom-textarea {
    padding: 20px 25px;
    border: solid 1px #cecdcc !important;
}

.border-input {
    border: solid 1px #cecdcc !important;
    border-radius: 5px;
    cursor: pointer;
}

.bg-fichier {
    background-color: #0a3764;
    color: #fff;
    border-radius: 5px 0px 0px 5px;
}

.imagePreviewWrapper {
    border: solid 1px #eae9e9;
    padding: 20px;
    cursor: pointer;
}

.imagePreviewWrapper img {
    height: 200px !important;
}

.custom-input {
    border: 1px solid #cecdcc !important;
    height: 50px !important;
}

.custom-select {
    height: 50px !important;
    border: solid 1px #cecdcc !important;
    background-color: none !important;
    background: none !important;
}

.form-group label {
    color: #181818c2 !important;
    margin-bottom: 8px;
}

.custom-bloc-padding {
    padding: 30px;
}

.embeded-courrier {
    width: 100%;
    min-height: 400px;
}

.bg-grey {
    background: #f7f5f2;
}

.remove {
    cursor: pointer;
}</style>