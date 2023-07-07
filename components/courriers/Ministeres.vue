<template>
    <div class="custom-bloc-padding">
        <div class="row pb-0 bloc-recherche">
            <div class="form-group col-12 mb-4">
                <input class="border-radio my-4" type="text" v-model="recherche" name="reg-name" id="reg-name"
                    placeholder="Rechercher">
            </div>

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
                        <div class="col-lg-4 col-md-4 col-sm-12 custom-col-equal" data-aos-delay="100" data-aos="fade-up"
                            data-aos-duration="800" v-for="(organisme, index) in filterOrganismes()" :key="index">
                            <div class="custom-bloc-ministere border-grey categorie-grid categorie-style-3 d-flex align-items-center"
                                @click="submitMinistere(organisme)">
                                <div class="icon embleme">
                                    <img class="" src="/images/logo/embleme.png" alt="Dark Logo"
                                        v-if="$colorMode.value === 'light'">
                                    <img class="" src="/images/logo/embleme.png" alt="Light Logo"
                                        v-if="$colorMode.value === 'dark'">
                                </div>
                                <div class="content ministere">
                                    <h5 class="custom-title-ministere">{{ organisme.description }}</h5>
                                    <img class="" src="/images/logo/vjr.png" alt="Dark Logo">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="row d-flex justify-content-between">
        </div>
    </div>
</template>

<script>
export default {
    modules: ['@nuxtjs/axios'],
    axios: {
        baseURL: 'https://api-gec-citoyen.fly.dev'
    },

    mounted: async function () {
        try {
            const response = await this.$axios.get("/structures");
            const activeOrganismes = response.data.data.data.filter(organisme => organisme.status == 1)
            for (let organisme of activeOrganismes) {
                this.organismes.push(organisme)
            }
        }
        catch (error) {
            console.error(error);
            return;
        }
    },
    data() {
        return {
            recherche: '',
            organismes: [],
        }
    },
    methods: {
        filterOrganismes() {
            if (!this.recherche) {
                return this.organismes;
            }
            const search = this.recherche.toLowerCase();
            return this.organismes.filter(organisme => {
                return organisme.description.toLowerCase().includes(search) || organisme.intitule.toLowerCase().includes(search);
            });
        },
        async submitMinistere(item) {
            const response = await this.$axios.get("/structures/" + item.id + "/entrees");
            const entrees = await response.data.data.data
            const entreeBC1 = entrees.find(entree => entree.id === "BC1");
            this.$store.dispatch('ministeres/getDetail', { title_organisme: item.description, structure: item.id, defaultEntree: entreeBC1.serialId, defaultEntreeName: entreeBC1.entity_label })
            this.$store.dispatch('entrees/getDetail', entrees)
            this.$store.dispatch('active_step/getDetail', { id: 'coordonnees' })
        }
    },
}
</script>
<style scoped>
.custom-title-ministere {
    font-size: 8px !important;
    text-transform: uppercase;
}

.embleme {
    width: 34%;
}

.ministere {
    width: 100%;
    padding: 10px;
}

.bloc-organisme {
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

.custom-border-grey {
    border: solid 2px #e8ecee;
    border-bottom: 0px;
    border-radius: 5px 5px 0px 0px;
}

.border-radio {
    border: solid 1px #cecdcc !important;
    padding: 10px;
}

.bg-grey {
    background: #f7f5f2;
}

.bloc-recherche>* {
    padding-right: 0px !important;
    padding-left: 0px !important;
}

.custom-row-equal {
    overflow: hidden !important;
}

.custom-col-equal {
    margin-bottom: -99999px !important;
    padding-bottom: 99999px !important;
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