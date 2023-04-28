<template>
 
        <ul class="edublink-mobile-menu mainmenu">
        <li >
            <n-link to="/">
                Accueil
            </n-link>
            <n-link to="/suggestion">
                Faire une suggestion
            </n-link>
            <n-link to="/signaler-probleme">
                Signaler un problème
            </n-link>
            <n-link to="/contact-us">
                Nous contacter
            </n-link >
            <a v-if="!$getToken()" href="/" @click.prevent = onClickSeConnecter()>
                Se connecter
            </a>
            <a v-if="$getToken()" href="/" @click.prevent = onClickSeDeconnecter()>
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
          
        })
    },
    components: {
        Authentication2: () => import("@/components/header/Authentication2.vue"),
    },
    methods:{
       async  onClickSeConnecter() {
        
                    this.$store.dispatch('authentication/getDetail', true)
        },
        async onClickSeDeconnecter() {
           
            await location.reload()
            await this.$router.push('/')
            await localStorage.removeItem('gecToken')
            await localStorage.removeItem('loggedInUser')
            await localStorage.removeItem('isAuthenticated')
            this.$store.dispatch('authentication/getDetailIsLoggedIn', false)
            this.$store.dispatch('authentication/getDetailIsAuthenticated', false)
            this.$store.dispatch('authentication/getDetail', false)

        }

    },
        data() {
            return {
                showMobileMenu: true,
                menus: [
                    {
                        url: '/',
                        title: 'Accueil',
                    },

                    {
                        url: '/suggestion',
                        title: 'Faire une suggestion',
                    },
                    {
                        url: '/signaler-probleme',
                        title: 'Signaler un problème',
                    },
                    {
                        url: '/contact-us',
                        title: 'Nous contacter',
                    },
                    {
                        url: '/se-connecter',
                        title: 'Se connecter',
                    }
                ]
            }
        },
        mounted() {
            mobileMenuResponsive();
        }
    }
</script>