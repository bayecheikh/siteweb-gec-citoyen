<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderOne />

        <MesCourrier/>

        <FooterKitchen />
    </div>
</template>

<script>

// import console from 'console';
import { mapGetters } from 'vuex'
import authMiddleware from '~/middleware/auth';
export default {
    // middleware({ redirect, $getToken, $getUser, $isLogged, $loggout }) {
    //     if (process.server) {
    //         console.log('on server');
    //         return
    //     }
    //     if (process.client) {
    //         console.log("im on client midddlllllll");
    //         // return localStorage.getItem('gecToken')
    //         // console.log('token: ++++++++++ ', $getToken())
    //         console.log("AAAAAAA", localStorage.getItem('gecToken'))
    //         if (this.$getToken()==null || this.$getUser()==null || this.$isLogged()==null || this.$isLogged()==false )    {
    //             this.$loggout()
    
    
    //             return redirect('/')
    //         }
    //     }
    // },
    components: {
        HeaderOne: () => import("@/components/header/HeaderOne"),
        Banner: () => import("@/components/home-university/Banner"),
        Features: () => import("@/components/home-university/Features"),
        About: () => import("@/components/home-university/About"),
        FunFact: () => import("@/components/home-university/FunFact"),
        MesCourrier: () => import("@/components/compte/MesCourrier"),
        Campus: () => import("@/components/home-university/Campus"),
        TestimonialThree: () => import("@/components/testimonial/TestimonialThree"),
        VideoSection: () => import("@/components/home-university/Video"),
        ContactInfo: () => import("@/components/home-university/ContactInfo"),
        Event: () => import("@/components/event/EventSectionOne"),
        Logo: () => import("@/components/logo/LogoTwo"),
        CTA: () => import("@/components/cta/CTAOne"),
        FooterKitchen: () => import("@/components/footer/FooterKitchen")
    },
    
    mounted: function() {
        this.getToken()
            console.log('token: ++++++++++ ', this.$getToken())
             this.getToken()
            if (this.$getToken()==null || this.$getUser()==null || this.$isLogged()==null || this.$isLogged()==false )    {
                console.log("Non connecté");
                this.$loggout()
    
    
                return this.$router.push('/')
            }
        },
    head() {
        return {
            title: 'Envoyer un courrier'
        }
    },
    methods:{
        getToken(){
            console.log("aaaa", localStorage.getItem('gecToken'))
         
        }
    }
}
</script>