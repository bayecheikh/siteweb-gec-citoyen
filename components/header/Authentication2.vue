<template >
    <div>
        <div v-if="isPopUpChooseConnexionMode"
            class="login-form-box pop-up-container custom-border custom-auth-template offset-xl-2 col-lg-6">
            <div class="close-menu">
                <button @click="onClickCloseChooseMode()"  class="custom-close-btn"> <i class="icon-73"></i></button>
                </div>
           
            <div class="left-block ">
                <div class="section-title custom-auth-section-title ">
                    <h4 class="custom-left-box-title text-uppercase">GEC CITOYEN</h4>
                    <p class="custom-auth-message">Connectez-vous avec PNS <br> ou XROAD BJ.</p>
                    <div class="connexion-mode">
                    <div class="edu-form-check">
                        <input type="radio" value="pns" id="pns" name="connexionMode" @click="onRadioClickPNS($event)"
                            checked >
                        <label for="pns" class="custom-auth-label">PNS</label>
                    </div>
                    <div class="custom-edu-form-check edu-form-check">
                        <input type="radio" value="xroad" id="xroad" name="connexionMode"
                            @click="onRadioClickXROAD($event)">
                        <label for="xroad" class="custom-auth-label">XROAD</label>
                    </div>
                </div>
                </div>
                
            </div>
            <div class="right-block">
                <div class="section-title">
                    <h4 class="title custom-right-box-title text-uppercase">Connectez-vous</h4>
                </div>
             
                <div v-if="showPNSForm">
                    <form ref="pnsform">
                        <div class="form-group">
                            <label for="current-log-npi">Numéro Personnel d'Identification (NPI)*</label>
                            <input v-model="model.numero_npi" type="email" autocomplete="off" name="current-log-npi"
                                id="current-log-npi" placeholder="Numéro NPI" :rules="rules.npiRules">
                        </div>
                        <div class="form-group">
                            <label class="password-input" for="current-log-npi-password">Mot de passe*</label>

                            <input v-model="model.npi_password" :type="pnsPasswordStatus ? 'text' : 'password'" autocomplete="off"
                                name="current-log-npi-password" id="current-log-npi-password" placeholder="Mot de passe" :rules="rules.passwordRules">
                            <span v-if="pnsPasswordStatus" @click="togglePNSPasswordVisibility"><svg class="password-icon"
                                    width="24" height="24" viewBox="0 0 640 512"
                                    xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg></span>
                            <span v-if="!pnsPasswordStatus" @click="togglePNSPasswordVisibility"><svg class="password-icon"
                                    width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                                </svg></span>

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
                <div v-if="showXROADForm">
                    <form ref="xroadform">
                        <div class="form-group">
                            <label for="current-log-xroad-email">Adresse email*</label>
                            <input v-model="model.xroad_email" type="email" autocomplete="off" name="current-log-xroad-email"
                                id="current-log-xroad-email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label class="password-input" for="current-log-xroad-password">Mot de passe*</label>

                            <input v-model="model.xroad_password" :type="xroadPasswordStatus ? 'text' : 'password'"
                                autocomplete="off" name="current-log-xroad-password" id="current-log-xroad-password" placeholder="Mot de passe">
                            <span v-if="xroadPasswordStatus" @click="toggleXROADPasswordVisibility"><svg class="password-icon"
                                    width="24" height="24" viewBox="0 0 640 512"
                                    xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                                </svg></span>
                            <span v-if="!xroadPasswordStatus" @click="toggleXROADPasswordVisibility"><svg class="password-icon"
                                    width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                                </svg></span>
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
        </div>
    </div>
</template>


<script>

