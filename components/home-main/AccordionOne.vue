
<template>
    <div class="faq-accordion" id="faq-accordion">
      <div class="accordion" v-show="!loading">
        <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
          <h5 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index + 1}`"
              :aria-expanded="index == 0 ? 'true' : 'false'">
              {{ faq.question }}
            </button>
          </h5>
          <div :id="`collapse${index + 1}`" class="accordion-collapse collapse"
            data-bs-parent="#faq-accordion">
            <div class="accordion-body">
              <p>{{ faq.response }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="accordion loader-faq" v-show="loading">
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
            const filteredFaqs = response.data.data.data.filter(faq => faq.categorie.slug === "infos-generales");
            const sortedFaqs = filteredFaqs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            this.faqs = sortedFaqs
            this.loading = false
        } catch (error) {
            console.error(error);
            return;
        }
        console.log("FAQS", this.faqs)
    },
    data() {
        return {
            loading: true,
            faqs: [],

        }
    },
}
</script>

<style>
.loader-faq {
    height: 438px;
    width: 55er0px;
    background-color: #d6e0e2;
    animation: loaderAnimation 1s ease-in-out infinite;

}

@keyframes loaderAnimation {
    0% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.5;
    }
}</style>