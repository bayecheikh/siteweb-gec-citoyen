<template>
  <div>
    <div class="hero-banner hero-style-1 bg-image bg-image--11 custom-hero-banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="banner-content">
              <h3 v-if="loading" class=" title mb-5 loader-title"></h3>
              <h3 v-if="loading" class="custom-subtitle loader-resume mb-5"></h3>
              <div v-if="!loading" >
             <h3 v-if="banniere?.length === 0 || !banniere[0]?.title" class=" mb-5 title">
                Plateforme
                <span class="custom-banner-title-color">GEC CITOYEN</span> <div> du
                Bénin </div>
              </h3>
              <h3 v-if="banniere?.length > 0 && banniere[0]?.title" class="title">
    {{ firstWords }}
  
    <div>{{ lastWords }}</div>
  </h3>
           
              <p v-if="banniere?.length === 0 ||  !banniere[0]?.resume" class="custom-subtitle mb-5 ">
                Plateforme digitale nationale pour le dépôt électronique et
                sécurisé de courriers à destination de l'administration
                béninoise.
              </p>
              <p  v-if="banniere?.length > 0 && banniere[0]?.resume" class="custom-subtitle mb-5 ">
                {{ banniere[0]?.resume }}
              </p>
            </div>
              <div class="d-flex banner-btn custom-main-banner-btn">
             
              
                <a
                  @click="deposerCourrier()"
                  class="edu-btn custom-banner-send-button"
                >
                  DÉPOSER UN COURRIER
                </a>
                <a class="edu-btn custom-banner-track-btn"  @click="onClickSuivreCourrier">SUIVRE MON COURRIER</a>

              </div>
          

              <ul class="shape-group">
                <MouseMove
                  addClassName="shape-1"
                  dataDepth="2"
                  data-aos-delay="1000"
                  data-aos="fade"
                  data-aos-duration="1000"
                  imgSrc="/images/about/shape-13.png"
                />
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="banner-thumbnail">
              <div
                class="thumbnail"
                data-aos-delay="500"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img src="/images/banner/banner-image.png" alt="Banner Image" class="custom-image-banner" />
              </div>

              <ul class="shape-group">
                <li
                  class="shape-1"
                  data-aos-delay="1000"
                  data-aos="fade"
                  data-aos-duration="1000"
                >
                  <img src="/images/about/shape-15.png" alt="Shape" />
                </li>

                <li
                  class="shape-4"
                  data-aos-delay="1000"
                  data-aos="fade"
                  data-aos-duration="1000"
                >
                  <img src="/images/counterup/shape-02.png" alt="Shape" />
                </li>

                <MouseMove
                  addClassName="shape-2"
                  dataDepth="-1.5"
                  data-aos-delay="1000"
                  data-aos="fade"
                  data-aos-duration="1000"
                  imgSrc="/images/about/shape-16.png"
                />

                <MouseMove
                  addClassName="shape-3 circle-shape"
                  dataDepth="3"
                  data-aos-delay="1000"
                  data-aos="fade"
                  data-aos-duration="1000"
                />

                <MouseMove
                  addClassName="shape-5"
                  dataDepth="1.5"
                  data-aos-delay="1000"
                  data-aos="fade"
                  data-aos-duration="1000"
                  imgSrc="/images/about/shape-13.png"
                />

                <MouseMove
                  addClassName="shape-6"
                  dataDepth="-2"
                  data-aos-delay="1000"
                  data-aos="fade"
                  data-aos-duration="1000"
                  imgSrc="/images/about/shape-18.png"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="shape-7">
        <img src="/images/about/h-1-shape-01.png" alt="Shape" />
      </div>
    </div>
 

    <SuiviCourrier v-if="ispopupload" />
  </div>
</template>

<script>




import { mapMutations, mapActions,  mapGetters } from "vuex";