import { mapMutations, mapGetters } from 'vuex'
export default {
    modules: ['@nuxtjs/axios'],
        axios: {
            // Configuration axios
            baseURL: 'https://api-gec-citoyen.fly.dev' // l'URL de votre API
        },
    components: {
        SectionTitle: () => import('@/components/common/SectionTitle'),
        PopUpConnexion: () => import("@/components/PopUpConnexion.vue"),
    },
    computed: mapGetters({
        detailactive_step: 'active_step/detailactive_step',
        isauthenticatingfrombutton: 'authentication/isauthenticatingfrombutton'
    }),
    data() {
        return {
            model: {
                numero_npi: '',
                npi_password: '',
            },
            rules:{
                passwordRules: [
                v => !!v || 'Le mot de passe est obligatoire',
                //v => (v && v.length >= 4) || 'Mot de passe doit etre superieur a 3 caracteres',
                ],
                npiRules: [
                v => !!v || 'L\'adresse e-mail est obligatoire',
                v => /.+@.+\..+/.test(v) || 'L\'adresse e-mail doit être valide',
                ]
            },
            showPNSForm: true,
            showXROADForm: false,
            isPopUpChooseConnexionMode: true,
            xroadPasswordStatus: false,
            pnsPasswordStatus: false,
            isPNSConnecting: false,
            isXroadConnecting: false,
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
        async onRadioClickPNS() {
            this.showXROADForm = false
            this.showPNSForm = true
        },

        async onRadioClickXROAD() {
            this.showPNSForm = false
            this.showXROADForm = true
        },

        toggleXROADPasswordVisibility() {
            this.xroadPasswordStatus = !this.xroadPasswordStatus
        },
        togglePNSPasswordVisibility() {
            this.pnsPasswordStatus = !this.pnsPasswordStatus
        },
      onClickClose() {

            this.isPopUpConnexionNPSVisible = false

           
          this.$store.dispatch('authentication/getDetail', false)
         this.$store.dispatch('authentication/getDetailIsAuthenticatingFromButton', false)
         this.$refs.pnsform.reset();
            this.$refs.xroadform.reset();

        },
       onClickCloseChooseMode() {
       
            this.$store.dispatch('authentication/getDetail', false)
            this.$store.dispatch('authentication/getDetailIsAuthenticatingFromButton', false)
        },
       
        

        async onClickCloseXroad() {

            this.isPopUpConnexionXroadVisible = false
            this.$refs.xroadform.reset();
            await this.$store.dispatch('authentication/getDetail', false)
        },
        async submitPNSConnexion() {
            
            let isauthenticatingfrombutton = this.isauthenticatingfrombutton;
            this.isPNSConnecting = true;
            const npi = this.$refs.pnsform.querySelector(
                'input[name="current-log-npi"]'
            );
            const npiValue = npi.value;
            const password = this.$refs.pnsform.querySelector(
                'input[name="current-log-npi-password"]'
            );
            const npiPasswordValue = password.value;
            await this.$axios.post('/users/login', {
                email: npiValue,
                password: npiPasswordValue
                }).then(async (response) => { 
                    if (isauthenticatingfrombutton) {
                        this.$router.push("/addcourrier");
                    }
                    else{
                        await  this.$router.go()

                    }
                    console.log('Utilisateur connecté++++++++++++++++++++++++++',response.data)
                    await localStorage.setItem('gecToken', response.data.token)
                    await localStorage.setItem('gecLoggedInUser', JSON.stringify(response.data.data.user))
                    await localStorage.setItem('gecIsAuthenticated', true)
                         
                    this.validPNSCredentials = true;
                    this.$store.dispatch("authentication/getDetailIsLoggedIn", true);
                    this.isPNSConnecting = false;
                    
                    this.$store.dispatch("toast/getMessage", {
                    type: "success",
                    text: "Authentification réussie !",
                    });
                    this.onClickCloseChooseMode();
                    this.$store.dispatch("coordonnees/getDetail", {
                        dataUser: response.data.data.user,
                    });
                    this.$store.dispatch("active_step/getDetail", { id: "coordonnees" });
                }).
                catch((error) => {
                    this.validPNSCredentials = false;
                    this.isPNSConnecting = false;
                    console.log('Code error ++++++: ', error.response)
                    this.$store.dispatch('toast/getMessage',{type:'error',text:error.response.data.message || 'Echec de la connexion'})
                }).finally(() => {
                    this.isPNSConnecting = false;
                    console.log('Requête envoyée')
        }); 

        },

        async submitXroadConnexion() {
            let isauthenticatingfrombutton = this.isauthenticatingfrombutton;
            this.isXroadConnecting = true
            const xroadEmail = this.$refs.xroadform.querySelector(
                'input[name="current-log-xroad-email"]'
            );
            const xroadEmailValue = xroadEmail.value;
            const xroadPassword = this.$refs.xroadform.querySelector(
                'input[name="current-log-xroad-password"]'
            );
            const xroadPasswordValue = xroadPassword.value;
            await this.$axios.post('/users/login', {
                email: xroadEmailValue,
                password: xroadPasswordValue
                }).then(async (response) => { 
                    if (isauthenticatingfrombutton) {
                        this.$router.push("/addcourrier");
                    }
                    else{
                        await  this.$router.go()

                    }
                    console.log('Utilisateur connecté++++++++++++++++++++++++++',response.data)
                    await localStorage.setItem('gecToken', response.data.token)
                    await localStorage.setItem('gecLoggedInUser', JSON.stringify(response.data.data.user))
                    await localStorage.setItem('gecIsAuthenticated', true)
                         
                    this.validXroadCredentials = false
                    this.isXroadConnecting = false
                    this.$store.dispatch("authentication/getDetailIsLoggedIn", true);
                    this.$store.dispatch("toast/getMessage", {
                    type: "success",
                    text: "Authentification réussie !",
                    });
                    this.onClickCloseChooseMode();
                    this.$store.dispatch("coordonnees/getDetail", {
                        dataUser: response.data.data.user,
                    });
                    this.$store.dispatch("active_step/getDetail", { id: "coordonnees" });
                }).
                catch((error) => {
                    this.validXroadCredentials = false;
                    this.isXroadConnecting = false;
                    console.log('Code error ++++++: ', error.response)
                    this.$store.dispatch('toast/getMessage',{type:'error',text:error.response.data.message || 'Echec de la connexion'})
                }).finally(() => {
                    this.isXroadConnecting = false;
                    console.log('Requête envoyée')
        }); 
            // let isauthenticatingfrombutton = this.isauthenticatingfrombutton
            // const emailInput = this.$refs.xroadform.querySelector('input[name="xroad-email"]');
            // const emailValue = emailInput.value;
            // 
            // if (emailValue != 1) {
            //     setTimeout(() => {
            //         this.validXroadCredentials = true
            //         this.isXroadConnecting = false
            //         this.onClickCloseXroad();
            //         this.$store.dispatch('authentication/getDetailIsLoggedIn', true)
            //         if(isauthenticatingfrombutton){
            //                 console.log("elkstjorpktoirj")
            //                 this.$router.push('/addcourrier')
            //             }
            //             this.$store.dispatch('toast/getMessage',{type:'success',text:'Authentification réussie !'})
            //      this.onClickCloseChooseMode();
            //     }, 1000);

            // }
            // else {
            //     setTimeout(() => {
            //         this.validXroadCredentials = false
            //         this.isXroadConnecting = false
            //         return false
            //     }, 1000);

            // }


            // console.log('Données formulaire ++++++: ', { ...this.model })
            // let dataUser = {
            //     email: "",
            //     type_utilisateur: "Citoyen",
            //     prenom: "Cheikh",
            //     nom: "Gueye",
            //     email: "cheikh.gueye@ip3-conseil.com",
            //     telephone: "778688784",
            //     adresse: "Dakar, Sacré Coeur 3",
            // }

            // this.$store.dispatch('coordonnees/getDetail', { dataUser })

            // this.$store.dispatch('active_step/getDetail', { id: 'coordonnees' })

        },
     
       
    }
}

</script>

<style>
.custom-auth-label{
    color: #fff !important;
}



.custom-auth-template {
    position: fixed !important;
    top: 50%;
    left: 34.8%;
    transform: translate(-50%, -50%);
    z-index: 9999 !important;

    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2) !important;

}

