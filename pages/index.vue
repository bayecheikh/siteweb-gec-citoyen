  
<template>
    <div id="main-wrapper" class="main-wrapper bg-lighten05">
        <HeaderTwo/>

      <Banner />
      <HomeYogaInstructorFunFact/>

        <Categories/>
        <HomeKitchenCoachFAQ/>
        <FooterKitchen />
    </div>
    
</template>

<script>

    export default {
        components: {
            HeaderTwo: () => import("@/components/header/HeaderTwo.vue"),
            Banner: () => import("@/components/home-main/Banner.vue"),
            Categories: () => import("@/components/home-distant-learning/Categories.vue"),
            Features: () => import("@/components/home-main/Features.vue"),
            HomeKitchenCoachFAQ : () => import("@/components/home-kitchen-coach/FAQ.vue"),
            HomeYogaInstructorFunFact : () => import("@/components/home-yoga-instructor/FunFact.vue"),
            FooterKitchen: () => import("@/components/footer/FooterKitchen")
        },
        head() {
            return {
                title: 'GEC CITOYEN'
            }
        }
    }
    
</script>
