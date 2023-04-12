<template>
    <div class="fix-elements">
    <div class="hero-banner hero-style-1 bg-image bg-image--11">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h1 class="title">Plateforme <div class="color-secondary">GEC CITOYEN</div></h1>
                        <p class="custom-subtitle">Plateforme digitale nationale destinée aux citoyens pour le dépôt électronique et sécurisé de courriers.</p>
                        <div class="d-flex banner-btn custom-main-banner-button flex-wrap">
    <a @click="deposerCourrier()" class="edu-btn custom-banner-send-button">
        Déposer un courrier <i class="icon-4"></i>
    </a>
    <div class="d-flex align-items-center search-box custom-search-box">
        <input type="text" class="custom-search" name="code" id="code" placeholder="Suivre son courrier" autocomplete="off">
        <button class="submit-button custom-submit-button" name="submit" type="submit"   @click="onClickSuivreCourrier()"> <i class="icon-2"></i> </button>
    </div>
</div>


                     
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-13.png" />
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="banner-thumbnail">
                        <div class="thumbnail" data-aos-delay="500" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/images/banner/banner-image.webp" alt="Banner Image">
                        </div>
                   
                        <ul class="shape-group">
                            <li class="shape-1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/about/shape-15.png" alt="Shape">
                            </li>

                            <li class="shape-4" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/counterup/shape-02.png" alt="Shape">
                            </li>

                            <MouseMove addClassName="shape-2" dataDepth="-1.5" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-16.png" />
                            
                            <MouseMove addClassName="shape-3 circle-shape" dataDepth="3" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />

                            <MouseMove addClassName="shape-5" dataDepth="1.5" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-13.png" />

                            <MouseMove addClassName="shape-6" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/about/shape-18.png" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         <div class="shape-7">
            <img src="/images/about/h-1-shape-01.png" alt="Shape">
        </div>
    </div>
    <Authentication2 v-if="isauthenticating"/>

    </div>

</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        computed: {
        ...mapGetters({
            isloggedin: 'authentication/isloggedin',
            isauthenticating: 'authentication/isauthenticating',
            isauthenticatingfrombutton: 'authentication/isauthenticatingfrombutton'
        })
    },
        components: {
            HomeYogaInstructorFunFact : () => import("@/components/home-yoga-instructor/FunFact.vue"),
            Authentication2: () => import("@/components/header/Authentication2.vue"),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        methods: {
            async onClickSuivreCourrier() {
            await this.$store.dispatch('suivicourrier/getDetail', true)
        },
        deposerCourrier(){
            if(this.isloggedin){
                this.$router.push('/addcourrier')
            }
            else{
                this.$store.dispatch('authentication/getDetail', true)
                this.$store.dispatch('authentication/getDetailIsAuthenticatingFromButton', true)
            
            }
        }
        },
        data() {
            return {
                mustAuthenticate: false
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
    .custom-subtitle{
        margin-bottom: 20px;
    }
    
.form-control::placeholder {

color: #6c757d;
opacity: 1;

}
.banner-search .input-group .form-control {
  height: 70px;
  border: none;
  line-height: 1;
  font-size: 15px;
  color: grey;
  color: var(--color-body);
  font-weight: 400;
  padding: 0 0 0 20px;
}
.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > .form-control {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.form-control {
  display: block;

  background-color: #fff;
  background-clip: padding-box;
 
  appearance: none;
  border-radius: .25rem;
 
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
input, select, textarea {
  font-size: 100%;
  margin: 0;
  max-width: 100%;
  vertical-align: baseline;
  font-family: inherit;
}
.icon-2::before {
  content: "\e901";
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
.custom-submit-button{
    background-color: #fff !important;
}

.custom-search-box{
    width: 300px !important;
    padding-left: 20px;
}
.custom-banner-send-button{
    cursor: pointer;
}
.custom-main-banner-button{
    gap: 10px !important;
}
.custom-search::placeholder{
    color: #6c757d;
opacity: 1;
padding: 20px;
}
@media (max-width: 767px) {
  .custom-main-banner-button {
    justify-content: center;
    align-items: center;
  }
}

.fix-elements{
    height: 100vh;
}
</style>

