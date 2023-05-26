  
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
        window.addEventListener('message', (event) => {
    if (event.data === 'authenticationSuccessful') {
      popupWindow.close();
    }
  });
     this.windowHeight = window.innerHeight;
     let isauthenticatingfrombutton = this.isauthenticatingfrombutton;
        this.$store.dispatch('banner/getDetail', this.windowHeight)
        console.log("CODE+++++++++++++++", this.$route.query)
        if (this.$route.query.code) {
            this.model =  {
                code : this.$route.query.code,
                authorisation : 'Basic ZWNvbW11bmU6ZWNvbW11bmU=',
                urlClient: 'https://siteweb-gec-citoyen.vercel.app',
                urlPns: 'https://pprodofficial.service-public.bj/api/official/token'
            }
            try {
            const response = await this.$axios.post('users/code', {...this.model})
            window.postMessage('authenticationSuccessful', '*')
            console.log("TOKEN PNS", response)
  
            await localStorage.setItem('gecToken', response.data.id_token.id_token)
                await localStorage.setItem('gecLoggedInUser', JSON.stringify(this.parseJwt(response.data.id_token.id_token)))
                await localStorage.setItem('gecIsAuthenticated', true)
                const gecLoggedInUser = JSON.parse(localStorage.getItem('gecLoggedInUser'));
console.log("GEC LOGGED IN USER", gecLoggedInUser);
                if (isauthenticatingfrombutton) {
                    this.$router.push("/addcourrier");
                }
                else {
                    const { code, ...queryParams } = this.$route.query;
    const newUrl = `${this.$route.path}?${new URLSearchParams(queryParams).toString()}`;
   await this.$router.replace(newUrl);
   this.$router.push("/");
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
                this.$store.dispatch('authentication/getDetailIsAuthenticatingFromButton', false)
        
        }catch (error) {
                console.error(error);
                console.log('Code error ++++++: ', error)
                this.$store.dispatch('toast/getMessage', { type: 'error', text: error || 'Échec de la connexion' })
                return;
            }
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
