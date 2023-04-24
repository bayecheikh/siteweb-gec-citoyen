<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderTwo />

        
        <section class="section-gap-equal contact-me-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-9">
                        <div class="contact-me">
                            <div class="inner">
                                <div class="thumbnail">
                                    <div class="thumb">
                                        <img src="/images/gallery/gallery-08.jpg" alt="Remerciement">
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
                                    <h3 class="heading-title">Merci d'avoir utilisé notre plateforme !</h3>
                                    <ul class="address-list custom-address-list">
                                        <li>
                                           
                                            <p>Votre courrier a bien été envoyé au <span class="custom-remerciement">Ministère des Affaires Étrangères et de la Coopération</span>.</p>
                                        </li>
                                        <li>
                                            <h5 class="title">Code de suivi : 15014257</h5>
                                        </li>
                                        <li>
                                            
                                            <p>Vous recevrez le code de suivi sur votre boîte email <span class="custom-remerciement">igorelatifou@outlook.com</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
<style>
.custom-remerciement{
    font-weight: 500 !important;
}
.custom-address-list >li>p{
    color: #202121 !important;
}
</style>