export default {
  modules: ['@nuxtjs/axios'],
    axios: {
        baseURL: 'https://api-gec-citoyen.fly.dev'
    },

mounted: async function() {  
 
  
    try {
            const response = await this.$axios.get("/contenus");
            const filteredContenus = await response.data.data.data.filter(contenus => contenus.categorie.id === "64639b9f701a1e0225c9ebc1");
            const sortedContenus = await filteredContenus.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            this.banniere = await sortedContenus.slice(0, 1);
            if(this.banniere[0]?.title){
              const trimmedText = this.banniere[0]?.title?.trim();
            
const words = trimmedText.split(' ');

if (words.length === 3) {
  // Le texte contient exactement 3 mots
  this.firstWords = words.join(' ');
  this.lastWords = '';
} else if (words.length > 3) {
  // Le texte contient plus de 3 mots
  this.firstWords = words.slice(0, 3).join(' ');
  this.lastWords = words.slice(3).join(' ');
} else {
  // Le texte contient moins de 3 mots
  this.firstWords = trimmedText;
  this.lastWords = '';
}

              this.loading = false
            }
        
        } catch (error) {
          this.loading = false
        console.error(error);
        return;
        }
        finally{
          this.loading = false
        }
        
        // Supprimer les espaces en début et fin de chaîne
   
  },
  computed: {
    ...mapGetters({
      // detailbanner: 'banner/detailbanner',
      isloggedin: "authentication/isloggedin",
      ispopupload: "suivicourrier/ispopupload",
      isauthenticatingfrombutton: "authentication/isauthenticatingfrombutton",
      isauthenticated: "authentication/isauthenticated"
    }),

  
    
  },
  data() {
    return {
      loading: true,
      courrier: "",

      banniere: [],
      firstWords : '',
      lastWords : '',

    };
  },
 
  components: {
    // HomeYogaInstructorFunFact: () => import("@/components/home-main/FunFact.vue"),

    MouseMove: () => import("@/components/animation/MouseMove"),
    SuiviCourrier: () => import("@/components/home-main/SuiviCourrier.vue"),
  },
  methods: {
   
    async onClickSuivreCourrier() {
     
      await this.$store.dispatch("suivicourrier/getDetail", true);
    },
    async deposerCourrier() {
     if (localStorage.getItem('gecToken')) {
        this.$router.push("/addcourrier");
      } else {
        this.$store.commit('authentication/initdetailisauthenticatingfrombutton', true);
        window.location.href = `https://pprodofficial.service-public.bj/official/login?client_id=ecommune&redirect_uri=${encodeURIComponent("https://siteweb-gec-citoyen.vercel.app")}&response_type=code&scope=openid&authError=true`;

      }
    },
  },
};
</script>

<style>

.loader-title {
  height: 100px;
  background-color: #aae0c8; /* Couleur verte */
  animation: loaderAnimation 1s ease-in-out infinite; /* Animation */
}
.loader-resume {
  height: 120px;
  background-color: #aae0c8; /* Couleur verte */
  animation: loaderAnimation 1s ease-in-out infinite; /* Animation */
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
}
.hero-style-1 .banner-thumbnail .shape-group li.shape-3.circle-shape {
  width: 41px;
  height: 41px;
  background: var(--color-tertiary);
  border-radius: 100%;
}

.custom-subtitle {
  color: #818181 !important;
  padding-bottom: 20px;
  font-size: 14px;
}

.input-group:not(.has-validation)
  > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

[class^="icon-"] {
  font-family: icomoon !important;

  font-style: normal;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
}

.banner-search .input-group .search-btn {
  font-size: 20px;
  color: #181818;
  color: var(--color-heading);
}

.custom-submit-button {
  background-color: #fff !important;
}

.custom-search-box {
  width: 60%;
}

.custom-magnifying-icon {
  margin-left: 15px !important;
}

.custom-banner-send-button {
  cursor: pointer;
  background: #008064 !important;
  background-color: #008064 ;
  font-weight: 700 !important;
}
.custom-banner-track-btn {
  cursor: pointer;
  background: #0a3764 !important;
  background-color: #0a3764 !important;
  font-weight: 700 !important;
}
.custom-banner-track-btn::after {
background: linear-gradient(-90deg, #184878 0%, #795eb8 100%) !important; 
}
.custom-banner-send-button-2 {
  cursor: pointer;
  
  color: #fff !important;
  padding: 10px;

  
}

.custom-main-banner-button {
  gap: 10px !important;
}

@media (max-width: 767px) {
  .custom-main-banner-button {
    justify-content: center;
    align-items: center;
  }
}



.custom-banner-title-color {
  color: #008064;
}

.search-box .submit-button {
  height: 60px !important;
  width: 100px !important;
  cursor: pointer;
  background-color: #0a3764 !important;
}

.custom-banner-submit-button {
  border: 3px solid #0a3764 !important;
  border-radius: 0.25rem !important;
}

.custom-icon-4 {
  color: #fff !important;
}
.custom-main-banner-btn {
  display: flex;
  gap: 10px; /* Ajoute de l'espace entre les éléments */
  align-items: center; /* Centre les éléments verticalement */
}

@media (max-width: 992px) {

  .custom-main-banner-btn {
    justify-content: center; /* Centre les éléments horizontalement */
    flex-wrap: wrap; /* Permet aux éléments de s'enrouler sur plusieurs lignes si nécessaire */
    gap: 10px; /* Ajoute de l'espace entre les éléments */
  }
}

.custom-track-btn-icon {
  color: white;
}



@media (max-width: 1200px) {
  .custom-banner-send-button{
    font-size: 12px !important;
    line-height: 30px !important;
  }
}
@media (max-width: 992px) {
  .custom-banner-send-button{
    font-size: 15px !important;
    line-height: 62px !important;
  }
}
@media (max-width: 767px) {
  .custom-banner-send-button{
    padding: none !important;
    height: 60px !important;
    width: 301px !important;
    line-height: 62px !important;
    margin-top: 15px;
  }
}
@media (max-width: 992px) {
  .my-custom-login-button{
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
</style>

