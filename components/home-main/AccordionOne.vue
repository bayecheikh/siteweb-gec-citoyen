<template>
    <div class="faq-accordion" id="faq-accordion">
        <div class="accordion">
            <div class="accordion-item" v-if="faqs?.length > 0 && faqs[0]?.question && faqs[0]?.response">
                <h5 class="accordion-header ">
                    <button class="accordion-button" type="button" color="rgb(0, 128, 100)" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                        {{ faqs[0].question }}
                    </button>
                </h5>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p> {{ faqs[0].response }}</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item" v-if="faqs?.length > 0 && faqs[1]?.question && faqs[1]?.response">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                        {{ faqs[1].question }}
                    </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p>  {{ faqs[1].response }}</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item" v-if="faqs?.length > 0 && faqs[2]?.question && faqs[2]?.response">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                        {{ faqs[2].question }}
                    </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p>  {{ faqs[2].response }}</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item" v-if="faqs?.length > 0 && faqs[3]?.question && faqs[3]?.response">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false">
                        {{ faqs[3].question }}
                    </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p>  {{ faqs[3].response }}</p>
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
            const response = await this.$axios.get("/faqs");
            const filteredFaqs = response.data.data.data.filter(faq => faq.categorie.id === "6452491c5c298902251329bc");
            const sortedFaqs = filteredFaqs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            this.faqs = sortedFaqs.slice(0, 4);
        } catch (error) {
        console.error(error);
        return;
        }
        console.log("FAQS", this.faqs)
},
    data() {
        return {
       
            faqs: [],
        }
    },
}
</script>
