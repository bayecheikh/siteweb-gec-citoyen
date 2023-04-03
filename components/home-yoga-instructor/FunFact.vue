<template>
    <div class="counterup-area-6 custom-counterup-area-6">
        <div class="container">
            <div class="row g-5">
                <div class="col-12 col-lg-3 col-md-6 col-sm-6">
                    <div class="edu-counterup counterup-style-6">
                        <div class="icon">
                            <i class="icon-8"></i>
                        </div>
                        <h2 class="counter-item count-number">
                            <FunFact number="9.3" decimal="1" suffix="K" />
                            <!--J'ai mis la section ici par ce que quand je cliquais sur le bouton ça descendait en bas-->
                            <section id="faq">
                            </section>
                        </h2>
                        <h6 class="title">USAGERS CONNECTÉS</h6>
                    </div>
                </div>
                <div class="col-12 col-lg-3 col-md-6 col-sm-6">
                    <div class="edu-counterup counterup-style-6">
                        <div class="icon">
                            <i class="icon-20"></i>
                        </div>
                        <h2 class="counter-item count-number">
                            <FunFact number="21.4" decimal="1" suffix="K" />
                        </h2>
                        <h6 class="title">COURRIERS DÉPOSÉS</h6>
                    </div>
                </div>
                <div class="col-12 col-lg-3 col-md-6 col-sm-6">
                    <div class="edu-counterup counterup-style-6">
                        <div class="icon">
                            <i class="icon-64"></i>
                        </div>
                        <h2 class="counter-item count-number">
                            <FunFact number="10" suffix="+" />
                        </h2>
                        <h6 class="title">MINISTÈRES ENROLLÉS</h6>
                    </div>
                </div>
                <div class="col-12 col-lg-3 col-md-6 col-sm-6">
                    <div class="edu-counterup counterup-style-6">
                        <div class="icon">
                            <i class="icon-49"></i>
                        </div>
                        <h2 class="counter-item count-number">
                            <FunFact number="90" suffix="%" />
                        </h2>
                        <h6 class="title">TAUX DE RÉPONSE</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                link: [
                    {
                        rel: 'stylesheet',
                        href: '@/assets/css/icomoon.css'
                    }
                ]
            }
        },
        components: {
            FunFact: () => import('@/components/FunFact')
        },

    }

</script>

<style scoped>
    .custom-counterup-area-6 {
        margin-bottom: 80px !important;
        background: rgb(0, 128, 100) !important;
    }

</style>