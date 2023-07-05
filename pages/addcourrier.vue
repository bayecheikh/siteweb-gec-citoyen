<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderOne />

        <Form />

        <Footer />
    </div>
</template>

<script>


export default {
    components: {
        HeaderOne: () => import("@/components/header/HeaderOne"),
        Form: () => import("@/components/courriers/Form"),
        Footer: () => import("@/components/footer/Footer")
    },

    mounted: function () {
        this.getToken()
   
        this.getToken()
        if (this.$getToken() == null || this.$getUser() == null || this.$isLogged() == null || this.$isLogged() == false) {
            this.$loggout()
            return this.$router.push('/')
        }
    },
    head() {
        return {
            title: 'Envoyer un courrier'
        }
    },
    methods: {
        getToken() {

        }
    }
}
</script>