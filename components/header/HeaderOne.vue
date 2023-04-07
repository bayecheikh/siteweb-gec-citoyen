<template>
    <div>
        <header class="edu-header custom-edu-header header-style-1 header-fullwidth no-topbar">
            <div class="header-mainmenu custom-header-one" :class="{ 'edu-sticky': isSticky }">
                <div class="container-fluid">
                    <div class="header-navbar">
                        <div class="header-brand">
                            <div class="logo">
                                <n-link to="/">
                                    <img class="logo-light" src="/images/logo/logo-dark.png" alt="Dark Logo"
                                        v-if="$colorMode.value === 'light'">
                                    <img class="logo-dark" src="/images/logo/logo-white.png" alt="Light Logo"
                                        v-if="$colorMode.value === 'dark'">
                                </n-link>
                            </div>
                        </div>
                        <div class="header-mainnav">
                            <nav class="mainmenu-nav">
                                <Navigation />
                            </nav>
                        </div>
                        <div class="header-right">
                            <div v-if="!isloggedin">
                                <ul class="header-action">
                                    <div class="banner-btn custom-banner-btn">
                                        <li class="custom-header-btn">
                                            <a class="edu-btn custom-edu-btn custom-btn-sign-in text-uppercase"
                                                @click="onClickSeConnecter()">
                                                Se connecter
                                            </a>
                                        </li>
                                        <li class="custom-header-btn">
                                            <a href="https://auth.service-public.bj/citizen/register?client_id=citizen-portal&redirect_uri=https:%2F%2Fservice-public.bj%2Fauth%2Fauthenticated&scope=openid&response_type=code" class="edu-btn custom-btn-sign-up btn-orange text-uppercase">
                                                Créer un compte
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div v-if="isloggedin">
                                <div class=" custom-loggout">
                                    <div class="custom-loggout-btn">
                                        <a class="edu-btn custom-btn-sign-out text-uppercase"
                                            @click="onClickSeDeconnecter()">
                                            <span v-if="!isDeconnecting">Se déconnecter</span><span
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
                                            </span>
                                        </a>
                                    </div>
                                    <div class="initials-circle">
                                        <span class="initials">CG</span>
                                        <span class="tooltip">Cheikh Gueye<br>NPI : 0087742803</span>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Authentication v-if="isauthenticating"/>
      <!-- <template v-if="isPageLoad">
            <div v-if="isPopUpChooseConnexionMode" class="login-form-box border-grey custom-template offset-xl-2 col-lg-6">
                <div class="contact-form ">
                    <button @click="onClickCloseChooseMode()" class="custom-close-btn">x</button>
                    <div class="section-title">
                        <h4 class="title  text-uppercase">Veuillez choisir un mode de connexion</h4>
                        <p class="custom-information-msg">Vous pouvez vous connecter à la plateforme GEC CITOYEN à l'aide de
                            votre Numéro Personnel d'Identification sur PNS ou avec vos identifiants XROAD BJ.</p>
                    </div>
                    <div class="custom-mode-connexion-btn-group">
                        <div>
                            <button class="edu-btn custom-mode-connexion-btn" @click="onClickChooseNPS()">Continuer avec
                                PNS</button>
                        </div>
                        <div>
                            <button @click="onClickChooseXroad()" class="edu-btn custom-mode-connexion-btn">Continuer avec
                                XROAD</button>
                        </div>
                    </div>
                </div>

            </div>
            <div v-if="isPopUpConnexionNPSVisible" class="login-form-box border-grey custom-template offset-xl-2 col-lg-6">

                <div class="contact-form ">

                    <button @click="onClickClose()" class="custom-close-btn">x</button>
                    <div class="section-title">
                        <h4 class="title custom-connexion-title text-uppercase">Connexion PNS</h4>
                    </div>
                    <h3 class="title"></h3>
                    <form ref="pnsform">
                        <div class="form-group">
                            <label for="current-log-email">Numéro Personnel d'Identification (NPI) *</label>
                            <input v-model="model.numero_npi" type="email" autocomplete="off" name="current-log-email"
                                id="current-log-email" placeholder="Numéro NPI">
                        </div>
                        <div class="form-group">
                            <label for="current-log-password">Mot de passe *</label>
                            <input v-model="model.password" type="password" autocomplete="off" name="current-log-password"
                                id="current-log-password" placeholder="Mot de passe">
                            <span class="password-toggle" @click="togglePasswordVisibility"><i class="icon-76"></i></span>
                        </div>
                        <div v-if="!validPNSCredentials">
                            <p class="custom-error-msg">NPI ou mot de passe incorrect.</p>
                        </div>
                        <div class="form-group">
                            <button @click="submitPNSConnexion" type="button"
                                class="edu-btn custom-nps-sign-in-btn btn-medium"><span v-if="!isPNSConnecting">Se
                                    connecter</span><span v-if="isPNSConnecting"><svg width="24" height="24"
                                        viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                        <g fill="none" fill-rule="evenodd">
                                            <g transform="translate(1 1)" stroke-width="2">
                                                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                                                <path d="M36 18c0-9.94-8.06-18-18-18">
                                                    <animateTransform attributeName="transform" type="rotate" from="0 18 18"
                                                        to="360 18 18" dur="1s" repeatCount="indefinite" />
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                </span></button>
                        </div>
                    </form>

                </div>
            </div>
            <div v-if="isPopUpConnexionXroadVisible"
                class="login-form-box border-grey custom-template offset-xl-2 col-lg-6">
                <div class="contact-form ">
                    <button @click="onClickCloseXroad()" class="custom-close-btn">x</button>
                    <div class="section-title">
                        <h4 class="title custom-connexion-title text-uppercase">Connexion XROAD</h4>
                    </div>
                    <form ref="xroadform">
                        <div class="form-group">
                            <label for="xroad-email">Email *</label>
                            <input v-model="model.xroad_email" type="email" autocomplete="off" name="xroad-email"
                                id="xroad-email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="xroad-password">Mot de passe *</label>
                            <input v-model="model.xroad_password" type="password" autocomplete="off" name="xroad-password"
                                id="xroad-password" placeholder="Mot de passe">
                            <span class="xroad-password-toggle" @click="toggleXroadPasswordVisibility"><i
                                    class="icon-76"></i></span>
                        </div>
                        <div v-if="!validXroadCredentials">
                            <p class="custom-error-msg">Email ou mot de passe incorrect.</p>
                        </div>
                        <div class="form-group">
                            <button @click="submitXroadConnexion" type="button"
                                class="edu-btn custom-nps-sign-in-btn btn-medium"><span v-if="!isXroadConnecting">Se
                                    connecter</span><span v-if="isXroadConnecting"><svg width="24" height="24"
                                        viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                        <g fill="none" fill-rule="evenodd">
                                            <g transform="translate(1 1)" stroke-width="2">
                                                <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                                                <path d="M36 18c0-9.94-8.06-18-18-18">
                                                    <animateTransform attributeName="transform" type="rotate" from="0 18 18"
                                                        to="360 18 18" dur="1s" repeatCount="indefinite" />
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                </span></button>
                        </div>
                    </form>

                </div>
            </div>
        </template>
