<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderOne />

        <Form />

        <FooterKitchen />
    </div>
</template>

<script>


export default {
    components: {
        HeaderOne: () => import("@/components/header/HeaderOne"),
        Form: () => import("@/components/courriers/Form"),
        FooterKitchen: () => import("@/components/footer/FooterKitchen")
    },

    mounted: function () {
        this.getToken()
        console.log('token: ++++++++++ ', this.$getToken())
        this.getToken()
        if (this.$getToken() == null || this.$getUser() == null || this.$isLogged() == null || this.$isLogged() == false) {
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
    methods: {
        getToken() {
            console.log("aaaa", localStorage.getItem('gecToken'))

        }
    }
}
</script>