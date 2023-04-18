<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderTwo />

        <BreadCrumbTwo title='Signaler un problème' />
        
        <section class="section-gap-equal contact-me-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-9">
                        <div class="contact-me">
                            <div class="inner">
                                <div class="thumbnail">
                                    <div class="thumb">
                                        <img src="/images/others/contact-me.jpg" alt="Contact Me">
                                    </div>
                                    <ul class="shape-group">
                                        <MouseMove addClassName="shape-1" dataDepth="1.4" imgSrc="/images/about/shape-13.png" />
                                        <MouseMove addClassName="shape-2" dataDepth="-1.4" imgSrc="/images/counterup/shape-02.png" />
                                        <li class="shape-3">
                                            <img src="/images/about/shape-07.png" alt="Shape">
                                        </li>
                                    </ul>
                                </div>

                                <div class="contact-us-info">
                                    <h3 class="heading-title">Nos Coordonnées</h3>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="edu-section-gap contact-form-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form">
                            <div class="section-title section-center">
                                <h3 class="title">Signalez un problème</h3>
                            </div>

                            <form class="rnt-contact-form rwt-dynamic-form" ref="form" @submit.prevent="sendEmail">
                                <div class="row row--10">
                                    <div class="form-group col-lg-6">
                                        <input type="text" name="fullname" placeholder="Nom">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input type="email" name="email" placeholder="Email">
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="tel" name="phone" placeholder="Téléphone">
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" cols="30" rows="6" placeholder="Votre message"></textarea>
                                    </div>
                                    <div class="form-group col-12 text-center">
                                        <button class="rn-btn edu-btn submit-btn" name="submit" type="submit">Soumettre <i class="icon-4"></i></button>
                                         <div v-if="showResult" class="col-12 success-msg">
                                            <p>{{ resultText }}</p>
                                        </div> 
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
                <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/cta/shape-04.png" />
                <MouseMove addClassName="shape-3" dataDepth="1" />
                <MouseMove addClassName="shape-4" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
            </ul>
        </section>

        <FooterKitchen />
    </div>
</template>

<script>
    import emailjs from 'emailjs-com';
    export default {
        components: {
            HeaderTwo: () => import("@/components/header/HeaderTwo"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            FooterKitchen: () => import("@/components/footer/FooterKitchen"),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data() {
            return {
                resultText: '',
                showResult: false
            }
        },
        methods: {
            sendEmail( e ) {
                emailjs.sendForm( 
                    'service_bxh6md3', 
                    'template_1g7v07n', 
                    this.$refs.form, 'user_8Lx0gfI1ktOoeEN8DTV10' 
                )
                .then( ( result ) => {
                    this.showResult = true;
                    this.resultText = 'Your message has been sent successfully. We will contact you soon.';
                    setTimeout( () => {
                        this.showResult = false;
                    }, 5000 );
                    e.target.reset();
                    console.log( 'SUCCESS!', result.text );
                }, ( error ) => {
                    this.showResult = true;
                    this.resultText = error.text;
                    setTimeout( () => {
                        this.showResult = false;
                    }, 5000 );
                    console.log( 'FAILED...', error.text );
                } );
            }
        },
        head() {
            return {
                title: 'Contact Me'
            }
        }
    }
</script>