<template>
    <div class="faq-accordion" id="faq-accordion">
        <div class="accordion">
            <div class="accordion-item" v-if="faqs && faqs.length > 0 && faqs[0].question && faqs[0].response">
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
            <div class="accordion-item" v-if="faqs && faqs.length > 0 && faqs[1].question && faqs[1].response">
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
            <div class="accordion-item" v-if="faqs && faqs.length > 0 && faqs[2].question && faqs[2].response">
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
            <div class="accordion-item" v-if="faqs && faqs.length > 0 && faqs[3].question && faqs[3].response">
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
        <!-- <div class="accordion">
            <div class="accordion-item" >
                <h5 class="accordion-header ">
                    <button class="accordion-button" type="button" color="rgb(0, 128, 100)" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                        Comment se connecter à la plateforme ?
                    </button>
                </h5>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        Pour vous connecter à la plateforme, vous devez disposer d'un compte au Portail National des Services Publics du Bénin.
                    </div>
                </div>
            </div>
            <div class="accordion-item" >
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                        Quels sont les organismes concernés ?
                    </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p>  Les organismes concernés sont : le Ministère des Affaires Étrangères, le Ministère du Numérique et de la Digitalisation et le Ministère du Travail et de la Fonction Publique. Cette liste est évolutive. </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item" >
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                        Comment saisir son courrier ?
                    </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        L'envoi du courrier se fait via un formulaire simple. Vous serez guidé étape par étape.
                    </div>
                </div>
            </div>
            <div class="accordion-item" >
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false">
                        Comment suivre son courrier ?
                    </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <p> Après soumission du courrier, un code de suivi est généré automatiquement. Vous recevrez ce code de suivi par mail et pourrez suivre le statut de votre courrier à tout moment sur la plateforme.</p>
                    </div>
                </div>
            </div>
        </div> -->
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
            const filteredFaqs = response.data.data.data.filter(faq => faq.categorie.slug === "infos-generales");
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
