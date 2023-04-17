<template>
    <footer class="edu-footer custom-edu-footer footer-lighten  footer-style-1">
        <div class="custom-footer-two-main footer-top">
            <div class="container">
                <div class=" custom-row row g-5">
                    <div class="col-lg-3 col-sm-6">
                        <div class="edu-footer-widget explore-widget">
                            <h4 class="widget-title custom-footer-two-title custom-footer-two">Services publics</h4>
                            <div class="inner">
                                <ul class="footer-link custom-footer-link link-hover">
                                    <li><a class="custom-footer-two custom-footer-two-content"
                                            href="https://service-public.bj/public/about" target="_blank">À propos</a></li>
                                    <li><a class="custom-footer-two" href="https://service-public.bj/public/report"
                                            target="_blank">Nous contacter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title custom-footer-two custom-footer-two-title ">Contribuer</h4>
                            <div class="inner">
                                <ul class="footer-link custom-footer-link link-hover">
                                    <li><n-link class="custom-footer-two" to="/suggestion"
                                            >Faire une suggestion</n-link></li>
                                    <li><n-link class="custom-footer-two" to="/signaler-probleme"
                                            >Signaler un problème</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title custom-footer-two custom-footer-two-title">En savoir plus</h4>
                            <div class="inner">
                                <ul class="footer-link custom-footer-link link-hover">
                                    <li><a class="custom-footer-two" href="https://service-public.bj/public/mention-legal"
                                            target="_blank">Mentions légales</a></li>
                                    <li><a class="custom-footer-two" href="https://service-public.bj/public/cgu"
                                            target="_blank">CGU</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="edu-footer-widget">
                            <h4 class="widget-title custom-footer-two custom-footer-two-title">Suivez-nous</h4>
                            <div class="inner">
                                <ul class="social-share custom-footer-link icon-transparent">
                                    <li><a href="https://twitter.com/numeriquebenin" target="_blank"
                                            class="color-twitter"><i class="icon-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/numeriquebenin/" target="_blank"
                                            class="color-fb"><i class="icon-facebook"></i></a></li>
                                    <li><a href="https://www.instagram.com/numeriquebenin/?hl=fr" target="_blank"
                                            class="color-ig"><i class="icon-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/numeriquebenin/" target="_blank"
                                            class="color-linkd"><i class="icon-linkedin2"></i></a></li>

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

<style scoped>

    .custom-footer-two {
        background-color: #0a3764 !important;

        color: var(--color-white) !important;
        padding-top: 0px !important;
    }

    .custom-footer-two-title {
        margin-bottom: -25px !important;
        font-size: 15px !important;
    }

    .custom-footer-two-content {
        font-size: 14px !important;
    }

    .custom-footer-two-main {
        background-color: #0a3764 !important;
        padding: 30px !important;
        color: var(--color-white) !important;
    }

    .custom-footer-link a:hover {
        color: orange !important;
    }

    .custom-edu-footer {
        margin-left: -162px !important;
    }

</style>