<template>
    <div v-if="isPopUpConnexionVisible" class="login-form-box border-grey custom-template offset-xl-2 col-lg-6">
        <div class="contact-form ">
            <button @click="onClickClose()" class="custom-close-btn">x</button>
        <h3 class="title"></h3>
        <form ref="form" >
            <div class="form-group">
                <label for="current-log-email">Numéro Personnel d'Identification (NPI) *</label>
                <input v-model="model.numero_npi" type="email" autocomplete="off" name="current-log-email" id="current-log-email" placeholder="Numéro NPI">
            </div>
            <div class="form-group">
                <label for="current-log-password">Mot de passe *</label>
                <input v-model="model.password" type="password" autocomplete="off" name="current-log-password" id="current-log-password" placeholder="Mot de passe">
                <span class="password-toggle" @click="togglePasswordVisibility"><i class="icon-76"></i></span>
            </div>
            <div v-if="!validCredentials" >
            <p class="custom-error-msg">NPI ou mot de passe incorrect.</p>
        </div>
            <div class="form-group">
                <button @click="submitConnexion" type="button" class="edu-btn custom-nps-sign-in-btn btn-medium"><span v-if="!isLoading" >Se connecter</span><span v-if="isLoading" ><svg width="24" height="24" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
  <g fill="none" fill-rule="evenodd">
    <g transform="translate(1 1)" stroke-width="2">
      <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
      <path d="M36 18c0-9.94-8.06-18-18-18">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 18 18" 
          to="360 18 18" 
          dur="1s" 
          repeatCount="indefinite"/>
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

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        mounted: function() {         
        },
        computed: mapGetters({
            detailactive_step: 'active_step/detailactive_step',
        }),
        data() {
            return {
                isLoading: false,
                isPopUpConnexionVisible: true,
                validCredentials: true,
                model :{
                    numero_npi:"",
                    password:""
                }
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
            onClickClose() {
                this.isPopUpConnexionVisible = false
            },
            submitConnexion(){
                const codeInput = this.$refs.form.querySelector('input[name="current-log-email"]');
                const codeValue = codeInput.value;
                
                if (codeValue == 1) {
                    this.validCredentials = true
                }
                else{
                    this.validCredentials = false
                    return false
                }
                
                this.isLoading=true
                setTimeout(() => {
    // Fermer la pop-up après 3 secondes
    this.onClickClose();

    // Recharger la page après 3 secondes
    setTimeout(() => {
      location.reload();
    }, 1000);
  }, 2000);
                console.log('Données formulaire ++++++: ', {...this.model})
                let dataUser = {
                    numero_npi:"",
                    type_utilisateur:"Citoyen",
                    prenom:"Cheikh",
                    nom:"Gueye",
                    email:"cheikh.gueye@ip3-conseil.com",
                    telephone:"778688784",
                    adresse:"Dakar, Sacré Coeur 3",
                }
                this.$store.dispatch('coordonnees/getDetail',{dataUser})
                
                this.$store.dispatch('active_step/getDetail',{id:'coordonnees'})
                
            },
        },
    }
</script>
<style scoped>

.custom-template {
        position: fixed !important;
        top: 50%;
        left: 34.8%;
        transform: translate(-50%, -50%);
        position: fixed;
        z-index: 9999 !important;
        box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2) !important;
   
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


.password-toggle.show-password i {
    color: #838383;
}

.password-toggle.hide-password i::before {
    color: #4fa794 ;
    
}
.custom-error-msg {
        margin-top: 25px !important;
        color: #FF5733 !important;
    }
</style>