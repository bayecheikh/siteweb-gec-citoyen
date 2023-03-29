<template>
    <div class="counterup-area-6 custom-counterup-area-6">
        <div class="container">
            <div class="row g-5">
                <div class="col-12 col-lg-3 col-md-6 col-sm-6" v-for="(counter, i) in funFacts" :key="i">
                    <div class="edu-counterup counterup-style-6">
                        <div class="icon">
                            <i :class="counter.iconClass"></i>
                        </div>
                      
                        <h2 class="counter-item count-number">
                            <FunFact :number="counter.number" :decimal="counter.decimal" :suffix="counter.suffix" />
                        <!--J'ai mis la section ici par ce que quand je cliquais sur le bouton ça descendait en bas-->
                        <section id="faq">
                        </section>
                        </h2>
                        
                        <h6 class="title">{{ counter.title }}</h6>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: { 
            FunFact: () => import('@/components/FunFact')
        },
        data () {
            return {
                funFacts: [
                    {
                        number: 9.3,
                        decimal: 1,
                        iconClass: 'icon-48',
                        title: "USAGERS CONNECTÉS",
                        suffix: 'K'
                    },
                    {
                        number: 21.4,
                        decimal: 1,
                        iconClass: 'icon-47',
                        title: 'COURRIERS DÉPOSÉS',
                        suffix: 'K'
                    },
                    {
                        number: 10,
                        decimal: null,
                        iconClass: 'icon-50',
                        title: 'MINISTÈRES ENROLLÉS',
                        suffix: '+'
                    },
                    {
                        number: 90,
                        decimal: null,
                        iconClass: 'icon-49',
                        title: 'TAUX DE RÉPONSE',
                        suffix: '%'
                    },
                   
                ]
            }
        }
    }
</script>

<style>
.custom-counterup-area-6{
    margin-bottom: 80px !important;
    background: rgb(0, 128, 100) !important; 
}
</style>