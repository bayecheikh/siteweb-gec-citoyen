<template>
    <footer class="edu-footer footer-light footer-for-kitchen footer-style-4">
        <div class="footer-top">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="edu-footer-widget">
                            <h4 class="widget-title">GEC CITOYEN</h4>
                            <div class="inner">
                                <div class="widget-information">
                                    <ul class="information-list">
                                        <li><a >À propos</a></li>
                                        <li><a>Nous contacter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <div class="edu-footer-widget explore-widget">
                            <h4 class="widget-title">Contribuer</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li><n-link to="">Faire une suggestion</n-link></li>
                                    <li><n-link to="">Signaler un problème</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title">En savoir plus</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li><n-link to="">Mentions légales</n-link></li>
                                    <li><n-link to="">CGU</n-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="edu-footer-widget">
                            <h4 class="widget-title">Suivez-nous</h4>
                            <div class="inner">
                                <ul class="social-share icon-transparent">
                                    <li><a href="https://www.facebook.com/numeriquebenin/" target="_blank" class="color-fb"><i class="icon-facebook"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/numeriquebenin/" target="_blank" class="color-linkd"><i class="icon-linkedin2"></i></a></li>
                                    <li><a href="https://www.instagram.com/numeriquebenin/?hl=fr" target="_blank" class="color-ig"><i class="icon-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/numeriquebenin" target="_blank" class="color-twitter"><i class="icon-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="shape-group">
            <li class="shape-1">
                <span></span>
            </li>
            <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/about/shape-13.png" />
            <MouseMove addClassName="shape-3" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
            <li class="shape-4">
                <span></span>
            </li>
            <li class="shape-5"><img src="/images/about/shape-07.png" alt="shape"></li>
        </ul>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <p>Copyright {{ new Date().getFullYear() }} <a href="#" target="_blank">GEC CITOYEN</a>. Tous droits réservés.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>