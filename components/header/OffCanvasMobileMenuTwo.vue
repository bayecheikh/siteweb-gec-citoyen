<template>
    <div v-if="!isauthenticating" id="offcanvas-menu" class="edublink-vue-mobile-popup-menu">
        <div class="mobile-menu-overlay" @click="mobileMenuClose( 'removeClass', 'active' )"></div>
        <div class="inner">
            <div class="header-top">
                <div class="logo">
                    <a href="/">
                       <h3>GEC CITOYEN</h3>
                    </a>
                    <h4 class="custom-mobile-menu-h4" v-if="prenomEtNom">{{ prenomEtNom }}</h4>
                    <p v-if="email">Email : {{ email }}</p>

                </div>
                <div class="close-menu">
                    <button class="close-button" @click="mobileMenuClose( 'removeClass', 'active' )">
                        <i class="icon-73"></i>
                    </button>
                </div>
            </div>
            <MobileMenu />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        mounted() {
        this.token = localStorage?.getItem('gecToken')
        if(localStorage.getItem('gecToken')){
            const user = JSON.parse(localStorage.getItem('gecLoggedInUser'));
            const prenom = user['firstname'];
            const nom = user['lastname'];
            const email = user['email'];
            const prenomEtNom = prenom + " " +nom
            this.prenomEtNom = prenomEtNom
            this.email = email
        }
    },
        computed: {
        ...mapGetters({
            isauthenticating: 'authentication/isauthenticating',
          
        })
    },
        components: {
            MobileMenu: () => import('@/components/header/MobileMenu'),

        },
        
        methods: {
            // Off-canvas Mobile Menu Close
            mobileMenuClose( triggerRemoveClass, className ) {
                const el = document.querySelector( '#offcanvas-menu' );
                if ( triggerRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            }
        },
        data() {
        return {
            prenomEtNom: null,
            email: null,
        }
    }
    }
</script>

<style>

.custom-mobile-menu-h4{
    color: #008064 !important;
}
</style>