-->


    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            isloggedin: 'authentication/isloggedin',
            isauthenticating: 'authentication/isauthenticating'
        })
    },
    components: {
        SectionTitle: () => import('@/components/common/SectionTitle'),
        HeaderTopOne: () => import("@/components/header/HeaderTopOne"),
        Category: () => import("@/components/header/Category"),
        Navigation: () => import("@/components/header/Navigation"),
        Authentication: () => import("@/components/header/Authentication.vue"),
    },

    data() {
        return {
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
    methods: {
        togglePasswordVisibility() {
            const passwordInput = document.getElementById('current-log-password');
            const passwordToggle = document.querySelector('.password-toggle');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordToggle.classList.remove('hide-password');
                passwordToggle.classList.add('show-password');
            } else {
                passwordInput.type = 'password';
                passwordToggle.classList.remove('show-password');
                passwordToggle.classList.add('hide-password');
            }
        },
        toggleXroadPasswordVisibility() {
            const passwordInput = document.getElementById('xroad-password');
            const passwordToggle = document.querySelector('.xroad-password-toggle');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordToggle.classList.remove('hide-password');
                passwordToggle.classList.add('show-password');
            } else {
                passwordInput.type = 'password';
                passwordToggle.classList.remove('show-password');
                passwordToggle.classList.add('hide-password');
            }
        },
        onClickClose() {
            this.isPopUpConnexionNPSVisible = false

            this.$refs.pnsform.reset();

        },
        onClickCloseChooseMode() {
            this.isPopUpChooseConnexionMode = false
        },
        onClickChooseNPS() {
            this.isPopUpChooseConnexionMode = false
            this.isPopUpConnexionNPSVisible = true
        },
        onClickChooseXroad() {
            this.isPopUpChooseConnexionMode = false
            this.isPopUpConnexionXroadVisible = true
        },

        onClickCloseXroad() {

            this.isPopUpConnexionXroadVisible = false
            this.$refs.xroadform.reset();
        },
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
            }, 1000);

        }
    }
}

</script>

<style>
.custom-header-btn {
    padding: 0 2px 0 0 !important;
    color: var(--color-white) !important;
    font-weight: bold !important;
    border-radius: 0 !important;
    overflow: visible !important;
    margin-right: 2px !important;
    margin-left: 2px !important;
    padding-right: 0 !important;
    font-size: 3px !important;
    top: 0 !important;
    text-align: center !important;
}

.custom-edu-btn {
    border-radius: 5px;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    color: var(--edu-btn-color);
    background: var(--color-primary);
    padding: 5px;
    font-size: 6px;
    font-weight: bold !important;
    transition: 0.4s;
    font-family: var(--font-secondary);
    border: 0 none;
    overflow: hidden;
    text-align: center !important;
    position: relative;
    z-index: 1;
}

