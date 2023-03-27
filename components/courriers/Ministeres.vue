<template>
    <div class="edu-categorie-area " id="categories">
        <div class="container">

            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 pt-4 pb-4">
                <div 
                    class="col" 
                    data-aos-delay="100" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="(category, index) in categories" :key="index"
                >
                    <div class="categorie-grid categorie-style-3" :class="category.colorClass" @click="submitMinistere(category)">
                        <div class="icon" :class="category.extraClass">
                            <i :class="category.iconClass"></i>
                        </div>
                        <div class="content">
                            <h5 class="title">{{ category.title }}</h5>
                        </div>
                    </div>
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
                        title: "Ministère de l'enseignement",
                        iconClass: "icon-9",
                        colorClass: "color-primary-style"
                    },
                    {
                        title: "Ministère de l'éducation",
                        iconClass: "icon-10",
                        colorClass: "color-secondary-style"
                    },
                    {
                        title: "Ministère de la santé",
                        iconClass: "icon-11",
                        colorClass: "color-extra04-style"
                    },
                    {
                        title: "Ministère du tourisme",
                        iconClass: "icon-12",
                        colorClass: "color-tertiary-style"
                    },
                    {
                        title: "Ministère des forces armées",
                        iconClass: "icon-13",
                        colorClass: "color-extra02-style"
                    },
                    {
                        title: "Ministére de la recherche",
                        iconClass: "icon-42",
                        colorClass: "color-extra07-style",
                        extraClass: "design-pencil-icon"
                    },
                    {
                        title: "Ministére des finances",
                        iconClass: "icon-14",
                        colorClass: "color-extra06-style"
                    },
                    {
                        title: "Ministère de l'economie",
                        iconClass: "icon-16",
                        colorClass: "color-extra03-style",
                        extraClass: "laptop-icon"
                    },
                    {
                        title: "Ministère de l'urbanisme",
                        iconClass: "icon-17",
                        colorClass: "color-extra01-style"
                    },
                    {
                        title: "Ministère des transports",
                        iconClass: "icon-43",
                        colorClass: "color-extra05-style"
                    }
                ]
            }
        },
        methods: {
            submitMinistere(item){
                this.load=true
                console.log('Données formulaire ++++++: ', item)
                this.$store.dispatch('ministeres/getDetail',{title:item.title})
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