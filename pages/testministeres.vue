<template>
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
                        data-aos-duration="800" v-for="(organisme, index) in organismes" :key="index">
                        <div class="custom-bloc-ministere border-grey categorie-grid categorie-style-3 d-flex align-items-center"
                            @click="submitMinistere(category)">
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
            for (let organisme of response.data.data.data) {
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
            organismes: [],
        }
    },

}

</script>