<template>
    <footer class="edu-footer footer-lighten  footer-style-1">
        <div class="custom-footer-two-main footer-top">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 col-sm-6">
                        <div class="edu-footer-widget explore-widget">
                            <h4 class="widget-title custom-footer-two" >Services publics</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li ><n-link class="custom-footer-two" to="/">À propos</n-link></li>
                                    <li ><n-link class="custom-footer-two" to="/">Nous contacter</n-link></li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title custom-footer-two">Contribuer</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li ><n-link class="custom-footer-two" to="/faq">Faire une suggestion</n-link></li>
                                    <li ><n-link class="custom-footer-two" to="/gallery-grid">Signaler un problème</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title custom-footer-two">En savoir plus</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li ><n-link class="custom-footer-two" to="/faq">Mentions légales</n-link></li>
                                    <li ><n-link class="custom-footer-two" to="/gallery-grid">CGU</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="edu-footer-widget">
                            <h4 class="widget-title custom-footer-two">Suivez-nous sur</h4>
                            <div class="inner">
                                <ul class="social-share icon-transparent">
                                    <li><a href="https://twitter.com/numeriquebenin" target="_blank" class="color-twitter"><i class="icon-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/numeriquebenin/" target="_blank" class="color-fb"><i class="icon-facebook"></i></a></li>
                                    <li><a href="https://www.instagram.com/numeriquebenin/?hl=fr" target="_blank" class="color-ig"><i class="icon-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/numeriquebenin/" target="_blank" class="color-linkd"><i class="icon-linkedin2"></i></a></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       <!--<div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <p>Copyright {{ new Date().getFullYear() }} <a href="#">EduBlink</a> Designed By <a href="https://1.envato.market/YgGJbj" target="_blank">DevsBlink</a>. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>--> 
    </footer>
</template>


<script>
    export default {
        components: {
            ColorMode: () => import("@/components/common/ColorMode")
        }
    }
</script>

<style>
 .custom-footer-two{
    background-color: #0a3764 !important;
   
            color: white !important;
        }
        .custom-footer-two-main{
    background-color: #0a3764 !important;
    padding: 30px !important;
            color: white !important;
        }
</style>