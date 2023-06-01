<template>
 
        <ul class="edublink-mobile-menu mainmenu">
        <li >
            <a href="/">
                Accueil
            </a>
          
            <a href="/contact-us">
                Nous contacter
            </a >
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
        Authentication: () => import("@/components/header/Authentication.vue"),
    },
    methods:{
       async  onClickSeConnecter() {
        
                    this.$store.dispatch('authentication/getDetail', true)
        },
        async onClickSeDeconnecter() {
           
            await location.reload()
            await this.$router.push('/')
            await localStorage.removeItem('gecToken')
            await localStorage.removeItem('gecLoggedInUser')
            await localStorage.removeItem('gecIsAuthenticated')
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