<template>
    <div class="edu-categorie-area " id="categories">
        <div class="container">

            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 pt-4 pb-4">
                <div 
                    class="col-lg-4 col-md-4 col-sm-12" 
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
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 pt-4 pb-4">
                <div class="form-group col-6 justify-content-end">
                <button @click="$goToTab('coordonnees')" type="button" class="edu-btn btn-medium"><i class="icon-west"></i> Précedent</button>
                </div>
                <div class="form-group col-6 justify-content-end">
                    <button @click="$goToTab('contenu')" type="button" class="edu-btn btn-medium float-end">Suivant <i class="icon-east"></i></button>
                </div>
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
                this.$store.dispatch('ministeres/getDetail',{title:item.title})
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
        },
    }
</script>
<style scoop>
.custom-title-ministere{
    font-size: 14px !important;
}
.embleme{
width: 100%;
}
.ministere{
width: 100%;
padding: 10px;
}
.custom-bloc-ministere {
  background-color: #ffffff;
  background-color: var(--color-white);
  padding: 10px 20px 10px !important;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  min-height: 151px !important;
  cursor: pointer;
}
.custom-bloc-ministere:hover {
  border: solid 2px green !important;
}
.border-grey{
  border: solid 2px #0a3764;
}
</style>