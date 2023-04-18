<template>

        <div class="custom-bloc-padding">
            <div class="row pb-0 bloc-recherche">
                <div class="form-group col-12 mb-4">
                    <div class="custom-lable-title">MOTS CLÉS</div>
                    <input class="border-radio my-4" type="text" v-model="recherche" name="reg-name" id="reg-name" placeholder="Rechercher">
                </div>
                <!-- <hr class='dotted' />
                <div class="form-group col-12 my-4">
                    <div class="custom-lable-title">TYPE D'ORGANISME</div>
                </div>
                <div class="form-group col-12 my-0">
                    <div class="form-check form-check-inline border-radio mr-5">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1">Ministère</label>
                        </div>
                    <div class="form-check form-check-inline border-radio">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">Autre organisme</label>
                    </div>
                </div> -->
            </div>
            <div class="row ">
                <div class="pt-4 py-4 custom-border-grey mt-0 mb-0 bg-grey col-lg-12 col-md-12 col-sm-12">
                    <div class="container">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <label for="reg-name" class="custom-lable-title">LISTE DES ORGANISMES</label>
                        </div>
                    </div>
                    
                </div>
                <div class="pt-4 pb-4 border-grey bg-grey bloc-organisme">
                    <div class="container">
                        <div class="row custom-row-equal ">
                            <div 
                                class="col-lg-4 col-md-4 col-sm-12 custom-col-equal" 
                                data-aos-delay="100" 
                                data-aos="fade-up" 
                                data-aos-duration="800" 
                                v-for="(category, index) in categories" :key="index"
                            >
                                <div class="custom-bloc-ministere border-grey categorie-grid categorie-style-3 d-flex align-items-center"  @click="submitMinistere(category)">
                                    <div class="icon embleme">
                                        <img class="" src="/images/logo/embleme.png" alt="Dark Logo" v-if="$colorMode.value === 'light'">
                                        <img class="" src="/images/logo/embleme.png" alt="Light Logo" v-if="$colorMode.value === 'dark'">
                                    </div>
                                    <div class="content ministere">
                                        <h5 class="custom-title-ministere">{{ category.title }}</h5>
                                        <img class="" src="/images/logo/vjr.png" alt="Dark Logo">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 pt-4 pb-4">
                <div class="form-group col-6 justify-content-end">
                <button @click="$goToTab('coordonnees')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précedent</button>
                </div>
                <div class="form-group col-6 justify-content-end">
                    <button @click="$goToTab('contenu')" type="button" class="edu-btn btn-medium float-end">Suivant <i class="icon-east"></i></button>
                </div>
            </div>
        </div>

</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        data() {
            return {
                recherche:'',
                categories: [
                    {
                        title: "Ministère des Affaires Étrangères",
                        iconClass: "icon-9",
                        colorClass: "color-primary-style"
                    },
                    {
                        title: "Ministère du Numérique et de la Digitalisation",
                        iconClass: "icon-10",
                        colorClass: "color-secondary-style"
                    },
                    {
                        title: "Ministère du Développement et de la Coordination de l'Action Gouvernementale",
                        iconClass: "icon-11",
                        colorClass: "color-extra04-style"
                    },
                    {
                        title: "Ministère du Travail et de la Fonction Publique",
                        iconClass: "icon-12",
                        colorClass: "color-tertiary-style"
                    },
                    {
                        title: "Ministère du Cadre de Vie et du Développement Durable",
                        iconClass: "icon-13",
                        colorClass: "color-extra02-style"
                    },
                    {
                        title: "Ministère de l'Agriculture, de l'Élevage et de la Pêche",
                        iconClass: "icon-42",
                        colorClass: "color-extra07-style",
                        extraClass: "design-pencil-icon"
                    },
                    {
                        title: "Ministère de la Défense Nationale",
                        iconClass: "icon-14",
                        colorClass: "color-extra06-style"
                    },
                  
                ]
            }
        },
        methods: {
            submitMinistere(item){
                this.load=true
                console.log('Données formulaire ++++++: ', item)
                this.$store.dispatch('ministeres/getDetail',{title_organisme:item.title,structure:"6435747b3ddb7686b0feff6d"})
                this.$store.dispatch('active_step/getDetail',{id:'coordonnees'})
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
</style>