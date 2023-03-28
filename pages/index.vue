<template>
    <div id="main-wrapper" class="main-wrapper" style="background-color:#F0F6F9 !important;">
        <HeaderOne showHeaderTop="true" />
        <!--<HomeKitchenCoachBanner/>-->
        <Categories />
        <!--<HomeKitchenCoachFeatures/>-->
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
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            //HomeKitchenCoachBanner: () => import("@/components/home-kitchen-coach/Banner.vue"),
            Categories: () => import("@/components/home-distant-learning/Categories"),
            HomeKitchenCoachFeatures: () => import("@/components/home-kitchen-coach/Features.vue"),
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
                title: 'EduBlink Education'
            }
        }
    }
</script>