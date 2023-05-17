<template>

    <div class="custom-bloc-padding">
        
        <div class="row pb-0 bloc-recherche">
            <div class="form-group col-12 mb-4">
                <!-- <div class="custom-lable-title">MOTS CLÉS</div> -->
                <input class="border-radio my-0" type="text" v-model="recherche" name="reg-name" id="reg-name" placeholder="Rechercher">
            </div>
        </div>
        <div class="row ">
            <!-- <div class="pt-4 py-4 custom-border-grey mt-0 mb-0 bg-grey col-lg-12 col-md-12 col-sm-12">
                <div class="container">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <label for="reg-name" class="custom-lable-title">LISTE DES MES COURRIERS ENVOYÉS</label>
                    </div>
                </div>
                
            </div> -->
            <div class="pt-4 pb-4 border-grey bg-grey bloc-organisme">
                <div class="container">
                    <div class="row custom-row-equal ">
                        
                     
                        <div class="row justify-content-between p-4 pb-4 pt-0">
                            <div class="col-12 my-5">
                                <div class="card">
                                    
                                    <ul class="list-group list-group-flush">
                                            <li class="list-group-item d-flex justify-content-between"
                                            v-for="(courrier, index) in filterCourriers()" :key="index"
                                                >
                                                <span><img src="@/static/images/icons/file.png" width="50">
                                                    {{ courrier && courrier.subject }}</span>
                                                    <span @click="goToDetail(courrier)"><img class="loupe" src="@/static/images/icons/loupe.png" width="30"></span>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


</template>

<script>
export default {
    modules: ['@nuxtjs/axios'],
    axios: {
        baseURL: 'https://api-gec-citoyen.fly.dev'
    },
    components: {
        SectionTitle: () => import('@/components/common/SectionTitle')
    },
    mounted: async function () {
        try {
            const response = await this.$axios.get("/courriers");
            for (let courrier of response.data.data.data) {
                this.list_courriers.push(courrier)
            }
        }
        catch (error) {
            console.error(error);
            return;
        }
    },
    data() {
        return {
            recherche:'',
            organismes: [],
            list_courriers: [],
        }
    },
    methods: {
        filterCourriers() {
            if (!this.recherche) {
            return this.list_courriers;
            }
            const search = this.recherche.toLowerCase();
            return this.list_courriers?.filter(courrier => {
            return courrier?.subject?.toLowerCase()?.includes(search);
            });
        },
        submitMinistere(item){
            this.load=true
            console.log('Ministère ++++++: ', item)
            this.$store.dispatch('ministeres/getDetail',{title_organisme:item.description,structure:item.id})
            this.$store.dispatch('active_step/getDetail',{id:'coordonnees'})
        },
        goToDetail(item){
            this.load=true
            console.log('Ministère ++++++: ', item)
            //this.$store.dispatch('contenus/getDetail',{...this.model,entree:this.selectedEntree,subject:this.model.subject})
            this.$store.dispatch('courriers/getDetail',item)
            this.$store.dispatch('active_step/getDetail',{id:'validation'})
        }
    },
}
</script>
<style scoped>
.custom-title-ministere{
font-size: 8px !important;
text-transform: uppercase;
}
.embleme{
width: 34%;
}
.ministere{
width: 100%;
padding: 10px;
}
.bloc-organisme{
padding-left: 0px !important;
padding-right: 0px !important;
}
.custom-bloc-ministere {
background-color: #ffffff;
background-color: var(--color-white);
padding: 0px 20px 0px !important;
box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
min-height: 128px !important;
cursor: pointer;
}
.custom-bloc-ministere:hover {
border: solid 2px green !important;
}
.custom-textarea {
padding: 20px 25px;
border: solid 1px #cecdcc ;
}

.custom-border-grey{
border: solid 2px #e8ecee;
border-bottom: 0px;
border-radius: 5px 5px 0px 0px;
}
.border-radio {
border: solid 1px #cecdcc  !important;
padding: 10px;
}
.border-input{
border: solid 1px #cecdcc ;
border-radius: 5px;
}
.bg-grey {
background: #f7f5f2;
}
.bloc-recherche > * {
padding-right: 0px !important;
padding-left: 0px !important;
}
.custom-row-equal{
overflow: hidden !important; 
}

.custom-col-equal{
margin-bottom: -99999px !important;
padding-bottom: 99999px !important;
}
.dotted {
border: 4px dotted #cecdcc ; 
border-style: none none dotted; 
color: #fff; 
background-color: #fff; 
}
.custom-input{
border: 1px solid #cecdcc  !important;
height: 45px !important;
}
.custom-select {
height: 45px !important;
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
.loupe{
    cursor: pointer;
}
</style>