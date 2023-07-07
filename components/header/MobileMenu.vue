<template>
    <ul class="edublink-mobile-menu mainmenu">
        <li>
            <a href="/">
                Accueil
            </a>

            <a href="/contactez-nous">
                Nous contacter
            </a>
            <a v-show="$getToken()" :href="getDashboardURL">
                Mes courriers
            </a>
            <a v-show="!$getToken()" href="/" @click.prevent=onClickSeConnecter()>
                Se connecter
            </a>
            <a v-show="$getToken()" href="/" @click.prevent=onClickSeDeconnecter()>
                Se déconnecter
            </a>


        </li>

    </ul>
</template>

<script>

import mobileMenuResponsive from '../../common/mobileMenuResponsive';

export default {
    computed: {
        getDashboardURL() {
            // Générer l'URL avec les paramètres
            const baseURL = 'https://courrier-gec-citoyen.vercel.app/dashboard';
            const params = new URLSearchParams({
                gecToken: this.token,
                gecIdUser: this.gecIdUser,
                gecIsAuthenticated: this.gecIsAuthenticated,
                gecLoggedInUser: this.gecLoggedInUser,
            });

            return `${baseURL}?${params.toString()}`;
        }
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
            await localStorage.removeItem('gecEmail')
            this.$store.dispatch('authentication/getDetailIsLoggedIn', false)
            this.$store.dispatch('authentication/getDetailIsAuthenticated', false)
            this.$store.dispatch('authentication/getDetail', false)
        }
    },

    mounted() {
        mobileMenuResponsive();
    },
}
</script>