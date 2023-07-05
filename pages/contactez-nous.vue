<template>
  <div id="main-wrapper" class="main-wrapper">

    <HeaderTwo />

    <section class="contact-us-area custom-contact-us-area">
      <div class="container">
        <div class="row g-5">
          <div class="col-xl-4 col-lg-6">
            <div class="contact-us-info loader-contact" v-show="loading"></div>
            <div class="contact-us-info" v-show="!loading">
              <h3 class="heading-title">Contactez-nous !</h3>
              <ul class="address-list">

                <li v-show="adresse_gec">
                  <h5 class="title">Adresse</h5>
                  <p>{{ adresse_gec }}</p>
                </li>

                <li v-show="email_gec">
                  <h5 class="title">Email</h5>
                  <p><a :href="'mailto:' + email_gec" target="_blank">{{ email_gec }}</a></p>
                </li>


                <li v-show="telephone_gec">
                  <h5 class="title">Téléphone</h5>
                  <p><a :href="'tel:' + telephone_gec">{{ telephone_gec }}</a></p>
                </li>

              </ul>
              <ul v-show="reseaux" class="social-share">
                <li v-show="facebook_link"><a target="_blank" :href=facebook_link><i class="icon-facebook"></i></a></li>
                <li v-show="linkedin_link"><a target="_blank" :href=linkedin_link><i class="icon-linkedin2"></i></a></li>
                <li v-show="instagram_link"><a target="_blank" :href=instagram_link><i class="icon-instagram"></i></a>
                </li>
                <li v-show="twitter_link"><a target="_blank" :href=twitter_link><i class="icon-twitter"></i></a></li>
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
                  <div class="form-group col-12 mt-5">
                    <label for="subject">Objet</label>
                    <select name="subject" v-model="subject">
                      <option value="Suggestion">Faire une suggestion</option>
                      <option value="Signaler un problème">Signaler un problème</option>
                      <option value="Autre" selected>Autre</option>
                    </select>
                  </div>

                  <div class="form-group col-12">
                    <input type="text" name="fullname" placeholder="Prénom et nom *" v-model="fullname">
                    <div v-if="$v.fullname.$error">
                      <p class="custom-validation-error-msg">Le prénom et le nom sont obligatoires.</p>
                    </div>
                  </div>
                  <div class="form-group col-12">
                    <input type="email" name="email" placeholder="Email *" v-model="email">
                    <div v-if="$v.email.$error">
                      <p class="custom-validation-error-msg">L'email doit être valide.</p>
                    </div>
                  </div>
                  <div class="form-group col-12">
                    <input type="tel" name="phone" placeholder="Téléphone" v-model="phone">
                    <div v-if="$v.phone.$error">
                      <p class="custom-validation-error-msg">Le numéro de téléphone doit être valide.</p>
                    </div>
                  </div>
                  <div class="form-group col-12">
                    <textarea name="message" cols="30" rows="4" placeholder="Votre message *"
                      v-model="message"></textarea>
                    <div v-if="$v.message.$error">
                      <p class="custom-validation-error-msg">Le message est obligatoire.</p>
                    </div>
                  </div>
                  <div class="form-group col-12 mt-5">
                    <recaptcha />
                    <div v-if="showRecaptchaErrorText">
                      <p class="custom-validation-error-msg text-left">Veuillez confirmer que vous n'êtes pas un robot.
                      </p>
                    </div>


                    <button type="button" name="submit" @click="sendEmail" class="rn-btn edu-btn submit-btn"><span
                        v-if="!isloading">Soumettre<i class="icon-4"></i>
                      </span><span v-if="isloading"><svg width="24" height="24" viewBox="0 0 38 38"
                          xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                          <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1 1)" stroke-width="2">
                              <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                              <path d="M36 18c0-9.94-8.06-18-18-18">
                                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18"
                                  dur="1s" repeatCount="indefinite" />
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
          <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { required, email, minLength } from 'vuelidate/lib/validators'

import { validationMixin } from 'vuelidate'

export default {
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'https://api-gec-citoyen.fly.dev'
  },
  mounted: async function () {
    this.subject = 'Autre'
    try {
      const response = await this.$axios.get("/contenus");
      const filteredContacts = await response.data.data.data.filter(contenus => contenus.categorie.slug === "contact");
      this.telephone =  filteredContacts.find(contenus => contenus.title === "Téléphone");
      this.telephone_gec = this.telephone.body
      const email = filteredContacts.find(contenus => contenus.title === "Email");
      this.email_gec = email.body
      this.adresse = filteredContacts.find(contenus => contenus.title === "Adresse");
      this.adresse_gec = this.adresse.body
      const filteredReseaux = await response.data.data.data.filter(contenus => contenus.categorie.slug === "reseaux");
      this.reseaux = filteredReseaux
      this.facebook = filteredReseaux?.find(contenus => contenus.title === "Facebook");
      this.facebook_link = this.facebook?.link
      this.instagram = filteredReseaux?.find(contenus => contenus.title === "Instagram");
      this.instagram_link = this.instagram?.link
      this.linkedin = filteredReseaux?.find(contenus => contenus.title === "LinkedIn");
      this.linkedin_link = this.linkedin?.link
      this.twitter = filteredReseaux?.find(contenus => contenus.title === "Twitter");
      this.twitter_link = this.twitter?.link
      this.loading = false
    } catch (error) {
      console.error(error);
      return;
    }
  },
  mixins: [validationMixin],
  components: {
    HeaderTwo: () => import("@/components/header/HeaderTwo"),
    BreadCrumb: () => import("@/components/common/BreadCrumb"),
    Footer: () => import("@/components/footer/Footer"),
    MouseMove: () => import('@/components/animation/MouseMove')
  },

  data() {
    return {
      reseaux: [],
      facebook_link: '',
      twitter_link: '',
      instagram_link: '',
      linkedin_link: '',
      loading: true,
      telephone: {},
      contactEmail: {},
      adresse: {},
      telephone_gec: '',
      email_gec: '',
      adresse_gec: '',
      subject: 'Autre',
      isloading: false,
      recaptchaErrorText: false,
      showRecaptchaErrorText: false,
      resultText: '',
      fullname: '',
      phone: '',
      email: '',
      message: ''
    }
  },
  validations: {
    fullname: {
      required,
      minLength: minLength(2)
    },
    phone: {
      regex: value => /^[\d\s()+-]+$/.test(value),
      minLength: minLength(8)
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
        const userId = 'dPCL0VZkYnhkqg_d_'

        const templateParams = {
          subject: this.$refs.form.subject.value,
          fullname: this.$refs.form.fullname.value,
          email: this.$refs.form.email.value,
          phone: this.$refs.form.phone.value,
          message: this.$refs.form.message.value
        };
        try {
          const token = await this.$recaptcha.getResponse()
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
          await this.$recaptcha.reset()
        } catch (error) {

          this.isloading = false;
          this.showRecaptchaErrorText = true
        
        }

      }
    }
  },
  head() {
    return {
      title: 'Contactez-nous'
    }
  }
}
</script>
<style scoped>
.loader-contact {
  height: 769.55px;
  width: 550px;
  background-color: #d6e0e2;
  animation: loaderAnimation 1s ease-in-out infinite;

}

@keyframes loaderAnimation {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
  }
}

.contact-form.custom-form-style-2 {
  padding: 50px !important;
}

.custom-contact-us-area {
  padding: 90px 0 0 !important;
}

.custom-validation-error-msg {
  color: #fe0022
}
</style>

