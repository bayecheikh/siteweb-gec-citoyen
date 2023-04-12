<template>
    <div>
    <header class="edu-header header-style-2">
        <HeaderTopTwo v-if="showHeaderTop" />
        <div class="header-mainmenu" :class="{'edu-sticky': isSticky}">
            <div class="container">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <n-link to="/">
                                <img class="logo-light" src="/images/logo/logo-benin-header.png" alt="Logo Bénin">
                            </n-link>
                        </div>
                        <span class="custom-application-name">GEC CITOYEN</span>

                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <Navigation />
                        </nav>
                    </div>
                    <div v-if="!isloggedin">
                    <div class="header-right">
                        <ul class="header-action">
                          
                            <li class="header-btn">
                                <a class="edu-btn btn-medium my-custom-login-button"   @click="onClickSeConnecter()" >Se connecter<i class="icon-4"></i></a>
                            </li>
                            <li class="mobile-menu-bar d-block d-xl-none">
                                <button class="hamberger-button" @click="mobileMenuOpen( 'addClass', 'active' )">
                                    <i class="icon-54"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    </div>

                    <div v-if="isloggedin">
                    <div class="header-right">
                        <ul class="header-action">
                          
                            <li class="header-btn">
                                <a class="edu-btn btn-medium my-custom-login-button"   @click="onClickSeDeconnecter()" >  <span v-if="!isDeconnecting">Se déconnecter</span><span
                                                v-if="isDeconnecting"><svg width="24" height="24" viewBox="0 0 38 38"
                                                    xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                                    <g fill="none" fill-rule="evenodd">
                                                        <g transform="translate(1 1)" stroke-width="2">
                                                            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                                                            <path d="M36 18c0-9.94-8.06-18-18-18">
                                                                <animateTransform attributeName="transform" type="rotate"
                                                                    from="0 18 18" to="360 18 18" dur="1s"
                                                                    repeatCount="indefinite" />
                                                            </path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span></a>
                            </li>
                            <li class="mobile-menu-bar d-block d-xl-none">
                                <button class="hamberger-button" @click="mobileMenuOpen( 'addClass', 'active' )">
                                    <i class="icon-54"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <SearchPopUp />

        <OffCanvasMobileMenuTwo />
    </header>
    <Authentication2 v-if="isauthenticatingfrombutton"/>
</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        computed: {
        ...mapGetters({
            isloggedin: 'authentication/isloggedin',
            isauthenticatingfrombutton: 'authentication/isauthenticatingfrombutton'
        })
    },
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
      
        Category: () => import("@/components/header/Category"),
        Navigation: () => import("@/components/header/Navigation"),
        Authentication2: () => import("@/components/header/Authentication2.vue"),
           
           
            SearchPopUp: () => import("@/components/header/SearchPopUp"),
         
            OffCanvasMobileMenuTwo: () => import("@/components/header/OffCanvasMobileMenuTwo")
        },
        data(){
            return {
                isSticky: false,
                isAuthenticationPopUpLoad: false,
            isPopUpChooseConnexionMode: false,
            isPNSConnecting: false,
            isXroadConnecting: false,
            isDeconnecting: false,
         
            isPopUpConnexionNPSVisible: false,
            isPopUpConnexionXroadVisible: false,
            validPNSCredentials: true,
            validXroadCredentials: true,
            model: {
                numero_npi: "",
                password: "",
                xroad_email: "",
                xroad_password: ""

            },
            isPageLoad: false,
        }
        },
        props: ['showHeaderTop'],
        mounted(){
            window.addEventListener( 'scroll', () => {
                let scrollPos = window.scrollY
                if( scrollPos >= 200 ) {
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            } )
        },
        methods: {
            submitPNSConnexion() {
            this.isPNSConnecting = true
            const npi = this.$refs.pnsform.querySelector('input[name="current-log-email"]');
            const npiValue = npi.value;

            if (npiValue == 1) {
                setTimeout(() => {
                    this.validPNSCredentials = true
                    setTimeout(() => {

                        this.onClickClose();
                        this.isPNSConnecting = false
                    }, 1000);
                }, 1000);

            }
            else {
                setTimeout(() => {
                    this.validPNSCredentials = false
                    this.isPNSConnecting = false
                    return false
                }, 1000);

            }


            console.log('Données formulaire ++++++: ', { ...this.model })
            let dataUser = {
                numero_npi: "",
                type_utilisateur: "Citoyen",
                prenom: "Cheikh",
                nom: "Gueye",
                email: "cheikh.gueye@ip3-conseil.com",
                telephone: "778688784",
                adresse: "Dakar, Sacré Coeur 3",
            }

            this.$store.dispatch('coordonnees/getDetail', { dataUser })

            this.$store.dispatch('active_step/getDetail', { id: 'coordonnees' })

        },
        submitXroadConnexion() {
            const emailInput = this.$refs.xroadform.querySelector('input[name="xroad-email"]');
            const emailValue = emailInput.value;
            this.isXroadConnecting = true
            if (emailValue == 1) {
                setTimeout(() => {
                    this.validXroadCredentials = true
                    this.isXroadConnecting = false
                    this.onClickCloseXroad();
                 
                }, 1000);

            }
            else {
                setTimeout(() => {
                    this.validXroadCredentials = false
                    this.isXroadConnecting = false
                    return false
                }, 1000);

            }


            console.log('Données formulaire ++++++: ', { ...this.model })
            let dataUser = {
                email: "",
                type_utilisateur: "Citoyen",
                prenom: "Cheikh",
                nom: "Gueye",
                email: "cheikh.gueye@ip3-conseil.com",
                telephone: "778688784",
                adresse: "Dakar, Sacré Coeur 3",
            }

            this.$store.dispatch('coordonnees/getDetail', { dataUser })

            this.$store.dispatch('active_step/getDetail', { id: 'coordonnees' })

        },
        onClickSeConnecter() {
            this.$store.dispatch('authentication/getDetail', true)

            this.isAuthenticationPopUpLoad = true
            this.isPopUpChooseConnexionMode = true
        },
        onClickSeDeconnecter() {
            this.isDeconnecting = true
            setTimeout(() => {
                this.isDeconnecting = false
                this.$store.dispatch('authentication/getDetailIsLoggedIn', false)
                this.$store.dispatch('authentication/getDetail', false)
                this.$store.dispatch('authentication/getDetailIsAuthenticatingFromButton', false)
            }, 1000);

        }
       
         ,
        onClickClose() {
            this.isPopUpConnexionNPSVisible = false

            this.$refs.pnsform.reset();

        },
        onClickCloseChooseMode() {
            this.isPopUpChooseConnexionMode = false
        },
            // Off-canvas Mobile Menu Open
            mobileMenuOpen( addRemoveClass, className ) {
                const el = document.querySelector( '#offcanvas-menu' );
                if ( addRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            },

            // search popup
            searchPopUpOpen(addRemoveClass, className) {
                const el = document.querySelector( '#edu-search-popup' );
                if ( addRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            }
        }
    }
</script>

<style>

a.edu-btn, button.edu-btn{
    background: linear-gradient(-90deg,#31b978,#1ab69d);
}
.custom-application-name{
    color: #181818;
    align-items: center;
    justify-content: center;
    font-weight: var(--p-bold);
    font-size: 18px;
    word-break: break-word;
    font-family: var(--font-secondary);

}
.my-custom-login-button{
    cursor: pointer;
}
</style>