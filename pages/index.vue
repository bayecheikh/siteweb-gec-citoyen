  
<template>
    <div id="main-wrapper" class="main-wrapper bg-lighten05">
        <HeaderTwo />
        <Banner />
        <Categories />
        <FAQ />
        <Footer />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
                await localStorage.setItem('gecIdUser', response.data.data.doc._id)
                if (response.data?.data?.doc?.email) {
                    await localStorage.setItem('gecEmail', response.data?.data?.doc?.email)
                }
                await localStorage.setItem('gecIsAuthenticated', true)
        
                if (localStorage.getItem('isauthenticatingfrombutton') == "true") {
                    await this.$router.push("/addcourrier");
                }
                else {
                    window.location.href = "/";
                    const { code, ...queryParams } = this.$route.query;
                    const newUrl = `${this.$route.path}?${new URLSearchParams(queryParams).toString()}`;
                    await this.$router.replace(newUrl);
                }
                if(localStorage.getItem("gecEmail")){
                    const formatedGecLoggedInUser =  JSON.stringify({...this.parseJwt(response.data.id_token.id_token), email : localStorage.getItem('gecEmail')} )
                    await localStorage.setItem('gecLoggedInUser', formatedGecLoggedInUser)
                }
                else{
                    await localStorage.setItem('gecLoggedInUser', JSON.stringify(this.parseJwt(response.data.id_token.id_token)))
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
                // console.error(error);
                this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la connexion' })
                return;
            }
        }
        if (this.$route.query.logout) {
            await localStorage.removeItem('gecToken')
            await localStorage.removeItem('gecIdUser')
            await localStorage.removeItem('gecLoggedInUser')
            await localStorage.removeItem('gecIsAuthenticated')
            await localStorage.removeItem('gecEmail')
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
        FAQ: () => import("@/components/home-main/FAQ.vue"),
        Footer: () => import("@/components/footer/Footer")
    },
    computed: mapGetters({
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
