  
<template>
    <div id="main-wrapper" class="main-wrapper bg-lighten05">
        <HeaderTwo />
        <Banner />
        <Categories />
        <HomeKitchenCoachFAQ />
        <FooterKitchen />
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {

    modules: ['@nuxtjs/axios'],
    axios: {
        baseURL: 'https://api-gec-citoyen.fly.dev'
    },

    mounted: async function () {

        if (this.$route.query.code) {
            this.model = {
                code: this.$route.query.code,
                authorisation: 'Basic ZWNvbW11bmU6ZWNvbW11bmU=',
                urlClient: 'https://siteweb-gec-citoyen.vercel.app',
                urlPns: 'https://pprodauth.service-public.bj/api/citizen/token'
            }
            try {
                const response = await this.$axios.post('users/code', { ...this.model })

                await localStorage.setItem('gecToken', response.data.id_token.id_token)
                // await localStorage.setItem('gecToken', response.data.id_token.id_token)
                await localStorage.setItem('gecLoggedInUser', JSON.stringify(this.parseJwt(response.data.id_token.id_token)))
                await localStorage.setItem('gecIdUser', response.data.data.doc._id)
                if (response.data?.data?.doc?.email) {
                    await localStorage.setItem('gecEmail', response.data?.data?.doc?.email)
                }


                await localStorage.setItem('gecIsAuthenticated', true)
                const gecLoggedInUser = JSON.parse(localStorage.getItem('gecLoggedInUser'));
                const gecIdUser = localStorage.getItem('gecIdUser');

                if (localStorage.getItem('isauthenticatingfrombutton') == "true") {
                    await this.$router.push("/addcourrier");

                }
                else {
                    window.location.href = "/";
                    const { code, ...queryParams } = this.$route.query;
                    const newUrl = `${this.$route.path}?${new URLSearchParams(queryParams).toString()}`;
                    await this.$router.replace(newUrl);

                }
                localStorage.removeItem('isauthenticatingfrombutton');
                this.$store.dispatch("authentication/getDetailIsLoggedIn", true);
                this.$store.dispatch("toast/getMessage", {
                    type: "success",
                    text: "Connexion réussie !",
                });

                this.$store.dispatch("coordonnees/getDetail", {
                    dataUser: this.parseJwt(response.id_token),
                });
                this.$store.dispatch("active_step/getDetail", { id: "coordonnees" });


            } catch (error) {
                console.error(error);
                console.log('Code error ++++++: ', error)
                this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la connexion' })
                return;
            }
        }
        if (this.$route.query.logout) {
            await localStorage.removeItem('gecToken')
            await localStorage.removeItem('gecIdUser')
            await localStorage.removeItem('gecLoggedInUser')
            await localStorage.removeItem('gecIsAuthenticated')
            localStorage.removeItem('isauthenticatingfrombutton');
            const { logout, ...queryParams } = this.$route.query;
            const newUrl = `${this.$route.path}?${new URLSearchParams(queryParams).toString()}`;
            await this.$router.replace(newUrl);
            this.$router.push("/");
        }

    },

    components: {
        HeaderTwo: () => import("@/components/header/HeaderTwo.vue"),
        Banner: () => import("@/components/home-main/Banner.vue"),
        Categories: () => import("@/components/home-main/Categories.vue"),
        HomeKitchenCoachFAQ: () => import("@/components/home-main/FAQ.vue"),
        FooterKitchen: () => import("@/components/footer/FooterKitchen")
    },
    computed: mapGetters({
        detailactive_step: 'active_step/detailactive_step',
        isauthenticatingfrombutton: 'authentication/isauthenticatingfrombutton'
    }),
    head() {
        return {
            title: 'GEC CITOYEN'
        }
    },
    methods: {
        parseJwt(token) {
            if (!token) {
                return;
            }
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
    }
}

</script>
