<template>
    <div id="main-wrapper" class="main-wrapper bg-lighten04">
        <HeaderOne showHeaderTop="true" />
        <Categories />
        <HomeYogaInstructorFunFact/>
        <HomeKitchenCoachFAQ/>
        <FooterTwo />
    </div>
</template>

<script>

    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne.vue"),
            Categories: () => import("@/components/home-distant-learning/Categories.vue"),
            HomeKitchenCoachFAQ : () => import("@/components/home-kitchen-coach/FAQ.vue"),
            HomeYogaInstructorFunFact : () => import("@/components/home-yoga-instructor/FunFact.vue"),
            FooterTwo: () => import("@/components/footer/FooterTwo")
        },
        head() {
            return {
                title: 'GEC CITOYEN'
            }
        }
    }
    
</script>