<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderOne />
       
        <Form />
        
        <FooterTwo />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            Banner: () => import("@/components/home-university/Banner"),
            Features: () => import("@/components/home-university/Features"),
            About: () => import("@/components/home-university/About"),
            FunFact: () => import("@/components/home-university/FunFact"),
            Form: () => import("@/components/courriers/Form"),
            Campus: () => import("@/components/home-university/Campus"),
            TestimonialThree: () => import("@/components/testimonial/TestimonialThree"),
            VideoSection: () => import("@/components/home-university/Video"),
            ContactInfo: () => import("@/components/home-university/ContactInfo"),
            Event: () => import("@/components/event/EventSectionOne"),
            Logo: () => import("@/components/logo/LogoTwo"),
            CTA: () => import("@/components/cta/CTAOne"),
            FooterTwo: () => import("@/components/footer/FooterTwo")
        },
        head() {
            return {
                title: 'Envoyer un courrier'
            }
        }
    }
</script>