<template>
    <div>
        <div class="hero-banner hero-style-1 bg-image bg-image--11">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="banner-content ">
                            <h1 class="title">Plateforme <span class="custom-banner-title-color">GEC CITOYEN</span> du Bénin
                            </h1>
                            <p class="custom-subtitle">Plateforme digitale nationale pour le dépôt électronique et sécurisé de courriers à destination de l'administration béninoise.</p>
                            <div class="d-flex banner-btn custom-main-banner-btn">
                                <div class="input-group custom-input-group">
                                 
    <!--<i class="icon-2"></i>-->

                    <input type="text"  name="code" id="code" class="form-control custom-form-control" placeholder="Suivre mon courrier" v-model="courrier">
                    <button class=" btn-medium custom-main-banner-track-btn" name="submit" type="submit" @click="onClickSuivreCourrier"><i class="custom-track-btn-icon icon-4"></i></button>
                </div>
                              <!--  <a class="edu-btn custom-banner-track-btn"  @click="onClickSuivreCourrier">Suivre mon courrier</a>-->
                                      
                                        <a @click="deposerCourrier()" class="edu-btn custom-banner-send-button">
        Déposer un courrier
    </a>
                            </div>
                            <!--          <div class="d-flex banner-btn custom-main-banner-button flex-wrap">
   
    <div class="d-flex align-items-center search-box custom-search-box">
                                <i class="icon-2 custom-magnifying-icon"></i>
                                <input type="text" name="code" id="code" autocomplete="off" placeholder="Suivre mon courrier" class="custom-banner-search-button">
                                <button class="submit-button custom-banner-submit-button" name="submit" type="submit" @click="onClickSuivreCourrier"> <i
                                            class="icon-4 custom-icon-4"></i></button>
                            </div>
                            <a @click="deposerCourrier()" class="edu-btn custom-banner-send-button">
        DÉPOSER UN COURRIER
    </a>
</div>-->



                            <ul class="shape-group">
                                <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade"
                                    data-aos-duration="1000" imgSrc="/images/about/shape-13.png" />
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="banner-thumbnail">
                            <div class="thumbnail" data-aos-delay="500" data-aos="fade-left" data-aos-duration="1000">
                                <img src="/images/banner/banner-image.png" alt="Banner Image">
                            </div>

                            <ul class="shape-group">
                                <li class="shape-1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                    <img src="/images/about/shape-15.png" alt="Shape">
                                </li>

                                <li class="shape-4" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                    <img src="/images/counterup/shape-02.png" alt="Shape">
                                </li>

                                <MouseMove addClassName="shape-2" dataDepth="-1.5" data-aos-delay="1000" data-aos="fade"
                                    data-aos-duration="1000" imgSrc="/images/about/shape-16.png" />

                                <MouseMove addClassName="shape-3 circle-shape" dataDepth="3" data-aos-delay="1000"
                                    data-aos="fade" data-aos-duration="1000" />

                                <MouseMove addClassName="shape-5" dataDepth="1.5" data-aos-delay="1000" data-aos="fade"
                                    data-aos-duration="1000" imgSrc="/images/about/shape-13.png" />

                                <MouseMove addClassName="shape-6" dataDepth="-2" data-aos-delay="1000" data-aos="fade"
                                    data-aos-duration="1000" imgSrc="/images/about/shape-18.png" />
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <div class="shape-7">
                <img src="/images/about/h-1-shape-01.png" alt="Shape">
            </div>

        </div>
        <div class="main-wrapper bg-lighten05">
            <HomeYogaInstructorFunFact />
        </div>
        <Authentication2 v-if="isauthenticatingfrombutton" />
        <SuiviCourrier v-if="ispopupload" />

    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            isloggedin: 'authentication/isloggedin',
            ispopupload: 'suivicourrier/ispopupload',
            isauthenticatingfrombutton: 'authentication/isauthenticatingfrombutton'
        })
    },
    data() {
            return {
                courrier: ''
            }
        },
    components: {
        HomeYogaInstructorFunFact: () => import("@/components/home-yoga-instructor/FunFact.vue"),
        Authentication2: () => import("@/components/header/Authentication2.vue"),
        MouseMove: () => import("@/components/animation/MouseMove"),
        SuiviCourrier: () => import("@/components/home-distant-learning/SuiviCourrier.vue"),
    },
    methods: {
        async onClickSuivreCourrier() {
            let code = document.getElementById("code").value;
            if(!code){
                return
            }
    // Utiliser la valeur de l'input comme vous le souhaitez
            console.log("La valeur de l'input est : " + code);
            await this.$store.dispatch('suivicourrier/getDetail', code)
        },
        deposerCourrier() {
            if (this.isloggedin) {
                this.$router.push('/addcourrier')
            }
            else {
                this.$store.dispatch('authentication/getDetailIsAuthenticatingFromButton', true)

            }
        }
    },

}
</script>

<style>
.hero-style-1 .banner-thumbnail .shape-group li.shape-3.circle-shape {
    width: 41px;
    height: 41px;
    background: var(--color-tertiary);
    border-radius: 100%;
}

.custom-subtitle {
    color: #818181 !important;
    padding-bottom: 20px;
}





.input-group:not(.has-validation)> :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
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
 
}
.custom-banner-send-button-2 {
    cursor: pointer;
    background: #008064 !important;
    color: #fff !important;
    padding: 10px;
  
    font-weight: 700 !important;
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

.fix-elements {
    height: 100vh;
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
    border-radius: .25rem !important;
}

.custom-icon-4 {
    color: #fff !important;
}
.custom-main-banner-btn {
    display: flex;
    gap: 10px; /* Ajoute de l'espace entre les éléments */
    align-items: center; /* Centre les éléments verticalement */
}
.custom-main-banner-track-btn{
    border: none;
    background: #0a3764 !important;
    cursor: pointer;
}
.custom-main-banner-track-btn:hover{
    background: #154f88 !important;
}
.custom-main-banner-track-btn::after{
    background:  #154f88  !important;
}
@media (max-width: 992px) { /* Remplacer la valeur 768px par la largeur d'écran souhaitée */
    .custom-main-banner-btn {
        justify-content: center; /* Centre les éléments horizontalement */
        flex-wrap: wrap; /* Permet aux éléments de s'enrouler sur plusieurs lignes si nécessaire */
        gap: 10px; /* Ajoute de l'espace entre les éléments */
    }
}
.custom-input-group {
  width: 300px;
  height: 60px;
}

.custom-input-group input[type=email] {
  height: 60px;
  padding: 0 10px;
}

.custom-input-group button {
  height: 60px;
  width: 60px;
}
.custom-track-btn-icon{
    color: white;
}
.custom-form-control {
        text-transform: uppercase;
    
    }
    .custom-form-control::placeholder {
        text-transform: none;
       
    }
</style>

