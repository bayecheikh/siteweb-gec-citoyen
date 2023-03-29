<template>
    <div id="main-wrapper" class="main-wrapper" style="background-color:rgb(238, 242, 248) !important;">
        <HeaderOne showHeaderTop="true" />
        <!--<HomeKitchenCoachBanner/>-->
        <Categories />
        <HomeYogaInstructorFunFact/>
        <!--<HomeKitchenCoachFeatures/>-->
        <HomeKitchenCoachFAQ/>
       <!-- <Banner />
        
        <Features />
        
        <Categories />
        
        <About />
        
        <Course />
        
        <FunFact />
        
        <TestimonialOne />
        
        <ContactInfo />
        
        <Instructor />
        
        <CTAOne />
        
        <LogoOne />
        
        <Blog />
        -->

        <FooterTwo />
    </div>
</template>

<script>
import FAQ from '../components/home-kitchen-coach/FAQ.vue'

    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne.vue"),
            //HomeKitchenCoachBanner: () => import("@/components/home-kitchen-coach/Banner.vue"),
            Categories: () => import("@/components/home-distant-learning/Categories.vue"),
            HomeKitchenCoachFeatures: () => import("@/components/home-kitchen-coach/Features.vue"),
            HomeKitchenCoachFAQ : () => import("@/components/home-kitchen-coach/FAQ.vue"),
            HomeYogaInstructorFunFact : () => import("@/components/home-yoga-instructor/FunFact.vue"),
            /*Banner: () => import("@/components/home-main/Banner"),
            Features: () => import("@/components/home-main/Features"),
            Categories: () => import("@/components/home-main/Categories"),
            About: () => import("@/components/home-main/About"),
            Course: () => import("@/components/home-main/Course"),
            FunFact: () => import("@/components/home-main/FunFact"),
            TestimonialOne: () => import("@/components/testimonial/TestimonialOne"),
            ContactInfo: () => import("@/components/home-main/ContactInfo"),
            Instructor: () => import("@/components/home-main/Instructor"),
            CTAOne: () => import("@/components/cta/CTAOne"),
            LogoOne: () => import("@/components/logo/LogoOne"),
            Blog: () => import("@/components/home-main/Blog"),*/
            FooterTwo: () => import("@/components/footer/FooterTwo")
        },
        head() {
            return {
                title: 'GEC CITOYEN'
            }
        }
    }
</script>