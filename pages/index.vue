  
<template>
    <div id="main-wrapper" class="main-wrapper bg-lighten05">
        <HeaderTwo />
        <Banner />
        <!--<HomeYogaInstructorFunFact/>-->

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
     this.windowHeight = window.innerHeight;


        this.$store.dispatch('banner/getDetail', this.windowHeight)
        console.log("CODE+++++++++++++++", this.$route.query)
        if (this.$route.query.code) {
            this.model = {
                code : this.$route.query.code,
                authorisation : 'ZWNvbW11bmU6ZWNvbW11bmU=',
                urlClient: 'https://siteweb-gec-citoyen.vercel.app',
                urlPns: 'https://pprodofficial.service-public.bj/api/official/token'
            }
            try {
            const response = await this.$axios.post('users/code', {...this.model})
            console.log("TOKEN PNS", response)
            await localStorage.setItem('gecToken', response.data.id_token.id_token)
                await localStorage.setItem('gecLoggedInUser', this.parseJwt(response.data.id_token.id_token))
                await localStorage.setItem('gecIsAuthenticated', true)
                if (isauthenticatingfrombutton) {
                    this.$router.push("/addcourrier");
                }
                else {
                    await this.$router.go()

                }

                this.$store.dispatch("authentication/getDetailIsLoggedIn", true);
                this.$store.dispatch("toast/getMessage", {
                    type: "success",
                    text: "Authentification réussie !",
                }); 

                this.$store.dispatch("coordonnees/getDetail", {
                    dataUser: this.parseJwt(response.id_token),
                });
                this.$store.dispatch("active_step/getDetail", { id: "coordonnees" });
            
        }catch (error) {
                console.error(error);
                console.log('Code error ++++++: ', error)
                this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la connexion' })
                return;
            }
        }
        // if (this.$route.query.code) {
        //     var urlencoded = new URLSearchParams();
        //     urlencoded.append("grant_type", "authorization_code");
        //     urlencoded.append("redirect_uri", "https://siteweb-gec-citoyen.vercel.app");
        //     urlencoded.append("code", this.$route.query.code);
        //     try {
        //         const response = await this.$axios.post('https://pprodofficial.service-public.bj/api/official/token', urlencoded,
        //             {

        //                 headers: {
        //                     'Authorization': 'Basic ZWNvbW11bmU6ZWNvbW11bmU=',
        //                     'Content-Type': 'application/x-www-form-urlencoded',

        //                 }
        //             });

        //         console.log("TOKEN PNS", this.parseJwt(response.id_token))
                // await localStorage.setItem('gecToken', response.id_token)
                // await localStorage.setItem('gecLoggedInUser', this.parseJwt(response.id_token))
                // await localStorage.setItem('gecIsAuthenticated', true)
                // if (isauthenticatingfrombutton) {
                //     this.$router.push("/addcourrier");
                // }
                // else {
                //     await this.$router.go()

                // }

                // this.$store.dispatch("authentication/getDetailIsLoggedIn", true);
                // this.$store.dispatch("toast/getMessage", {
                //     type: "success",
                //     text: "Authentification réussie !",
                // }); 

                // this.$store.dispatch("coordonnees/getDetail", {
                //     dataUser: this.parseJwt(response.id_token),
                // });
                // this.$store.dispatch("active_step/getDetail", { id: "coordonnees" });

        //     } catch (error) {
        //         console.error(error);
        //         console.log('Code error ++++++: ', error)
        //         this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la connexion' })
        //         return;
        //     }
        // }


    },

    components: {
        HeaderTwo: () => import("@/components/header/HeaderTwo.vue"),
        Banner: () => import("@/components/home-main/Banner.vue"),
        Categories: () => import("@/components/home-distant-learning/Categories.vue"),
        Features: () => import("@/components/home-main/Features.vue"),
        HomeKitchenCoachFAQ: () => import("@/components/home-kitchen-coach/FAQ.vue"),
        HomeYogaInstructorFunFact: () => import("@/components/home-yoga-instructor/FunFact.vue"),
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
    data() {
        return {
            windowHeight: ''
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
