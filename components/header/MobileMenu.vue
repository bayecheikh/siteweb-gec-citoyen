<template>
    <ul class="edublink-mobile-menu mainmenu">
        <li>
            <a href="/">
                Accueil
            </a>

            <a href="/contact-us">
                Nous contacter
            </a>
            <a v-show="!$getToken()" href="/" @click.prevent=onClickSeConnecter()>
                Se connecter
            </a>
            <!-- <a v-show="$getToken()" :href="getDashboardURL">
                Mes courriers
            </a> -->
            <a v-show="$getToken()" href="/" @click.prevent=onClickSeDeconnecter()>
                Se déconnecter
            </a>


        </li>

    </ul>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import mobileMenuResponsive from '../../common/mobileMenuResponsive';

export default {
    computed: {
        ...mapGetters({
            isauthenticating: 'authentication/isauthenticating',

        }),
        // getDashboardURL() {
        //     // Générer l'URL avec les paramètres
        //     const baseURL = 'https://courrier-gec-citoyen.vercel.app/dashboard';
        //     const params = new URLSearchParams({
        //         gecToken: this.token,
        //         gecIdUser: this.gecIdUser,
        //         gecIsAuthenticated: this.gecIsAuthenticated,
        //         gecLoggedInUser: this.gecLoggedInUser,
        //     });

        //     return `${baseURL}?${params.toString()}`;
        // },
    },
    components: {
    },
    methods: {
    
        async onClickSeConnecter() {

            window.location.href = `https://pprodauth.service-public.bj/citizen/login?client_id=ecommune&redirect_uri=${encodeURIComponent("https://siteweb-gec-citoyen.vercel.app")}&response_type=code&scope=openid&authError=true`;
        },
        async onClickSeDeconnecter() {

            this.isDeconnecting = true
            location.reload()
            await this.$router.push('/')
            await localStorage.removeItem('gecToken')
            await localStorage.removeItem('gecIdUser')
            await localStorage.removeItem('gecLoggedInUser')
            await localStorage.removeItem('gecIsAuthenticated')
            await localStorage.removeItem('isauthenticatingfrombutton')
            this.$store.dispatch('authentication/getDetailIsLoggedIn', false)
            this.$store.dispatch('authentication/getDetailIsAuthenticated', false)
            this.$store.dispatch('authentication/getDetail', false)

        }

    },
    data() {
        return {
            showMobileMenu: true,
   
        }
    },

    mounted() {
        mobileMenuResponsive();
        // if (localStorage.getItem('gecToken')) {
        //     this.token = localStorage.getItem('gecToken')
        // }
        // else {
        //     this.token = null
        // }
        // if (localStorage.getItem('gecIdUser')) {
        //     this.gecIdUser = localStorage.getItem('gecIdUser')
        // }
        // else {
        //     this.gecIdUser = null
        // }
        // if (localStorage.getItem('gecIsAuthenticated')) {
        //     this.gecIsAuthenticated = localStorage.getItem('gecIsAuthenticated')
        // }
        // else {
        //     this.gecIsAuthenticated = null
        // }
        // if (localStorage.getItem('gecLoggedInUser')) {
        //     this.gecLoggedInUser = localStorage.getItem('gecLoggedInUser')
        // }
        // else {
        //     this.gecLoggedInUser = null
        // }


    },
}
</script>