.custom-close-btn {
    position: absolute;
    top: 3% !important;
    right: 1% !important;
    
    padding-right: 15px;

}

.custom-nps-sign-in-btn {
    cursor: pointer;
    background-color: #008064 !important;
    background: #008064 !important;
}

.password-toggle {
    position: absolute;
    top: 70%;
    right: 10px;
    color: #838383 !important;
    cursor: pointer;
}

.xroad-password-toggle {
    position: absolute;
    top: 56%;
    right: 10px;

    cursor: pointer;
}


.password-toggle.show-password i {
    color: #4fa794;
}

.password-toggle.hide-password i {
    color: #838383;

}

.custom-error-msg {
    margin-top: 25px !important;
    color: #FF5733 !important;
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

}

.password-input {
    position: relative;
}

.password-icon {
    position: absolute;
    top: 70%;
    right: 2.5rem;
    transform: translateY(-50%);
    cursor: pointer;
}


.login-form-box {
    display: flex;
    flex-direction: row;

}

.left-block {
    flex-basis: 40%;
 
    background: #008064;
   
    display: flex; align-items: center;
}


.right-block {

    flex-basis: 60%;
    background-color: white;
    padding: 50px !important;
}

.custom-border {
    padding: 0;
    margin-bottom: 10px;
    border-radius: 10px !important;
   
}

.custom-left-box-title {
    color: white !important;
    font-weight: bold !important;
    text-align: center;
}

.custom-right-box-title {
    color: #008064 !important;
    font-weight: bold !important;
    text-align: center;


}



.custom-auth-message {
    color: white !important;
    text-align: center !important;
   

}

.connexion-mode {
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    gap: 25px;

}

.custom-edu-form-check input[type="radio"] {
        /* Changer la couleur de fond de la boule en rouge */
        background-color: red !important;
        /* Autres styles pour la boule */
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

.custom-auth-section-title{
    padding: 50px !important;
}

@media (max-width: 1198px) {
  .custom-auth-template {
    left: 50% !important;
  }
}
@media (max-width: 1153px) {
  .custom-auth-template {
    width: 600px !important;
  }
}
@media (max-width: 615px) {
  .custom-auth-template {
    width: 400px !important;
    
    left: 50% !important;

    top: 50% !important;
    flex-direction: column  !important;
  }
  .custom-auth-section-title{
   text-align: center !important;
   justify-content: center !important;
   align-items: center !important;
    padding: 20px !important;
    margin-left: 80px !important;
    margin-bottom: -30px !important;


}
.custom-close-btn{
    color: #fff !important;
}
}
</style>