<template>
  <div class="faq-accordion" id="faq-accordion">
    <div v-show="!loading" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(faq, index) in faqs" :key="index">
          <div class="accordion-item custom-faq-accordion-item">
            <h5 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#collapse${index + 1}`" :aria-expanded="index === 0 ? 'true' : 'false'">
                {{ faq.question }}
              </button>
            </h5>
            <div :id="`collapse${index + 1}`" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
              <div class="accordion-body">
                <p>{{ faq.response }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-scrollbar"></div>
    </div>

    <div class="accordion loader-faq" v-show="loading"></div>
  </div>
</template>
  
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

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
      this.faqs = sortedFaqs;
      await this.initSwiper();
    } catch (error) {
      console.error(error);
      return;
    }
    this.loading = false;
 
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper-container', {
        direction: 'vertical',
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
      });
    },
  },
  data() {
    return {
      loading: true,
      faqs: [],
    };
  },
};
</script>

<style scoped>
.custom-faq-accordion-item {
  margin-bottom: 15px !important;
}

.faq-accordion .swiper-container {
  max-height: 400px;
  /* ajustez cette valeur selon vos besoins */
  overflow: auto;
}

.loader-faq {
  height: 438px;
  width: 550px;
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
