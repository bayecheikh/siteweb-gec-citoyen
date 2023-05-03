<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderTwo />
        
        <section class="contact-us-area custom-contact-us-area">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-4 col-lg-6">
                        <div class="contact-us-info">
                            <h3 class="heading-title">Contactez-nous !</h3>
                            <ul class="address-list">
                                <li>
                                    <h5 class="title">Adresse</h5>
                                    <p>9F87+XJ3, RN 3, Cotonou, Bénin</p>
                                </li>
                                <li>
                                    <h5 class="title">Email</h5>
                                    <p><a href="mailto:gec-citoyen@gouv.bj" target="_blank">gec-citoyen@gouv.bj</a></p>
                                </li>
                                <li>
                                    <h5 class="title">Téléphone</h5>
                                    <p><a href="tel:+22947135598">(+229) 47 135 5 98</a></p>
                                </li>
                            </ul>
                            <ul class="social-share">
                                <li><a href="#"><i class="icon-facebook"></i></a></li>
                                <li><a href="#"><i class="icon-linkedin2"></i></a></li>
                                <li><a href="#"><i class="icon-instagram"></i></a></li>
                                <li><a href="#"><i class="icon-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="offset-xl-2 col-lg-6">
                        <div class="contact-form form-style-2 custom-form-style-2">
                            <div class="section-title">
                                <h4 class="title">Formulaire de contact</h4>
                            </div>

                            <form class="rnt-contact-form rwt-dynamic-form" ref="form" @submit.prevent="sendEmail">
                                <div class="row row--10">
                                    <div class="form-group col-12">
                                        <input type="text" name="fullname" placeholder="Nom *" v-model="fullname">
                                        <div v-if="$v.fullname.$error"><p class="custom-validation-error-msg">Le nom est obligatoire.</p></div>
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="email" name="email" placeholder="Email *" v-model="email">
                                        <div v-if="$v.email.$error"><p class="custom-validation-error-msg">L'email doit être valide.</p></div>
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="tel" name="phone" placeholder="Téléphone">
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" cols="30" rows="4" placeholder="Votre message *" v-model="message"></textarea>
                                        <div v-if="$v.message.$error"><p class="custom-validation-error-msg">Le message est obligatoire.</p></div>
                                    </div>
                                    <div class="form-group col-12 mt-5">
                                        <recaptcha />
                                        <div v-if="showRecaptchaErrorText" > <p class="custom-validation-error-msg text-left">Veuillez confirmer que vous n'êtes pas un robot.</p></div>
                                        
                                        
                    <button type="button" name="submit" @click="sendEmail"
                    class="rn-btn edu-btn submit-btn"><span v-if="!isloading">Soumettre<i
                        class="icon-4"></i>
                                  </span><span v-if="isloading"><svg width="24" height="24"
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
                                </div>
                            </form>

                            <ul class="shape-group">
                                <MouseMove addClassName="shape-1" dataDepth="1" imgSrc="/images/about/shape-13.png" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="google-map-area">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>

        <FooterKitchen />
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
  mixins: [validationMixin],
  components: {
    HeaderTwo: () => import("@/components/header/HeaderTwo"),
    BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
    FooterKitchen: () => import("@/components/footer/FooterKitchen"),
    MouseMove: () => import('@/components/animation/MouseMove')
  },
  data() {
    return {
      isloading: false,
      recaptchaErrorText: false,
      showRecaptchaErrorText: false,
      resultText: '',
      fullname: '',
      phone: '',
      email: '',
      message:''
    }
  },
  validations: {
    fullname: {
      required,
    },
    email: {
      required,
      email,
    },
    message: {
      required,
    },
  },
  methods: {
    async sendEmail(e) {
      this.$v.$touch();
      if (!this.$v.$invalid) {
      this.isloading = true
      const serviceId = "service_zf1vlgj"
      const templateId = "template_7yp3f9c"
      const userId = '3JQlE7q770juJLC8c'

      const templateParams = {
        fullname: this.$refs.form.fullname.value,
        email: this.$refs.form.email.value,
        phone: this.$refs.form.phone.value,
        message: this.$refs.form.message.value
      };
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        this.showRecaptchaErrorText = false
        emailjs.send(serviceId, templateId, templateParams, userId)
          .then(() => {
               
            this.$store.dispatch("toast/getMessage", {
                    type: "success",
                    text: "Votre message a été envoyé avec succès !",
                    });
                    
        
            this.$refs.form.reset();
            this.isloading = false;
          }, (error) => {
       
            this.$store.dispatch("toast/getMessage", {
                    type: "error",
                    text: error.text,
                    });
           
         
          });

        // at the end you need to reset recaptcha
        await this.$recaptcha.reset()
      } catch (error) {

        this.isloading = false;
        this.showRecaptchaErrorText = true
        console.log('Login error:', error)
      }

    }
  }
  },
  head() {
    return {
      title: 'Faire une suggestion'
    }
  }
}
</script>
<style>
.contact-form.custom-form-style-2 {
  padding: 50px !important;
}

.custom-contact-us-area {
  padding: 90px 0 0 !important;
}
.custom-validation-error-msg{
  color: #fe0022
}
</style>

