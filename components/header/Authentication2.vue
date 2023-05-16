
<template >
    <div>
        <div v-if="isPopUpChooseConnexionMode"
        class="custom-auth-api-template offset-xl-2 custom-col-lg-6 col-lg-6 transparent-background">
           
        <div class="custom-loader" v-if="isCharging">
                    <svg width="100" height="100" viewBox="0 0 38 38"
                                                    xmlns="http://www.w3.org/2000/svg" stroke="#0a3764">
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
    mounted: async function() {   
        setTimeout(async () => {

            let isauthenticatingfrombutton = this.isauthenticatingfrombutton;
          
           
            await this.$axios.post('/users/login', {
                email: "cheikh.gueye@ip3-conseil.com",
                password: "12345678@"
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
                    this.isCharging = false
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
                 
                    console.log('Code error ++++++: ', error.response)
                    this.$store.dispatch('toast/getMessage',{type:'error',text:error.response.data.message || 'Echec de la connexion'})
                    this.isCharging = false
                }).finally(() => {
                  
                    console.log('Requête envoyée')
                    this.isCharging = false
        }); 
            
        }, 3000);
          
    

        
    },
    data() {
        return {
            isPopUpChooseConnexionMode: true,
            isCharging: true,
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

.transparent-background {
        background-color: transparent !important;
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

.custom-auth-api-template {
    
    position: fixed !important;
    top: 50%;
    left: 34.8%;
    transform: translate(-50%, -50%);
    position: fixed;
   
    z-index: 9999 !important;
   
  
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