.custom-btn-small {
    font-weight: bold !important;
    height: 30px !important;
    line-height: 30px !important;
    padding: 0 15px !important;
    font-size: 8px !important;
    text-align: center !important;
    background-color: #2985BC !important;
}

.custom-banner-btn {

    display: flex !important;
    justify-content: center !important;
    gap: 5px !important;
}

.custom-loggout {

    display: flex !important;
    justify-content: center !important;
    gap: 5px !important;
}

.custom-loggout-btn {
    padding: 0 2px 0 0 !important;
    margin-top: 7px;
    color: var(--color-white) !important;
    font-weight: bold !important;
    border-radius: 0 !important;
    overflow: visible !important;
    margin-right: 2px !important;
    margin-left: 2px !important;
    padding-right: 0 !important;
    font-size: 3px !important;
    top: 0 !important;
    text-align: center !important;
}

.custom-btn-sign-in {
    cursor: pointer;
    font-weight: 700 !important;
    height: 40px !important;
    display: flex !important;

    justify-content: center !important;
    align-items: center !important;
    font-size: 13px !important;
    text-align: center !important;
    background-color: #2985BC !important;
    background: #2985BC !important;
}

.custom-btn-sign-up {

    font-weight: 700 !important;
    height: 40px !important;
    display: flex !important;
    margin-right: 20px !important;
    justify-content: center !important;
    align-items: center !important;
    font-size: 13px !important;
    text-align: center !important;
    background-color: orange !important;
    background: orange !important;
}

.custom-btn-sign-out {
    cursor: pointer;
    font-weight: 700 !important;
    height: 40px !important;
    display: flex !important;
    margin-right: 20px !important;
    justify-content: center !important;
    align-items: center !important;
    font-size: 13px !important;
    text-align: center !important;
    background-color: #6441A3 !important;
    background: #6441A3 !important;
}

.custom-btn-send-courrier {
    font-weight: bold !important;

    margin-left: 10px !important;

    padding-bottom: 5px !important;

    font-size: 11px !important;
    text-align: center !important;
}

.custom-header-one {

    background-color: #0a3764 !important;
}

.custom-btn-sign-in:hover {
    background: linear-gradient(-90deg, #2985BC 0%, #2985BC 100%) !important;
    color: white !important;
}

.custom-btn-sign-in:after {
    background: linear-gradient(-90deg, #2c8ac0 0%, #42a0d7 100%) !important;

}

.custom-btn-sign-up:hover {
    background: linear-gradient(-90deg, orange 0%, orange 100%) !important;
    color: white !important;
}

.custom-btn-sign-up:after {
    background: linear-gradient(-90deg, #FFC04D 0%, #ffc752 100%) !important;
}

.custom-btn-sign-out:hover {
    background: linear-gradient(-90deg, #6441A3 0%, #6441A3 100%) !important;
    color: white !important;
}

.custom-btn-sign-out:after {
    background: linear-gradient(-90deg, #7a52c3 0%, #7a52c3 100%) !important;

}

.custom-template {
    position: fixed !important;
    top: 50%;
    left: 34.8%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 9999 !important;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2) !important;
    backdrop-filter: blur(5px) !important;
}

.custom-close-btn {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
    color: gray;
    padding-right: 15px;
    font-size: 20px;
}

.custom-nps-sign-in-btn {
    cursor: pointer;
    background-color: #008064 !important;
}

.password-toggle {
    position: absolute;
    top: 56%;
    right: 10px;

    cursor: pointer;
}

.xroad-password-toggle {
    position: absolute;
    top: 56%;
    right: 10px;

    cursor: pointer;
}


.password-toggle.show-password i {
    color: #838383;
}

.password-toggle.hide-password i::before {
    color: #4fa794;

}

.custom-error-msg {
    margin-top: 25px !important;
    color: #FF5733 !important;
}

.initials-circle {
    position: relative;
    display: inline-block;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #7289da;
    text-align: center;
    line-height: 50px;
}

.tooltip {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -65px;
    opacity: 0;
    transition: opacity 0.3s;
}

.initials-circle:hover .tooltip {
    visibility: visible;
    opacity: 1;
}

.initials {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}

.custom-connexion-title {
    border-bottom: 1px solid black !important;
    margin-bottom: -10px !important;
    padding: 10px !important;
    text-align: center !important;
    padding-left: 0px !important;
    color: #0a3764 !important;
    font-weight: bold !important;
}

.custom-information-msg {
    color: #8e8e8e !important;
    margin-bottom: 25px !important;
    font-size: 12.5px !important;
    padding: 5px !important;
    padding-left: 2px !important;
}

.custom-mode-connexion-btn-group {
    display: block !important;
    gap: 20px !important;
    text-align: center !important;
    justify-content: center !important;
    align-items: center !important;
}

.custom-mode-connexion-btn {
    color: white !important;
    font-weight: 500 !important;
    background-color: #008064 !important;
    width: 100% !important;
    display: block !important;
    margin-bottom: 20px !important;

}</style>